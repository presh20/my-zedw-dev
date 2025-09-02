 /// <reference types ="cypress"/>

 import { AddBankAcct, LOGIN } from "./pageobjects/pageojects"

 describe ('Add Bank',()=>{
 beforeEach (()=>{
    cy.visit('/')
    cy.get(LOGIN.Email_field).type (LOGIN.Email_address)
    cy.get(LOGIN.Password_field).type (LOGIN.Passwrd)
    cy.get(LOGIN.Login_bttn).click()
    //cy.get(LOGIN.Login_bttn).click()

 })
 it ('User should be able to addbank account',()=>{
    const randomAccountNumber = Math.floor(1000000000 + Math.random() * 9000000000).toString();
    cy.get(AddBankAcct.settings).click().contains('Settings')
    cy.contains('bank').click()
    cy.contains('Add Your Bank Account').click()
    cy.get(AddBankAcct.bankAccField).type(randomAccountNumber)
    cy.get(AddBankAcct.selectBank).click()
    cy.get(AddBankAcct.enterBank).type('ZENITH BANK{enter}')
    cy.get(AddBankAcct.bankSearch).contains('ZENITH BANK').scrollIntoView().click()
    cy.get(AddBankAcct.addBank).click()
    cy.get(AddBankAcct.addBank).click()
    cy.contains('Your request to add a bank account has been received.').should('exist')
    cy.get('.pri-btn').click()
 })

   


   




 })

 
