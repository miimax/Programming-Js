import LoginPageGR from "../pages/LoginPageGR"

describe('Test: Login', () => {
    beforeEach(() => {
        cy.visit("v4")
    })
    context("Login unsuccessfully", () => {
        it("Visit page and input invalid account info, then login unsuccessfully", () => {

            cy.fixture('users').as('user').then((user) => {
                LoginPageGR.loginUncessfullWithInvalidAccount(user)
            })
        })

        it("Visit page and input wrong password, then login unsuccessfully", () => {
        })
    })
})