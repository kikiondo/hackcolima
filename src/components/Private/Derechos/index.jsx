import React, {Component}  from 'react';
import ChatRoom from '../../../shared/components/ChatRoom';
// import { Link } from 'react-router-dom'

// import  AppBar from 'material-ui/AppBar';
// import ToolBar from 'material-ui/ToolBar';
// import Typography from 'material-ui/Typography';

import Navbar from '../../../shared/components/Nav'

class Derechos extends Component{       
    render() {
        return(
            <div>
                {/* <AppBar>
                    <ToolBar> */}
                    <Navbar/>
                        <ChatRoom/>
                {/* <Link to="/empleos" className="Link btn waves-effect blue darken-2">Regresar</Link> */}
                    {/* </ToolBar> */}
            {/* //     </AppBar> */}
            </div>
            
        )
      }
    }


export default Derechos;