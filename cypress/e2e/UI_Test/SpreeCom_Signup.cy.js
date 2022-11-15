// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('Cypress Application', function() {

    it('Visits the Spree.com Page and Perform Login Action', function() {
    //Visit the Spree Website
    cy.visit("https://demo.spreecommerce.org/signup");
    
   // Enter Email and Password
    
    cy.get("input[placeholder='Email']").type('cypress-test@spree.com')
    cy.get("input[placeholder='Password']").type('spree@123')
    cy.get("input[placeholder='Password Confirmation']").type('spree@123')
    cy.get("input[type='submit']").click()
    //Verify Dashboard Tab
    cy.get("h3[class='text-uppercase spree-mb-large spree-mt-large spree-header']").should('have.text','My Account')
      
  })

  
  })