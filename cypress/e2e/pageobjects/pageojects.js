export const LOGIN = {
    Email_field:':nth-child(1) > .mb-6 > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot',
    Password_field: ':nth-child(2) > .mb-6 > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot',
    Login_bttn : 'button#on-board-btn',   //'#on-board-btn', 
    Email_address : 'dan@mailinator.com',
    Passwrd: 'Dan2024@',
    HomePage : 'https://dev.business.zedcrestwealth.com/home',
    nonExisting_email : 'crescent@mailinator.com',
    Invalid_email : 'crescent23@',
    UserNotFound : 'span[data-v-c81a3b7a=""] > .v-snack > .v-snack__wrapper > .v-snack__content > .snackbar__content',
    Invalid_Credentials :'span[data-v-c81a3b7a=""] > .v-snack > .v-snack__wrapper > .v-snack__content > .snackbar__content',

}

 export const SIGNUP = {
     firstNam : () =>
      cy.contains('label', 'Enter first name')
        .invoke('attr', 'for')
        .then((id) => cy.get(`#${id}`)),
     //'#input-43', 
     lastNam: () =>
      cy.contains('label', 'Enter last name')
        .invoke('attr', 'for')
        .then((id) => cy.get(`#${id}`)),
     //'#input-45',
     businessNam : () =>
      cy.contains('label', 'Enter Business name')
        .invoke('attr', 'for')
        .then((id) => cy.get(`#${id}`)),
     //'#input-47',
     emailAdd : () =>
      cy.contains('label', 'Email Address')
        .invoke('attr', 'for')
        .then((id) => cy.get(`#${id}`)),
     //'#input-49', 
     craeatPass :() =>
      cy.contains('label', 'Create Password')
        .invoke('attr', 'for')
        .then((id) => cy.get(`#${id}`)),

     //'#input-51',
     NameofBus : 'Test Ventures',
     privacy_checkbox : '.checkbox-control > .cursor-pointer',
     signUp_bttn:'#on-board-btn',

     signUp2 :'button.mt-6 v-btn v-btn--block v-btn--has-bg v-btn--rounded theme--light v-size--default primary',
     signUpvalidation : '.form--title',
 }
    
  export const FORGOTPASS = {
   Forgot_Btn : '.link-text',
   resetUrl : 'https://dev.business.zedcrestwealth.com/reset-password',
   verify_resettext : '._page--title',
   email_add : '.v-text-field__slot',
   sumbitBtn : '#submit-btn', //('#submit-btn')
   
  }
  export const TREASURY = {
    
   TreaSury_Page :'[href="/investment"]',
   ClickTreaSury: '[href="/treasury"]',
   Validate_TreasTittle:'.options--page-title',
   NairaTreas:'#app > div > div:nth-child(1) > main > div > div:nth-child(2) > div > div:nth-child(1) > div.background--image > div > div.v-responsive__content',
   investButton : '#invest',
   continueInvest :'#continue',
   investName : '#app > div > div:nth-child(1) > main > div > div.investments-wrap > div > div > div > div > div > div.d-flex > div:nth-child(2) > div > form > div:nth-child(1) > div > div > div > div > div',
   investAmt : '#app > div > div:nth-child(1) > main > div > div.investments-wrap > div > div > div > div > div > div.d-flex > div:nth-child(2) > div > form > div:nth-child(2) > div:nth-child(1) > div > div > div > div',
   investTenor :'#app > div > div:nth-child(1) > main > div > div.investments-wrap > div > div > div > div > div > div.d-flex > div:nth-child(2) > div > form > div:nth-child(3) > div:nth-child(1) > div > div > div > div.v-select__slot > div.v-input__append-inner > svg',
  continueInvest:'#continue',
  DollarTreas:'#app > div > div:nth-child(1) > main > div > div:nth-child(2) > div > div:nth-child(2) > div.background--image > div > div.v-responsive__content',
 // cy.get('[style="min-height: 218px; max-width: 360px; background-color: rgb(206, 220, 254); border: 1px solid rgba(186, 205, 254, 0.5); box-shadow: rgba(186, 205, 254, 0.5) 0px 4px 16px;"] > .background--image > .v-image > .v-responsive__content')

  }
  export const AddBankAcct={
  settings :'[href="/settings"]',
  bank :'.v-slide-group__content > :nth-child(7)',
  bankAccField:'#app > div.v-dialog__content.v-dialog__content--active > div > div > form > div > div > div:nth-child(1) > div:nth-child(1) > div > div > div > div > div > div > div',
  selectBank: '.v-select__selections',
  enterBank :'input[placeholder="Search"]',
  bankSearch : '.v-list-item__content',
  addBank : '#save',


  }

  export const SIGNATORY ={
    settings :'[href="/settings"]',
    addButtn: '#add-signatory',
    clickSett :'.v-slide-group__content > :nth-child(4)',
     dobMonth:'.v-date-picker-header__value > .primary--text',
     dobYear: '.fade-transition-enter-active > .v-date-picker-header > .v-date-picker-header__value > .primary--text',
     dobselectYear: '.v-date-picker-years',
     stateDropdwon:'div.v-list-item__content',
     dobDate : 'tbody > :nth-child(1) > :nth-child(2) > .v-btn > .v-btn__content',
     dobSelectDate: ':nth-child(2) > :nth-child(4) > .v-btn > .v-btn__content',
     


  }

  export const WITHDRAW={
    withdrawBtn :'#withdraw',
  }

  export const Onboard ={

    firstName : '#input-43',
  }
  