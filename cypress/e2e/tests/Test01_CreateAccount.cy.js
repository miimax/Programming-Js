import RegisterPage from "../pages/RegisterPage"

describe("Test: Create Account", () => {
    it("Fill all valid information then create an account successfully", () => {
        cy.visit("customer/account/create/")

        cy.request('https://6397e26877359127a041da3e.mockapi.io/users')

            .then((response) => {
                cy.writeFile('cypress/fixtures/randomData.json', response.body)

                cy.fixture('randomData').then((user) => {
                    RegisterPage.createNewAccount(user)
                    RegisterPage.verifyCreateAccountSuccessfully(user)
                })
            })
    })
})

