/* eslint-disable no-undef */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";
import AskDoc from "../../../../Pages/Askdoc";


const AskDocobj = new AskDoc();

Given("I login", () => {
    cy.log(Cypress.env("dxapp-url"));
    cy.visit(Cypress.env("dxapp-url"));
    cy.wait(1000);
    
    AskDocobj.enteremail(Cypress.env("dxemail"));
    AskDocobj.enterpassword(Cypress.env("dxpassword"));
    AskDocobj.clicklogin();
});

When("I go to Askdocs", () => {
    AskDocobj.clickaskdoc();
    AskDocobj.clicknewproject();
});

And("Askdocs page opens successfully", ()=> {
    
});

And("I click on +New Project", ()=> {
    AskDocobj.clicknewproject();
});

And("I click on +New Project", ()=> {
    AskDocobj.clicknewproject();
});

And("I Add Project details and click on next", ()=> {
    
    AskDocobj.askdocprojectname(Cypress.env("askdocname"));
    AskDocobj.askdocprojectdescription(Cypress.env("askdocdesc"));
    AskDocobj.askdocprojecttag(Cypress.env("askdoctag"));
    AskDocobj.clicknext();
});

And("I select PDF option and click on next", () => {
    AskDocobj.selectpdfproject();
});

Then("Project created successfully", () => {
    cy.log("Successfully Completed");
});



