// cy.request('https://6397e26877359127a041da3e.mockapi.io/users').then((response) => {
//     cy.writeFile('cypress/e2e/fixtures/randomData.json', response.body)
// })

// class JsonHelper {
//     getJson() {
//         cy.request('https://6397e26877359127a041da3e.mockapi.io/users')
//             .then((response) => {
//                 return response.body;
//             })
//     }
// }
// export default new JsonHelper()

// getJson().then(function (result) {
//     console.log((result.firstname))
//     console.log(result)
// })

class apiHelper {
    static getNewUser() {
        var http = new XMLHttpRequest();
        http.open(
            "GET",
            "https://6397d7ef86d04c76339ee552.mockapi.io/user",
            false
        );
        http.send(null);

        return JSON.parse(http.responseText);
    }
}

export default apiHelper;




// async function getJson() {
//     const response = await fetch("https://6397e26877359127a041da3e.mockapi.io/users")
//     var data = await response.json()
//     return data
// }
// getJson().then(function (result){
//     console.log(result)
// }


// class apiHelper {
//     static getNewUser() {
//         var http = new XMLHttpRequest();
//         http.open(
//             "GET",
//             "https://6397d7ef86d04c76339ee552.mockapi.io/user",
//             false
//         );
//         http.send(null);

//         return JSON.parse(http.responseText);
//     }
// }

// export default apiHelper;





// let userAPI = "https://6397e26877359127a041da3e.mockapi.io/users";

// class jsonHelper {
// // Defining async function
//     async getNewUser() {
//     // Storing response
//         const response = await fetch(userAPI)
//     // Storing data in form of JSON
//     return await response.json();
        
//     }
// }

// export default new jsonHelper;

// Calling that async function
