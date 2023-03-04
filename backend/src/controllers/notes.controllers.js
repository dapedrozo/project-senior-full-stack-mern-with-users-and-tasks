//aqui se hace toda la funcionalidad de las rutas con sus respetivos metodos, get,post,put,delete
//se crea un objeto que luego se va a ir alterando
const notesCtrl = {};

//requerimos los modelos de la carpeta models para hacer las funciones que manejaran los datos
const Note = require('../models/note');

//primer metodo get la totalidad de notas
//ahora el objeto tiene un metodo para ver las notas
notesCtrl.getNotes = async (req,res) => {
    //antes de devolver algo primero vamos a consultar en la bd por tanto de Note usamos el metodo find()
    //todo esto viene del modelo, el modelo hace todo el trabajo de bd
    const notes = await Note.find();
    //cuando se ejecuta y se tienen todas las notas, entonces eso es lo que se va a enviar al front en json
    res.json(notes)
}

//segundo metodo post para guardar notas
//ahora el objeto tiene un metodo para guardar las notas
notesCtrl.createNotes = async (req,res) => {
    //esta ruta crea los datos por tanto lo primero es recibirlos con req.body y extraerlos del req.body
    const {title, content, date, author} = req.body;
    //una vez extraidos los datos del json se pasan a la bd, con new note creamos una nueva nota
    const newNote = new Note({
        title,
        content,
        date,
        author
    });
    await newNote.save();
    res.json({message:'Nota guardada'})
}

//tercer metodo get una unica nota
//ahora el objeto tiene un metodo para ver una unica
notesCtrl.getNote = async (req,res) => {
    //antes de responderle al cliente primero se recibe el id, este vien de req.params.id
    const note = await Note.findById(req.params.id);
    res.json(note)
}

//cuarto metodo put para actualizar una nota
//ahora el objeto tiene un metodo para actualizar una nota
notesCtrl.updateNote = async (req,res) => {
    //para actualizar se requiere un id y los datos a actualizar por tanto es como una mezcla de 
    //crear y eliminar, entonces primero se ubica el dato con el id y luego se updatea con findOneAndUpdate
    const {title, content, author, date} = req.body;
    await Note.findOneAndUpdate({_id: req.params.id}, {
        title,
        content,
        author,
        date
    });
    res.json({message:'Nota actualizada'})
}

//quinto metodo delete para eliminar notas
//ahora el objeto tiene un metodo para eliminar una nota
notesCtrl.deleteNote = async (req,res) => {
    //para eliminar solo es necesario darle el id a eliminar a la funcion findByIdAndDelete y ya nada mas
    await Note.findByIdAndDelete(req.params.id)
    res.json({message:'Nota eliminada'})
}

//exportando el objeto
module.exports = notesCtrl;
