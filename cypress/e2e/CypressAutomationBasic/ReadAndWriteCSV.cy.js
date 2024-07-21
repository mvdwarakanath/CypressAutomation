describe('Read and Write CSV', ()=>{

    it('Read and Write in CSV', ()=>{

        cy.task("readFromCsv").then((res)=>{

            console.log(res);
        })
    })
})