 /// <reference types ="cypress"/>
  import { faker } from "@faker-js/faker"
 import { LOGIN, SIGNATORY } from "./pageobjects/pageojects"
 
     describe ('Add Signatory',()=>{
     beforeEach (()=>{
       cy.visit('/')
       cy.get(LOGIN.Email_field).type (LOGIN.Email_address)
       cy.get(LOGIN.Password_field).type (LOGIN.Passwrd)
       cy.get(LOGIN.Login_bttn).click()
       //cy.get(LOGIN.Login_bttn).click()
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
        cy.get(SIGNATORY.dobDate).click()
        cy.get(SIGNATORY.dobSelectDate).click()
        cy.contains('OK').click({force:true})
        cy.contains('Email').click({force:true}).type(fakeEmail)
        cy.contains('Residential address').click({force:true}).type('Rita close')
        cy.contains('Region/State').click({force:true})
        cy.get(SIGNATORY.stateDropdwon).contains('Abia').click()
        cy.contains('Town/City').click({force:true}).type('Umuahia')
        cy.get ("input[type=file]").attachFile("Approval.png")
        cy.contains('Phone number').click({force:true}).type('08102313456')
        cy.contains('ID document').click({force:true})
        cy.contains('Driver License').scrollIntoView().click();
        cy.contains('ID number').click({force:true}).type('ABC45517728')
        cy.get ("input[type=file]").attachFile("Bank account approval .png") //C:\Users\precious.ibeagwa\Desktop\Cypress install\cypress\fixtures\Bank account approval .png
        cy.get('#save').click()
        cy.get('#save').click()
        cy.get('.sa-success').should('include.text','added successfully.')
        
        
      })
     
})

