/* eslint-disable no-undef */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Given, When, And } from "cypress-cucumber-preprocessor/steps";
import AutoDash from "../../../../Pages/AutoDash";

const autoDashObj = new AutoDash();

Given("I go to application", () => {
	cy.log(Cypress.env("dxapp-url"));
	cy.visit(Cypress.env("dxapp-url"));
});

When("I enter valid email", () => {
	autoDashObj.enterEmail(Cypress.env("dxemail"));
});

And("I enter valid password", () => {
	autoDashObj.enterPassword(Cypress.env("dxpassword"));
});

And("I click on login button", () => {
	autoDashObj.clickLogin();
});

And("I go to Auto Dash", () => {
	autoDashObj.redirectToAutoDash();
});

And("I click on Add New Dashboard", () => {
	autoDashObj.clickeOnNewDashboard();
});

And("I Add Dashboard details and click on next", () => {
	autoDashObj.enterDashboardName(Cypress.env("dashboardName"));
    autoDashObj.enterDashboardDescription(Cypress.env("dashboardDescription"));
    autoDashObj.enterDashboardTags(Cypress.env("dashboardTag"));
    autoDashObj.clicknext();
});

And("I choose a project and add graph or widget", () => {
	autoDashObj.clickrecentproject();
});

And("project created successfully ", () => {
	autoDashObj.clicknext();
	autoDashObj.clicknext();
	cy.wait();
	
});