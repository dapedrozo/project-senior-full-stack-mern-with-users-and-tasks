import React, { Component } from 'react'

//importando desde react-router-dom el modulo Link para manejar los href desde react
//y asi evitar que recargue la pagina ya que los redireccionamientos seran manejados por react
//para usar el link se le da Link en lugar de la etiqueta a y dentro el texto que se quiere mostrar
//se le pueden dar clases de css normal y en lugar de href se le da to, las rutas vienen de app.js
import { Link } from 'react-router-dom'

//crear y exportar el componente de la navbar
export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        NotesApp
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    Notes
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/create">
                                    Create Notes
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/user">
                                    Create User
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
