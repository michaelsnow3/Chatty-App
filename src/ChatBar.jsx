import React from 'react';

function ChatBar({ currentUser }) {
  return(
    <footer className='chatbar'>
      <input 
        className="chatbar-username" 
        placeholder="Your Name (Optional)" 
        defaultValue={currentUser.name} 
      />
      <input className="chatbar-message" placeholder="Type a message and hit ENTER" />
    </footer>
  );
}

export default ChatBar;