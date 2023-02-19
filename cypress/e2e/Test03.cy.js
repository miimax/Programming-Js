describe('TestSuite', () => {
    it ('Verify Title', () => {
        cy.visit('https://magento.softwaretestingboard.com/catalogsearch/result/index/?p=2&q=jacket')

        cy.get('.ui-menu-icon.ui-icon.ui-icon-carat-1-e').eq(0).trigger('mouseover')
        cy.contains('Tops').trigger('mouseover')
        cy.contains('Tees').click()

        cy.get('.product-item-details').each((el) => {
            if(el.find('strong').find('a').text().includes(('Gwyn Endurance Tee'))){
                cy.wrap(el).find('[option-label="XS"]').click()
                cy.wrap(el).find('[option-label="Black"]').click()
                cy.wrap(el).realHover('mouse')
                cy.wrap(el).contains('Add to Cart').click({force : true})
            }
        })
        cy.screenshot()
    })
})