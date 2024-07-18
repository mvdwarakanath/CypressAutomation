describe('File Upload Scenario',()=>{

    it('File Upload Scenarios', ()=>{

        
        cy.visit('https://the-internet.herokuapp.com/upload');

        cy.get('#file-upload').attachFile('dummy.pdf')

        cy.get('#file-submit').click()

        cy.wait(2000)

    })

    it('File Upload - Rename', ()=>{

        cy.visit('https://the-internet.herokuapp.com/upload');

        cy.get('#file-upload').attachFile({filePath:'dummy.pdf',fileName:'dummyUpdatedName.pdf'})

        cy.get('#file-submit').click()

        cy.wait(2000)
    })

})