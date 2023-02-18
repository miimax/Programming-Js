class RegisterPage {
    elements = {
        txtFirstName: () => cy.get("#firstname"),
        txtLastName: () => cy.get("#lastname"),
        txtEmail: () => cy.get("#email_address"),
        txtPassword: () => cy.get("#password"),
        txtConfirmPwd: () => cy.get("#password-confirmation"),
        btnCreateAnAccount: () => cy.get("[title='Create an Account']"),
        msgRegisterSuccessfully: () => cy.get(".logged-in").eq(0)
    }

    createNewAccount(registerUser) {
        this.elements.txtFirstName().type(registerUser.firstName)
        this.elements.txtLastName().type(registerUser.lastName)
        this.elements.txtEmail().type(registerUser.emailAddress)
        this.elements.txtPassword().type(registerUser.password)
        this.elements.txtConfirmPwd().type(registerUser.password)
        this.elements.btnCreateAnAccount().click()
    }

    verifyCreateAccountSuccessfully(registerUserName) {
        this.elements.msgRegisterSuccessfully()
            .should('have.text', `Welcome, ${registerUserName.firstName} ${registerUserName.lastName}!`)
    }
}

export default new RegisterPage()