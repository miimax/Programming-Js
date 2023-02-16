class OrderPage {
    elements = {
        txtEmailAddress: () => cy.get("#customer-email"),
        txtFirstName: () => cy.get("[name='firstname']"),
        txtLastName: () => cy.get("[name='lastname']"),
        txtCompany: () => cy.get("[name='company']"),
        txtStreetAddress: () => cy.get("[name='street[0]']"),
        txtCity: () => cy.get("[name='city']"),
        txtZip: () => cy.get("[name='postcode']"),
        txtPhoneNumber: () => cy.get("[name='telephone']"),
        ddlCountry: () => cy.get(".select")
    }
    fillInformations(userData){
        this.elements.txtEmailAddress().type(userData.emailAdress)
        this.elements.txtFirstName().type(userData.firstName)
        this.elements.txtLastName().type(userData.lastName)
        this.elements.txtCompany().type(userData.company)
        this.elements.txtStreetAddress().type(userData.streetAddress)
        this.elements.txtCity().type(userData.city)
        this.elements.ddlCountry().click().then(() =>{cy.contains(userData.country).click()} )
        this.elements.txtZip().type(userData.zip)
        this.elements.txtPhoneNumber().type(userData.phoneNumber)
    }

}
export default new OrderPage()
