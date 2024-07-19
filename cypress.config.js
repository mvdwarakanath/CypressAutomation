const { defineConfig } = require("cypress");

const {XLSX} = require("xlsx");

module.exports = defineConfig({
  
  watchForFileChanges:false,
  e2e: {
    setupNodeEvents(on, config) {

      on('task', {
        convertXlsxToJson(filePath)
        {
          const workbook = XLSX.readFile(filePath)
          const worksheet = workbook.Sheets[workbook.SheetNames[0]]
          const jsonData = XLSX.utils.sheet_to_json(worksheet)
          const fileName = path.basename(filePath, '.xlsx')
          const jsonFilePath = `./cypress/fixtures/${fileName}.json`

          writeFileAsync(jsonFilePath, JSON.stringify(jsonData,null,2))
          return null 
        }
      })

      on('task', {
        excelToJsonConverter(filePath)
        {
          const result = excelToJson({

            source: fs.readFileSync(filePath)

          });
          return result;
        }

      })

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
