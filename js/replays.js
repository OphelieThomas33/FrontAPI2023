const requestOptions = {
  method: 'GET',
  body: raw,
  redirect: 'follow'
};

const x = document.querySelector('#allReplays') 

fetch('https://localhost:7076/api/Replays', requestOptions)
  .then(response => response.json())
  .then(result => {
    let myDiv = document.querySelector('#allReplays')
    myDiv.innerHTML = ""
    // Je veux ajouter mes replays dans myDiv
    // result => tableau
    /* mon objet va ressembler à ça :
    {
        "id": 0,
        "title": "string",
        "description": "string",
        "dateSortie": "2023-02-21T17:56:00.277Z",
        "url": "string"
    }*/

    result.forEach(element => {
        let replayHtml = `
        <div class='linkReplay'>
            <h2>${element.title}</h2>
            <div class='linkReplayContent'>
                <p>${element.description}</p>
                <p>${element.dateSortie}</p>
                <a target='blank' href='${element.url}'>${element.url}</a>
            </div>
        </div>
        `;
        myDiv.innerHTML += replayHtml
    });
  })
  .catch(error => console.log('error', error));