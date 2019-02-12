import React from 'react';
import Message from './Message.jsx';

function MessageList({ messages }) {
  const messageList = messages.map(message => {
    return (<Message key={message.id.toString()} message={message} />)
  })
  return(
    <main className='messages'>
      {messageList}
    </main>
  );
}

export default MessageList;