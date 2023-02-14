  
fetch("https://reqres.in/api/users", {method: 'GET'})
.then(async (responseHTTP) => {
    // quand on reçoit la réponse on la transforme en json
    let resultJSON = await responseHTTP.json();

    // on utilise le json
    let entriesDiv = document.getElementById("allEntries");
    entriesDiv.innerHTML = resultJSON.total + '<br/>' + '<br/>';
    resultJSON.data.forEach(element => {
        entriesDiv.innerHTML += element.first_name + '<br/>'
        
    })});
    // console.log(result)})
// .catch(error => console.log('error', error));