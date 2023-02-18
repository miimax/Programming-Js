describe('TestSuite', () => {
    it ('Verify Title', () => {
        cy.visit('https://magento.softwaretestingboard.com/catalogsearch/result/index/?p=2&q=jacket')
        cy.get('.product-item-details').find('strong').find('a').each((el) => {
            if(el.text().includes('Augusta Pullover Jacket')){
                cy.wrap(el).hover()
            }
        })
    })
})