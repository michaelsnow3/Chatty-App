import React from "react";

class ChatBar extends React.Component {
  constructor() {
    super();

    this.state = {
      usernameInput: ""
    };
  }

  emptyStringCheck = string => {
    const whiteSpaceRE = /^(\s*)$/;
    const whiteSpaceArray = string.match(whiteSpaceRE);

    //returns false if there string is empty or only contains white space
    if (!string || whiteSpaceArray) return false;
    return true;
  };

  onMessageEnter = event => {
    //check if enter was pressed
    if (event.key === "Enter") {
      const inputColour = document.getElementById("color").value;
      const content = event.target.value;

      //dont let user enter empty message
      if (!this.emptyStringCheck(content)) return;

      //clear input
      event.target.value = "";

      this.props.addMessage(content, inputColour);
    }
  };

  onUsernameInputChange = event => {
    this.setState({
      usernameInput: event.target.value
    });
  };

  onNameEnter = event => {
    //check if enter was pressed
    if (event.key === "Enter") {
      const newUsername = event.target.value;

      //dont let user enter empty name
      if (!this.emptyStringCheck(newUsername)) return;

      this.props.updateCurrentUser(newUsername);
    }
  };

  render() {
    return (
      <footer className="chatbar">
        <input
          className="chatbar-username"
          placeholder="Your Name (Optional)"
          value={this.state.usernameInput}
          onChange={this.onUsernameInputChange}
          onKeyPress={this.onNameEnter}
        />
        <input className="chatbar-color" type="color" id="color" />
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
