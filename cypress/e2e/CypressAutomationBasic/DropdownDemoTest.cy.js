describe('Select Dropdown', ()=>{

    it('Select Dropdown Demo', function(){

        cy.visit('https://www.zoho.com/commerce/free-demo.html')

        cy.wait(6000)

        cy.get('#zcf_address_country')
        .select('Hong Kong')
        .should('have.value','Hong Kong')

    })

    it('Dropdown without Select',()=>{

        var ArrayList = new Array["Japan","India"];

        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
    
        cy.get('#select2-billing_country-container').click()

        cy.get('.select2-search__field').type(ArrayList[0]).type('{enter}')

        cy.get('#select2-billing_country-container').should('have.text','Japan')

    })

    it.only('Dynamic Dropdown', function(){

        cy.visit('https://www.google.com/')

        cy.get('.gLFyf').type('cypress automation')

        cy.wait(3000)

        cy.get('div.wM6W7d>span').should('have.length',13)

        cy.get('div.wM6W7d>span').each(($el, index, list) => {
            
                    if($el.text() == 'cypress automation course')
                        {
                            cy.wrap($el).click()
                        }


            })
            

        })


    })

    


