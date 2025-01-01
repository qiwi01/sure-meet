import React from 'react'
import "../css/Help.css"
import { Link } from 'react-router-dom'

import ChatAI from './ChatAi'

const Help = () => {
  return (
    <div>
         <div className="help-top">
          <b>GET HELP FROM OUR ONLINE SUPPORT</b>
          <div className="help-info">
            <p>We're here to help you. Feel free to ask any questions.</p>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Email: support@example.com</p>
          </div>
        OR
          <div className="help-below">
          <b>CHAT WITH AN AI ASSISTANT</b>
        </div>
        </div>
        <div className="go-homes">
        <Link to="/profile" className="backs">Go Back</Link>
        </div>
    </div>
  )
}

export default Help