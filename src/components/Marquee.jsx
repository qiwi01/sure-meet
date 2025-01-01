import React, { useState, useEffect } from 'react';
import "../css/Marquee.css"

const messages = [
  "First message scrolling by...",
  "Here comes the second message...",
  "And now, the third message appears...",
  // Add more messages as needed
];

function Marquee() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 5000); // Change message every 5 seconds

    return () => clearTimeout(timer);
  }, [currentMessageIndex]);

  return (
    <div className="marquee-top">
      <div className="marquee-below">
        <p>{messages[currentMessageIndex]}</p>
      </div>
    </div>
  );
}

export default Marquee;