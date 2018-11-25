import React, { Component } from 'react'
import myData from '../../../../data/empleos.json';
import {firebaseApp} from '../../../../data/';
import { Link } from 'react-router-dom'
import {CreditCard} from 'react-kawaii'
import uid from 'uid'
import './index.css'

class ShowEmpleo extends Component {
  constructor()
  {
    super() 
    this.state={
      data: myData.columns,
      empleos: {}
    }
     this.fetchEmpleos = this.fetchEmpleos.bind(this) 
  }

  componentWillMount (){
    this.fetchEmpleos ()
  }

  fetchEmpleos (){
    /*/getDatosInDB(data => {
      
      //console.log(data.val())
      data.forEach(datos => {
         this.setState({empleos:datos.val()});
      });
      //return this.setState({empleos: data.val()})
    });*/
    const db = firebaseApp.database();
    const refText = db.ref().child('empleos');
  
     refText.on('value', data => {
       
       this.setState({empleos:data.val()});

    });
  }
 
  render() {
    return(
      <div className="container Container-BuscarEmpleo">
        <CreditCard size={150} mood="shocked" color="#83D1FB"/>
        <div className="striped">
          <div>
            <h1>Empleos más solicitados!!!</h1>
          </div>
          <div className="empleos-container">
           {
            Object.values(this.state.empleos).map((empleo) =>
              <div key={uid(2)}>
                  <div className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <div className="card-front-top">
                          <img src={require("./mc.png")} alt="Logo de empresa" className="logo-empresa"></img>
                          <h3 className="cargo-nombre">{empleo.nombre}</h3>
                        </div>
                      <div className="card-front-bottom">
                      <div key={uid(2)}>
                        <h5 className="ubicacion-Text"><img src={require('./marker.png')} className="map-Marker"></img>{empleo.ciudad}, {empleo.pais}</h5>
                        </div>
                        </div>
                      </div>
                      <div className="flip-card-back">
                        <h5>Cargo: {empleo.nombre}</h5> 
                        <h6>{empleo.empresa}</h6> 
                        <p>Dirección: {empleo.direccion}</p>
                        <p>Escolaridad Mínima: {empleo.escolaridad}</p>
                        <p>Teléfono de contacto: {empleo.telefono}</p>
                      </div>
                    </div>
                  </div>
              </div>
            )
           }
          </div>
        </div>
        <p className="p-aviso">Sección en proceso, espera próximamente nuevos empleos y actualizaciones, gracias c:</p>
        <Link to="/empleos" className="Link btn waves-effect blue darken-2">Regresar</Link>
      </div>
    )
  }
}

export default ShowEmpleo;
