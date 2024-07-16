import {productDetails1} from '../../fixtures/productDetails1.json';

describe('Data Driven Test Suite1',()=>
{
    it('Data Driven Test1_Access the data from the fixture',()=>
    {

        productDetails1.forEach((items)=>{

            cy.log(items.product);

        })
        
        
    })

})