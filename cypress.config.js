const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  projectId: "3bxnen",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
      baseUrl: 'https://tapsshop.pl'
  },
});
