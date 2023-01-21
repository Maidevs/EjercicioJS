// Usa un bucle for...of para recorrer todos los juguetes y elimina los que incluyan la palabra gato. 
//Recuerda que puedes usar la función .includes() para comprobarlo.Puedes usar este array:
const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
    ]

    //Aqui es un for para encontrar la posicion del gato y lo hemos guardado en el array vacio.
const position=[]
for (const toy of toys) {
    if(toy.name.includes("gato")){
        position.push(toys.indexOf(toy))
    }
    
}
//Aqui es un for nomal que recorre el array hacia atrás! Detectando las posiciones.
   for (let i = position.length -1; i >=0; i--) {
    const cat = position[i];
    toys.splice(cat,1)
   }
   console.log(toys)