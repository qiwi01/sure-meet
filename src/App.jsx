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


function App() {
  
  

  return (
    <>

<Router>
        {/* <Breadcrumbs/>   */}
        {/* <ScrollToTop /> */}
        {/* <ToastContainer /> */}
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
          <Route path="/nearby" element={<Nearby/>} />
          <Route path="/noti" element={<Notification/>} />
          <Route path="/chats" element={<Chats/>} />

        </Routes>
        {/* <Footer/> */}
      </Router>
    </>
  )
}

export default App
