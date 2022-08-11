/// <reference types="Cypress" />
describe('My First Test Suite', () => {
    it('Verifies has Correct Title - Homepage', () => {
      cy.visit('https://block-buster-film-reviews.azureedge.net/')
      cy.title().should('equal', 'Block Buster Film Reviews')
      cy.get('h1').should('have.text', 'Block Buster Film Reviews')
    })
  })