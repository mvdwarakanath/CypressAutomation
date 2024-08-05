describe('Oauth Token', ()=>{

    let access_tok ="";

    it('Oath Demo', ()=>{

        cy.request({
            
            url: 'https://github.com/login/oauth/access_token',
            method:'POST',
            qs:{

                client_id: 'Ov23li3FrGd64DCG80Sg',
                client_secret: '439d7bba02030f9494a1bcf86524eb19135d9d6c',
                code: '06279710ad7e54b710ad'
            }
        
        }).then((response)=>{

           // expect(response.status).to.eq(200)
           cy.log(response.body)

           const params = response.body.split('&');
           access_tok = params[0].split('=')[1];
           cy.log(response.body)

           cy.log("Access Token is = "+ access_tok)
            //expect(response.status).to.be(200)
        })

    })

    
})