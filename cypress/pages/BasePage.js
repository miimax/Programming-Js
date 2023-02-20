class BasePage {
    elements = {
        btnViewCart: () => cy.get('.counter-number'),
        btnCheckout: () => cy.contains('Proceed to Checkout')
    }

    clickBtnCheckOut() {
        cy.wait(2000)
        this.elements.btnViewCart().click({ force: true })
        cy.wait(2000)
        this.elements.btnCheckout().click({ force: true })
    }
}

export default new BasePage()