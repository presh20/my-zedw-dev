 /// <reference types="cypress" />
 import { LOGIN, SIGNUP } from "./pageobjects/pageojects";

 const faker = require("faker");

 describe("Corporate Login", () => {
  beforeEach(() => {
    cy.visit("https://dev.business.zedcrestwealth.com/register");
  });

  it("Verify user can create an account with valid credentials", () => {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();

    const mailosaurServerId = "eyzt94gh"; // Mailosaur server ID
    const mailosaurApiKey = "Y97b8ff7zsGRo2Rr0WnhQr4wCbipkri6"; // Mailosaur API key

    // Create dynamic Mailosaur email
    const email = `${faker.internet.userName()}@${mailosaurServerId}.mailosaur.net`;

    // Generate random business name
    const companySuffix = faker.company.companySuffix();
    const businessName = `${faker.company.companyName()} ${companySuffix}`;

    // Password generator
    function generatePassword(length = 12) {
      const specialChars = "!@#$%^&*()_-+=<>?";
      const numbers = "0123456789";
      const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
      const getRandomElement = (set) =>
        set[Math.floor(Math.random() * set.length)];
      let password = [
        getRandomElement(specialChars),
        getRandomElement(numbers),
        getRandomElement(uppercaseChars),
        getRandomElement(lowercaseChars),
      ];
      const allChars =
        specialChars + numbers + uppercaseChars + lowercaseChars;
      for (let i = password.length; i < length; i++) {
        password.push(getRandomElement(allChars));
      }
      return password.sort(() => Math.random() - 0.5).join("");
    }

    const generatedPassword = generatePassword();

    // Fill signup form
    SIGNUP.firstNam().type(firstName);
    SIGNUP.lastNam().type(lastName);
    SIGNUP.businessNam().type(businessName);
    SIGNUP.emailAdd().type(email);
    SIGNUP.craeatPass().type(generatedPassword);
    cy.get(SIGNUP.privacy_checkbox).click();
    cy.get(SIGNUP.signUp_bttn).click();

    cy.get(SIGNUP.signUpvalidation).should(
      "have.text",
      "We sent you a verification code"
    );

    // Wait for email
    cy.mailosaurGetMessage(mailosaurServerId, {
      sentTo: email,
    }).then((emailMessage) => {
      // Extract OTP
      let otpCode = null;
      if (emailMessage.html?.codes?.length) {
        otpCode = emailMessage.html.codes[0].value;
      } else {
        const match = emailMessage.text.body.match(/\d{6}/);
        otpCode = match ? match[0] : null;
      }

      expect(otpCode, "OTP code should be found").to.not.be.null;

      cy.log(`Extracted OTP: ${otpCode}`);

      // Fill OTP digit by digit into 6 inputs
      otpCode.split("").forEach((digit, index) => {
        cy.get('.code-input').eq(index).type(digit);
       // cy.get(`input[aria-label="Digit ${index + 1}"]`).type(digit);
      });
      //cy.get(':nth-child(1) > .code-input')

      cy.contains("Verify Account").click();
    });

    // Assert success
    cy.contains("Your email has been verified").should(
      "have.text",
      "Your email has been verified"
    );
    cy.contains("Login to your account").click({ force: true });

    // Login flow
    cy.get(LOGIN.Email_field).type(email);
    cy.get(LOGIN.Password_field).type(generatedPassword);
    cy.get(LOGIN.Login_bttn).click();
  });
});
