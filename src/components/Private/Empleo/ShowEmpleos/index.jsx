import React, { Component } from 'react'
import myData from '../../../../data/empleos.json';
import {firebaseApp} from '../../../../data/';
import { Link } from 'react-router-dom'
import {CreditCard} from 'react-kawaii'
import uid from 'uid'
import './index.css'
import {img} from '../../../../shared/media/img/mc.png';

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
          <div>
           {
            Object.values(this.state.empleos).map((empleo) =>
              <div key={uid(2)}>
                  <div key={uid(2)}>
                    <h3>{empleo.nombre}</h3>
                  </div>
                  <div className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <img src={img} alt="Avatar" className="img" />
                      </div>
                      <div className="flip-card-back">
                        <h1>John Doe</h1> 
                        <p>Architect & Engineer</p> 
                        <p>We love that guy</p>
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
