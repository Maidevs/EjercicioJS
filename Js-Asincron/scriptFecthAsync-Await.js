// 1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para 
// hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un 
// console.log(). Para ello, es necesario que crees un .html y un .js.

fetch('https://api.agify.io?name=michael').then(response=> console.log(response))

// 2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
// fetch() para hacer una consulta a la api cuando se haga click en el botón, 
// pasando como parametro de la api, el valor del input.

// const baseUrl = 'https://api.nationalize.io';
// const btn$$ = document.querySelector('button')
// btn$$.addEventListener('click', () => {
//     const inputbtn$$ = document.querySelector('input').value
//     fetch(`${baseUrl}?name=${inputbtn$$}`)
//       .then(response => response.json())
//       .then(data => console.log(data))
//       .catch(error => console.error('Error:', error))
// } )

// 2.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición 
// a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
// EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser 
// de MZ.
// const baseUrl = 'https://api.nationalize.io';
// const btn$$ = document.querySelector('button')
// btn$$.addEventListener('click', () => {
//     const inputbtn$$ = document.querySelector('input').value
//     fetch(`${baseUrl}?name=${inputbtn$$}`)
//        .then(response => response.json())
//     .then(data => {
//       data.country.map(item => {
//       const frasePepe =  document.createElement('p')
//       frasePepe.innerText =`El nombre ${inputbtn$$} tiene un ${item.probability} % de ser de ${item.country_id}`
//       document.body.appendChild(frasePepe)
//     });
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });
// })

// 2.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno 
// de los <p></p> que hayas insertado y que si el usuario hace click en este botón 
// eliminemos el parrafo asociado.

const baseUrl = 'https://api.nationalize.io';
const btn$$ = document.querySelector('button')
btn$$.addEventListener('click', () => {
    const inputbtn$$ = document.querySelector('input').value
    fetch(`${baseUrl}?name=${inputbtn$$}`)
       .then(response => response.json())
    .then(data => {
      data.country.map(item => {
      const frasePepe =  document.createElement('p')
      frasePepe.innerText =`El nombre ${inputbtn$$} tiene un ${item.probability} % de ser de ${item.country_id}`
      document.body.appendChild(frasePepe)
      const frasePepebtn = document.createElement('button')
      frasePepebtn.innerText='X Eliminar'
      frasePepe.appendChild(frasePepebtn)
      frasePepebtn.addEventListener('click', () => {
        frasePepe.remove()
      })
    });
    })
    .catch(error => {
      console.error('Error:', error);
    });
})
//_____________________ASYNC-AWAIT
// 2.1 Convierte la siguiente promesa para esperar a ejecutar el console usando 
// async-await.
const runTimeOut = async () => {
    const promise = new Promise((resolve) => {
        setTimeout(function () {
            resolve();
        }, 2000);
    })
      await promise
    console.log('Time out!');
};

runTimeOut();

// 2.2 Convierte la siguiente función con un fetch utilizando async-await. 
// Recuerda que para usar .fetch() tendrás que probar el ejercicio en el navegador;
// function getCharacters () {
//     fetch('https://rickandmortyapi.com/api/character')
//     .then(res => res.json())
//     .then(characters => console.log(characters));
// }


const getCharacters= async () => {
  const respuesta = await fetch('https://rickandmortyapi.com/api/character')
  const res = await respuesta.json()
  console.log(res); 
}
getCharacters();