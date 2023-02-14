// faire un fetch vers
// URL: https://reqres.in/api/users
// Method : GET

const allEntriesDiv = document.getElementById('allEntries')
const baseURL = 'https://reqres.in/'
const baseURLUser = baseURL + 'api/users'

document.getElementById("getUsers").addEventListener('click', getAllUser)

function getAllUser() {
    
    let numPage = document.getElementById('pageNum').value
    fetch(baseURLUser + '?' + new URLSearchParams({
            per_page: 2,
            page: numPage
        }), 
        {method: 'GET'}) // je fais la promesse de t'apporter quelque chose
    .then(function(response){         // je te donne les données qu'on appelle ici response
        // reponse reçue en texte, on transforme les données en json
        return response.json()
    })
    .then(function(responseJson) {    // création d'une fonction avec les données en json
        allEntriesDiv.innerHTML = ""
        // utilisation des datas :
        let allUserArray = responseJson.data;
        allUserArray.forEach(user => {     // ici data est le nom des données dans CETTE API
            // ou directement enlever le "let" et indiquer responseJson.data.forEach
            allEntriesDiv.innerHTML += user.email + '<br>'    
        })
    })
}

function createUser() {
    let name = document.getElementById("nomInput").value;
    let job = document.getElementById("jobInput").value;

    fetch(baseURLUser, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": name,
            "job": job       
        })
    })
    .then(function(response){
        return response.json()
    })
    .then(function(responseJson){
        let dateCreation = new Date(responseJson.createdAt)
        alert("Félicitations, l'utilisateur n°" + responseJson.id + " a bien été créé le " + dateCreation.toLocaleDateString() + " - Nom : " + responseJson.name + " - job : " + responseJson.job)
    })
}
