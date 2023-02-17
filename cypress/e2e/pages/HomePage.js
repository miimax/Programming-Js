class HomePage {
    hoverOnMenu(menu) {
        cy.get("[class='ui-menu-icon ui-icon ui-icon-carat-1-e']").should("be.visible")
        cy.contains(menu).realHover()
    }

    chooseCategory(category) {
        cy.contains(category).click()
    }
}
export default new HomePage()