

// cy.request('https://6397e26877359127a041da3e.mockapi.io/users').then((response) => {
//     cy.writeFile('cypress/e2e/fixtures/randomData.json', response.body)
// })


async function getJson() {
    const response = await fetch("https://6397e26877359127a041da3e.mockapi.io/users")
    var data = await response.json()
    return data
}
getJson().then(function (result) {
    console.log((result.firstname))
    console.log(result)
})




/*
let apiURL = "https://6397e26877359127a041da3e.mockapi.io/users";
// Defining async function
async function getAPI(url) {
    
    // Storing response
    const response = await fetch(url)
    
    // Storing data in form of JSON
    var data = await response.json()
    console.log(data)

}
// Calling that async function
getAPI(apiURL)
*/