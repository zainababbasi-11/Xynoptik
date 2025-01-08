/* eslint-disable no-undef */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import DataSource from "../../../../Pages/Datasource";


const Datasource = new DataSource();

Given("I go to application", () => {
    cy.log(Cypress.env("dxapp-url"));
    cy.visit(Cypress.env("dxapp-url"));

    cy.wait(1000);
    
  });


  When("I login to application", () => {

    Datasource.enteremail(Cypress.env("dxemail"));
    Datasource.enterpassword(Cypress.env("dxpassword"));
    // Datasource.clickLoginButton();
    Datasource.clicklogin();
  });

  And("Home page opens successfully", () => {
    // cy.url().should("include", "/home/dashboard");
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

   Datasource.clicknext();

  });

And("I Choose a Datasource Excel and create", () =>{

  Datasource.selectexcelproject();

  cy.wait(10000);


});

And("Project create successfully", () =>{

  cy.wait(10000);

});

Then("I Logout",() => {

  Datasource.clickLogout();

  cy.wait(10000);

});

// create database project

Given("I login to application and Click on Datasource", () =>{

  Datasource.enteremail(Cypress.env("dxemail"));
  Datasource.enterpassword(Cypress.env("dxpassword"));
  // Datasource.clickLoginButton();
  Datasource.clicklogin();

  // Go to Datasource
  Datasource.clickDatasource();

  
  });
  


 And("I click on Add Datasource Button", () =>{

Datasource.clickadddataset();

});



And ("I Add DB project details", () =>{

  Datasource.enterexcelprojectname(Cypress.env("dbprojectname"));
  Datasource.enterexcelprojectdescription(Cypress.env("dbprojectdescription"));
  Datasource.enterexcelprojecttag(Cypress.env("dbprojecttag"));
  Datasource.clicknext();


});


And ("I Select Database Project and Add Database credentials", () =>{

  Datasource.selectdbproject();
  Datasource.adddbcredshostname();
  Datasource.adddbcredsport(Cypress.env("dbport"));
  Datasource.adddbcredsusername(Cypress.env("dbusername"));
  Datasource.adddbcredspass(Cypress.env("dbpass"));
  Datasource.adddbname(Cypress.env("dbname"));
  Datasource.clickconnect();

});