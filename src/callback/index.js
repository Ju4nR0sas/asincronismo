//Callback

/**Es una función de pasa como argumento otra
 * función
 */

//Sumar dos elementos
function sum (num1, num2){
    return num1 +num2;
}

function call (num1, num2, callback) {
    return callback(num1, num2);
};

//Necesary Structure for Callback
console.log(call(2, 2, sum));

/**Para esta sintaxis, no es necesario agregarle ()
 * a sum, ya que esto la invocaría y generaría un error
 * eso y que sus parametros ya no son necesarios porque
 * dentro de call ya están
 */

//Hace parte de los elementos de Js es un API
setTimeout(function() {
    console.log("Hola JavaScript");
}, 5000) //Al pasar 5 segundos, ejecutará el console
/**Su sintaxis recibe una función, la ejecución
 * y el tiempo de ejecución
 */

function gretting (name) {
    console.log(`Hi, I'm ${name}`);
}

//Función, tiempo, parametro
setTimeout(gretting, 2000, 'Juan');

/**Callback no es más que una función que toma a otra
 * como argumento y espera ser ejecutada según sea el
 * caso, esto solo es un ejemplo pequeño
 */