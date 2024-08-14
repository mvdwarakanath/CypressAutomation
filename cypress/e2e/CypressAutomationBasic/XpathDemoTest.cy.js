describe('Cypress Xpath Support', ()=>{

    it('Cypress Xpath', ()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.xpath("//input[@name = 'username']").type('Admin')

        cy.xpath("//input[@name = 'password']").type('admin123').type('{enter}')

        //cy.xpath('locator of cancel').click()

    })

})


//Payment
//7 TCs
//Paymethod
//8 TCs
//Merchant
//10 TCs

// /Users/vikasbhandari/Documents/GitHub/CypressAutomation/cypress
//Jenkins
//Ask to Run in Which Browser - Chrome, edge, 