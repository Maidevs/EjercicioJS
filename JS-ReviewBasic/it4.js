// **Iteración #4: Métodos findArrayIndex**

// Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro. Haz varios ejemplos y compruebalos.
// ej Array;
const animales =['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']
function findArrayIndex(animales, text) {
    for (let i = 0; i < animales.length; i++) {
        if (animales[i] === text) {
            return `La posicion de ${text} en el array es el número: ${i}`;
        }
    } return `El ${text} no esta en este array`;
}
console.log(findArrayIndex(animales, 'Leon'));
