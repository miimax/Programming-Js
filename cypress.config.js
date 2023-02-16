const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demo.guru99.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "defaultCommandTimeout": 10000,
    "pageLoadTimeout": 10000
  },
});