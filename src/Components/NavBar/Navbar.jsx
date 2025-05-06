import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
        <h2>
            <nav>
                <Link to={'/'}>Inicio</Link>
                <Link to={'/registro'}>Registro</Link>
                <Link to={'/login'}>Login</Link>
                <Link to={'/contacto'}>Contactanos</Link>
                <Link to={'/productos'}>Catalogo</Link>
            </nav>
        </h2>
    </header>
)
}

export default Navbar