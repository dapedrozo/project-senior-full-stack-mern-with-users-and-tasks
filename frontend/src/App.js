//importando react router dom desde el paquete instalado con el mismo nombre
//se importan estos dos paquetes para el manejo de enlaces
import {BrowserRouter as Router,Route} from 'react-router-dom'

//importando bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//app.js es el encargado de inicializar toda la aplicacion por tanto las cosas como bootstrap deben 
//inicializarse aqui
import './App.css';

//importando el componente navbar
import Navigation from './components/Navigation'
//importando el componente notelist
import Noteslist from './components/NotesList'
//importando el componente create note
import CreateNotes from './components/CreateNotes'
//importando el componente create user
import CreateUser from './components/CreateUser'


function App() {
  return (
    //se crea el enrutador general luego se crean las rutas con route, en cada ruta se le da el nombre
    //que va a tener la ruta y lo que va a mostrar, con el atributo exact se obliga a que solo cumpla
    //esa ruta para mostrar ese componente y evitar que se muestre en todas las rutas que tengan "/" 
    // para añadir un css que cubra todos los componentes cargados en este caso toda la navegacion de todas
    //las paginas, se pone un div que cubra esos componentes especificos
    <Router>
        <Navigation/>
        <div className="container p-4">
        <Route path="/" exact component={Noteslist}/>
        <Route path="/edit/:id" component={CreateNotes}/>
        <Route path="/create" component={CreateNotes}/>
        <Route path="/user" component={CreateUser}/>
        </div>
    </Router>
  );
}

export default App;
