 /// <reference types="cypress" />
 import { FORGOTPASS, LOGIN } from "./pageobjects/pageojects"

 describe('forgot password', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('Verify user can reset password', () => {
        cy.get(FORGOTPASS.Forgot_Btn).click({ force: true })
        cy.get(FORGOTPASS.verify_resettext).should('have.text', 'Reset Password')
        cy.url().should('eq', 'https://dev.business.zedcrestwealth.com/reset-password')
        cy.get(FORGOTPASS.email_add).type(LOGIN.Email_address)
        cy.get('#submit-btn').click({ force: true })
        
    })
    it('verify unregistered email cannot reset password, sees error message', () => {
        cy.get(FORGOTPASS.Forgot_Btn).click({ force: true })
        cy.get(FORGOTPASS.email_add).type(LOGIN.nonExisting_email)
        cy.get('#submit-btn').click({ force: true })
        
    })
})