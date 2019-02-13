import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [
        {
          username: "Bob",
          content: "Has anyone seen my marbles?",
          id: 1
        },
        {
          username: "Anonymous",
          content: "No, I think you lost them. You lost your marbles Bob. You lost them for good.",
          id: 2
        }
      ]
    }

    this.addMessage = this.addMessage.bind(this);
  }

  //method that adds input message to messages array in state
  addMessage(username, content) {

    //add 1 to last message id to get new id
    const id = this.state.messages[this.state.messages.length - 1].id + 1;
    
    const newMessage = {
      username: username,
      content: content,
      id: id
    }

    //add new message object to messages array and update currentUser in state
    this.setState({
      currentUser: username,
      messages: [...this.state.messages, newMessage]
    })
  }

  componentDidMount() {

    console.log("in component did mount")
    this.socket = new WebSocket('ws://localhost:3001');

    this.socket.onopen = () => {
      console.log('Connected to server');
    };

  }

  render() {
    console.log("redering <app />");
    return (
      <div>
        <nav className='navbar'>
          <a href='/' className='navbar-brand' >Chatty</a>
        </nav>
        <MessageList messages={this.state.messages} />
        <ChatBar addMessage={this.addMessage} currentUser={this.state.currentUser} />
      </div>
    );
  }
}


export default App;
