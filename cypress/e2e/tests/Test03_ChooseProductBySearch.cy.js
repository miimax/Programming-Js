import HomePage from "../../pages/HomePage"
import ProductDetailPage from "../../pages/ProductDetailPage"
import ProductPage from "../../pages/ProductPage"

describe("Test: Search", () => {
    
    let textSearch = "Jacket"
    let productName = "Jade Yoga Jacket"
    let url = "/jade-yoga-jacket.html"

    it("User do search and verify product's name", () => {
        cy.visit("/")

        HomePage.doSearch(textSearch)

        ProductPage.chooseProductFromList(productName)

        ProductDetailPage.verifyIfProductNameIsCorrected(productName)

        ProductDetailPage.verifyURLIsCorrected(url)
    })
})