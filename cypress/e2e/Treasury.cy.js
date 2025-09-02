 /// <reference types="cypress"/>

 import { faker } from "@faker-js/faker"
 import { LOGIN, TREASURY } from "./pageobjects/pageojects"
 describe('Create treasury plan', () => {
   beforeEach(() => {
      cy.visit('/')
      cy.get(LOGIN.Email_field).type(LOGIN.Email_address)
      cy.get(LOGIN.Password_field).type(LOGIN.Passwrd)
      cy.get(LOGIN.Login_bttn).click()
      //cy.get(LOGIN.Login_bttn).click()
   })

   it('User should be able to create treasury plan', () => {
      let alertMessage = 'Successful created treasury plan';
      cy.on('window:alert', (message) => {
         alertMessage = message;
         return true;
      })

      const randomName = faker.person.firstName()

      cy.get(TREASURY.TreaSury_Page).click()
      cy.get(TREASURY.ClickTreaSury).click()
      //.should('have.text', 'Treasury')
      cy.get("#app > div > div:nth-child(1) > main > div > div:nth-child(2) > div > div:nth-child(1) > div.background--image > div > div.v-responsive__content").click({ force: true })
      cy.url().should('eq', 'https://dev.business.zedcrestwealth.com/treasury/investments?type=naira&id=1')
      cy.get(TREASURY.investButton).click()
      cy.get(TREASURY.continueInvest).click()
      cy.get(TREASURY.investName)
         .type(randomName)
      cy.get(TREASURY.investAmt).type(1000000)
      cy.get(TREASURY.investTenor).click()
      cy.contains('30 days').click()
      cy.get(TREASURY.continueInvest).click()
      cy.get(TREASURY.continueInvest).click()

      cy.wrap(null).then(() => {
         expect(alertMessage).to.equal('Successful created treasury plan');

      });
   })

   it('Create USD treasury plan successfully', () => {
      let alertMessage = 'Successful created treasury plan';
      cy.on('window:alert', (message) => {
         alertMessage = message;
         return true;

      })


      const randomName2 = faker.person.firstName()
      cy.get(TREASURY.TreaSury_Page).click()
      cy.get(TREASURY.ClickTreaSury).click()
      .should('include.text', 'Treasury')
      cy.get('[style="min-height: 218px; max-width: 360px; background-color: rgb(206, 220, 254); border: 1px solid rgba(186, 205, 254, 0.5); box-shadow: rgba(186, 205, 254, 0.5) 0px 4px 16px;"] > .background--image > .v-image > .v-responsive__content').click({ force: true })
      
      cy.url().should('eq', 'https://dev.business.zedcrestwealth.com/treasury/investments?type=dollar&id=2')
      cy.get(TREASURY.investButton).click()
      cy.get(TREASURY.continueInvest).click()
      cy.get(TREASURY.investName).type(randomName2)
      cy.get(TREASURY.investAmt).type(10000)
      cy.get(TREASURY.investTenor).click()
      cy.contains('30 days').click()
      cy.get(TREASURY.continueInvest).click()
      cy.get(TREASURY.continueInvest).click()

      cy.wrap(null).then(() => {
         expect(alertMessage).to.equal('Successful created treasury plan');

      })
   })
 })

