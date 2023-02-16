describe('Test: Function Search', () =>{

    it("Visit page and click title", () => {
        cy.visit("https://nxtgenaiacademy.com/alertandpopup/")
        cy.contains("Alert Box").click()
        cy.on('window:alert', (txt) => {
            expect(txt).to.contains('alert box');
        })
    })
})