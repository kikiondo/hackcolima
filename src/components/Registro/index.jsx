import React, {Component} from 'react'
import Form from './Form'
import { auth } from '../helpers/'
import './styles.css'


class Registro extends Component {
  constructor(){
    super()

    this.state = {
      user: {}
    }

    this.handleOnAddFrom = this.handleOnAddFrom.bind(this)
  }

  handleOnAddFrom(e){
    e.preventDefault()
    let form = e.target,
    user = {
      id: form.id.value,
      name: form.name.value,
      email: form.email.value,
      password: form.password.value,
      school: form.school.value
    }
    auth( user.email, user.password, user)
      .then(r => this.props.history.push('/empleos'))
      .catch( err => this.setState( this.setMessage( `Error: ${err.message}`)))

    this.setState({user})
    form.reset()
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  setMessage(err) {
    return { loginMessage: err }
  }

  render(){
    return(
      <div className='container'>
        <Form onAddCourse={this.handleOnAddFrom}
          change={this.handleChange}
         />
        {console.log(this.state.user)}
      </div>
    )
  }
}

export default Registro