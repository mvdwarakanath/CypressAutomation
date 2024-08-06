const { defineConfig } = require("cypress");
const csv = require('@fast-csv/parse')

const {XLSX} = require("xlsx");
const xlsx = require("node-xlsx").default
const fs = require('fs');
const path = require('path');
module.exports = defineConfig({

  
  reporter: 'cypress-mochawesome-reporter',

  reporterOptions: {
    charts: true,
    reportPageTitle: 'Cypress Testing Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    ignoreVideos:false
  },

  watchForFileChanges:false,
  video:true,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

      on('task',{

        readFromCsv()
        {
          return new Promise(resolve =>{

            let dataArray = [];
            csv.parseFile("./myCsv.csv", {headers:true})
            .on('data',(data) =>{
              dataArray.push(data);
            })
            .on('end', ()=>{
              resolve(dataArray)
            })
          })

        }

        

      })








      on('task', { parseXlsx({filePath})
      { 
        return new Promise((resolve, reject) =>
        {
          try
          {
            const jsonData = xlsx.parse(fs.readFileSync(filePath));
            resolve(jsonData);
          } catch(e)
          {
            reject(e);
          } });


        }});

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
