import BasePage from "../../pages/BasePage"
import HomePage from "../../pages/HomePage"
import LoginPage from "../../pages/LoginPage"
import OrderPage from "../../pages/OrderPage"
import ProductDetailPage from "../../pages/ProductDetailPage"
import ProductPage from "../../pages/ProductPage"

describe('Test02: Order Product', () => {
    let registerData
    let loginData
    beforeEach(() => {
        cy.visit('/')
        cy.fixture('registerData').then((data) => {
            registerData = data
        })
        cy.fixture('loginData').then((data) => {
            loginData = data
        })
    })

    it.only('User order product successfully after login', () => {
        HomePage.clickLinkSignin()
        
        LoginPage.login(loginData)
        
        HomePage.hoverOnMenu('Women')

        HomePage.chooseCategory('Tops')

        ProductPage.orderProduct('Antonia Racer Tank', 'XS', 'Purple')

        BasePage.clickBtnCheckOut()

        OrderPage.chooseShippingMethod(registerData)

        OrderPage.clickBtnPlaceOrder()

        OrderPage.verifyOrderSuccessfully()
    })

    it('User order product successfully without login', () => {
        HomePage.hoverOnMenu('Women')

        HomePage.chooseCategory('Tops')

        ProductPage.chooseProductByName('Celeste Sports Bra')

        ProductDetailPage.chooseProductSizeAndColor('XS', 'Green')

        ProductDetailPage.clickViewCart()

        ProductDetailPage.clickProceedToCheckout()

        OrderPage.fillInformation(registerData)

        OrderPage.chooseShippingMethod(registerData)

        OrderPage.clickBtnPlaceOrder()

        OrderPage.verifyOrderSuccessfully()
    })
})
