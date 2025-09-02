import { LOGIN } from "./pageobjects/pageojects"

 ///<references type ="cypress"/>
 describe ('Validate investment details', ()=>{
    beforeEach (()=>{
        cy.visit('/')
        cy.get(LOGIN.Email_field).type(LOGIN.Email_address)
      cy.get(LOGIN.Password_field).type(LOGIN.Passwrd)
      cy.get(LOGIN.Login_bttn).click()
      cy.get(LOGIN.Login_bttn).click()
    })
 it (' View treasury details', ()=>{
    cy.get('[href="/treasury"]').click({force:true})
    cy.contains('Treasury Naira').click({force:true})
    cy.contains('View details').click({force:true})
    cy.contains('Investment Details').should('have.text', 'Investment Details')
    cy.url().should ('eq', 'https://dev.business.zedcrestwealth.com/treasury/investment/202?type=naira')  
 })
 })
 
