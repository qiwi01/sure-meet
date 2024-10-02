import React from 'react'
import { Link } from 'react-router-dom'
import Authnav from './Authnav'

const Header = () => {

  return (
    <div className="header-body">
    <div className="header-title">
    <h2>SURE MEET</h2>
    </div>
      <div className="header-details">
  <h4>SPARKS FLY HERE</h4>
  <h6>JOIN</h6>
  <h5>CONNECT AND FLIRT</h5>
  </div> 
  <div className="authent">
    <div className="log">
    <Link to="/SignUp">
        <button className="log-button">SIGN UP</button>
    </Link>
    </div>
    <div className="logs">
    <Link to="/Login">
        <button className="log-button">LOG IN</button>
    </Link>
    </div>
  </div>
  
    {/* <Authnav/> */}
    </div>
    
  )
} 
export default Header