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

  it("should display an error message if invalid password entered", () => {
    cy.visit("https://www.saucedemo.com");
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("invalid_password");
    cy.get("#login-button").click();
    cy.contains(
      "Epic sadface: Username and password do not match any user in this service"
    ).should("be.visible");
  });

  it("should display an error message if no username is entered", () => {
    cy.visit("https://www.saucedemo.com");
    cy.get("#login-button").click();
    cy.contains("Epic sadface: Username is required").should("be.visible");
  });

  it("should display an error message if no password is entered", () => {
    cy.visit("https://www.saucedemo.com");
    cy.get("#user-name").type("standard_user");
    cy.get("#login-button").click();
    cy.contains("Epic sadface: Password is required").should("be.visible");
  });

  it("should login with standard user credentials", () => {
    cy.visit("https://www.saucedemo.com");
    cy.get("#user-name")
      .type("standard_user")
      .should("have.value", "standard_user");
    cy.get("#password")
      .type("secret_sauce")
      .should("have.value", "secret_sauce");
    cy.get("#login-button").click();
    cy.url().should("include", "inventory.html");
  });

  it("should display an error message for locked_out_user", () => {
    cy.visit("https://www.saucedemo.com");
    cy.get("#user-name").type("locked_out_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    cy.contains("Epic sadface: Sorry, this user has been locked out.").should(
      "be.visible"
    );
  });
});
