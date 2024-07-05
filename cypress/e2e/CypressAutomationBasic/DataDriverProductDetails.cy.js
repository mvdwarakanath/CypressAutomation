import {productDetails} from '../../fixtures/productDetails.json';

describe("loading and accessing fixtures", ()=>{
  
    it("should access the data from the fixture", ()=> {
        productDetails.forEach((items) => {
            cy.log(items.product);
            cy.log(items.category);
        })
    });
});