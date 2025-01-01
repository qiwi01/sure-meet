import React from 'react'
import "../css/Card.css"
import { Link } from 'react-router-dom'
const Card = () => {
  return (
    <div>
      <div className="card-top">
        <p>Only Apple gift cards, Steam gift cards, Ebay gift cards and Razer gold gift card are accepted!</p>
      </div>
      <div className="card-bottom">
        <p>
        click on any of the available channel to send a picture of the gift card
        </p>
      </div>
      <div className="">
      <div className="contact-links">
      <a href="mailto:example@email.com" className="link-item email">Email</a>
      <a href="https://m.me/suremeethookup?hash=AbY9Nar2u5mc57C1&source=qr_link_share" target="_blank" rel="noopener noreferrer" className="link-item facebook">Facebook</a>
      <a href="tel:+1234567890" className="link-item phone">Phone</a>
      <a href="https://www.snapchat.com/add/sure-meet?share_id=1HojaWjIvOM&locale=en-GB" target="_blank" rel="noopener noreferrer" className="link-item snapchat">Snapchat</a>
    </div>
      </div>

      <div className="go-homes">
            <Link to="/profile" className="backs">Go Back</Link>
        </div>
    </div>
  )
}

export default Card;