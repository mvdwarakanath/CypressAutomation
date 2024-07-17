import Login from "../../PageObjects/Login"

describe('Handle Commands Using POM', function(){

    const ln = new Login();

    it('Handle Commands Using POM', function(){

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       
        ln.clickOnLoginButton('Admin','admin123')
    })
})