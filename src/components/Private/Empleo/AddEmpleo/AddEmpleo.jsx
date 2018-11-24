import React from 'react'
import { Link} from 'react-router-dom'
import logo from '../../../../shared/media/empleo.png'
import './addEmpleo.css'

const AddEmpleo = ({addEmpleo}) => (
  <div className="addEmpleo-container">
    <div className="container">

      <div className='img-container'>
        <img src={logo} className="logo-about" alt="logo" />
      </div>
      <h2 className='text'>Crear Empleo</h2>

      <form onSubmit={addEmpleo}>
        <div className="input-field col s6">
          <input type="text" name="nombre" className="validate" id="nombre" placeholder="Nombre del empleo" required/>
        </div>
        <div className="input-field col s6">
          <input type="text" name="empresa" className="validate" id="empresa" placeholder="Nombre de la empresa o negocio" required/>
        </div>
        <div className="input-field col s6">
          <input type="text" name="escolaridad" className="validate" id="escolaridad" placeholder="Escolaridad minima" required/>
        </div>
        <div className="input-field col s6">
          <input type="text" name="sueldo" className="validate" id="sueldo" placeholder="Sueldo real o aproximado" required/>
        </div>
        <div className="input-field col s6">
          <input type="text" name="pais" className="validate" id="pais" placeholder="País" required/>
        </div>
        <div className="input-field col s6">
          <input type="text" name="ciudad" className="validate" id="ciudad" placeholder="Ciudad o Estado" required/>
        </div>
        <div className="input-field col s6">
          <input type="text" name="direccion" className="validate" id="direccion" placeholder="Dirección" required/>
        </div>
        <div className="input-field col s6">
          <input type="text" name="telefono" className="validate" id="telefono" placeholder="Teléfono" required/>
        </div>           
        <div className="buttons-container">
          <input type="submit" to="/buscarempleo"  className="blue darken-2 btn buttons-login" value="Crear Empleo"/>
        </div>
        <div className="button-regresar">
          <Link to="/empleos"  className="btn-regresar blue darken-2 btn-small">Volver</Link>
        </div>
      </form>

    </div>
  </div>
)

export default AddEmpleo