import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {
  constructor() {
    super();

    this.state = {
      
      // optional. if currentUser is not defined, it means the user is Anonymous
      currentUser: {name: ''}, 
      userColour: '',
      messages: [],
      clientsConnected: 0
    }
  }

  //method that updates current user state
  updateCurrentUser = (currentUsername) => {
    const currentUser = {
      name: currentUsername
    }

    const oldUsername = this.state.currentUser.name || 'Anonymous';
    if(oldUsername !== currentUsername){
      this.userNameChange(oldUsername, currentUsername);
    }
    this.setState({ currentUser });
  }

  //method that sends message to websocket server
  addMessage = (content, userColour) => {
    const newMessage = {
      type: 'postMessage',
      username: this.state.currentUser.name,
      content: content,
      userColour
    }

    this.socket.send(JSON.stringify(newMessage));
  
  }

  //sends notification to server when user changes name
  userNameChange = (oldUsername, newUsername) => {
    const username = {
      type: 'postNotification',
      oldUsername,
      newUsername
    }
    this.socket.send(JSON.stringify(username));
  }

  componentDidMount() {

    this.socket = new WebSocket('ws://localhost:3001');

    this.socket.onopen = () => {
    };

    this.socket.onmessage = (message) => {
      const data = JSON.parse(message.data);
      
      if(data.type === 'incomingClientUpdate') {
        this.setState({
          clientsConnected: data.number
        });
      }else {
        this.setState({
          messages: [...this.state.messages, data]
        });
      }
    }

  }

  render() {
    return (
      <div>
        <nav className='navbar'>
          <a href='/' className='navbar-brand' >Chatty</a>
          <p className='navbar-clients'>{this.state.clientsConnected} users online</p>
        </nav>

        <MessageList messages={this.state.messages} />
        
        <ChatBar 
          assignColour={this.assignColour}
          updateCurrentUser={this.updateCurrentUser} 
          addMessage={this.addMessage} 
          currentUser={this.state.currentUser}
        />
      </div>
    );
  }
}

export default App;
