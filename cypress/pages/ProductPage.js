class ProductPage {
    elements = {
        products: () => cy.get('.products.list.items.product-items')
    }

    chooseProductByName(productName) {
        cy.contains(productName).click()
    }

    orderProduct(productName, size, color) {
        this.elements.products()
            .find('li')
            .each((el) => {
                var name = el.text()
                if (name.includes(productName)) {
                    cy.wrap(el).find(`[option-label=${size}]`).click()
                    cy.wrap(el).find(`[option-label=${color}]`).click()
                    cy.wrap(el).realHover()
                    cy.wrap(el).contains('Add to Cart').click({ force: true })
                }
            })
    }
}

export default new ProductPage()



/*   chooseProductFromList(productName) {
    this.elements.products().find("strong").find("a").each(($el) => {
        var text = $el.text()
        if (text.includes(productName)) {
            cy.wrap($el).click()
        }
    })
}
*/

