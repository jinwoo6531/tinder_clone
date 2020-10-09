import React from 'react';
import Chat from './Section/Chat';
import './Chats.css';

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="명성"
        message="Hey! how are you😄"
        timestamp="35 seconds ago"
        profilePic="https://i.pinimg.com/originals/f4/43/bd/f443bd4d47b6005f61fb8ab4271b204e.jpg"
      />
      <Chat
        name="현오"
        message="Whats up?"
        timestamp="55 seconds ago"
        profilePic="https://www.sisaweek.com/news/photo/201608/76045_55770_456.jpg"
      />
    </div>
  );
}

export default Chats;
