import React, { useState, useEffect } from 'react';
import "../css/Marquee.css"
import { FaVolumeUp } from 'react-icons/fa';

const messages = [
  "David just hooked up with Bellory",
  "charles  just paid for premium.",
  "Mr anonymous just paid for premium",
  "Taylor just booked Anita for 3 nights ",
  "Joe just hooked up with Maria",
  "Mark  just hooked up with Ruth",
  "Sarah just paid for premium",
  "Emily just booked kimberly for 2 hours",
  // Add more messages as needed
];

function Marquee() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 10000); // Change message every 5 seconds

    return () => clearTimeout(timer);
  }, [currentMessageIndex]);

  return (
    <div className="marquee-top">
      <div className="marquee-below">
      <FaVolumeUp className="notification-icon" /> 
        <p>{messages[currentMessageIndex]}</p>
      </div>
    </div>
  );
}

export default Marquee;