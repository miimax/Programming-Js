class ProductPage {
    elements = {
        products: () => cy.get(".product-item-details")
    }

    chooseProductByName(productName) {
        cy.contains(productName).click()
    }

    chooseProductFromList(productName) {
        this.elements.products().find("strong").find("a").each(($el) => {
            var text = $el.text()
            if (text.includes(productName)) {
                cy.wrap($el).click()
            }
        })
    }
}

export default new ProductPage()

