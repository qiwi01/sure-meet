import React, { useState } from "react";
import "./Login.css";
import { toast } from "react-toastify";
import { useAuth } from "../contexts/authContext";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

const Login = () => {

  // const { userLoggedIn } = useAuth();
  // hooks/
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState("false");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault()     
   try{
    await signInWithEmailAndPassword(auth, email, password)
    // console.log("user logged in successfully");
    toast.success("User logged in", {position: "top-center"}) 
    navigate('/profile')
   }catch (error){
    toast.error("wrong email address or password", {position: "top-center"})
   }

    if (!email || !password) {
      return toast.error("Enter all fields");
    }
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      return toast.error("invalid email address");
    }
    const pwdTrim = password.trim();
    if (!password || pwdTrim.length < 6) {
      return toast.error("Enter a valid password");
    }
   

  };

  return (
    <div className="dan-login">
      {/* {userLoggedIn && (<Navigate to={"/profile"} replace={true}/>)} */}
      <div className="">
        <div className="main">
          <div className="header-title">
            {/* <Link to="/">
              <img className="ww " src={signinIcon} alt="" />
            </Link> */}
            <h2>
              <b>SURE MEET</b>
            </h2>
          </div>

          <div className="middle-section">
            <p>Enter your details to access your account</p>
          </div>
          <form className="form-dan" onSubmit={handleSubmit}>
            <div className="form-action">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>

            <div className="form-action">
              <label>Password </label>
              <div className="password-input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  placeholder="Enter your password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <span onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <IoEyeOutline className="icon-m" />
                  ) : (
                    <IoEyeOffOutline className="icon-m" />
                  )}
                </span>
              </div>
            </div>
            <div className="small">
            <div className="smalls">
              <input type="checkbox" />
              <h6>Remember me</h6>
            </div>

            <div className="smalles">
              <a href="">
                <h6 className="smallest">Forgot Password?</h6>
              </a>
            </div>
          </div>
          <div className="small-button">
            <button className= "buttons" onClick={handleSubmit} disabled={loading}>
              {loading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-1"
                    aria-hidden="true"
                  ></span>
                  <span role="status">Loading...</span>
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </div>
          <div className="dat">
            <div className="line"></div>
            <span>&nbsp;&nbsp; or &nbsp;&nbsp;</span>
            <div className="line"></div>
          </div>
          <div className="googles">
              <button className={!loading ? "btn btn-dark w-100 p-3 my-1" : "btn btn-outline-dark w-100 p-3 my-1" }>
                {/* <img className="pic mx-2"  alt="" /> */}
                <a className="googler" href="">Continue with Google</a>
              </button>
            </div>
          <div className="dd">
            <p className="text-dark">
              New User? Click here to <Link to="/signup">Sign Up</Link>
            </p>
          </div>

          </form>
          <div className="go-homes">
            <Link to="/" className="backs">Go Back</Link>
        </div>

        </div>
        {/* <div className="right-side">
          <div className="logo ">
            <img src={signin} alt="" />
          </div>
        </div> */}
        
      </div>
    </div>
  );
};

export default Login;
