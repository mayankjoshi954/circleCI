// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('Cypress Application', function() {

    it('Visits the Spree.com Page and Perform Login Action', function() {
    //Visit the Spree Website
    cy.visit("https://demo.spreecommerce.org/login");
    
   // Enter UserName and Password
    
    cy.get("input[placeholder='Email']").type('mayank@spree.com')
    cy.get("input[placeholder='Password']").type('spree@123')
    cy.get("input[type='submit']").click()
    //Verify Dashboard Tab
    cy.get("h3[class='text-uppercase spree-mb-large spree-mt-large spree-header']").should('have.text','My Account')
      
  }),
  it('Perform Logout Action', function() {
    
    
    cy.get("button[id='account-button']").click()
    
    cy.get("a[href='/logout']").click()
    //Verify Dashboard Tab
    //*[@id="existing-customer"]/div[1]/h3
    // cy.get("span[class='']").should('have.text','Signed out successfully.')

      
  }
  )

  
  })