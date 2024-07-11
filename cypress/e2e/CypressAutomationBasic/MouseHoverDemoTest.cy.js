describe('Mouse Hover Operations', ()=>{

    it('Mouse hover demo', function(){

        cy.visit('https://tutorialsninja.com/demo/')

        cy.get('.nav > :nth-child(2) > .dropdown-toggle').trigger('mouseover').click()

        cy.get('.open > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > a').click()

        cy.get('.image > a > .img-responsive').click({force:true});

       
    })

    it('Double Click Operation', ()=>{

        cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3')
        cy.frameLoaded('#iframeResult');

       // cy.iframe('#iframeResult').find("[ondblclick='myFunction()']").trigger('dblclick');
        cy.iframe('#iframeResult').find("[ondblclick='myFunction()']").dblclick()
        
        //cy.get("[ondblclick='myFunction()']").trigger('dblclick');

        cy.iframe('#iframeResult').find('#field2').should('have.value','Hello World!')
    })

    it('Right Click Scenario',()=>{

        cy.visit('http://swisnl.github.io/jQuery-contextMenu/demo.html')
    
        //cy.get('.context-menu-one').trigger('contextmenu');

        cy.get('.context-menu-one').rightclick()
        cy.get('.context-menu-list').should('be.visible')
    
    })

    it('Drag and Drop Scenario', ()=>{

        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')

        cy.get('#box1').should('be.visible')

        cy.get('#box102').should('be.visible')

        cy.get('#box1').drag('#box102',{force: true})

    })

    it.only('Scrolling feature',()=>{
        cy.visit('https://scroll.in/tag/Swiggy')
        cy.pause()
        //cy.wait()
        cy.get('.search-next').scrollIntoView(({duration:2000}))

    })
    
})