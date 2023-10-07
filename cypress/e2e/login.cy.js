describe('Login Test', () => {
  it('should login with valid credentials', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get("#user-name").type("standard_user").should('have.value', 'standard_user')
    cy.get("#password").type("secret_sauce").should('have.value', 'secret_sauce')
    cy.get("#login-button").click();
  })
})