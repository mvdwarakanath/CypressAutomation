describe('Authetication', function(){


    it('Basic Auth', ()=>{



        cy.request({

            method:'GET',
            url:'https://postman-echo.com/basic-auth',
            auth:{

                user:'postman',
                pass:'password'
            }

        }).then((response)=>{

            expect(response.status).to.be.eq(200);
            expect(response.body.authenticated).to.eq(true);
        })
    })

    it('Digest Auth', ()=>{


        cy.request({

            method:'GET',
            url:'https://postman-echo.com/basic-auth',
            auth:{

                user:'postman',
                pass:'password',
                method:'degest'
            }

        }).then((response)=>{

            expect(response.status).to.be.eq(200);
            expect(response.body.authenticated).to.eq(true);
        })
    })

    it.only('API Key', ()=>{
        
        cy.request(
            {
                method:'GET',
                url:'api.openweathermap.org/data/2.5/weather',
                qs:
                {
                    lat:51.5073219,
                    lon:-0.1276474,
                    appid:'e2ad8eeee18c31f080de01d34493beb9'
                }
            }
        ).then((response)=>{

            expect(response.status).to.eq(200);
        })

    })
})

//paymenturl = https://postman-echo.com/payment/getToken
//getToken
//makePayment
//authorizePayment
//capturePayment


//merchant = https://postman-echo.com/merchant/
//merchantAdd
//merchantRemove
//merchantValidate
