
//https://tutorialsninja.com/demo/

//BaseURL 

describe('Navigation Commands', function(){

    it('Navigation Commands Demo', function(){

        //cy.visit('/')
        //cy.visit(Cypress.config('baseUrl'))
        //cy.visit('/index.php?route=account/login')
        //cy.visit('/index.php?route=account/register')

        cy.visit('/')

        cy.get('.list-inline > .dropdown > .dropdown-toggle').click()

        cy.get('.dropdown-menu > :nth-child(1) > a').click()

        cy.go('back')

        cy.go('forward')

        cy.go(-1)

        cy.go(1)
        
        cy.reload()
        
        //cy.get()

    })
})