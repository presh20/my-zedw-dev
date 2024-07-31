 /// <references types="cypress" />
 import { LOGIN, WITHDRAW } from "./pageobjects/pageojects"

 describe ('Validate portfolio visibility', ()=>{
 beforeEach (()=>{
      cy.visit('/')
      cy.get(LOGIN.Email_field).type (LOGIN.Email_address)
      cy.get(LOGIN.Password_field).type (LOGIN.Passwrd)
      cy.get(LOGIN.Login_bttn).click()
      cy.get(LOGIN.Login_bttn).click()
   })
  it ('Validate portfolio page',()=>{
    cy.get('[aria-selected="false"]').click()
    cy.get('.flex-grow-1 > :nth-child(3)').should('have.text','Portfolio balance')
    //cy.get('#app > div.v-application--wrap > div:nth-child(1) > main > div > div.dashboard-wrap.mx-auto > div.row > div:nth-child(1) > div > div > div.d-flex.align-center.justify-center > div > span').should('have.text','Portfolio balance')

  })
})
