class HomePage {
    elements = {
        txtSearch: () => cy.get('#search'),
        lnkSignin: () => cy.contains('Sign In')
    }

    clickLinkSignin() {
        this.elements.lnkSignin().click()
    }

    hoverOnMenu(menu) {
        cy.get("[class='ui-menu-icon ui-icon ui-icon-carat-1-e']").should('be.visible')
        cy.contains(menu).realHover()
    }

    chooseCategory(category) {
        cy.contains(category).click({ force: true })
    }

    doSearch(searchTerm) {
        this.elements.txtSearch().type(searchTerm).type('{enter}')
    }
}

export default new HomePage()