/// <reference types="Cypress" />

describe('My Second Test Suite', () => {

    beforeEach(() => {
      cy.visit('https://do-it-with-cypress.azureedge.net/')
      cy.get('[data-testid=new-todo]').as('new-todo')
      cy.get('[data-testid=btn-add-todo]').as('btn-add-todo')
    })

    it('Adds a new to-do with button', () => {
        cy.get('@new-todo').type('A new to-do with button')
        cy.get('@btn-add-todo').click()

        cy.contains('li', 'A new to-do with button').should('be.visible')
    })

    it('Adds a new to-do with enter', () => {
      cy.get('@new-todo').type('A new to-do with enter{enter}')

      cy.contains('li', 'A new to-do with enter').should('be.visible')
})
})