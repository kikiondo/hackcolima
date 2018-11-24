import React, { Component } from 'react'
import './style.css'
import Form from './Form'
import { login, resetPassword } from '../helpers/'
import About from '../../shared/components/About'

export default class Login extends Component {
  constructor(...props) {
    super(...props)

    this.state = { loginMessage: null, email: '' }
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
    this.setMessage = this.setMessage.bind(this)
    this.onResetPassword = this.onResetPassword.bind(this)
  }

  handleOnSubmit(e) {
    e.preventDefault()
    let form = e.target,
    user = { 
      email: form.email.value,
      password: form.password.value
    } 
    console.log(user)
    this.setState ({email: user.email})
    login(user.email, user.password)
      .then(r => this.props.history.push('/empleos'))
      .catch(err => this.setState(this.setMessage(`Usuario o Password son INCORRECTOS`)))
  }

  setMessage(err) {
    return { loginMessage: err }
  }

  onResetPassword() {
    resetPassword(this.state.email)
      .then( () => this.setState( this.setMessage(`Se ha enviado un correo electronico a ${this.state.email} para reestablecer tu contraseña.`)) )
      .catch( err => this.setState( this.setMessage(`El email ${this.state.email} no se encuentra registrado`)))
  }

  render () {
    return (
     <div className="padre">
        <Form
          onLogin={this.handleOnSubmit}
          onError={this.state}
          onResetPassword={this.onResetPassword}
        />
        <About />
     </div>
    )
  }
}

