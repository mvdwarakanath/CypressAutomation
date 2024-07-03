describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')

    cy.get('.navbar-brand').click()

    cy.get('#navbar > :nth-child(1) > :nth-child(2) > a').click()

    cy.get('.active > a').click()

  })
})