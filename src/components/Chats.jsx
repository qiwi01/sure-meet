import React, { useState, useEffect } from 'react';
import {useNavigate } from 'react-router-dom'; // Assuming you're using react-router
import "../css/Chat.css"

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const navigate = useNavigate();
  const [replyCount, setReplyCount] = useState(0);

  const sendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const newUserMessage = { text: newMessage, sender: 'ai-user' };
      setMessages(prevMessages => [...prevMessages, newUserMessage]);
      setNewMessage('');

      // Simulate a reply from the lady
      setTimeout(() => {
        const responses = [
          "Hello! What are you looking for?",
          "What do you do for fun?",
          "Are we doing this at my place or yours?",
          "you can call me when you pay for premium",
          "I like meeting new people. How about you?",
          "i am very very freaky. Are you?",
          "I like giving blowjobs",
          "Raw or Condoms?",
          "where do you live?",
          "can you host?"

        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        setMessages(prevMessages => {
          const newMessages = [...prevMessages, { text: randomResponse, sender: 'real-lady' }];
          setReplyCount(prevCount => {
            const newCount = prevCount + 1;
            if (newCount === 5) {
              // Redirect after the third reply
              navigate('/card'); // Replace with your desired path
            }
            return newCount;
          });
          return newMessages;
        });
      }, 3000);
    }
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <form className='chat-form' onSubmit={sendMessage}>
        <input 
          type="text" 
          value={newMessage} 
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button className='chat-btn' type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatComponent;

