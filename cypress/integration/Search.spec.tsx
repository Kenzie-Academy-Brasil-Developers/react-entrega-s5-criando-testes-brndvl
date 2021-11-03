import cypress from "cypress";

context("Search", () => {
  it("Digitar novo cep", () => {
    cy.visit("http://localhost:3000");
    cy.viewport(1440, 900);

    cy.get("input[name=cep-number]").type(14801300)

    cy.contains("Buscar pelo CEP").click();
  });
});
