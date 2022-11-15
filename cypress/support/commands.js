// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//Below is Login command to login to OrangeHRM application
import "cypress-iframe"
import "cypress-localstorage-commands"
Cypress.Commands.add('postToken', () => {
    cy.request({
      method: 'POST',
      //url: cypress.config.js('baseUrl'), //get from cypress.env.json
      url: 'https://demo.spreecommerce.org/spree_oauth/token',
      form: true, //sets to application/x-www-form-urlencoded
      body: {
        grant_type: 'password',
        username: "mayank@spree.com",
        password: "spree@123"
      }
    })
    .its('body')
    .then(identity => {
      cy.setLocalStorage("access_token", identity.access_token);
    });
  });


  //
Cypress.Commands.add('Login', (uname,upass) => {
       // Enter UserName and Password
    
       cy.get("input[placeholder='Username']").type(uname)
       cy.get("input[placeholder='Password']").type(upass)
       cy.get("button[type='submit']").click()
  })

  //Below is Login command ,using this user can login to any application
Cypress.Commands.add('LoginToAnyApp', (unameloc,upassloc,lbuttonloc,uname,upass) => {
    // Enter UserName and Password
  
    cy.get(unameloc).type(uname)
    cy.get(upassloc).type(upass)
    cy.get(lbuttonloc).click()
  })

  Cypress.Commands.add("Login_fixture", (file_name) => { 
    //using fixture in the command file
    cy.fixture(file_name).then(function(data){
    this.data = data;
    console.log(this.data);
    //Using Promise to handle the chain concept
    }).then(function(){
    cy.visit(this.data.URL);
    cy.get("input[placeholder='Username']").type(this.data.Uname)
    cy.get("input[placeholder='Password']").type(this.data.Upass)
    cy.get("button[type='submit']").click()

    })
    })