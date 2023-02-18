class ProductDetailPage {
    elements = {
        btnAddToCart: () => cy.get("#product-addtocart-button"),
        btnViewCart: () => cy.get(".counter-number"),
        lblOderTotal: () => cy.get("[data-bind='i18n: title']"),
        btnProceedToCheckout: () => cy.contains("Proceed to Checkout")
    }

    chooseProductSizeAndColor(productSize, productColor) {
        cy.get(`[aria-label=${productSize}]`).click()
        cy.get(`[aria-label=${productColor}]`).click()
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


    verifyIfProductNameIsCorrected(productName) {
        cy.get('h1').should('include.text', productName)
    }

    verifyURLIsCorrected(url) {
        cy.url().should('include', url)
    }
}

export default new ProductDetailPage()