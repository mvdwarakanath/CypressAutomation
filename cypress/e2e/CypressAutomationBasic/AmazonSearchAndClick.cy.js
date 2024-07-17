describe('Amazon Search',()=>{

    it('Amazon Search',()=>{

        cy.visit('https://www.amazon.in/')
        cy.get('#twotabsearchtextbox').type('iphone xr (64gb) - yellow')
        cy.get('#nav-search-submit-button').click()
        cy.wait(3000)
        cy.get('.a-size-mini.a-spacing-none.a-color-base.s-line-clamp-2 > a').eq(1).invoke('removeAttr','target').click()


    })

})