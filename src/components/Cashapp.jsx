import React from 'react'
import "../css/Cashapp.css"
import { Link } from 'react-router-dom'
const Cashapp = () => {
  return (
    <div>
      <div className="cashapp-top">
      <p>Pay $100 into the Cashapp tag below to get premium access!</p>
      </div>
      <div className="go-homes">
            <Link to="/profile" className="backs">Go Back</Link>
        </div>
    </div>
  )
}

export default Cashapp