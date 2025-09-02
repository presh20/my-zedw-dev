 
 /// <reference types="cypress" />
 import { LOGIN } from "./pageobjects/pageojects"


 describe ('Corporate Login',()=> {
    beforeEach (() => {
   cy.visit ('/');
    } )
     let alertMessage = 'Invalid Credentials';
     cy.on('window:alert', (message) => {
      alertMessage = message;
      return true; 
     })
    it ('Verify login successful with valid details ', ()=>{
      cy.get(LOGIN.Email_field).type (LOGIN.Email_address)
      cy.get(LOGIN.Password_field).type(LOGIN.Passwrd)
      cy.get(LOGIN.Login_bttn).click();
      //cy.get(LOGIN.Login_bttn).click();
      //cy.wait (50000)
      cy.url().should('eq', LOGIN.HomePage)
    })
     it ('verify user cannot login with a non-registered number', ()=>{
       cy.get(LOGIN.Email_field).type(LOGIN.nonExisting_email)
       cy.get(LOGIN.Password_field).type(LOGIN.Invalid_email)
       cy.get(LOGIN.Login_bttn).click();
       //cy.get(LOGIN.Login_bttn).click();
       cy.url().should('eq','https://dev.business.zedcrestwealth.com/login')
       })
       it ('verify user cannot login with an invalid login credentials', ()=>{
        cy.get (LOGIN.Email_field).type(LOGIN.Email_address)
        cy.get(LOGIN.Password_field).type(LOGIN.Invalid_email)
        cy.get(LOGIN.Login_bttn).click();
        //cy.get(LOGIN.Login_bttn).click();
        cy.get (LOGIN.Invalid_Credentials).click(),

        cy.wrap(null).then(() =>
        {expect(alertMessage).to.equal('Invalid Credentials');

        });

       })

      })