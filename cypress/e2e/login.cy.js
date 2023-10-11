describe("Login Test", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com");
  });

  it("should display an error message for invalid username", () => {
    cy.get('[data-test="username"]').type("invalid_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should("be.visible");
  });

  it("should display an error message if invalid password entered", () => {
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("invalid_password");
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should("be.visible");
  });

  it("should display an error message if no username is entered", () => {
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should("be.visible");
  });

  it("should display an error message if no password is entered", () => {
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should("be.visible");
  });

  it("should login with standard user credentials", () => {
    cy.get('[data-test="username"]')
      .type("standard_user")
      .should("have.value", "standard_user");
    cy.get('[data-test="password"]')
      .type("secret_sauce")
      .should("have.value", "secret_sauce");
    cy.get('[data-test="login-button"]').click();
    cy.url().should("include", "inventory.html");
  });
});
