/* eslint-disable no-undef */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import Datasource from "../../../../Pages/Datasource";


const Datasource = new Datasource();

Given("Given I go to application and login", () => {
    cy.log(Cypress.env("dxapp-url"));
    cy.visit(Cypress.env("dxapp-url"));

    cy.wait(1000);

    Datasource.enterlogindetail(Cypress.env("dxemail"));
    Datasource.enterlogindetail(Cypress.env("dxpassword"));
    Datasource.clickLoginButton();


    
  });

  /*

When("I Click on Datasource", () => {


});


When("Datasource page opens successfully", () => {


});
*/

