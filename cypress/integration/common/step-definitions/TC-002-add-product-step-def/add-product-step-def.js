/* eslint-disable no-undef */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import Login from "../../../../Pages/LoginPage";
import AddProduct from "../../../../Pages/AddProductPage";

const addProduct = new AddProduct();

const login = new Login();

Given("The user is logged In and move to Product page", () => {
  cy.log(Cypress.env("app-url"));
  cy.visit(Cypress.env("app-url"));

  login.enterUserName(Cypress.env("email"));
  login.clickLoginButtonEmail();
  login.enterPassword(Cypress.env("password"));
  login.clickLoginButton();
  cy.log(Cypress.env("add-product-url"));
  cy.visit(Cypress.env("add-product-url"));
});


Given('I clicked on Add Product Link',() => {
  addProduct.clickOnAddProductLink();
}); 
And("I enter product name", () => {
  addProduct.enterProductName(Cypress.env("product_name"));
});
And("i provide product description", () => {
  addProduct.enterProductDescription(Cypress.env("product_description"));
});
And("I select product family", () => {
  addProduct.selectProductFamily(Cypress.env("product_family"));
});
And("I click on Next Now", () => {
  addProduct.clickOnNextPage();
});
And("I provide 2 Ingredients of 60 40", () => {
  addProduct.provideIngredients();
});
And("After Ingredients click on Next Now", () => {
  addProduct.clickOnNextPageAfterIngredients();
});
And("now i provide further details about package", () => {
  addProduct.provideFurtherDetails();
});
And("now press Next", () => {
  addProduct.triggerLastNext();
});
And("now review data and click finish", () => {
  addProduct.clickOnFinish();
});
Then("I Logout from Application", () => {
  login.clickLogOut();
});