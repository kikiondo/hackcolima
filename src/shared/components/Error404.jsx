import React from 'react'

import './error404.css'
import { Ghost } from 'react-kawaii'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div className="container-error404">
      <h5>Página no encontrada</h5>
      <Ghost className="ghost" size={90} mood="sad" color="#E0E4E8" />
      <h5>No tengas miedo simplemente verifica la URL o vuelve al inicio</h5>
      <p className="equipo-oficiofast">-El equipo de OficioFast</p>
      <Link to="/" className="waves-effect blue darken-2 btn-small">Volver al Inicio</Link>
    </div>
  )
}

export default Error404