describe('Handle Tab', ()=>{

    it('Handle Tab', ()=>{

        cy.visit('https://the-internet.herokuapp.com/windows')

      //  cy.get("a[href='/windows/new']").click()
        cy.get('.example > a').invoke('removeAttr','target').click()
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new');
    })

    it('Appraoch 2 ', ()=>{

        cy.visit('https://the-internet.herokuapp.com/windows')


        cy.get('.example > a').then((m)=>{

            let urlnew = m.prop('href')
            cy.log(urlnew)

            cy.visit(urlnew)
        })

        cy.url().should('include','https://the-internet.herokuapp.com/windows/new');

       //cy.visit('http://google.com')

       
    })

    it.only('Appraoch 3', function(){

        cy.visit('https://the-internet.herokuapp.com/windows')

        cy.get('.example > a').invoke("attr","target","_self").click()



        
    });


})