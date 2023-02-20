class MyAccountPage {
    elements = {
        msgLoginSuccessfully: () => cy.get(".logged-in").eq(0)
    }
    verifyLoginSuccessfully(userName) {
        this.elements.msgLoginSuccessfully()
            .should("have.text", `Welcome, ${userName.firstName} ${userName.lastName}!`)
    }
}

export default new MyAccountPage()