/* eslint-disable no-undef */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import Login from "../../../../Pages/LoginPage";

const login = new Login();

Given("I go to application", () => {
  cy.log(Cypress.env("dxapp-url"));
  cy.visit(Cypress.env("dxapp-url"));
});

When("I enter valid email", () => {
  login.enterUserName(Cypress.env("dxemail"));
});

When("I enter invalid email", () => {
  login.enterUserName('qaa@yopmail.com');
});

/* And("I click on continue button", () => {
  login.clickLoginButtonEmail();
}); */

And("I enter valid password", () => {
  login.enterPassword(Cypress.env("dxpassword"));
});
And("I enter invalid password", () => {
  login.enterPassword("Aourix@123");
});
And("I click on login button", () => {
  login.clickLoginButton();
});
And("Application home page opens successfully", () => {
  // cy.url().should("include", "/home/dashboard");
});
And("I have error for invalid credentials", () => {

});
Then("Logout from the Application",() => {
  login.clickLogOut();
});

