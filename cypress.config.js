const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
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
      // implement node event listeners here
    },
  },
});
