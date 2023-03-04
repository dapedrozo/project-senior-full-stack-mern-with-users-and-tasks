//solo codigo back-framework
//requerir el frame
const express = require('express');
//requerir cors para conectar 2 servers, el de react y node
const cors = require('cors');
const { json } = require('express');
//crear el server desde el frame (definir el server)
const app = express();

//extender el server
//################settings
//setear el puerto si existe en variable de entorno usalo, si no, usa el 3000
app.set('port', process.env.PORT || 3000);

//################middlewares
//cors para conectar 2 servers
app.use(cors());
//json para leer y enviar json
app.use(express.json());

//################routes
//url que react va a poder visitar, estas url vienen de la carpeta routes, alla se configuraron las rutas
//.use porque ahora cada vez que alguien solicite esa ruta, debe hacer una logica, esa logica esta 
//en la carpeta routes
app.use('/api/users', require('./routes/users'))
app.use('/api/notes', require('./routes/notes'))

//se exporta para iniciar el server desde index.js
module.exports = app;

