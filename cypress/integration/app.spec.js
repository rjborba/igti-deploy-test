describe("Cypress Class", () => {
  it("Should filter correctly", () => {
    cy.visit("http://localhost:3000/dummyList");

    cy.get("li:contains(Metamask)");
    cy.get("li:contains(Solidity)");
    cy.get("li:contains(Ethereum)");

    cy.get("input").type("metamask");

    cy.get("li:contains(Metamask)").should("exist");
    cy.get("li:contains(Solidity)").should("not.exist");
    cy.get("li:contains(Ethereum)").should("not.exist");
  });
});
