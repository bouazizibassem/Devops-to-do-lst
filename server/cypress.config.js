const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:"http://localhost:5000",
    env:{
      urlBackend:"http://localhost:5000/api"
    }
  },
});
