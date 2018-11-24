import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import './empleo.css'
import KawaiiAnimation from "./KawaiiAnimation"
import Sabias from '../../../shared/components/Sabias'

import Navbar from '../../../shared/components/Nav'

class Empleo extends Component{
  constructor(){
    super()
    this.state={}
  }

  render() {
    return(
    <Fragment>
      <div className="container-papa">
        <Navbar className="navegacion" />
        <div className="Container-Empleo">

      <div className="Container-Empleo">

          <h3 className="Empleo-Title">¿Qué necesitas?</h3>
          <div className="Container-Kawaii">
            <KawaiiAnimation />
            <p className="p-empleo">Busca nuevas oportunidades y explota tus talentos o ayúdanos a cambiar la vida de las personas.</p>
          </div>
          <div className="Container-Buttons container">
            <Link to="/buscarempleo" className="link btn waves-effect blue darken-2">Buscar Empleo</Link>
            <Link to="/crearempleo" className="link btn waves-effect blue darken-2">Crear Empleo</Link>
          </div>

        </div>
      </div>

      </div>
      <Sabias />
     </Fragment>

    )
  }
}

export default Empleo