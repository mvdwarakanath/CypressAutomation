describe('Cypress Xpath Support', ()=>{

    it('Cypress Xpath', ()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.xpath("//input[@name = 'username']").type('Admin')

        cy.xpath("//input[@name = 'password']").type('admin123').type('{enter}')

        //cy.xpath('locator of cancel').click()

    })

})