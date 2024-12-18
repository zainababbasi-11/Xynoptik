/* eslint-disable no-undef */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import Signup from "../../../../Pages/Signup";

const crypto = require("crypto");
const MailosaurClient = require('mailosaur');

const serverId = Cypress.env('mailosaurServerId'); // Get Mailosaur server ID
const apiKey = Cypress.env('mailosaurApiKey'); // Get Mailosaur API key
const mailosaur = new MailosaurClient(apiKey); // Initialize Mailosaur client
const signUpObject = new Signup();
const emailRandom = crypto.randomBytes(4).toString('hex');
const testEmail = `${emailRandom}${Cypress.env("signupemail")}`;


function waitForEmail(_serverId, _testEmail, maxRetries = 2, interval = 5000) {
	return new Promise((resolve, reject) => {
		let attempts = 0;
		function fetchEmail() {
			mailosaur.messages
			.get(_serverId, { sentTo: _testEmail })
			.then(resolve) // Resolve if email is found
			.catch((err) => {
				attempts += 1;
				if (attempts >= maxRetries) {
					reject(new Error(`Email not received in the allotted time ${err}`));
				} else {
					setTimeout(fetchEmail, interval); // Retry after interval
				}
			});
		}
		fetchEmail(); // Start polling
	});
}

Given("I go to application", () => {
	cy.log(Cypress.env("dxapp-url"));
	cy.visit(Cypress.env("dxapp-url"));
});

When("I click on Signuphere button", () => {
	signUpObject.clickSignuphereButton();
});

And("Application Signup opens successfully", () => {
	cy.url().should("include", "/signup");
}); 

And("I enter valid newemail", () => {
	signUpObject.enterUseremail(testEmail);
});

And("I enter first name", () => {
	signUpObject.enterFirstName(Cypress.env("dxfirstname"));
});

And("I enter Last Name", () => {
	signUpObject.enterLastName(Cypress.env("dxLastname"));
});

And("I enter valid password", () => {
	signUpObject.enterPassword(Cypress.env("dxpassword"));
});

And("I check agree terms", () => {
	cy.get("form#submit-form").find("div.inline-flex.gap-2").find("svg").click();
});

And("I click on Signup button", () => {
	signUpObject.clickSignupButtonEmail();
});

And("the user should receive a verification code at email",() => {
	cy.log("Generating Email");
	cy.wait(5000);
});

And("Verification Screen opens successfully",() => {
	cy.log("Verification Screen");
	cy.wait(5000);
});
And("I enter correct verification code", () => {
	cy.wrap(waitForEmail(serverId, testEmail)).then((email) => {
		// Assert email content
		expect(email.subject).to.include('Your Dxyfer Verification Code');
		// Extract the verification code from the email
		const activationHtml = email.html;
		const codeObject = activationHtml.codes[0];
		const emailCode = codeObject.value;
		// Enter the code into the input field
		signUpObject.enterSignupCode(emailCode);
	});
});

And("I click on verify account", () => {
	signUpObject.clickVerifyButton();
});

And("I navigate to login screen", () => {
	cy.log("Navagating to Login Page");
	cy.wait(2000);
});

And("I enter password of new user", () => {
	signUpObject.enterPassword(Cypress.env("dxpassword"));
});

And("I click on login button", () => {
	signUpObject.clickLoginButton();
});

Then("Logout from the Application",() => {
	signUpObject.clickLogOut();
});