/* eslint-disable no-undef */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Given, When, And } from "cypress-cucumber-preprocessor/steps";
import AskDoc from "../../../../Pages/Askdoc";


const AskDoc = new AskDoc();

Given("I login", () => {
    cy.log(Cypress.env("dxapp-url"));
    cy.visit(Cypress.env("dxapp-url"));

    cy.wait(1000);


    
    
  });