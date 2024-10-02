import React from 'react'
import "../css/Home.css"
import Header from '../components/Header'
import Review from '../components/Review'
import Contact from '../components/Contact'
// import { useAuth } from '../components/contexts/authContext'
// import Profile from './Profile'

const Home = () => {

  // const { userLoggedIn } = useAuth()

  return (
    <>
    {/* {
      userLoggedIn 
    ?
    <>
    <Profile/>
    </>
    : */}
    {/* <> */}
    <Header/>
   <Review/>
   <Contact/> 
   </>
    // }
    // </>
  )
}

export default Home