const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: "k38vzq", // <- dit ID komt uit Cypress Cloud
  e2e: {
    setupNodeEvents(on, config) {
      // events etc.
    },
    baseUrl: "https://r0996477-realbeans.myshopify.com",
  }
});

