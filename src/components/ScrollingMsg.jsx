import React, { useState, useEffect } from 'react';
import"../css/ScrollingMsg.css"


const ScrollingMsg = () => {
  const [messages, setMessages] = useState(['Hello, World!', 'Welcome to React!', 'Keep coding!']);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMessageIndex(prevIndex => (prevIndex + 1) % messages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [messages]);

  return (
    <div className="scrolling-container">
      <div className="scrolling-text">
        {messages[currentMessageIndex]}
      </div>
    </div>
  );
}

export default ScrollingMsg;