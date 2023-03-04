//importando el enrutador de express, como es una funcion tenemos que ejecutarla
const {Router} = require('express');
//ejecutando la funcion router, esta funcion si devuelve un objeto
const router = Router();

//importando el objeto controlador de la funcionalidad de cada metodo http de la carpeta controllers
const {getNotes, createNotes, getNote, updateNote, deleteNote} = require('../controllers/notes.controllers');

//cada vez que entre a la ruta /api/notes, con el metodo get, devolvera algo 
//todas las consultas que se hacen vienen de la carpeta controllers, alli se hace toda la funcionalidad
//de cada peticion y se exporta aqui nuevamente
    //peticiones get y post
router.route('/')
    .get(getNotes)
    .post(createNotes)

    //peticiones para actualizar o eliminar
router.route('/:id')
    //get con un id significa que se quiere ver la info de ese id especifico por eso esta aqui
    .get(getNote)
    .put(updateNote)
    .delete(deleteNote)


//exportamos el router para utilizar este objeto en los enrutadores de app.js
module.exports = router
