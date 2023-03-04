//solo codigo de conexion bd
//definir la conexion
const mongoose = require('mongoose');

//guardar en constante la conexion con mongodb
//para acceder a la variable de entorno primero se accede al metodo process de node para acceder a los 
//datos del pc, entonces se accede a todas las variables del entorno env, y del entorno se llama
//la variable creada
//se le puede dar ademas un operador ternario para que si esa variable de entorno no se encuentra
//haga otra cosa, es decir cree y se conecte a otra bd en local
const URI = process.env.MONGODB_URI 
    ? process.env.MONGODB_URI 
    : 'mongodb://localhost/databasetest';

//conexion a la bd
mongoose.connect(URI,{
    //opciones de conexion, bibliotecas internas para que no de errores ni nada por el estilo
    //mas que nada para que mongoose se pueda conectar
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

//guardar propiedad connection
const connection = mongoose.connection;

//cuando la propiedad sea abierta, muestre por consola que se ha conectado
//en este caso, se iniciara cargando desde index ya que ahi manejamos todos los inicializadores
connection.once('open', ()=>{
    console.log('DB is connected');
});