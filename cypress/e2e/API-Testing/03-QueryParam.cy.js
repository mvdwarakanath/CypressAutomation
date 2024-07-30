describe('Query Params', ()=>{

    it('Query Param Demo', ()=>{

        cy.request(
            {
                method: 'GET',
                url: 'https://reqres.in/api/users',
                qs:
                {
                    page:2
                }
                
            }
        ).then((response)=>{

            expect(response.status).to.equal(200)
            const resResult = response.body;
            cy.log(JSON.stringify(resResult));
            expect(resResult.data).to.have.length(6)
            expect(resResult.data[0].first_name).to.equal('Michael');
            expect(resResult).property('total_pages').to.equal(2)
            expect(resResult).property('per_page').to.equal(6)

        })
    })
})