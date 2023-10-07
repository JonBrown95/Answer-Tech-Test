describe("Login Test", () => {
  it("should display an error message for invalid username", () => {
    cy.visit("https://www.saucedemo.com");
    cy.get("#user-name").type("invalid_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    cy.contains(
      "Epic sadface: Username and password do not match any user in this service"
    ).should("be.visible");
  });

  it("should login with valid credentials", () => {
    cy.visit("https://www.saucedemo.com");
    cy.get("#user-name")
      .type("standard_user")
      .should("have.value", "standard_user");
    cy.get("#password")
      .type("secret_sauce")
      .should("have.value", "secret_sauce");
    cy.get("#login-button").click();
  });
});
