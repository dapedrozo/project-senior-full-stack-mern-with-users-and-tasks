//arranque del server e importacion de modulos
//se importa el modulo dotenv para variables de entorno y se ejecuta su metodo config
//para importar las todas las variables de entorno predefinidas se hace antes de todo para que cuando 
//arranque la app todas las variables de entorno ya esten definidas y se puedan usar por las otros .js
require('dotenv').config();

//se importa el server que hemos exportado desde app
const app = require('./app');
//se importa todo el codigo de conexion con la bd
require('./database');

//crear funcion principal para ejecutar el programa 
async function main(){
    //se inicia el server
    await app.listen(app.get('port'));
    console.log('server on port', app.get('port'));
}

main();

