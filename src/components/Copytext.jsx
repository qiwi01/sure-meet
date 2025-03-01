import React, { useState } from 'react';
import "../css/CopyText.css"

const CopyText = ({ children }) => {
  const [isCopied, setIsCopied] = useState(false);

  // Function to extract plain text from React children
  const getPlainText = (children) => {
    return React.Children.toArray(children).reduce((text, child) => {
      if (typeof child === 'string') {
        return text + child;
      }
      if (React.isValidElement(child) && child.props.children) {
        return text + getPlainText(child.props.children);
      }
      return text;
    }, '');
  };

  const handleCopy = async () => {
    try {
      const plainText = getPlainText(children);
      await navigator.clipboard.writeText(plainText);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1500);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };


  return (
    <div className="copy-text-container">
      <span className="text">{children}</span>
      <button onClick={handleCopy} className="copy-button">
        {isCopied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );
};

export default CopyText;