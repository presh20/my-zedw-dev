 /// <references types="cypress" />
 import { LOGIN, WITHDRAW } from "./pageobjects/pageojects"

 describe ('Withdraw successfully', ()=>{
 beforeEach (()=>{
      cy.visit('/')
      cy.get(LOGIN.Email_field).type (LOGIN.Email_address)
      cy.get(LOGIN.Password_field).type (LOGIN.Passwrd)
      cy.get(LOGIN.Login_bttn).click()
      cy.get(LOGIN.Login_bttn).click()
   })
 
 it ('verify user can withdraw successfully', ()=>{
   let alertMessage = 'You have initiated a withdrawal request'
   cy.on('window:alert', (message) => {
    alertMessage = message;
    return true;
 })
   cy.get(WITHDRAW.withdrawBtn).click({force:true})
   cy.contains('Enter Amount').click({force:true})
   .type('1000')
   cy.contains('Description').click({force:true})
   .type('Test')
   cy.contains('Select Bank').click({force:true})
   cy.contains('Default').click({force:true})
   cy.get('#confirm').click({force:true})
   
   cy.wrap(null).then(() => {
    expect(alertMessage).to.equal('You have initiated a withdrawal request');

 })


   
 })

})