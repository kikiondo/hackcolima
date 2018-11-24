import React from 'react'
import logo from '../media/oficiofast-logo.png'
import './sabias.css'

const Sabias = () => (
  <div className="container-sabias">
      <div className="container">
        <img src={logo} className="logo-sabias" alt="logo" />
        <h2 className="title-sabias">¿Sabías que?</h2>

        <h5 className="text-sabias">Sectores productivos mas solicitados:</h5>
        <h6 className="h6-text">Ventas, Servicios Contrucción, Servicios Generales, Ventas Servicios, Servicios.</h6>

        <h5 className="text-sabias">Secctores con mayor vinculación:</h5>
        <h6 className="h6-text">Ventas Construccion, Ventas, Servicios Generales, Servicios, Vigilantes Operarios.</h6>

        <h5 className="text-sabias">Número de personas solicitantes: 2446.</h5>
        <h5 className="text-sabias">Personas vinculadas: 681.</h5>

      </div>
    </div>
)

export default Sabias