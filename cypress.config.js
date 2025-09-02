 const { defineConfig } = require("cypress");

 module.exports = defineConfig({
  defaultCommandTimeout : 100000,
  pageLoadTimeout : 100000,
  viewportHeight : 700,
  viewportWidth : 1500,
     e2e: {
    //setupNodeEvents(on, config)
    //{
      // implement node event listeners here

     baseUrl :'https://dev.business.zedcrestwealth.com',
     
    //}
     },
   "env" :{
    "MAILOSAUR_API_KEY" :"Y97b8ff7zsGRo2Rr0WnhQr4wCbipkri6"
   }



     });



