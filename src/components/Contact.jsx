import React from 'react'
import { PiTwitterLogoLight } from "react-icons/pi";
import { LuFacebook } from "react-icons/lu";
import { IoLogoInstagram } from "react-icons/io";
import "../css/Home.css"

const Contact = () => {
  return (
    <div className='contact-body'>
         <div className="footer-logo">
                <PiTwitterLogoLight />
                <LuFacebook />
                <IoLogoInstagram />
                </div>
    </div>
  )
}

export default Contact