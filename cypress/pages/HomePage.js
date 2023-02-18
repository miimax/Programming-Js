class HomePage {
    elements = {
        txtSearch: () => cy.get("#search")
    }

    hoverOnMenu(menu) {
        cy.get("[class='ui-menu-icon ui-icon ui-icon-carat-1-e']").should("be.visible")
        cy.contains(menu).realHover()
    }

    chooseCategory(category) {
        cy.contains(category).click()
    }

    doSearch(textSearch) {
        this.elements.txtSearch().type(textSearch).type("{enter}")
    }
}

export default new HomePage()