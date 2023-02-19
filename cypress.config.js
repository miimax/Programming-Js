const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  video: true,
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Cypress Inline Reporter',
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  

  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },

  pageLoadTimeout: 20000,

  // reporter: "cypress-mochawesome-reporter",
  // eporterOptions: {
  //   reportDir: "cypress/reports",
  //   charts: true,
  //   reportPageTitle: "My Test Suite",
  //   embeddedScreenshots: true,
  //   inlineAssets: true
  // },
  // video: false
  
});

