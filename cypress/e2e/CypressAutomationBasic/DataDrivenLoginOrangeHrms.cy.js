describe('Using Fixture Commands', function(){

    it('Using Fixture Commands', ()=>{

        cy.fixture('orangehrm').then((dataJson)=>{

            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

            dataJson.forEach((userData)=>{


                cy.get("input[placeholder='Username']").type(userData.username);

                cy.get("input[placeholder='Password']").type(userData.password);

                cy.get("button[type='submit']").click();
        
                cy.wait(3000)

                if(userData.username=='Admin' && userData.password=='admin123')
                    {
                        cy.get('.oxd-userdropdown-name').should('be.visible')
                        cy.get('.oxd-userdropdown-name').click()
                        cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
                        cy.wait(2000)
                    }
                else
                    {
                        cy.get('.oxd-alert-content > .oxd-text').should('be.visible')
                    }




//input[placeholder='Password']
            })
                
            });

        })
    })
