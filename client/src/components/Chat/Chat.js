import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import "./Chat.scss";

const socket = io.connect("http://localhost:8080");

export default function Chat() {
  //   const [username, setUsername] = useState("");

  //New message
  const [message, setMessage] = useState("");

  //Other messages
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on("receiveMessage", (chatData) => {
      setChat([...chat, chatData]);
    });
  }, [chat]);

  const onSubmit = async (e) => {
    e.preventDefault();
    let content = {
      message: message,
    };

    await socket.emit("sendMessage", content);
    setChat([...chat, content]);
    setMessage("");
  };

  const renderChat = () => {
    return chat.map((content, index) => (
      <div key={index}>
        <h3 className="container__message">
          <span>{content.message}</span>
        </h3>
      </div>
    ));
  };

  return (
    <div className="container">
      <div className="container__view">{renderChat()}</div>
      <form onSubmit={onSubmit}>
        <div className="container__field">
          <textarea
            placeholder="Type your message"
            className="container__text"
            name="message"
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
            }}
            label="Message"
          />
          <button className="container__button">Send</button>
        </div>
      </form>
    </div>
  );
}
