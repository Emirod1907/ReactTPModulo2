import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
        <h2>
            <nav>
                <Link to={'/'}>Home</Link>
                <Link to={'/registro'}>Registro</Link>
                <Link to={'/login'}>Login</Link>
            </nav>
        </h2>
    </header>
)
}

export default Navbar