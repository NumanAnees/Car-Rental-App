import React, { useEffect } from "react";
import { Widget, addResponseMessage } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
const Chatwidget = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    addResponseMessage(
      `Welcome ${user.username}, I'm Marvin 🤖🖐️ a bot. How can i help you today?`
    );
  }, []);
  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend
    addResponseMessage("Please share your Phone Number");
  };
  return (
    <div>
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        title="Chat with us!"
        subtitle="We typically reply in few minutes."
        profileAvatar="https://www.kindpng.com/picc/m/347-3479906_chatbot-icon-png-transparent-png.png"
        // showCloseButton="true"
        emojis="true"
      />
    </div>
  );
};

export default Chatwidget;
