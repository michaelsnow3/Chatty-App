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
    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
      // Add a new message to the list of messages in the data store
      const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
      const messages = this.state.messages.concat(newMessage)
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      this.setState({messages: messages})
    }, 3000);
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
