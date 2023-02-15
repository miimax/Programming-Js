import HomePage from "../pages/HomePage"

describe('Test: Function Search', () =>{
    it("Visit page and click title", () => {
        cy.visit("https://magento.softwaretestingboard.com/")
        
        HomePage.chooseMenu('Women')
    })
})