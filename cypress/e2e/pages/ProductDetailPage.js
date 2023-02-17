class ProductDetailPage {
    elements = {
        btnAddToCart: () => cy.get("#product-addtocart-button"),
        btnViewCart: () => cy.get(".counter-number"),
        lblOderTotal: () => cy.get("[data-bind='i18n: title']"),
        btnProceedToCheckout: () => cy.contains("Proceed to Checkout")
    }

    chooseProductSizeColor(size, color) {
        cy.get(`[aria-label=${size}]`).click()
        cy.get(`[aria-label=${color}]`).click()
        this.elements.btnAddToCart().click()
    }

    clickViewCart() {
        this.elements.btnViewCart().click()
        cy.contains("View and Edit Cart").click()
    }

    clickProceedToCheckout() {
        // cy.get("[data-bind='i18n: title']", { timeout: 10000 }).should('be.visible')
        cy.get("[data-bind='i18n: title']").should('be.visible')
        this.elements.btnProceedToCheckout().click({ force: true })
    }
}

export default new ProductDetailPage()