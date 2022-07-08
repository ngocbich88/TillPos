require('cypress-xpath')

// Cypress.Commands.add("login", () => {
//     cy.visit('/')
// })

Cypress.Commands.add("goToHomePage", () => {
    cy.visit('/')
})
