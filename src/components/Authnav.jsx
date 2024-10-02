import React from 'react'
import { useAuth } from './contexts/authContext'
import { doSignOut } from './auth/auth'
import "../css/Home.css"
import { Link, useNavigate } from 'react-router-dom'


const Authnav = () => {

    const navigate = (useNavigate)
    const { userLoggedIn } = useAuth()
  return (
    <div>
        {
      userLoggedIn 
    ?
    <>
    <button onClick={() => {doSignOut().then(() => { navigate ("/login") })}} className='sign-out'>Sign out</button>
    </>
    :
  
    <div className="header-register">
      <Link to="/login" >Login</Link>
      <Link to="/signup" >Sign Up</Link>
          
    </div>
}
    </div>
  )
}

export default Authnav