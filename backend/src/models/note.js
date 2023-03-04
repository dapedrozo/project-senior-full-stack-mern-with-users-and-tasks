//modelamos la estructura que tendra cada nota
//requerimos mongoose para hacer el modelado de datos
//el esquema es lo que yo quiero guardar de los datos o como quiero que los datos sean si son unicos,
//strings, numeros, etc. 
//y el modelo es como mongodb va a estar guardando, consultando,actualizando, etc
const {Schema, model} = require('mongoose');

//se crea un nuevo esquema, dentro se definen las propiedades que se quiere que tengan las notas
//y el tipo de dato que tendra, si es requerido se hace otro objeto dandole la propiedad
//para guardar la fecha de creacion, en mongoose hay una propiedad llamada timestamp, pero hay que darsela
//como un objeto a parte, lo que hace es que cuando agregamos un dato va a agregar la fecha de creacion
//y la fecha de actualizacion
const noteSchema = new Schema({
    title: String,
    content: {
        type: String,
        required: true
    },
    author: String,
    date: {
        type: Date,
        default: Date.now
    },
}, {
    timestamp: true
});

//basado en este esquema podemos crear un modelo, este modelo se llamara note y utilizara el esquema que
//se acaba de crear, con esto ya tenemos como la bd va a estar haciendo el crud relacionado con las notas
//cada vez que se cree una nota la bd primero comprobara si tiene un titulo, una descripcion, un autor, etc
//y se exporta porque lo vamos a utilizar en otras partes
module.exports = model('Note', noteSchema);
