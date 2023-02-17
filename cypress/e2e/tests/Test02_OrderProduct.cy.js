import HomePage from "../pages/HomePage"
import OrderPage from "../pages/OrderPage"
import ProductDetailPage from "../pages/ProductDetailPage"
import ProductPage from "../pages/ProductPage"

describe("Test: Order Product", () => {
    it("User order product successfully without login", () => {
        cy.visit("/")

        HomePage.hoverOnMenu("Women")

        HomePage.chooseCategory("Tops")

        ProductPage.chooseProduct("Celeste Sports Bra")

        ProductDetailPage.chooseProductSizeColor("XS", "Green")

        ProductDetailPage.clickViewCart()

        ProductDetailPage.clickProceedToCheckout()

        cy.fixture('userData').then((userData) => {
            OrderPage.fillInformations(userData)
        })

        OrderPage.placeOder()

        OrderPage.verifyOderSuccessfully()
    })
})
