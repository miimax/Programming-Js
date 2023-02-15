describe('Test: Function Search', () =>{

    it("Visit page and click title", () => {
        cy.visit("https://chercher.tech/practice/practice-pop-ups-selenium-webdriver")
        cy.get("[value='Alert']").click()
        // cy.on('window:alert', (txt) => {
        //     expect(txt).to.contains('am alert');
        // })
    })
})