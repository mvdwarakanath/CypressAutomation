describe('HTTP Request', ()=>{

    it('HTTP Request - GET call', ()=>{
    
        cy.request('GET','https://jsonplaceholder.typicode.com/posts/1')
        .its('status')
        .should('equal',200)
    })

    it('Using Alias as method', ()=>{

        cy.request('https://jsonplaceholder.cypress.io/comments').as('comments')

        cy.get('@comments').should((response) => {
        
        console.log(response);
          //  cy.log(response);
        expect(response.body).to.have.length(500)
        expect(response).to.have.property('headers')
        expect(response).to.have.property('duration');
        expect(response).to.have.property('statusText')
    
        })

    })

    it.only('HTTP Request - POST Call', ()=>{

        cy.request({

            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts/',
            body: {

                title:"Test Post Method",
                body: "This is dummy post request",
                userId: 2320
            }
        })
            .then((response)=>{

                cy.log(response.body)
                expect(response.status).to.equal(201)
                expect(response.duration).to.have.greaterThan(300)
            })
            
        })

})