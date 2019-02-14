import React from 'react';

function Message({ message }) {

  switch(message.type){
    //handle messages
    case 'incomingMessage':
      //destructure message object from props
      let {content, username, userColour} = message;
      const usernameStyle = {color: userColour};

      //assign anonymous to username if username is undefined
      username = username || 'Anonymous';
      
      return(
        <div className='message'>
          <span style={usernameStyle} className='message-username'>{username}</span>
          <span className='message-content'>{content}</span>
        </div>
      );

      //handle notifications
      case 'incomingNotification':
        const {oldUsername, newUsername} = message;
        return (
          <div className="notification">
            <span className="notification-content">{oldUsername} changed their name to {newUsername}.</span>
          </div>
        );
  }
}
export default Message;