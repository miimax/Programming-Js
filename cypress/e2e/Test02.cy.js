describe ('TestSuite: Title', () => {
    let sharedSecret

    before(() => {
        sharedSecret = Cypress.env('sharedSecret')
    })

    it.only('variable', () => {
        console.log(sharedSecret)
    })

    it ('Verify title', () => {
        cy.visit('https://magento.softwaretestingboard.com/')
    })
})