import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/login/Login'
import Home from './pages/Home'
import SignUp from './components/register/Signup';
import Profile from './components/Profile';


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

        </Routes>
        {/* <Footer/> */}
      </Router>
    </>
  )
}

export default App
