class LoginPageGR {
    elements = {
        txtUsername: () => cy.get("input[name=uid]"),
        txtPassword: () => cy.get("input[name=password]"),
        btnLogin: () => cy.get("input[name=btnLogin]"),
        lnkSelenium: () => cy.get("a[data-toggle=dropdown]"),
        lnkContent: () => cy.get("Table Demo"),
    }

    LoginUncessfullWithInvalidAccount(user) {
        this.elements.txtUsername().type(user.username)
        this.elements.txtPassword().type(user.password)
        cy.screenshot()

        this.elements.btnLogin().click()
        cy.on('window:alert', (txt) => {
            expect(txt).to.contains('not valid');
        })
    }

    clickLinkSelenium() {
        // cy.get(lnkSelenium).eq(0).click()
        // cy.contains(lnkContent).click()
    }
}
export default new LoginPageGR()
