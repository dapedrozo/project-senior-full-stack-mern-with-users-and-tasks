//modelamos la estructura que tendra cada usuario
//requerimos mongoose para hacer el modelado de datos
//el esquema es lo que yo quiero guardar de los datos o como quiero que los datos sean si son unicos,
//strings, numeros, etc. 
//y el modelo es como mongodb va a estar guardando, consultando,actualizando, etc
const {Schema, model} = require('mongoose');

//se crea un nuevo esquema, dentro se definen las propiedades que se quiere que tengan los usuarios
//y el tipo de dato que tendra, si es requerido se hace otro objeto dandole la propiedad
//para guardar la fecha de creacion, en mongoose hay una propiedad llamada timestamp, pero hay que darsela
//como un objeto a parte, lo que hace es que cuando agregamos un dato va a agregar la fecha de creacion
//y la fecha de actualizacion
//la propiedad trim limpia los espacios introducidos, y tambien tenemos la propiedad unique que dice que
//este dato no debe repetirse en la bd
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }
}, {
    timestamp: true
});

//basado en este esquema podemos crear un modelo, este modelo se llamara user y utilizara el esquema que
//se acaba de crear, con esto ya tenemos como la bd va a estar haciendo el crud relacionado con las usuarios
//cada vez que se cree una usuario la bd primero comprobara si tiene un titulo, una descripcion, un autor, etc
//y se exporta porque lo vamos a utilizar en otras partes
module.exports = model('User', userSchema);