import React from 'react';
import Message from './Message.jsx';

function MessageList({ messages }) {
  const messageList = messages.map(message => {
    return (<Message message={message} />)
  })
  return(
    <div className="messages">
      {messageList}
    </div>
  );
}
export default MessageList;