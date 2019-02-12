import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

import sample from "./sample.json";

class App extends Component {
  constructor() {
    super();

    this.state = {
      messages: sample
    }
  }
  render() {
    return (
      <div>
        <nav className='navbar'>
          <a href='/' className='navbar-brand' >Chatty</a>
        </nav>
        <MessageList messages={this.state.messages} />
        <ChatBar />
      </div>
    );
  }
}
export default App;
