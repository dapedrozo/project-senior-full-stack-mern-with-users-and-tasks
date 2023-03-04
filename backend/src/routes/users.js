//importando el enrutador de express, como es una funcion tenemos que ejecutarla
const {Router} = require('express');
//ejecutando la funcion router, esta funcion si devuelve un objeto
const router = Router();

//importando el objeto controlador de la funcionalidad de cada metodo http de la carpeta controllers
const {getUser, createUser, deleteUser} = require('../controllers/users.controllers');
const { route } = require('./notes');

//cada vez que entre a la ruta /api/users, con el metodo get, devolvera algo 
//todas las consultas que se hacen vienen de la carpeta controllers, alli se hace toda la funcionalidad
//de cada peticion y se exporta aqui nuevamente
    //peticiones get y post
router.route('/')
    .get(getUser)
    .post(createUser)

    //peticiones para actualizar o eliminar
router.route('/:id')
    .delete(deleteUser)

//exportamos el router para utilizar este objeto en los enrutadores de app.js
module.exports = router
