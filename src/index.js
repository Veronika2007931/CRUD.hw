

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

// btn.addEventListener("click", clickToPost)

// const newMovie = {
    
//     title: "Polianna",
//     genre: "Action",
//     director: " Elinor Porter",
//     year: 2010
// }


// function clickToPost(){
//      const options = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(newMovie)
//  }

//     return fetch(`${BAZE_URL}/movies`, options)
//     .then(res => res.json())
// }

btn.addEventListener("click", clickToPatch(5,
    [ "title": "Inception2",
    "genre": "Drama",]
))


function clickToPatch(movieId, update ){
    const options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(update)
    }
    return fetch(`${BAZE_URL}/movies/${movieId}`, options)
    .then(res => res.json())
    .then(console.log)
}






