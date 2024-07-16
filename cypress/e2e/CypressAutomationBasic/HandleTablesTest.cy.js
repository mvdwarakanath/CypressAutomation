describe("Handle Table Scenarios", ()=>{

// Check the number of Row and column
// Check the data present in specific row and specific cell
// Read all the data which is present on the web table
// Pagination
beforeEach('Login', ()=>{

    cy.visit('https://demo3x.opencartreports.com/admin/index.php?route=common/login')
    cy.get('#input-username').type('demo')
    cy.get('#input-password').type('demo')
    cy.get("button[type='submit']").click()
    cy.get('#menu-customer>a').click()
    cy.get('#menu-customer>ul>li:first-child').click()

})


it('Check the number of Row and column', ()=>{

cy.log("Column Count")
cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length', 10)

cy.log("Row Count")

cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length',7)





})

it('Check the data present in specific row and specific cell',()=>{

    cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(3)>td:nth-child(3)")
    .then((emailid)=>{

        let ema  = emailid.text()
        cy.log(ema)
        expect(ema).to.contains('DennisAHunt')

    })
        
   // cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(3)>td:nth-child(3)")
    //.should('have.text','DennisAHunt@teleworm.com')


})

it.only('Read all the data which is present on the web table', ()=>{


    cy.get("table[class='table table-bordered table-hover']>tbody>tr")
    .each(($row, index, $rows)=>{

        cy.wrap($row).within(()=>{

            cy.get("td").each(($col,index, $cols)=>{

                let colValue = $col.text()
                if(colValue == 'ChristineHSwanson@teleworm.com')
                    {
                        cy.log("Email Address is Found")
                    }
            })
        })

    })


})

it('Pagination',()=>{

    
})


})