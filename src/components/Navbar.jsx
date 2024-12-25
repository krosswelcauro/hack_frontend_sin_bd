import React from 'react'
import { Link } from 'react-router-dom'


export function Navbar() {
  return (
    <>
        <nav>
          <img alt="menu" className="menu" />
          <div className="navbar-left">
            <ul>
              <li>
                <Link to="/">Usuarios</Link>
              </li>
              <li>
                <Link to="/create-user">Registrar Usuario</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-right">
            <ul>
              <li className="navbar-username">Krosswel Cauro</li>
            </ul>
          </div>
        </nav>
    </>
  )
}
