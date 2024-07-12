describe('Handle Alerts in Cypress',()=>{

    it('JS Alert Demo',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get("[onclick='jsAlert()']").click()

        cy.on('window:alert', (r)=>{

            expect(r).to.contain('I am a JS Alert')
        })

        cy.get('#result').should('have.text','You successfully clicked an alert')

    })


    it('JS Alert Demo -- Click Ok button',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get("[onclick='jsConfirm()']").click()

        cy.on('window:confirm', (r)=>{

            expect(r).to.contain('I am a JS Confirm')
        })

        cy.get('#result').should('have.text','You clicked: Ok')

    })


    it('JS Alert Demo -- Click Cancel Button',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get("[onclick='jsConfirm()']").click()

        cy.on('', (r)=>{

            expect(r).to.contain('I am a JS Confirm')
        })

        cy.on('window:confirm',()=>false); //This is only for clicking on cancel/dismiss button

        cy.get('#result').should('have.text','You clicked: Cancel')

    })


    it('JS Prompt Window',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

      /*  cy.window().then((win)=>{

            cy.stub(win,'prompt').returns('Hello I am new to Cypress')
        }) */

            cy.window().then(win => {
                cy.stub(win, 'prompt').callsFake(() => null)
            }); // This code is for clicking cancel button
        cy.get("[onclick='jsPrompt()']").click()
        
        //cy.on('window:alert',()=> false);
        //cy.get('#result').should('have.text','')
        // cy.get("[onclick='jsPrompt()']").click()

       

        //cy.on('window:confirm',()=>false); //This is only for clicking on cancel/dismiss button

       // cy.get('#result').should('have.text','You clicked: Cancel')

    })


    it.only('Authentication Popup',()=>{
        // Approach 1
            /* cy.visit('https://the-internet.herokuapp.com/basic_auth', {auth: {
            username: 'admin',
            password: 'admin'} }) */

            //Approach 2
            cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')

            //admin:admin123@staging.com
            
        

    })
})