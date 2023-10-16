const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      },
    defaultCommandTimeout: 60000,
    pageLoadTimeout: 90000,
    chromeWebSecurity: false,
    waitForAnimations: true,
    requestTimeout: 60000,
    responseTimeout: 90000,
    numTestsKeptInMemory: 10,
    viewportWidth: 1440,
    viewportHeight: 900,
    setupNodeEvents(on, config) {
      allureWriter(on, config);
            return config;
    },
  },
});
