import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import sample from "./sample.json";

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: sample
    }
  }
  render() {
    return (
      <div>
        <nav className='navbar'>
          <a href='/' className='navbar-brand' >Chatty</a>
        </nav>
        <MessageList messages={this.state.data} />
      </div>
    );
  }
}
export default App;
