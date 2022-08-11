/// <reference types="Cypress" />

describe('Top Rated Movies', () => {

  beforeEach(() => {
    cy.visit('https://block-buster-film-reviews.azureedge.net/top-rated-movies')
  })

  it('Has 24 movies per page', () => {
    cy.get('.movie-item-style-1').should('have.length', 24)
  })

  it('Has the correct title', () => {

    cy.title().should('equal', 'Top rated movies')
    cy.get('h1')
      .should('be.visible')
      .and('have.text', 'Top rated movies')
  })

  it('The movie should be Dilwale Dulhania Le Jayenge', () => {

    cy.get('#movie-19404 > .mv-item-infor > h6 > a')
      .should('have.text', 'Dilwale Dulhania Le Jayenge')
  })

  it('Opens Pulp Fiction', () => {
    cy.get('#movie-680 .hvr-inner > a')
      .click()
  })
})