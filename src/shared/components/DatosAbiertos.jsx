import React, {Component} from 'react'
import './datosabiertos.css'

class DatosAbiertos extends Component  {

    constructor(){
        super();
        this.state = {
            message: '',
            messages: [
                // {id: 0, text:'text 1'},
                // {id: 1, text:'text 2'},
                // {id: 2, text:'text 3'}

            ]
        }
    }

    updateMessage(e){
        this.setState({message: e.target.value});
        console.log(this.state.message);
    }

    // componentDidMount(){
    //     window. firebase.database().ref('messages/').on('value', snapshot => {const currentmessages = snapshot.val();
    //         if (currentmessages !== null){
    //             this.setState({
    //                     messages: currentmessages
    //             });
    //         }
    //     });
        
    //     }

    // handleSubmit(e){
    //     e.preventDefault();
    //     const list = this.state.messages;
    //     const newmessage = {
    //         id: this.state.messages.length,
    //         text: this.state.message
    //     };
    //     // list.push(newmessage);
    //     // this.setState({messages: list}); 
    //     window.firebase.database().ref(`messages/${newmessage.id}`).set(newmessage);
    //     this.setState({message: ''})
    // }

    render (){
        
        return(
            <div >

                <div>
                  <div className="bodyDatosAbiertos">
                      <h1>Derechos laborales</h1>
                     <div>
                         <h2>El artículo 123 de nuestra Carta Magna, establece que toda persona tiene derecho al trabajo digno y socialmente útil.</h2>
                        <p>La Ley Federal del Trabajo y la Constitución Política mexicana en sus artículos 4° y 5° respectivamente señalan que 
                         a ninguna persona se le puede impedir se dedique a la profesión, industria, comercio o trabajo que le acomode, siendo
                        lícitos, y esta libertad sólo puede vedarse por determinación judicial, cuando se ataquen los derechos de terceros o 
                        se ofendan los de la sociedad.</p>
                        <p>
                        La Convención sobre los Derechos de las Personas con Discapacidad en su artículo 27 establece que las personas con 
                        discapacidad tienen derecho a trabajar, en igualdad de condiciones que las demás, y esto incluye el derecho a tener
                        la oportunidad de ganarse la vida por medio de un trabajo elegido libremente y en un entorno laboral abierto, inclusivo
                        y accesible. Igualdad de oportunidades
                        Accesibilidad  
                        </p>
                        <p>Artículo 3° de la Convención sobre los Derechos de las Personas con Discapacidad cuenta con los siguientes principios generales:
                        </p>

                        <p>El respeto de la dignidad inherente, la autonomía individual, incluida la libertad de tomar las propias decisiones y la independencia de las personas
                            La no discriminación
                        La participación e inclusión plenas y efectivas en la sociedad
                        El respeto por la diferencia y la aceptación de las personas con discapacidad como parte de la diversidad y condición humana</p>
                     </div>
                  </div>
                </div>

        
            
            </div>


            
        )
    }
}

export default DatosAbiertos;    