describe('API Testing with Cypress', () => {
    it('should log API response', () => {
      // Intercept the API request
      cy.intercept('GET', 'https://jsonplaceholder.typicode.com/posts/1').as('getRequest');
      
      // Trigger the request
      // UI PART - cy.visit('/your-page'); // Adjust according to your test setup
      
      // Wait for the request and then log the response
      cy.get('@getRequest').then((interception) => {
        const apiResponse = interception.response.body;
        
        // Log to the console
        console.log('API Response:', apiResponse);
      });

    });
  });