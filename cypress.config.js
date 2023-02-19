const { defineConfig } = require("cypress");

module.exports = defineConfig({

  // reporter: 'mochawesome',
  // reporterOptions: {
  //   charts: true,
  //   embeddedScreeshots: true,
  //   inlineAssets: true
  // },

  reporter: 'cypress-mochawesome-reporter',
  video: true,
  reporterOptions: {
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true
  },

  // reporter: 'junit',
  // reporterOptions: {
  //   mochaFile: 'results/my-test-output-[hash].xml' 
    //--reporter-options "mochaFile=results/my-test-output-[hash].xml"
  // },

  e2e: {
    baseUrl: 'https://magento.softwaretestingboard.com',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
      // implement node event listeners here
    },
  },
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 20000,
});