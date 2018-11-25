import React, {Component} from 'react'
import './chatRoom.css'

class ChatRoom extends Component  {

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

    componentDidMount(){
        window. firebase.database().ref('messages/').on('value', snapshot => {const currentmessages = snapshot.val();
            if (currentmessages !== null){
                this.setState({
                        messages: currentmessages
                });
            }
        });
        
        }

    handleSubmit(e){
        e.preventDefault();
        const list = this.state.messages;
        const newmessage = {
            id: this.state.messages.length,
            text: this.state.message
        };
        // list.push(newmessage);
        // this.setState({messages: list}); 
        window.firebase.database().ref(`messages/${newmessage.id}`).set(newmessage);
        this.setState({message: ''})
    }

    render (){
        const { messages } = this.state;
        const messagesList = messages.map(message =>{return <li key ={message.id}>{message.text}</li>});
        return(
            <div className="bodyChat">
                <div className="chat-message-content clearfix">

						<ol> { messagesList }</ol>
                </div>

                <div className="message-field">
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <input placeholder="Alguna pregunta? 0:" className="chat-input" type="text" value={this.state.message} onChange={this.updateMessage.bind(this)}/> 
                        <button className="send-button" type="submit">Enviar</button> 
                    </form>
                </div>

                {/*  */}
                



            </div>


            
        )
    }
}

export default ChatRoom;    