class RegisterPage {
    elements = {
        txtFirstName: () => cy.get("#firstname"),
        txtLastName: () => cy.get("#lastname"),
        txtEmail: () => cy.get("#email_address"),
        txtPassword: () => cy.get("#password"),
        txtConfirmPwd: () => cy.get("#password-confirmation"),
        btnCreateAnAccount: () => cy.get("[title='Create an Account']")
    }

    createNewAccount(registerUser) {
        this.elements.txtFirstName().type(registerUser.firstName)
        this.elements.txtLastName().type(registerUser.lastName)
        this.elements.txtEmail().type(registerUser.emailAddress)
        this.elements.txtPassword().type(registerUser.password)
        this.elements.txtConfirmPwd().type(registerUser.password)
        this.elements.btnCreateAnAccount().click()
    }
}

export default new RegisterPage()
