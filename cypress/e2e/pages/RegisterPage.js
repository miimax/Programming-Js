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

    createNewAccount(user) {
        this.elements.txtFirstName().type(user.firstname)
        this.elements.txtLastName().type(user.lastname)
        this.elements.txtEmail().type(user.email)
        this.elements.txtPassword().type("123Asd!123Asd")
        this.elements.txtConfirmPwd().type("123Asd!123Asd")
        this.elements.btnCreateAnAccount().click()
    }

    verifyCreateAccountSuccessfully(userName) {
        this.elements.msgRegisterSuccessfully()
            .should('have.text', `Welcome, ${userName.firstname} ${userName.lastname}!`)
    }
}
export default new RegisterPage()