

describe('Handle Custom Commands', function(){

    it('Handle Custom Commands', function(){

        cy.loginOrangeHrms('Admin','admin123');

        cy.verifyTextContain('.oxd-userdropdown-name','FirstNameTest LastNameTest')





        //cy.verifyTextContain('','');

    })
})