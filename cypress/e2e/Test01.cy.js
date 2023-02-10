var loginPage = require('./pages/LoginPage')
var infos = require("./utils/Infos")

describe('Test: HomePage', () =>{
    beforeEach(() => {
        cy.visit(infos.URL)
    })

    context("Login section", () => {
        it("Visit page and input invalid account info, then login unsuccessfully", () => {
            loginPage.LoginUncessfullWithWrongPassword()
        })

        it("Click link Selenium, then click Table Demo", () => {
            loginPage.clickLinkSelenium()
        })
      })
      //bbbbbbbbbbbbbbbbbbbb
})