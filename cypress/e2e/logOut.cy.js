 /// <reference types="cypress"/>

 import { LOGIN } from "./pageobjects/pageojects"

 describe ('LogOut',()=>{
 beforeEach (()=>{
    cy.visit('/')
    cy.get(LOGIN.Email_field).type(LOGIN.Email_address)
    cy.get(LOGIN.Password_field).type(LOGIN.Passwrd)
    cy.get(LOGIN.Login_bttn).click()
    //cy.get(LOGIN.Login_bttn).click()
 })
 it ('User should successfully logout',()=>{
    cy.get('#log-out').click()
   
 })
 })