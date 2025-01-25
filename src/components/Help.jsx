import React from 'react'
import "../css/Help.css"
import { Link } from 'react-router-dom'

// import ChatAI from './ChatAi'

const Help = () => {
  const faq = [
    {
      question: "How do I pay for premium?",
      answer: "Click on view more in the profile page, you will be redirected to the payment page , click on either gift card or payment apps and send a text through snapchat, facebook or email."
    },
    {
      question: "Why do i need to pay for premium?",
      answer: "This money helps us run the app, and pay our workers. it alos helps our gilrs ro know there wont be time wasters"
    },
    {
      question: "Do i need to pay for premium always?",
      answer: "NO, it is a one-time payment."
    },
    {
      question: "Can I use the site anonymously?",
      answer: "Yes, you can browse profiles without your profile being shown to others until you decide to interact."
    },
    {
      question: "How do I protect my privacy?",
      answer: "Never share personal details like your home address or phone number. Use our chat feature for communication."
    },
    {
      question: "What should I do if I encounter inappropriate behavior?",
      answer: "You can report or block users through their profile. Our team reviews reports to maintain a safe environment."
    },
    {
      question: "How do I cancel my subscription?",
      answer: "Visit the 'Account' settings, go to 'Billing', and select 'Cancel Subscription'."
    }
  ];
  return (
    <div>
         <div className="help-page">
      <h1>Help Center</h1>
      <div className="faq-container">
        {faq.map((item, index) => (
          <div key={index} className="faq-item">
            <h2>{item.question}</h2>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
        OR
        <div className="help-top">
          <h6>GET HELP FROM OUR ONLINE SUPPORT</h6>
          <div className="help-info">
            <p>We're here to help you. Feel free to ask any questions.</p>
            <b>Email: suremeet.com@gmail.com</b>
          </div>
        </div>
        <div className="go-homes">
        <Link to="/profile" className="backs">Go Back</Link>
        </div>
    </div>
  )
}

export default Help;

