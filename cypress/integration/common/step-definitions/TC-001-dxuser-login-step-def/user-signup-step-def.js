/* eslint-disable no-undef */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import Login from "../../../../Pages/LoginPage";
import Signup from "../../../../Pages/Dxsignup";

const signUpObject = new Signup();

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

And("I enter valid email", () => {
  signUpObject. enterUseremail(Cypress.env("dxsignupemail"));
});

And("I enter  first name", () => {
  signUpObject.enterUserName(Cypress.env("dxfirstname"));

});

/*
  And("I enter Last Name", () => {
    signUpObject.enterUserName(Cypress.env("dxLastname"));
  });

  And("I enter valid password", () => {
    signUpObject.enterPassword(Cypress.env("dxpassword"));
  });

  And("And I check agree terms", () => {
    // cy.url().should("include", "/confirmSignup?email=xy@yopmai.com");
  });

  And("I click on Signup button", () => {
    signUpObject.clickSignupButtonEmail();
  });


And("I navigate to Verification code screen", () => {
    // cy.url().should("include", "/confirmSignup?email=xy@yopmai.com");
  });

  And("I enter correct verification code", () => {
    signUpObject.enterPassword(Cypress.env("dxcode"));
  });
  And("I click on Verify account", () => {
    signUpObject.clickVerify();
  });


And("I navigate to login screen", () => {
  // cy.url().should("include", "/login");
});


And("I enter valid email", () => {
  signUpObject.enterUserName(Cypress.env("dxsignupemail"));
  });

  And("I enter valid password", () => {
    signUpObject.enterPassword(Cypress.env("dxpassword"));
  }); 

  And("I click on login button", () => {
    signUpObject.clickLoginButton();
  });

  And("Application home page opens successfully", () => {
    // cy.url().should("include", "/home/dashboard");
  });

Then("Logout from the Application",() => {
  signUpObject.clickLogOut();
});
*/
