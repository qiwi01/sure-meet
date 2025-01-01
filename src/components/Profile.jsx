import React, {useEffect, useState} from 'react'
// import { useAuth } from './contexts/authContext';
import { auth } from './firebase/firebase';
import "../css/Profile.css"
import sandra from "../images/sure-11.jpg"
import maureen from "../images/sure-12.jpg"
import anita from "../images/sure-13.jpg"
import lina from "../images/sure-14.jpg"
import { Navigate, Link } from "react-router-dom";
import Marquee from './Marquee';



function Profile() {
  //  const [userDetails, setUserDetails] = useState(null);
  //  const fetchUserData = async () => {
  //   auth.onAuthStateChanged(async (user) => {
  //     console.log(user);
  //   });

  //   useEffect(() => {fetchUserData ()}, []);

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }


  return (
    <div className="main">
       <div className="header-title">
    <h2>SURE MEET</h2>
    </div>
      {/* <h3>
        Welcome to SureMeeT. <br/>
              There are lots of adventures waiting for you 
    </h3> */}
    <div className="marquees">
      <Marquee />
    </div>
      <div className="hooker-profile">
      <div className="hookes">
          <h2>
            <div className="colored-circle"></div>Sandra</h2>
          <img src={sandra} alt="" />
          <p>Available to fuck</p>
          <b> 3 miles away</b>
          <div className="">
          <Link to="/chats" className="backs">
          <svg 
      width="45" 
      height="45" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      <circle cx="8" cy="12" r="2" fill="currentColor" stroke="none" />
      <circle cx="12.5" cy="12" r="2" fill="currentColor" stroke="none" />
      <circle cx="17" cy="12" r="2" fill="currentColor" stroke="none" />
    </svg>
          </Link>
          </div>

          
        </div>
        <div className="hookes">
          <h2>
            <div className="colored-circle"></div>Lina</h2>
          <img src={lina} alt="" />
          <p>i live alone and i have a car, so im down for mine or yours</p>
          <b> 40 miles away</b>
          <div className="">
          <Link to="/chats" className="backs">
          <svg 
      width="45" 
      height="45" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      <circle cx="8" cy="12" r="2" fill="currentColor" stroke="none" />
      <circle cx="12.5" cy="12" r="2" fill="currentColor" stroke="none" />
      <circle cx="17" cy="12" r="2" fill="currentColor" stroke="none" />
    </svg>
          </Link>
          </div>
          
        </div>
        <div className="hookes">
          <h2>
            <div className="colored-circle"></div>Maureen</h2>
          <img src={maureen} alt="" />
          <p>i suck, fuck and i am down for all form of fetish</p>
          <b> 20 miles away</b>
          <div className="">
          <Link to="/chats" className="backs">
          <svg 
      width="45" 
      height="45" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      <circle cx="8" cy="12" r="2" fill="currentColor" stroke="none" />
      <circle cx="12.5" cy="12" r="2" fill="currentColor" stroke="none" />
      <circle cx="17" cy="12" r="2" fill="currentColor" stroke="none" />
    </svg>
          </Link>
          </div>

          
        </div>
        <div className="hookes">
          <h2>
            <div className="colored-circle"></div>Anita</h2>
          <img src={anita} alt="hookes" />
          <p>i am looking for a partner, i just need one regular person</p>
          <b> 12 miles away</b>
          <div className="">
          <Link to="/chats" className="backs">
          <svg 
      width="45" 
      height="45" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      <circle cx="8" cy="12" r="2" fill="currentColor" stroke="none" />
      <circle cx="12.5" cy="12" r="2" fill="currentColor" stroke="none" />
      <circle cx="17" cy="12" r="2" fill="currentColor" stroke="none" />
    </svg>
          </Link>
          </div>

          
        </div>
      </div>


      <div className="view-more">
      <button className='btn-help'>
        <a href="/help"> Help?</a>
      </button>
      <button onClick={toggleModal} className="btn-modal">
        View More
      </button>
      </div>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className='pre-word'>
              <h2>Subscribe for a one-time payment to premium below to chat hot ladies around you, and have fun with them.</h2>
              <p>Pay into any of the payment channels below</p></div>
              <div className="pre-btn">
              <button className='btn-card'>
        <a href="/card"> GIFT-CARDS</a>
      </button>
      <p>OR</p>
      <button className='btn-cashapp'>
        <a href="/cashapp"> PAYMENT-APPS </a>
      </button>
              </div>
        
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </div>
    
//     <div className="premium-main">
//       <div className="ladies">


  
//     </div>
// { currentUser.displayName ? currentUser.displayName : currentUser.email }
//     </div>
   
  );
      }

export default Profile;