import React, { useState } from 'react';
import '../css/ChatAi.css'; // Import the CSS file

const ChatAI = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      // Simulating AI response, in real-world you'd integrate with an AI API
      setMessages(prevMessages => [...prevMessages, { text: input, fromUser: true }, { text: "I'm not programmed for that, but I hope you find what you're looking for!", fromUser: false }]);
      setInput('');
    }
  };

  return (
    <div className="chat-containers">
      <div className="chat-header">
        <h2>AI Hookup Assistant</h2>
      </div>
      <div className="chat-body">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.fromUser ? 'user-message' : 'ai-message'}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="chat-input">
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          required 
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatAI;