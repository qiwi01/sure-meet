import React from 'react'
import { Link } from 'react-router-dom'
import CopyText from './Copytext'
import LinkArrow from './Linkarrow'
import "../css/Crypto.css"

const Crypto = () => {
  return (
    <div>
        <div className="crypto-top">
      <p>Only BITCOIN is accepted! Copy the address below</p>
      </div>
        <div className="crypto-main">
            <div className="crypto-info">
            <b> BTC <CopyText><span>1N43mXw49SSYKSjuy<br/>fPsZmLg738QzkzhFm</span></CopyText></b>
            {/* <b> USDT (ERC 20)<CopyText><span>0xa99c57accf1fbe123d4b9a1667ce64af8c9b21bd</span></CopyText></b>
            <b> SOL <CopyText><span>3RZb19cCyMrvdSGWyyQJ8kQp3CedmgApv3SGgH4HQcnG</span></CopyText></b> */}
            </div>
        </div>
        
      
        <div className="">
      <div className="contact-links">
      <a href="mailto:suremeet.com@gmail.com" className="link-item email">Email <LinkArrow/></a>
      <a href="https://m.me/suremeethookup?hash=AbY9Nar2u5mc57C1&source=qr_link_share" target="_blank" rel="noopener noreferrer" className="link-item facebook">Facebook <LinkArrow/> </a>
      {/* <a href="tel:+1234567890" className="link-item phone">Phone <LinkArrow/></a> */}
      <a href="https://www.snapchat.com/add/sure-meet?share_id=1HojaWjIvOM&locale=en-GB" target="_blank" rel="noopener noreferrer" className="link-item snapchat">Snapchat <LinkArrow/></a>
    </div>
      </div>
      
      <div className="go-homes">
            <Link to="/profile" className="backs">Go Back</Link>
        </div>
    </div>
  )
}

export default Crypto