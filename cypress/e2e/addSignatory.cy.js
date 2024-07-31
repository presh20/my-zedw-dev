 /// <reference types ="cypress"/>
  import { faker } from "@faker-js/faker"
 import { LOGIN, SIGNATORY } from "./pageobjects/pageojects"
 
     describe ('Add Signatory',()=>{
     beforeEach (()=>{
       cy.visit('/')
       cy.get(LOGIN.Email_field).type (LOGIN.Email_address)
       cy.get(LOGIN.Password_field).type (LOGIN.Passwrd)
       cy.get(LOGIN.Login_bttn).click()
       cy.get(LOGIN.Login_bttn).click()
    })
    it  ('Ability to add signatories',()=>{
        const randomfirstName = faker.name.firstName();
        const randomlastName =faker.name.lastName();
        const fakeEmail = faker.internet.email();
        cy.get(SIGNATORY.settings).click()
        cy.get(SIGNATORY.clickSett).click()
        cy.contains('Signatories').click()
        cy.get(SIGNATORY.addButtn).click()
        cy.contains ('Add a signatory to your account').should('exist')
        cy.get('label:contains("First Name")')
        .click({force:true})
        .type(randomfirstName)
        cy.contains('Last Name').click({force:true})
        .type(randomlastName)
        cy.contains('Date of Birth').click({force:true})
        cy.get(SIGNATORY.dobMonth).click()
        cy.get(SIGNATORY.dobYear).click()
        cy.get(SIGNATORY.dobselectYear).scrollTo('bottom').contains('1995').click()
        cy.contains('OK').click({force:true})
        cy.contains('Date of Birth').click({force:true})
        cy.get('tbody > :nth-child(1) > :nth-child(2) > .v-btn > .v-btn__content').click()
        cy.get(':nth-child(2) > :nth-child(4) > .v-btn > .v-btn__content').click()
        cy.contains('OK').click({force:true})
        cy.contains('Email').click({force:true}).type(fakeEmail)
        cy.contains('Residential address').click({force:true}).type('Rita close')
        cy.contains('Region/State').click({force:true})
        cy.get('div.v-list-item__content').contains('Abia').click()
        cy.contains('Town/City').click({force:true}).type('Umuahia')
        cy.get(':nth-child(7) > :nth-child(2) > .row > .col > .mb-6 > .document-uploader-wrap > :nth-child(1) > .main-uploader').click({force:true})
        
        /**cy.get('input[type="file"]').each(($el) => {
         cy.wrap($el).click({force:true})
         .selectFile("C:\\Users\\precious.ibeagwa\\Pictures\\Approval.png");
       });**/
      // cy.get('#app > div.v-dialog__content.v-dialog__content--active > div > div > div > div.add-signatory.mb-10.max-w-400 > div > form > div > div:nth-child(10) > div:nth-child(2) > div > div > div > div > div > div').click({force:true})
        
      })
     
})

