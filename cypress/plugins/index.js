/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/// <reference types="cypress" />
// eslint-disable-next-line import/order
const { VehicleDetail } = require("../../model/vehicleDetail");
const fs = require("fs-extra");
const path = require("path");

// eslint-disable-next-line import/no-extraneous-dependencies
const cucumber = require("cypress-cucumber-preprocessor").default;
const mongoose = require("mongoose");

// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  on("file:preprocessor", cucumber());

  on("task", {
    log(message) {
      console.log(message);

      return null;
    },
  });

  on("task", {
    createConnection({ dbString, vin, status }) {
      return new Promise((resolve, reject) => {
        try {
          mongoose.connect(dbString, async (err, client) => {
            if (err) {
              console.log(`MONGO CONNECTION ERROR: ${err}`);
              resolve(`MONGO CONNECTION ERROR: ${err}`);
            } else {
              console.log("Database Connection Successfully Executed on task");

              const response = await VehicleDetail.updateOne({ vin }, { status });
              console.log("Response after status update is ", response);
              resolve(true);
            }
          });
        } catch (error) {
          resolve(error);
        }
      }); // end of return Promise
    },
  }); // end of task

  const file = config.env.fileConfig || "dev";
  const pathToConfigFile = path.resolve(__dirname, "../environments", `${file}.json`);
  console.log(pathToConfigFile);

  return fs.readJson(pathToConfigFile);
};
