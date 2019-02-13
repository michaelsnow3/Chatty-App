import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: {name: ''}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: []
    }

    this.addMessage = this.addMessage.bind(this);
  }

  //method that updates current user state
  updateCurrentUser = (currentUsername) => {
    const currentUser = {
      name: currentUsername
    }
    this.setState({ currentUser })
  }

  //method that adds input message to messages array in state
  addMessage(username, content) {

    const newMessage = {
      username: username,
      content: content
    }

    this.socket.send(JSON.stringify(newMessage));
  
  }

  componentDidMount() {

    console.log("in component did mount")
    this.socket = new WebSocket('ws://localhost:3001');

    this.socket.onopen = () => {
      console.log('Connected to server');
    };

    this.socket.onmessage = (message) => {
      const newMessage = JSON.parse(message.data);
      
      this.setState({
        messages: [...this.state.messages, newMessage]
      })
    }

  }

  render() {
    console.log("redering <app />");
    return (
      <div>
        <nav className='navbar'>
          <a href='/' className='navbar-brand' >Chatty</a>
        </nav>
        <MessageList messages={this.state.messages} />
        <ChatBar 
          updateCurrentUser={this.updateCurrentUser} 
          addMessage={this.addMessage} 
          currentUser={this.state.currentUser}
        />
      </div>
    );
  }
}


export default App;
