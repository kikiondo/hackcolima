import React, {Component}  from 'react';
import ChatRoom from '../../../shared/components/ChatRoom'
// import { Link } from 'react-router-dom'

import Navbar from '../../../shared/components/Nav'

class Derechos extends Component{       
    render() {
        return(
            <div>
                <Navbar/>
                <ChatRoom/>
                {/* <Link to="/empleos" className="Link btn waves-effect blue darken-2">Regresar</Link> */}
            </div>
            
        )
      }
    }


export default Derechos;