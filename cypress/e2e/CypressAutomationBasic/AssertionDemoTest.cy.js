
describe('Assertion Demo', ()=>{

    it('Implicit Assertion Demo',()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.url().should('include','orange')

        cy.url().should('not.include','pink')

        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.url().should('contain','opensource-demo.')

        cy.title().should('eq','OrangeHRM')

        cy.get('.oxd-text.oxd-text--h5.orangehrm-login-title').should('be.visible')

        cy.get('.oxd-text.oxd-text--h5.orangehrm-login-title').should('have.text','Login')
        

    })

    it('Validate Error Message',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.xpath("//input[@name = 'username']").type('Admin')

        cy.xpath("//input[@name = 'password']").type('admin12').type('{enter}')

        cy.get('.oxd-alert-content > .oxd-text').should('have.text','Invalid credentials')
    })

    it('Explicit Assertion', ()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.xpath("//input[@name = 'username']").type('Admin')

        cy.xpath("//input[@name = 'password']").type('admin123').type('{enter}')

        //cy.get('.oxd-userdropdown-name')

        //let, var and const
        let expDropdownName = "Test 9Test 9 userapotential's"
        let amount = 

        cy.get('.oxd-userdropdown-name').then((x)=>{
            let actualDropdownName = x.text()
            //BDD Style
            expect(actualDropdownName).to.equal(expDropdownName)
            expect(actualDropdownName).to.not.equal(expDropdownName)
            //TDD Style
            assert.equal(actualDropdownName,expDropdownName)
            assert.notEqual(actualDropdownName,expDropdownName)

        })


    })

    

})