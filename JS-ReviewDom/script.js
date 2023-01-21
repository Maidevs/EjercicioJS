// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const countriesList = document.createElement('ul');

for (const country of countries) {
countriesList.innerHTML += `<li>${country}</li>`;
} 
document.body.append(countriesList);
console.log(countriesList);

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const removeIt = document.querySelector('.fn-remove-me');
removeIt.remove();
console.log(removeIt);

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const lista$$= document.createElement("ul")
const data$$ = document.querySelector("[data-function='printHere']")

for(const car of cars){
    const lis$$ = document.createElement("li")
    	lis$$.innerText(cars)
    	lista$$.appendChild(lis$$)
}
data$$.appendChild(lista$$);
console.log(lista$$);

// 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen.
const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];



const divPadre$$ = document.createElement("div")
const countriesListNew = document.createElement('ul');

for (const pais of paisesNuevos) {
    countriesListNew.innerHTML += `<li><h4>${pais.title}</h4><img src='${pais.imgUrl}'></li>`;
}
divPadre$$.appendChild(countriesListNew);
document.body.append(divPadre$$);

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// elemento de la lista.
const buttun$$ = document.createElement("button")
button$$.innerText="elimina el último"
document.body.appendChild(button$$)

button$$.addEventListener("click",()=> {
listaNueva.removeChild(lastChild);
}) 
document.body.append(button$$);


// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// elementos de las listas que elimine ese mismo elemento del html.

const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

const divSegundo$$ = document.createElement('div')
	document.body.appendeChild(divSegundo$$)

	for (const pais of paises) {
		const listadoPaises$$ =document.createElement("div"); 
		const h4$$ = document.createElement("h4");
		const imagen$$ = document.createElement("img");
    	const btn$$ = document.createElement("button");

    btn$$.innerText = 'Borra el elemento';
    imagen$$.setAttribute('src', country.imgUrl);

    btn$$.addEventListener('click', () => remove(listadoPaises$$));
    divPadre$$.appendChild(listadoPaises$$);
	listadoPaises$$.appendChild(h4$$);
	imagen$$.appendChildChild(imagen$$)
    listadoPaises$$.appendChild(btn$$);
}
