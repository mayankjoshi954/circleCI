// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('WebOrders Application', function() {

    it('Login Verification', function() {
        cy.visit("http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/Login.aspx")
        cy.get("input[name='ctl00$MainContent$username']").type('Tester')
        cy.get("input[name='ctl00$MainContent$password']").type('test')
        cy.get("input[name='ctl00$MainContent$login_button']").click()
        cy.get('h1').should('have.text', 'Web Orders')
    })
})