/* eslint-disable no-undef */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Given, When, And } from "cypress-cucumber-preprocessor/steps";
import Askdata from "../../../../Pages/Askdata";

const askdataobj = new Askdata();

Given("I visit application", () => {
    cy.log(Cypress.env("dxapp-url"));
    cy.visit(Cypress.env("dxapp-url"));

    cy.wait(1000);

   
    
  });


When("I login to an application", () => {
  
      askdataobj.enteremail(Cypress.env("dxemail"));
      askdataobj.enterpassword(Cypress.env("dxpassword"));
      // Datasource.clickLoginButton();
      askdataobj.clicklogin();

    });

    And("Home page opens successfully", () => {
        // cy.url().should("include", "/home/dashboard");
      });



    And("I click on AskData", () => {


        askdataobj.clickaskdata();


    });