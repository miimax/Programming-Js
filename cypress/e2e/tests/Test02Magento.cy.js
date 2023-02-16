import HomePage from "../pages/HomePage"
import OrderPage from "../pages/OrderPage"
import ProductDetailPage from "../pages/ProductDetailPage"
import ProductPage from "../pages/ProductPage"

describe("Test: Order Product", () =>{
    it("Visit page and choose product then add to cart successfully", () => {
        
        // .then((userData) => {
        // })

        cy.visit("https://magento.softwaretestingboard.com/")
        
        HomePage.chooseMenu("Women")

        HomePage.chooseCategory("Tops")

        ProductPage.chooseProduct("Celeste Sports Bra")

        ProductDetailPage.chooseSize("XS")

        ProductDetailPage.chooseColor("Green")

        ProductDetailPage.clickBtnAddToCart()

        ProductDetailPage.clickViewCart()

        ProductDetailPage.clickProceedToCheckout()

        OrderPage.fillInformations(cy.fixture('userData'))
    })
})
