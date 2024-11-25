import React, {useEffect, useState} from 'react'
// import { useAuth } from './contexts/authContext';
import { auth } from './firebase/firebase';
import "../css/Profile.css"
import sandra from "../images/sure-11.jpg"
import maureen from "../images/sure-12.jpg"
import anita from "../images/sure-13.jpg"
import lina from "../images/sure-14.jpg"
import { Navigate, Link } from "react-router-dom";



function Profile() {
  //  const [userDetails, setUserDetails] = useState(null);
  //  const fetchUserData = async () => {
  //   auth.onAuthStateChanged(async (user) => {
  //     console.log(user);
  //   });

  //   useEffect(() => {fetchUserData ()}, []);

  return (
    <div className="main">
       <div className="header-title">
    <h2>SURE MEET</h2>
    </div>
      <h3>
        Hello , welcome to SureMeeT
              There is a whole lot of adventures waiting for you 
    </h3>
      <div className="hooker-profile">
      <div className="hookes">
          <h2>
            <div className="colored-circle"></div>Sandra</h2>
          <img src={sandra} alt="" />
          <p>Available to fuck</p>
          <b> 3 miles away</b>

          
        </div>
        <div className="hookes">
          <h2>
            <div className="colored-circle"></div>Lina</h2>
          <img src={lina} alt="" />
          <p>i live alone and i have a car, so im down for mine or yours</p>
          <b> 40 miles away</b>
          
        </div>
        <div className="hookes">
          <h2>
            <div className="colored-circle"></div>Maureen</h2>
          <img src={maureen} alt="" />
          <p>i suck, fuck and i am down for all form of fetish</p>
          <b> 20 miles away</b>

          
        </div>
        <div className="hookes">
          <h2>
            <div className="colored-circle"></div>Anita</h2>
          <img src={anita} alt="hookes" />
          <p>i am looking for a partner, i just need one regular person</p>
          <b> 12 miles away</b>

          
        </div>
      </div>
      <div className="view-more">
        <p>
        <Link to="/premium">View-more</Link>
        </p>
      </div>
    </div>
//     <div className="premium-main">
//       <div className="ladies">


  
//     </div>
// { currentUser.displayName ? currentUser.displayName : currentUser.email }
//     </div>
   
  );
      }

export default Profile;