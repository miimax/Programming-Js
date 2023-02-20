import HomePage from "../../pages/HomePage"
import ProductDetailPage from "../../pages/ProductDetailPage"
import ProductPage from "../../pages/ProductPage"
import SearchResultPage from "../../pages/SearchResultPage"

describe("Test03: Search", () => {

    let searchTerm = "Jacket"
    let productName = "Ingrid Running Jacket"
    let path = "ingrid-running-jacket"

    it("User do search and verify product", () => {
        cy.visit("/")

        HomePage.doSearch(searchTerm)

        SearchResultPage.chooseProductFromList(productName)

        ProductDetailPage.verifyIfProductNameIsCorrected(productName)

        ProductDetailPage.verifyURLIsCorrected(path)
    })
})