import { faker } from '@faker-js/faker';

describe('Cookies and Header to Validate APIs', ()=>{

    let accessToken;
     before( ()=>{
        const accessTokenBody = {
            clientName: faker.person.firstName(),
            //clientEmail: Math.random().toString(10).substring(2)+"@gmail.com"
            clientEmail:faker.internet.email()
         }
         cy.request({

            method:'POST',
            url:'https://simple-books-api.glitch.me/api-clients/',
            headers:{
                'Content-Type':'application/json'
                
            },
            body:accessTokenBody

         }).then((response) =>{

            
            accessToken = response.body.accessToken;
            cy.log('ACCESS TOKEN IS = ', accessToken);

         })
        
     })

     it('Order Book', ()=>{

        cy.request({

            method:'POST',
            url:'https://simple-books-api.glitch.me/orders',
            headers:{
                'Content-Type':'Application/json',
                'Authorization':'Bearer '+accessToken
            },
            body:
            {
                "bookId":1,
                "customerName":"Dummy Data"
            }

        }).then((response) =>{

            const resBody = response.body;
            expect(response.status).to.equal(201)
            expect(response.body.created).to.eq(true);

            cy.log(JSON.stringify(resBody))
        })


     })

   //  it('GET Call')

    // it('Order Book')


})