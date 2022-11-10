describe("rule of thumb", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it("displays all active polls", () => {
    cy.get(".voting-card").should("have.length", 6)
    cy.get(".voting-card__information-title")
      .first()
      .should("have.text", "Kanye West")
    cy.get(".voting-card__information-title")
      .last()
      .should("have.text", "Greta Thumberg")
  })

  it("should toggle list views", () => {
    cy.get(".dropdown").click()
    cy.get("li.dropdown__option").last().click()
    cy.get(".rulings__carousel").should("have.class", "grid")
  })

  it("should be able to vote twice", () => {
    cy.get(".button").first().should("be.disabled")
    cy.get(".voting-card__information-button-group .icon-button")
      .first()
      .click()
    cy.get(".button").first().should("not.be.disabled")
    cy.get(".button").first().click()
    cy.get(".button").first().should("have.text", "Vote Again")
    cy.get(".button").first().click()
    cy.get(".voting-card__information-button-group .icon-button").should(
      "be.visible"
    )
  })
})
