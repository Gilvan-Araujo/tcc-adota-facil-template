describe('Home page', () => {
  it('should go to the next.js app', () => {
    cy.visit('http://localhost:3000/')
    cy.title().should('include', 'Adota Fácil')
  })
})
