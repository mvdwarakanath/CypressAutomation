const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges:false,
  e2e: {
    setupNodeEvents(on, config) {

      const version = config.env.VERSION || 'prod'

      const urls = {
        local: "http://localhost:3000",
        staging: "https://staging.example.com",
        prod: "https://example.com"
      }

      // choosing version from urls object
      config.baseUrl = urls[version]

      return config


      // implement node event listeners here
    },
    baseUrl:'https://tutorialsninja.com/demo',
  },
});
