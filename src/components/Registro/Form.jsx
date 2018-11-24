import React from 'react'
import uid from 'uid'
import './styles.css'
import { Link } from 'react-router-dom'
import logo from '../../shared/media/senorlimon.png'

const Formulario = ({onAddCourse}) => (

  <div className="Registro-Container">
    <div className="container">
      <div className='img-container'>
        <img src={logo} className="logo-about" alt="logo" />
      </div>
      <h2 className="center">Registrate</h2>
      <form onSubmit={onAddCourse}>
        <input type="hidden" name="id" value={uid(10)} />
        <div className="input-field col s6">
          <input name="name" placeholder="Nombre" id="Name" type="text" className="validate" required/>
        </div>
        <div className="input-field col s6">
          <input name="email" placeholder="Correo" id="Email" type="email" className="validate" required/>  
        </div>
        <div className="input-field col s6">
          <input name="password" placeholder="Contraseña" id="Password" type="password" className="validate" required/>
        </div>
        <div className="input-field col s6">
          <input name="school" placeholder="Escolaridad" id="School" type="text" className="validate" required/>
        </div>
        <div className="buttons-container">
          <button className="blue darken-2 btn buttons-login" type="submit" name="action">Registrarte</button>
        </div>
        <Link to="/" className="btn-regresar blue darken-2 btn-small">Volver al Inicio</Link>
      </form>
    </div>
  </div>
)

export default Formulario