// cypress/integration/readExcel.spec.js
describe('Read Excel File', () => {
    it('should read cell values from an Excel file', () => {
      const filePath = './cypress/downloads/DummyTest.xlsx';
      const sheetName = 'Sheet1';
      
      cy.readExcel(filePath, sheetName).then((rows) => {
        // Access cell values

        
        const firstCellValue = rows[0][0]; // First row, first cell
        const secondCellValue = rows[1][1]; // Second row, second cell
        const thirdCellValue = rows[0][1];
        const fourthCellValue = rows[1][0];

        cy.log(firstCellValue)
        cy.log(secondCellValue)
        cy.log(thirdCellValue)
        cy.log(fourthCellValue)
        // Perform assertions or further operations
        //expect(firstCellValue).to.equal('Expected Value');
        //expect(secondCellValue).to.equal('Another Expected Value');
      });
    });
  });
  