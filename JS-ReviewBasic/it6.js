// **Iteración #6: Función swap**
// Crea una función llamada `swap()` que reciba un array y dos parametros que sean indices del array.
// La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro.
// Retorna el array resultante.
// Sugerencia de array:

const famosos =['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']
function swap(famosos, i1, i2) {
    [famosos[i1], famosos[i2]] = [famosos[i2], famosos[i1]];
    return famosos;
} console.log(swap(famosos, 4, 2));
