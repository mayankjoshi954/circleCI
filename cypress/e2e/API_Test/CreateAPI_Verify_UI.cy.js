//response.data.body.id
describe("postToken", ()=> {
    before(() => {
      cy.postToken();
      cy.saveLocalStorage();
    });
  
    beforeEach(() => {
      cy.restoreLocalStorage();
    });
  
    it("should exist identity in localStorage", () => {
      cy.getLocalStorage("access_token").should("exist");
      cy.getLocalStorage("access_token").then(token => {
        console.log("access_token token", token);
      });
    });
  
    it("Create an Address", () => {
      cy.getLocalStorage("access_token").should("exist");
      cy.getLocalStorage("access_token").then(token => {
        console.log("access_token", token);

        cy.request({
          method: 'POST',
          url: 'https://demo.spreecommerce.org/api/v2/storefront/account/addresses',
          auth: {
              bearer: token
              
          },
          body :
          {
              "address": {
                firstname: "John",
                lastname: "Doe",
                address1: "Aerocity",
                address2: "2nd Floor",
                city: "Texas",
                phone: "5438764532",
                zipcode: "20814",
                state_name: "MD",
                country_iso: "US"
              }
      }}).then((response)=>{
      expect(response.status).to.equal(200);
       // response.body is automatically serialized into JSON
       cy.log(response.body);
    //    expect(response.body.data).to.have.property('type','address')
    //    expect(response.body.data.attributes).to.have.property('address1','Aerocity')
    //    expect(response.body.data.attributes).to.have.property('firstname','John')

  });
});
});
    it("Verify using UI",()=>{
        //step 1: login
        cy.visit("https://demo.spreecommerce.org/login");
        cy.get("input[placeholder='Email']").type('mayank@spree.com')
        cy.get("input[placeholder='Password']").type('spree@123')
        cy.get("input[type='submit']").click()
        //step 2: goto address and verify name
        cy.get("address").find('span').should('have.contain', "John Doe")

    });
});