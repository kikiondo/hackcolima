import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'
import logo from '../media/oficiofast-logo.png'

class Navbar extends React.Component {
	render() {
		return (
			<div>
				<ul className="nav">
          <li className="nav-logo"><img src={logo} className="logo-nav" alt="logo" /></li>
					<li className="nav-item slam-left"><Link to="/empleos">OficoFast</Link></li>
					<li className="nav-item"><Link to="/">Salir</Link></li>
				</ul>
			</div>
			
		);
	}
}

export default Navbar