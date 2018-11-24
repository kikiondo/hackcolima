import React from 'react'

import logo from '../media/oficiofast-logo.png'
import './about.css'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="container-about">
      <div className="container col s12">
        <img src={logo} className="logo-about" alt="logo" />
        <h2 className="title-about">¿Que es OficioFast?</h2>
        <h5 className="text-about">
          Es una plataforma para buscar empleos locales dirigida 
          a personas que no cuentan con tantos estudios y se quieren superar.
        </h5>
        <div className="button-about">
          <Link to="/registro" className="waves-effect blue darken-2 btn">Unirse a OficioFast</Link>
        </div>
      </div>
    </div>
  )
}

export default About