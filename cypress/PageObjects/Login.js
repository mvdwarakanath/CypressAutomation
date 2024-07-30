class Login{

    clickOnLoginButton(email, password)
    {
        cy.get("input[placeholder='Username']").type(email);
        cy.get("input[placeholder='Password']").type(password);
    
        cy.get("button[type='submit']").click();
    }
    clickOnFacebook()
    {

    }

    clickOnLinkedIn()
    {
        
    }

}

export default Login