import DataHelper from "../../helpers/DataHelper"
import RegisterPage from "../../pages/RegisterPage"

describe("Test: Create Account", () => {

    var registerUser = DataHelper.createRandomData()

    it("Fill all valid information then create an account successfully", () => {
        cy.visit("customer/account/create/")

        RegisterPage.createNewAccount(registerUser)

        RegisterPage.verifyCreateAccountSuccessfully(registerUser)
    })
})

