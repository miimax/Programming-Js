class HomePage {
    elements = {
        lnkMenu: () => cy.get(".level-top.category-item"),
    }

    chooseMenu(menu) {
        cy.get("[class='ui-menu-icon ui-icon ui-icon-carat-1-e']").should("be.visible")
        cy.contains(menu).realHover()
    }
}
export default new HomePage()
