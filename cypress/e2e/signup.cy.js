
 /// <reference types="cypress" />
 import { LOGIN, SIGNUP } from "./pageobjects/pageojects"
 const faker = require('faker');
 describe('Corporate Login', () => {
  beforeEach(() => {
    cy.visit('https://dev.business.zedcrestwealth.com/register');
  })
  it('Verify user can create an account with valid credentials', () => {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email();
    // Generate a business name 
    const companySuffix = faker.company.companySuffix();
    const businessName = `${faker.company.companyName()} ${companySuffix}`;
    function generatePassword(length = 12) {
      const specialChars = '!@#$%^&*()_-+=<>?';
      const numbers = '0123456789';
      const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
      const getRandomElement = (charSet) => charSet[Math.floor(Math.random() * charSet.length)];
      // Ensure the password has at least one character from each category
      let password = [
        getRandomElement(specialChars),
        getRandomElement(numbers),
        getRandomElement(uppercaseChars),
        getRandomElement(lowercaseChars),
      ];

      const allChars = specialChars + numbers + uppercaseChars + lowercaseChars;
      for (let i = password.length; i < length; i++) {
        password.push(getRandomElement(allChars));
      }

      const shuffledPassword = password.sort(() => Math.random() - 0.5).join('');
      return shuffledPassword;
    }
    const generatedPassword = generatePassword();
    console.log(generatedPassword);
    const fakeBVN = faker.random.number({ min: 10000000000, max: 99999999999 }).toString()
    cy.get(SIGNUP.firstNam).type(firstName)
    cy.get(SIGNUP.lastNam).type(lastName)
    cy.get(SIGNUP.businessNam).type(businessName)
    cy.get(SIGNUP.emailAdd).type(email)
    cy.get(SIGNUP.craeatPass).type(generatedPassword)
    cy.get(SIGNUP.privacy_checkbox).click()
    cy.get(SIGNUP.signUp_bttn).click();
    cy.get(SIGNUP.signUp_bttn).click();
    cy.get(SIGNUP.signUpvalidation).should('have.text', 'We sent you a verification code')
  })
})

