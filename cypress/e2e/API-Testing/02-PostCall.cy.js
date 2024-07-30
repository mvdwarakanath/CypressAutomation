import { faker } from '@faker-js/faker';

describe('Different ways to create POST Call', ()=>{

    const bodyValue = {
        name: faker.person.firstName(),
        job:faker.person.jobArea()
    }

    it('HTTP Request - POST call', ()=>{
    
        cy.request(
            {
                method:'POST',
                url:'https://reqres.in/api/users',
                body: bodyValue
            }
        ).then((response)=>{
            expect(response.status).to.equal(201)
            const body = response.body;
            cy.log(JSON.stringify(body));
            expect(body).property('name').to.equal(bodyValue.name)
            expect(body).property('job').to.equal(bodyValue.job)
        })

    })

    it('Using Fixture - Create POST method', ()=>{

        cy.fixture('userdetail').then((user)=>{

            const data = user;

            cy.request(
                {
                    method:'POST',
                    url:'https://reqres.in/api/users',
                    body: data
                }
            ).then((response) =>{

        
            const resBody = response.body;
            
            expect(resBody).property('name').to.equal(data.name)
            expect(resBody).property('job').to.equal(data.job)


            cy.log(JSON.stringify(resBody));

        })
        })


    })


})
