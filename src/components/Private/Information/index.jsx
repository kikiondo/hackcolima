import React, {Component} from 'react'
import fetchData from '../../../data/jobs'

class Information extends Component {
  constructor(){
    super()

    this.state = {
      persons: {}
    }
  }

  componentWillMount(){
    fetchData().then(res => console.log(res))
  }

  render(){
    return(
      <div>
        <p className="Information-Title">¿Sabias qué?</p>
        {console.log(`Hola ._.)/ ${this.state.persons}`)}
      </div>
    )
  }
}

export default Information