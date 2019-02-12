import React from 'react';
import Message from './Message.jsx';

function MessageList({ messages }) {
  const messageList = messages.map(message => {
    if(message.type === 'incomingMessage'){
      return (<Message message={message} />)
    }
  })
  return(
    <main className='messages'>
      {messageList}
    </main>
  );
}
export default MessageList;