import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/Chat.css"

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const navigate = useNavigate();
  const [replyCount, setReplyCount] = useState(0);
  const [isAITyping, setIsAITyping] = useState(false);
  const messagesEndRef = useRef(null);
  const [usedResponses, setUsedResponses] = useState(new Set());

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const newUserMessage = { text: newMessage, sender: 'ai-user', status: 'sending' };
      setMessages(prevMessages => [...prevMessages, newUserMessage]);
      setNewMessage('');

      // Show 'read' status after 2 seconds
      setTimeout(() => {
        setMessages(prevMessages => {
          return prevMessages.map(message => 
            message === newUserMessage ? { ...message, status: 'read' } : message
          );
        });
      }, 2000);

      // Delay the typing indicator by 2 seconds
      setTimeout(() => {
        setIsAITyping(true);

        // Simulate a reply from the lady after the typing animation starts
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
          
          // Filter out already used responses
          const availableResponses = responses.filter(resp => !usedResponses.has(resp));
          
          let randomResponse;
          if (availableResponses.length > 0) {
            randomResponse = availableResponses[Math.floor(Math.random() * availableResponses.length)];
            setUsedResponses(prev => new Set([...prev, randomResponse]));
          } else {
            // If no new responses available, reset used responses (or handle as you see fit)
            setUsedResponses(new Set());
            randomResponse = responses[Math.floor(Math.random() * responses.length)];
          }

          setMessages(prevMessages => {
            const newMessages = [...prevMessages, { text: randomResponse, sender: 'real-lady' }];
            setReplyCount(prevCount => {
              const newCount = prevCount + 1;
              if (newCount === 5) {
                // Redirect after the fifth reply
                navigate('/crypto'); // Replace with your desired path
              }
              return newCount;
            });
            return newMessages;
          });

          // Stop typing animation after the simulated response time
          setIsAITyping(false);
        }, 1000); // After typing starts, wait 1 second before showing the response
      }, 2000); // 2000ms delay before showing typing animation
    }
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender} ${message.status || ''}`}>
            {message.text}
            {message.sender === 'ai-user' && message.status === 'read' && (
              <span className="read-indicator">✓✓</span> // Double check marks to indicate read
            )}
          </div>
        ))}
        <AITypingIndicator isTyping={isAITyping} />
        <div ref={messagesEndRef} /> 
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

// AITypingIndicator component remains unchanged
const AITypingIndicator = ({ isTyping }) => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    let interval;
    if (isTyping) {
      interval = setInterval(() => {
        setDots(dots => {
          switch(dots) {
            case '': return '.';
            case '.': return '..';
            case '..': return '...';
            case '...': return '';
            default: return '';
          }
        });
      }, 500);
    } else {
      setDots('');
    }

    return () => clearInterval(interval);
  }, [isTyping]);

  if (!isTyping) return null;

  return (
    <div className="ai-typing-indicator">
       typing{dots}
    </div>
  );
};

export default ChatComponent;