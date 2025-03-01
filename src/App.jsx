import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/login/Login'
import Home from './pages/Home'
import SignUp from './components/register/Signup';
import Profile from './components/Profile';
import Dashboard from './pages/Dashboard';
import Nearby from './components/Nearby';
import Notification from './components/Notification';
import Chats from './components/Chats';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Premium from './components/Premium';
import Help from './components/Help';
import Card from './components/Card';
import Marquee from './components/Marquee';
import ScrollingMsg from './components/ScrollingMsg';
import ReviewsList from './components/Review';
import ChatAI from './components/ChatAi';
import PayApps from './components/PayApps';
import Crypto from './components/Crypto';
// import Review from './components/Review';
// import Modal from './components/modal/Modal';




function App() {
  
  

  return (
    <>

<Router>
        {/* <Breadcrumbs/>   */}
        {/* <ScrollToTop /> */}
        <ToastContainer />
        <Routes>
          {/* <Route element={<Menu />}> 
          
          
          </Route> */}
          <Route path="/" element={<Home />} />

          {/* <Route path="/signup" element={<SignUp />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="*" element={<NotFound />} /> */}
          {/* <Route path="/modal" element={<Modal/>} /> */}
          <Route path="/premium" element={<Premium/>} />
          <Route path="/chats" element={<Chats/>} />
          <Route path="/help" element={<Help/>} />
          <Route path="/payapps" element={<PayApps/>} />
          <Route path="/card" element={<Card/>} />
          <Route path="/crypto" element={<Crypto/>} />
          <Route path="/chatai" element={<ChatAI/>} />
          <Route path="/review" element={<ReviewsList/>} />
          <Route path="/marquee" element={<Marquee/>} />
          <Route path="/scrolling" element={<ScrollingMsg/>} />
          {/* <Route path="/review" element={<Review/>} /> */}

        </Routes>
        {/* <Footer/> */}
      </Router>
    </>
  )
}

export default App
