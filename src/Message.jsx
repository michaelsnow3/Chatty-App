import React from 'react';

function Message({ message }) {
  let {content, username} = message;
  username = username || "Anonymous";
  
  return(
    <div className="message">
      <span className="message-username">{username}</span>
      <span className="message-content">{content}</span>
    </div>
  );
}
export default Message;