/// <reference types="Cypress" />

describe('My Third Test Suite', () => {

    beforeEach(() => {
      cy.visit('https://do-it-with-cypress.azureedge.net/')
      cy.get('#view #settings').click()
   cy.get('#result').should('contain.value', '"gender": ""')
    })

    it('Changes the Gender to Female', () => {
        cy.get('#result').should('contain.value', '"gender": ""')
        cy.get('#female').check().should('be.checked')
        cy.get('#unknown').should('not.be.checked')
        cy.get('#result').should('contain.value', '"gender": "female"')

    })

    it('Selects Newsletter', () => {
        cy.get('#result').should('contain.value', '"newsletter": false')
        cy.get('#newsletter').check().should('be.checked')
        cy.get('#result').should('contain.value', '"newsletter": true')
        cy.get('#newsletter').uncheck().should('not.be.checked')
        cy.get('#result').should('contain.value', '"newsletter": false')
    })

    it('Selects Country Netherlands', () => {
        cy.get('#country').select('Netherlands')
        cy.get('#newsletter').check().should('be.checked')
        cy.get('#result').should('contain.value', '"country": "NL"')
    })

    it('Changes Happiness to 95%', () => {
        cy.get('#happiness').invoke('val', 95).trigger('input')
        cy.get('#result').should('contain.value', '"happiness": 95')
    })
})