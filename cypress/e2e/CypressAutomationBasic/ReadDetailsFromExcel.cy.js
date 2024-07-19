// cypress/integration/readExcel.spec.js
describe('Read Excel File', () => {
    it('should read cell values from an Excel file', () => {
      const filePath = './cypress/downloads/DummyTest.xlsx';
      const sheetName = 'Sheet1';
      
      cy.readExcel(filePath, sheetName).then((rows) => {
        // Access cell values
        const firstCellValue = rows[0][0]; // First row, first cell
        const secondCellValue = rows[1][1]; // Second row, second cell
        
        cy.log(firstCellValue)
        cy.log(secondCellValue)

        // Perform assertions or further operations
        //expect(firstCellValue).to.equal('Expected Value');
        //expect(secondCellValue).to.equal('Another Expected Value');
      });
    });
  });
  