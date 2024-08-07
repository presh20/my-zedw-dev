 /// <references types="cypress" />
 import { LOGIN, PORTFOLIO, WITHDRAW } from "./pageobjects/pageojects"

 describe ('Validate portfolio visibility', ()=>{
 beforeEach (()=>{
      cy.visit('/')
      cy.get(LOGIN.Email_field).type (LOGIN.Email_address)
      cy.get(LOGIN.Password_field).type (LOGIN.Passwrd)
      cy.get(LOGIN.Login_bttn).click()
      cy.get(LOGIN.Login_bttn).click()
   })
  it ('Validate portfolio page',()=>{
    cy.get(PORTFOLIO.portfolioPage).click()
    cy.get(PORTFOLIO.portfolioValidation).should('include.text','Portfolio');
    
  })
})
