var infos = require("../../utils/Infos")

const txtUsername = "input[name=uid]";
const txtPassword = "input[name=password]"
const btnLogin = "input[name=btnLogin]"
const lnkSelenium = "a[data-toggle=dropdown]"
const lnkContent = "Table Demo"

export function LoginUncessfullWithWrongPassword(){
    cy.get(txtUsername).type(infos.USERNAME)
    cy.get(txtPassword).type(infos.PASSWORD)

    cy.get(btnLogin).click()
    
    cy.on('window:alert',(txt)=>{
        expect(txt).to.contains('not valid');
    })  
}

export function clickLinkSelenium(){
    cy.get(lnkSelenium).eq(0).click()
    cy.contains(lnkContent).click()
}