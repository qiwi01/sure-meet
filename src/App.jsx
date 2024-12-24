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
import Cashapp from './components/Cashapp';
import Card from './components/Card';
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
          <Route path="/cashapp" element={<Cashapp/>} />
          <Route path="/card" element={<Card/>} />
          {/* <Route path="/review" element={<Review/>} /> */}

        </Routes>
        {/* <Footer/> */}
      </Router>
    </>
  )
}

export default App
