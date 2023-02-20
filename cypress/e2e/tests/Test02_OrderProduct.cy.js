import HomePage from "../../pages/HomePage"
import LoginPage from "../../pages/LoginPage"
import OrderPage from "../../pages/OrderPage"
import ProductDetailPage from "../../pages/ProductDetailPage"
import ProductPage from "../../pages/ProductPage"

describe('Test02: Order Product', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it.skip('User order product successfully without login', () => {
        HomePage.hoverOnMenu('Women')

        HomePage.chooseCategory('Tops')

        ProductPage.chooseProductByName('Celeste Sports Bra')

        ProductDetailPage.chooseProductSizeAndColor('XS', 'Green')

        ProductDetailPage.clickViewCart()

        ProductDetailPage.clickProceedToCheckout()

        cy.fixture('registerData').then((userData) => {
            OrderPage.fillInformations(userData)
        })

        OrderPage.placeOder()

        OrderPage.verifyOrderSuccessfully()
    })

    it('User order product successfully after login', () => {
        HomePage.clickLinkSignin()

        cy.fixture('loginData').then((loginUser) => {
            LoginPage.login(loginUser)
        })

        HomePage.hoverOnMenu('Women')

        HomePage.chooseCategory('Tops')

    })
})
