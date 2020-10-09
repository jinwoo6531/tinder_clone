import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import './ChatScreen.css';
function ChatScreen() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      name: 'Ellen',
      image:
        'https://i.pinimg.com/originals/f4/43/bd/f443bd4d47b6005f61fb8ab4271b204e.jpg',
      message: 'Whats up',
    },
    {
      name: 'Ellen',
      image:
        'https://i.pinimg.com/originals/f4/43/bd/f443bd4d47b6005f61fb8ab4271b204e.jpg',
      message: '머해',
    },
    {
      message: 'Hi!',
    },
  ]);
  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput('');
  };
  return (
    <div className="chatScreen">
      {messages.map((message, index) =>
        message.name ? (
          <div className="chatScreen__message" key={index}>
            <Avatar
              className="chatScreen__message"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message" key={index}>
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}
      <div>
        <form className="chatScreen_input">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="chatScreen__inputField"
            type="text"
            placeholder="Type a message.."
          />
          <button
            onClick={handleSend}
            type="submit"
            className="chatScreen__inputButton"
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatScreen;
