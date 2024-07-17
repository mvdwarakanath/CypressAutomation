describe('Amazon search Suits',()=>
    {
    
        it('Amazon search Test',()=>
        {
            cy.visit('https://www.amazon.in/')
            cy.get('#twotabsearchtextbox').type('Apple iPhone 13 (128GB) - Midnight')
            cy.get('#nav-search-submit-button').click()
            //cy.get('.a-size-medium.a-color-base.a-text-normal').click()
            cy.get('.a-size-mini.a-spacing-none.a-color-base.s-line-clamp-2 > a').each(($e1, index, $list)=>
            {
                let ProductText = $e1.text()
               // cy.log($e1)
                cy.log(ProductText)
               // if(ProductText==='Apple iPhone 13 (128GB) - Midnight')
                 //   {

               if(ProductText = 'Apple iPhone 13 (128GB) - Midnight')
                        cy.wrap($e1).invoke('removeAttr','target').click()
                        return false;

                        cy.get('#productTitle').should('contain', 'Apple iPhone 15 (256 GB) - Yellow')
                        //cy.wrap($e1).click()
                   
                        //cy.get('#productTitle').should('contain', 'Apple iPhone 15 (256 GB) - Yellow')
        
                        // cy.wrap($e1).then(function(ele)
                        // {
                        //     const url = ele.prop('href')
                        //     cy.visit(url)
                        //     cy.origin(url, ()=>
                        //         {
                        //             cy.get('#productTitle').should('contain', 'Apple iPhone 15 (256 GB) - Yellow')
                        //             cy.get('.a-spacing-none > .a-price > [aria-hidden="true"] > .a-price-whole').then(function(ele2)
                        //             {
                        //                 let price = ele2.text()
                        //                 cy.log(price)
                        //             })
                        //         })
                        //     }) 
                      //  }
                    })

                    cy.get('#productTitle').should('contain', 'Apple iPhone 13 (128GB) - Midnight')
                    cy.get('.a-spacing-none > .a-price > [aria-hidden="true"] > .a-price-whole').then(function(ele2)
                                     {
                                         let price = ele2.text()
                                         cy.log(price)
                                   })
                })

            })