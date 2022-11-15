// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('WebOrders Application', function() {

    it('Login Verification', function() {
        cy.visit("http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/Login.aspx")
        cy.get("input[name='ctl00$MainContent$username']").type('Tester')
        cy.get("input[name='ctl00$MainContent$password']").type('test')
        cy.get("input[name='ctl00$MainContent$login_button']").click()
        cy.get('h1').should('have.text', 'Web Orders')

        cy.get("a[href='Process.aspx']").click()
        cy.get("select[name='ctl00$MainContent$fmwOrder$ddlProduct']").select('FamilyAlbum')
        cy.get('#ctl00_MainContent_fmwOrder_txtQuantity').type(2)
        cy.get("input[name='ctl00$MainContent$fmwOrder$txtName']").type('Rohan')
        cy.get("input[name='ctl00$MainContent$fmwOrder$TextBox2']").type('MG Street')
        cy.get("input[name='ctl00$MainContent$fmwOrder$TextBox3']").type('Pune')
        cy.get("input[name='ctl00$MainContent$fmwOrder$TextBox5']").type('450001')
        cy.get("input[name='ctl00$MainContent$fmwOrder$cardList']").check()
        cy.get("input[name='ctl00$MainContent$fmwOrder$TextBox6']").type('345634651234')
        cy.get("input[name='ctl00$MainContent$fmwOrder$TextBox1']").type('02/27')
        cy.get("a[id='ctl00_MainContent_fmwOrder_InsertButton']").click()
        cy.get('strong').should('have.text', '\n                    New order has been successfully added.\n                ')

        cy.xpath('//*[@id="ctl00_menu"]/li[1]/a').click()
        cy.wait(5000)
        cy.get("a[id='ctl00_logout']").click()
    })
    it('Process Order', function() {
        // cy.get("a[href='Process.aspx']").click()
        // cy.get("select[name='ctl00$MainContent$fmwOrder$ddlProduct']").select('FamilyAlbum')
        // cy.get("input[name='ctl00$MainContent$fmwOrder$txtQuantity']").type('20')
        // cy.get("input[name='ctl00$MainContent$fmwOrder$txtName']").type('rohan')

        // cy.get("input[name='ctl00$MainContent$fmwOrder$TextBox1']").type('north')
        // cy.get("input[name='ctl00$MainContent$fmwOrder$TextBox2']").type('rohan')
        // cy.get("input[name='ctl00$MainContent$fmwOrder$TextBox3']").type('pune')
        // cy.get("input[name='ctl00$MainContent$fmwOrder$TextBox5']").type('12345')

        // cy.get("input[name='ctl00$MainContent$fmwOrder$cardList']").check()
        // cy.get("input[name='ctl00$MainContent$fmwOrder$TextBox6']").type('123456789')
        // cy.get("input[id='ctl00_MainContent_fmwOrder_TextBox1']").type('02/27')
    })
})

