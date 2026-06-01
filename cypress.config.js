const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    supportFile: false, // Diz ao Cypress que não precisamos do arquivo de suporte
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
