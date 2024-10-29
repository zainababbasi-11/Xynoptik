/* eslint-disable no-undef */
// eslint-disable-next-line import/no-extraneous-dependencies
import "cypress-file-upload";
import { uniqueNamesGenerator, names } from "unique-names-generator";

// const fs = require("fs");
const moment = require("moment");

// eslint-disable-next-line no-undef
Cypress.Commands.add("writeDataInFile", (path, nameof, value) => {
  cy.readFile(path).then((obj) => {
    const myName = nameof;
    const actualObj = obj;
    actualObj[myName] = value;
    cy.writeFile(path, actualObj);
  });
});

// create random AlphaNumeric
Cypress.Commands.add("createRandomAlphaNumeric", () => {
  const now = new Date();
  const alphaNumeric = `AUT${now.getFullYear()}${now.getMonth()}${now.getDate()}${now.getHours()}${now.getMinutes()}${now.getSeconds()}`;
  return alphaNumeric;
});

// create random AlphaNumeric
Cypress.Commands.add("createRandomAlphaNumeric14", () => {
  const now = new Date();
  const alphaNumeric = `AUT${now.getFullYear()}${now.getMonth()}${now.getDate()}${now.getHours()}${now.getMinutes()}`;
  return alphaNumeric;
});

// eslint-disable-next-line no-undef
Cypress.Commands.add("createRandomName", () => {
  const shortName = uniqueNamesGenerator({
    dictionaries: [names],
  });

  return shortName;
});

Cypress.Commands.add("createRandomEmail", () => {
  const CurrentDate = moment().unix();
  const emailId = `Otoz-${CurrentDate}@yopmail.com`;
  return emailId;
});

Cypress.Commands.add("forceVisit", (url) => {
  cy.window().then((win) => win.open(url, "_self"));
});
