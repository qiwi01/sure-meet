import React from 'react'
import "../css/Card.css"
import { Link } from 'react-router-dom'
const Card = () => {
  return (
    <div>
      <div className="card-top">
        <p>Only Apple gift cards, Steam gift cards, Ebay gift cards and Razer gold gift card are accepted!</p>
      </div>

      <div className="go-homes">
            <Link to="/profile" className="backs">Go Back</Link>
        </div>
    </div>
  )
}

export default Card;