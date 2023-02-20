class LoginPage {
    elements = {
        txtEmail: () => cy.get('[title="Email"]'),
        txtPassword: () => cy.get('[type="password"]').eq(0),
        btnSignin: () => cy.get('.action.login.primary')
    }

    login(loginData) {
        this.elements.txtEmail().type(loginData.email)
        this.elements.txtPassword().type(loginData.password)   
        this.elements.btnSignin().click()
    }
}
export default new LoginPage()