class ProductPage {
    chooseProduct(product){
        cy.contains(product).click()
    }

}
export default new ProductPage()
