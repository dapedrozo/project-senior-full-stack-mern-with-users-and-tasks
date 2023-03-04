//aqui se hace toda la funcionalidad de las rutas con sus respetivos metodos, get,post,put,delete
//se crea un objeto que luego se va a ir alterando
const userCtrl = {};

//requerimos los modelos de la carpeta models para hacer las funciones que manejaran los datos
const User = require('../models/user');

//primer metodo get la totalidad de usuarios
//ahora el objeto tiene un metodo para ver las usuarios
userCtrl.getUser = async (req,res) => {
    //antes de devolver algo primero vamos a consultar en la bd por tanto de User usamos el metodo find()
    //todo esto viene del modelo, el modelo hace todo el trabajo de bd
    const users = await User.find();
    //cuando se ejecuta y se tienen todas las notas, entonces eso es lo que se va a enviar al front en json
    res.json(users)
}

//segundo metodo post para guardar usuarios
//ahora el objeto tiene un metodo para guardar las usuarios
userCtrl.createUser = async (req,res) => {
    //esta ruta crea los datos por tanto lo primero es recibirlos con req.body y extraerlos del req.body
    const {username} = req.body;
    //una vez extraidos los datos del json se pasan a la bd, con new user creamos un nuevo usuario
    const newUser = new User({
        username
    });
    await newUser.save();
    res.json({message:'Usuario guardado'})
}
//tercer metodo delete para eliminar usuarios
//ahora el objeto tiene un metodo para eliminar una usuarios
userCtrl.deleteUser = async (req,res) => {
    //para eliminar solo es necesario darle el id a eliminar a la funcion findByIdAndDelete y ya nada mas
    await User.findByIdAndDelete(req.params.id)
    res.json({message:'Usuario eliminado'})
}


//exportando el objeto
module.exports = userCtrl;