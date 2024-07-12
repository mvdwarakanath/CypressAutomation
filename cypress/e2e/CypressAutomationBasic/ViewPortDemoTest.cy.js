describe('View Port Commands', function(){

    it('View Port Commands Iphone 6', function(){
        cy.viewport('iphone-6') // viewport will change to 414px x 736px
        cy.visit('/')
        //cy.get()
    })


    it('View Port Commands in 550 by 750', function(){
        cy.viewport(550, 750) // viewport will change to 414px x 736px
        cy.visit('/')
        //cy.get()
    })

    
})