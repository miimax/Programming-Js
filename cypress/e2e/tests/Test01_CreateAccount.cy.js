import DataHelper from "../../helpers/DataHelper"
import MyAccountPage from "../../pages/MyAccountPage"
import RegisterPage from "../../pages/RegisterPage"

describe("Test01: Create Account", () => {

    var registerUser = DataHelper.createRandomData()

    it("Fill all valid information then create an account successfully", () => {
        cy.visit("/customer/account/create/")

        RegisterPage.createNewAccount(registerUser)

        MyAccountPage.verifyLoginSuccessfully(registerUser)
    })
})

