describe('Handle CheckBox ', ()=>{


    it('Handle CheckBox ', ()=>{

        cy.visit('https://testautomationpractice.blogspot.com/')

        cy.get('#sunday').should('be.visible')

        //cy.get('#sunday').check()

        cy.get(".form-check-input[type='checkbox']").check()

        
        cy.get(".form-check-input[type='checkbox']").uncheck()

    })
})