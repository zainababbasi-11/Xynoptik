/* eslint-disable no-undef */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import DataSource from "../../../../Pages/Datasource";


const Datasource = new DataSource();

Given("I go to application and login", () => {
    cy.log(Cypress.env("dxapp-url"));
    cy.visit(Cypress.env("dxapp-url"));

    cy.wait(1000);

   
    
  });


  When("I login to application", () => {

    Datasource.enteremail(Cypress.env("dxemail"));
    Datasource.enterpassword(Cypress.env("dxpassword"));
    //Datasource.clickLoginButton();
  });

  And("Home page opens successfully", () => {
    //cy.url().should("include", "/home/dashboard");
  });
  

  And("I click on Datasource", () => {

  Datasource.clickDatasource();

  });

  And("Datasource page open successfully", () => {
    cy.url().should("include", "/datasources");
  });

  And("I click on Add Datasource", () =>{

    Datasource.clickadddataset();

  });

  And("I add excel project details", () =>{

    Datasource.enterexcelprojectname(Cypress.env("exprojectname"));
    Datasource.enterexcelprojectdescription(Cypress.env("exprojectdescription"));
    Datasource.enterexcelprojecttag(Cypress.env("exprojecttag"));

  });

  And("click on Next", () =>{

   Datasource.clickfirstnext();

  });

And("I Choose a Datasource Excel and create", () =>{

  Datasource.selectexcelproject();



});

