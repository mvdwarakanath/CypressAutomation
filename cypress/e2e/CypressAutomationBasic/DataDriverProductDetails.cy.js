import {productDetails} from '../../fixtures/productDetails.json';

describe("loading and accessing fixtures", ()=>{
  
    it("should access the data from the fixture", ()=> {
        productDetails.forEach((items) => {
            cy.log(items.product);
            cy.log(items.category);
        })
    });
});

describe('Self Practise',()=>{
    it.only('Login Page',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('[name="username"]').type('Admin')
        cy.get('[type="password"]').type('admin123').type('{enter}')
        cy.xpath('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[1]/a/span').click();
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]/div/div[2]/input').type('admin')
        //cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').s
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
        //cy.contains(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon','Admin').click();
        //cy.contains(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text','Admin')
        cy.contains('Admin').click();   
            
})
})