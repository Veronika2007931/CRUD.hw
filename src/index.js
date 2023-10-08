

const btn = document.querySelector('.js-button')
const BAZE_URL = "http://localhost:3000"

// get method
// btn.addEventListener("click", clickToGet)

// function clickToGet(){
//    return fetch(`${BAZE_URL}/movies`)
//     .then(res => res.json)
//     .then(films => {
//      return   films.map(film => {
//         const inf = film.title
//          return console.log(inf)
//         })
//     })


// }

btn.addEventListener("click", clickToPost)

const newMovie = {
    
        title: "Polianna",
        genre: "Action",
        director: " Elinor Porter",
        year: 2010
      
}

 const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newMovie)
 }

function clickToPost(){
    return fetch(`${BAZE_URL}/movies`, options)
    .then(res => res.json)
}












