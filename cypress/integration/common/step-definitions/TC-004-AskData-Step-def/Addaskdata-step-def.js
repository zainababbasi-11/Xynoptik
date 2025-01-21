/* eslint-disable no-undef */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import Askdata from "../../../../Pages/Askdata";


const askdataobj = new Askdata();


// Common Features Starts
Given("I visit application", () => {
	cy.log(Cypress.env("dxapp-url"));
	cy.visit(Cypress.env("dxapp-url"));
	cy.wait(1000);
});
When("I login to an application", () => {
	askdataobj.enteremail(Cypress.env("dxemail"));
	askdataobj.enterpassword(Cypress.env("dxpassword"));
	askdataobj.clicklogin();
});
And("Home page opens successfully", () => {
	// cy.url().should("include", "/home/dashboard");
});
And("I click on AskData", () => {
	askdataobj.clickaskdata();
});
And("AskData page open successfully", () => {
	// cy.url().should("include", "/home/dashboard");
});
// Common Feartures Ends

// Feature 01 Starts
And("I click on Create New Topic", () => {
	askdataobj.clickcreatenewtopic();
});
And("I Select Source and Add Topic Name", () => {
	askdataobj.selectsource();
});
Then("AskData Project created successfully", () => {
	cy.log("Project Created Successfully");
})

// Feature 01 Ends


// Feature 02 Starts

When("I open a new created project",() => {
	askdataobj.clickedOnRecentProject();
});

And("Submit a query", () => {
	askdataobj.writeAndSubmitQuery();
});

Then("I should see the result of the query", () => {
	cy.wait(3000);
	cy.log("Query Result Successfully");
});
