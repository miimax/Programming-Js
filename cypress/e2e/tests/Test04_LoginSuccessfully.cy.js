import LoginPage from "../../pages/LoginPage"
import MyAccountPage from "../../pages/MyAccountPage"

describe('Test04: Login', () => {
    before(() => {

    })

    it('User login successfully with valid account', () => {
        cy.visit('customer/account/login/')

        cy.fixture('loginData').then((loginUser) => {
            LoginPage.login(loginUser)
            MyAccountPage.verifyLoginSuccessfully(loginUser)
        })
    })
})