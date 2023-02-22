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
  .catch(error => {
    console.log('error', error)
    alert("Impossible de joindre l'API.")
});

document.querySelectorAll(".background-modal").forEach(element => {
    element.addEventListener('click', (e) => {
      e.currentTarget.classList.toggle('hide')   // si on clique sur le background-modal on le cache 'hide'
    })
})

document.querySelectorAll(".modal").forEach(element => {
    element.addEventListener('click', (e) => {
      e.stopPropagation()  // on empeche la fonction appliquée à .background-modal de s'appliquer sur la modale
    })
})

document.querySelectorAll(".open-modal").forEach(element => {
    element.addEventListener('click', (e) => {
        let cible = e.currentTarget.dataset.cible
        document.querySelector(cible).classList.toggle("hide") // inverser l'état de visibilité de l'élément qui contient .hide
    })
})

