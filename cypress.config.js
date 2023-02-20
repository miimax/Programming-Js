const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    inlineAssets: true,
    embeddedScreeshots: true,
  },

  e2e: {
    baseUrl: 'https://magento.softwaretestingboard.com',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin') (on)
      // implement node event listeners here
    },
  },
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 20000
});