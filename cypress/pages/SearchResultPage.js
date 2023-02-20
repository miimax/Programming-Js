class SearchResultPage {
    elements = {
        products: () => cy.get('.products.list.items.product-items')
    }

    chooseProductByName(productName) {
        cy.contains(productName).click()
    }

    chooseProductFromList(productName) {
        this.elements.products()
            .find('li')
            .each((el) => {
                var name = el.text()
                if (name.includes(productName)) {
                    cy.wrap(el).click()
                }
            })
    }
}

export default new SearchResultPage()

