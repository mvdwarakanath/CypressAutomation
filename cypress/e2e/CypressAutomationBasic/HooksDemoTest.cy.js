describe('Hooks Demo', ()=>{

    before(()=>{
        cy.log('I am in before')
    })

    after(()=>{

        cy.log('I am in after')
    })

    beforeEach(()=>{

        cy.log('I am in before Each')
        cy.visit('https://tutorialsninja.com/demo')
    })


    afterEach(()=>{

        cy.log('I am in after Each')
    })

    it('Search Scenario ', ()=>{

        cy.log('Hook Demo 1')
        cy.get('.form-control').type('Iphone')
        cy.get('.input-group-btn > .btn').click()
        

    })

    it('Login Scenario', ()=>{

        cy.log('Hook Demo 2')
        cy.get('.list-inline > .dropdown > .dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(2) > a').click()
    })

    it('Hooks Demo 3', ()=>{
        cy.log('Hook Demo 3')
    })

    it('Hooks Demo 4', ()=>{

        cy.log('Hook Demo 4')
        
    })

})