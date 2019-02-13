import React from 'react';

function ChatBar({ currentUser, addMessage, updateCurrentUser }) {

  function onEnter(event) {
    
    //check if enter was pressed
    if(event.key === 'Enter'){
      const content = event.target.value;
      const username = event.target.previousSibling.value;

      //clear input
      event.target.value = '';

      addMessage(username, content);
    }
  }

  function onChange(event) {
    const newUsername = event.target.value;
    updateCurrentUser(newUsername);
  }

  return(
    <footer className='chatbar'>
      <input 
        className="chatbar-username" 
        placeholder="Your Name (Optional)" 
        value={currentUser.name} 
        onChange={onChange}
      />
      <input 
        className="chatbar-message" 
        placeholder="Type a message and hit ENTER" 
        onKeyPress={onEnter}
      />
    </footer>
  );
}

export default ChatBar;