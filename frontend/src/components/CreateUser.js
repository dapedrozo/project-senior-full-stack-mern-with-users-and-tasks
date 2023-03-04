import React, { Component } from 'react'

//importando axios para manejar las peticiones al server y demas
import axios from 'axios'

//creando y exportando el componente createuser
export default class CreateUser extends Component {
    //la app tendra un estado que guardara el array de todos los usuarios de respuesta para poder usarlos
    //aqui mismo y mostrarlos, recibe tambien un username para ir guardando los registros para crear
    //un nuevo user
    state = {
        users: [],
        username: ''
    }

    //usar el metodo del componente componentDidMount para ejecutar algun codigo una vez el componente
    //ha sido montado, pero se usara este metodo para poder pedir los datos, es decir una vez el componente
    //sea montado, se pediran los datos al server para poder mostrarlos por pantalla 
    async componentDidMount() {
        this.getUsers();
    }

    //creando un metodo para consultar usuarios para poder usarlo en varios metodos al mismo tiempo
    //y poder generar las cargas de secciones de la pag
    getUsers = async () => {
        //se hace entonces la peticion http al server con la api axios ya que esta contiene manejadores
        //de errores, aparte peticiones http, etc
        //para llamar a axios se le da el metodo que va a ejecutar en este caso get y la ruta a la cual
        //va a consultar este http, una vez haga la peticion va a devolver un array de datos por tanto se
        //guarda en una constante y como va a hacer una peticion se maneja con async await
        const res = await axios.get('http://localhost:4000/api/users');
        this.setState({
            users: res.data
        });
    }

    //creando el metodo para captura de datos del form
    onChangeUsername = (e) => {
        this.setState({
            //seteamos que lo que recibe en el evento cuando la persona escribe es lo que se va a llenar
            //en la funcion estado username
            username: e.target.value
        })
    }

    //creacion del metodo de envio de datos con el btn submit
    onSubmit = async (e) =>{
        //cancelar la recarga de la pagina una vez se ha enviado la info
        e.preventDefault();
        //usando axios para envio de datos al servidor con el metodo post, como va a enviar datos, los
        //datos que se envian van despues de la ,
        await axios.post('http://localhost:4000/api/users', {
            username: this.state.username
        })
        //se limpia el estado para que se limpie el formulario de agregar usuario
        this.setState({
            username: ''
        });
        //se vuelve a ejecutar el get para refrescar el listado que muestra la pagina
        this.getUsers();
    }

    //creando el metodo de eliminar con doble click en cada li del html
    deleteUser = async (id) => {
        await axios.delete('http://localhost:4000/api/users/'+id)
        this.getUsers();
    }


    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3>Create New User</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control"
                                    value={this.state.username} 
                                    onChange={this.onChangeUsername}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Save
                            </button>
                        </form>
                    </div>
                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.users.map(user => (
                                <li className="list-group-item list-group-item-action"
                                    key={user._id}
                                    onDoubleClick={ () => this.deleteUser(user._id)}
                                    >
                                    {user.username}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
