import React from 'react';

function Message({ message }) {

  //destructure message object from props
  let {content, username} = message;

  //assign anonymous to username if username is undefined
  username = username || 'Anonymous';
  
  return(
    <div className='message'>
      <span className='message-username'>{username}</span>
      <span className='message-content'>{content}</span>
    </div>
  );
}
export default Message;