import React, { Component } from 'react'
import { createEmpleoInDB } from '../../../helpers/'
import Form from './AddEmpleo'

class Empleo extends Component{
  constructor(){
    super()
    this.state={
      empleos: {}
    }
    this.handleOnAddFrom = this.handleOnAddFrom.bind(this)
  }
  handleOnAddFrom(e){
    e.preventDefault()
    let form = e.target,
    empleo = {
      nombre: form.nombre.value,
      empresa: form.empresa.value,
      escolaridad: form.escolaridad.value,
      pais: form.pais.value,
      ciudad: form.ciudad.value,
      direccion: form.direccion.value,
      telefono: form.telefono.value
    }
    createEmpleoInDB(empleo)
    this.props.history.push('/buscarempleo');
    this.setState({empleo})
    form.reset()
  }


  setMessage(err) {
    return { loginMessage: err }
  }


  render() {
    return(
     <div>
      <Form addEmpleo={this.handleOnAddFrom}/>
     </div>
    )
  }
}

export default Empleo