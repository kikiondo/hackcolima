import React, { Component } from 'react'
import myData from '../../../../data/empleos.json';
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
      empleos: null
    }
    this.fetchEmpleos = this.fetchEmpleos.bind(this) 
  }

  componentWillMount (){
    this.fetchEmpleos () 
  }

  fetchEmpleos () {
    this.state.data.map(objeto => {
      if(objeto.id === 343627767) {
       return this.setState({ empleos: objeto.cachedContents.top})
      }
      else {
        return null
      }
    })
  }

  render() {
    return(
      <div className="container Container-BuscarEmpleo">
        <CreditCard size={150} mood="shocked" color="#83D1FB"/>
        <table className="striped">
          <thead>
            <tr>
                <th>Empleos más solicitados!!!</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.empleos.map(empleo =>
                <tr key={uid(2)}> 
                  <td>{empleo.item}</td>
                </tr>
              )
            }
          </tbody>
        </table>
        <p className="p-aviso">Sección en proceso, espera próximamente nuevos empleos y actualizaciones, gracias c:</p>
        <Link to="/empleos" className="Link btn waves-effect blue darken-2">Regresar</Link>
      </div>
    )
  }
}

export default ShowEmpleo
