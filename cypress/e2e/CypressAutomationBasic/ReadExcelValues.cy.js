describe('Login Test Cases', function(){

    it('Login Test Cases', ()=>{

        const filePath = './cypress/downloads/DummyTest.xlsx'

        cy.task('excelToJsonConverter', filePath).then(function(result){

            console.log(result);
            cy.log(result);
        })


    })

})