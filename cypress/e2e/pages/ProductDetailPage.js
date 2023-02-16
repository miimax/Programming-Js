class ProductDetailPage {
    elements = {
        btnAddToCart: () => cy.get("#product-addtocart-button"),
        btnViewCart: () => cy.get(".counter-number"),
        lblOderTotal: () => cy.get("[data-bind='i18n: title']"),
        btnProceedToCheckout: () => cy.contains("Proceed to Checkout")
    }

    chooseSize(size){
        cy.get("[aria-label='XS']").click()
    }
    
    chooseColor(color){
        cy.get("[aria-label='Green']").click()
    }

    clickBtnAddToCart(){
        this.elements.btnAddToCart().click()
    }

    clickViewCart(){
        this.elements.btnViewCart().click()
        cy.contains("View and Edit Cart").click()
    }

    clickProceedToCheckout(){
        cy.get("[data-bind='i18n: title']",{ timeout: 10000 }).should('be.visible')
        this.elements.btnProceedToCheckout().click({force: true})

        // this.elements.lblOderTotal().should('be.visible').then(()=>{
        //     this.elements.btnProceedToCheckout().click()
        // })
    }

}
export default new ProductDetailPage()
