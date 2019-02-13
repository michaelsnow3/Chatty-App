import React from 'react';

class ChatBar extends React.Component {

  constructor() {
    super();

    this.state = {
      usernameInput: ''
    }
  }

  onMessageEnter = (event) => {
    
    //check if enter was pressed
    if(event.key === 'Enter'){
      const content = event.target.value;

      //clear input
      event.target.value = '';

      this.props.addMessage(content);
    }
  }

  onChange = (event) => {
    this.setState({
      usernameInput: event.target.value
    });
  }

  onNameEnter = (event) => {
    //check if enter was pressed
    if(event.key === 'Enter'){
      const newUsername = event.target.value;
      this.props.updateCurrentUser(newUsername);
    }
  }

  render() {
    return(
      <footer className='chatbar'>
        <input 
          className="chatbar-username" 
          placeholder="Your Name (Optional)" 
          value={this.state.usernameInput} 
          onChange={this.onChange}
          onKeyPress={this.onNameEnter}
        />
        <input 
          className="chatbar-message" 
          placeholder="Type a message and hit ENTER" 
          onKeyPress={this.onMessageEnter}
        />
      </footer>
    );
  }
}

export default ChatBar;