import React from "react";
import Message from "./Message.jsx";

function MessageList({ messages }) {
  // create a message component for each message in props messages array
  const messageList = messages.map(message => {
    return <Message key={message.id.toString()} message={message} />;
  });
  return <main className="messages">{messageList}</main>;
}

MessageList.propTypes = {
  messages: React.PropTypes.array
};

export default MessageList;
