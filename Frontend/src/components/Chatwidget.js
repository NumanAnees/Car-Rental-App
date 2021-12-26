import React, { useEffect } from "react";
import { Widget, addResponseMessage } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
const Chatwidget = () => {
  var user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    user = {
      username: "there",
    };
  }

  useEffect(() => {
    addResponseMessage(
      `Welcome ${user.username}, I'm Marvin 🤖🖐️ a bot. How can i help you today?`
    );
  }, []);
  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend
    if (newMessage.includes("hey")) {
      addResponseMessage(`Hey ${user.username}, how i can help you?`);
    } else if (newMessage.includes("hi")) {
      addResponseMessage(`Hi ${user.username}, how i can help you?`);
    } else if (newMessage.includes("hye")) {
      addResponseMessage(`Hye ${user.username}, how i can help you?`);
    } else if (newMessage.includes("hy")) {
      addResponseMessage(`Hy ${user.username}, how i can help you?`);
    } else if (newMessage.includes("hello")) {
      addResponseMessage(`Hello ${user.username}, how i can help you?`);
    } else if (newMessage.includes("how are you")) {
      addResponseMessage(`I'm fine. What about you?`);
    } else if (newMessage.includes("marry")) {
      addResponseMessage(`Sorry, I'm bot`);
    } else if (newMessage.includes("your name")) {
      addResponseMessage(`I'm marvin`);
    } else if (newMessage.includes("my name")) {
      addResponseMessage(`You are ${user.username}`);
    } else if (newMessage.includes("age")) {
      addResponseMessage(`Don't ask it again 😠`);
    } else if (newMessage.includes("kill")) {
      addResponseMessage(`Please, don't use bad words 🥺`);
    } else if (newMessage.includes("dead")) {
      addResponseMessage(`Please, don't use bad words 🥺`);
    } else if (newMessage.includes("destroy")) {
      addResponseMessage(`Please, don't use bad words 🥺`);
    } else if (newMessage.includes("damage")) {
      addResponseMessage(`Please, don't use bad words 🥺`);
    } else if (newMessage.includes("how to use")) {
      addResponseMessage(
        `Select any timeslot from the calender and we will provide you an information of available vehicles then you can simple book any of them by just clicking the book now button and paying the invoice 😄`
      );
    } else if (newMessage.includes("address")) {
      addResponseMessage(
        `Our address is Shop Number 12, Rehman plaza, wahdat road Lahore.`
      );
    } else if (newMessage.includes("how to book")) {
      addResponseMessage(
        `Select any timeslot from the calender and we will provide you an information of available vehicles then you can simple book any of them by just clicking the book now button and paying the invoice 😄`
      );
    } else if (newMessage.includes("how to pay")) {
      addResponseMessage(`We accept Payments from stripe only`);
    } else if (newMessage.includes("free")) {
      addResponseMessage(`Free word is unknown to me`);
    } else if (newMessage.includes("discount")) {
      addResponseMessage(`Only owner can give discount.`);
    } else if (newMessage.includes("payment")) {
      addResponseMessage(`I have no rights to talk about this 🥺`);
    } else if (newMessage.includes("number")) {
      addResponseMessage(
        `You can send your number here or can directly contact the owner via +923310145083`
      );
    } else if (newMessage.includes("hacker")) {
      addResponseMessage(`Hahaha, Nice joke 😄`);
    } else if (newMessage.includes("haha")) {
      addResponseMessage(`Hahaha, Nice joke 😄`);
    } else if (newMessage.includes("hehe")) {
      addResponseMessage(`Hehehe, Nice joke 😄`);
    } else if (newMessage.includes("bye")) {
      addResponseMessage(`Bye 😄`);
    } else {
      addResponseMessage(
        `Sorry, I'm currently learning your language. I don't know the answer. Please contact on this number +923310145083.`
      );
    }
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
