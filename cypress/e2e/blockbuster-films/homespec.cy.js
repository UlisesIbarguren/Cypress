/// <reference types="Cypress" />

describe('My First Test Suite', () => {

  beforeEach(() => {
    cy.visit('https://block-buster-film-reviews.azureedge.net/')
    cy.get('.menu-left a:visible').as('nav-links')
  })
  
  it('Verifies has Correct Title - Homepage', () => {
      cy.title().should('equal', 'Block Buster Film Reviews')
      cy.get('h1').should('have.text', 'Block Buster Film Reviews')
  })

  it('Verifies the First link points to Top Rated Movies', () => {
      cy.get('@nav-links').first().should('have.text', 'Top rated movies')
  })

  it('Verifies the navigation links have the correct text', () => {
      cy.get('@nav-links').eq(0).should('have.text', 'Top rated movies')
      cy.get('@nav-links').eq(1).should('have.text', 'Popular movies')
      cy.get('@nav-links').eq(2).should('have.text', 'Celebrities')
  })

  it('Navigates to Top rate movies', () => {
    cy.contains('Top rated movies').click()
    cy.title().should('equal', 'Top rated movies')
  })

  it('Navigates to Celebrities', () => {
    cy.get('.menu-left').contains('Celebrities').click()
    cy.title().should('equal', 'Celebrities')  
})
})