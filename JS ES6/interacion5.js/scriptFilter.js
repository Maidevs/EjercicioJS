// 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los valores que sean mayor que 18
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const agesNew = ages.filter( age => age > 18);
    console.log(agesNew);

// 5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los valores que sean par.
const ages1 = [22, 14, 24, 55, 65, 21, 12, 13, 90];
    const filtrandoAge = ages1.filter(number2 => number2 % 2 == 0);
        console.log(filtrandoAge); 

// 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los streamers que tengan el gameMorePlayed = 'League of Legends'.
    const streamers = [
    {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
    {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
    {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
    {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
    ];
    const streamerLol = streamers.filter(streamer => streamer.gameMorePlayed == 'League of Legends');
        console.log(streamerLol);

// 5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos 
// usar la funcion .includes() para la comprobación.
const streamers1 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
const streamerLol1 = streamers.filter(streamer => streamer.name.includes('u'));
        console.log(streamerLol1);

// 5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan 
// el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion 
// .includes() para la comprobación.
// Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando 
// .age sea mayor que 35.
const filStreams = streamers.filter(streamer => streamer.gameMorePlayed.includes('Legends')); 
for (const filtrando of filStreams) {
	if (filtrando.age > 35) {
		filtrando.gameMorePlayed = filtrando.gameMorePlayed.toUpperCase();
	}
}   console.log(filStreams);


// 5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
// los streamers que incluyan la palabra introducida en el input. De esta forma, si 
// introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
// introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
const streamersB = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

function filterStrtEvent(event){
	const valor = event.target.value;
	let filterStrtEvent = streamers.filter(streamer => streamer.name.toLowerCase().includes(valor.toLowerCase()));
	    console.log(filterStrtEvent); 
}   
document.querySelector('input').addEventListener('keyup', filterStrtEvent);


// 5.7 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
// los streamers que incluyan la palabra introducida en el input. De esta forma, si 
// introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i', 
// me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
// En este caso, muestra solo los streamers filtrados cuando hagamos click en el button. */

const btnFiltrado = document.querySelector('button');

btnFiltrado .addEventListener('click', () => {
	const inputStrt = document.querySelector('input');
	const value = inputStrt.value;
	const StreamersFiltrados = streamers.filter(streamer => streamer.name.includes(value));
	    console.log(StreamersFiltrados);
});