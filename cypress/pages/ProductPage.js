class ProductPage {
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
                    
                }
            })
    }
}

export default new ProductPage()




// chooseProductFromList(productName) {
//     this.elements.products().find("strong").find("a").each(($el) => {
//         var text = $el.text()
//         if (text.includes(productName)) {
//             cy.wrap($el).click()
//         }
//     })
// }



