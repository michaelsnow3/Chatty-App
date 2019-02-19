import React from "react";

function Message({ message }) {
  switch (message.type) {
    //handle messages
    case "incomingMessage":
      //destructure message object from props
      let { content, username, userColour, image } = message;
      const usernameStyle = { color: userColour };

      //assign anonymous to username if username is undefined
      username = username || "Anonymous";

      let imgTag;
      if (image) {
        let imgURL = `${image[2]}.${image[3]}`;
        imgTag = <img className="image" src={imgURL} />;
        content = image[1];
      }

      return (
        <div className="message">
          <span style={usernameStyle} className="message-username">
            {username}
          </span>
          <span className="message-content">
            {content}
            <br />
            {imgTag}
          </span>
        </div>
      );

    //handle notifications
    case "incomingNotification":
      const { oldUsername, newUsername } = message;
      return (
        <div className="notification">
          <span className="notification-content">
            {oldUsername} changed their name to {newUsername}.
          </span>
        </div>
      );
  }
}

Message.propTypes = {
  message: React.PropTypes.object
};

export default Message;
