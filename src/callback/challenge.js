/**Reto de integrar y trabajar con API y XMLHTTPRequest*/

/**En mayúsculas hace referencia a un valor único */
const XMLHTTPRequest = require('xmlhttprequest').XMLHTTPRequest;
const API = 'https://api.escuelajs.co/api/v1';

/**Función para recibir URL y luego la petición */
function fetchData(urlApi, callback){
    //Con XMLHTTPrequest se controla todo el flujo
    let xhttp = new XMLHTTPRequest(); //referencia

    //Elementos que entrega
    xhttp.open('GET', urlApi, true)//Abre una conexión con API
    //Como desea obtener, es get

    //Escucha los diferentes estados de la petición
    xhttp.onreadystatechange = function(event){
        //validar el tipo de estado
        if(xhttp.readyState === 4){
            /**0 = nothing
             * 1 = lowding
             * 2 = send
             * 3 = interacting
             * 4 = complete
             */
            if(xhttp.status === 200){
                /**1xx = procesando
                 * 2xx = petición recibida
                 * 3xx = tomar acciones
                 * 4xx = errores servidor
                 * 5xx = errores
                 */

                //Recibe el Json como texto
                callback(null, JSON.parse(xhttp.resposeText))
            }
        } else {
            const error = new Error('Error' + urlApi);
            return callback(error, null);
        }
    }
    xhttp.send();
}