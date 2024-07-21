describe('convert data to Json', () =>
{
    
    it('read data from xcel', () =>
    {
        cy.parseXlsx('cypress/fixtures/DummyTest.xlsx').then((jsonData) =>
        {       
            const rowLength = Cypress.$(jsonData[0].data).length
                for (let index = 0; index < rowLength; index++)
                {
                var jsonData = jsonData[index].data
                console.log(jsonData[index].data)
                cy.writeFile("cypress/fixtures/xlsxData.json", {username: jsonData[0][0], password: jsonData[0][1]})
                }

            })
    })
})