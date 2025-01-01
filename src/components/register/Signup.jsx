import React, { useState } from "react";
import "./Signup.css"
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// import { setDoc, doc } from "firebase/firestore";

const SignUp = () => {
  // hooks
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();


  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleRegister = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !address) {
      console.log("enter all fields....");
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
    if (password!== confirmPassword) {
      return toast.error("Passwords do not match");
    }
    setLoading(true);
    try{
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Registration Successful!");
      navigate('/login');
      setLoading(false);
      setName("");
      setEmail("");
      setPassword("");
      setAddress("");
      setConfirmPassword("");
    }
    catch(error){
          toast.error(error.message);
          setLoading(false);
        }
  };

  return (
    <>
      <div className="milly container-fluid pt-4">
        <div className="col-md-6 offset-md-3">
          <div className="main">
          <div className="header-title text-center">
            <Link to="/" className="">
            </Link>
            <p>
              <b>SURE MEET</b>
            </p>
          </div>

          {/* <div className="middle-section-milly">
            <p>Let's get started by filling the information below:</p>
          </div> */}
          <div className="">
            <form className="form-milly" onSubmit={handleRegister}>
              <div className="form-action">
                <label>Full Name</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter your Name"
                  value={name}
                  onChange={handleNameChange}
                />
              </div>

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
                <label>Address</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your address"
                  value={address}
                  onChange={handleAddressChange}
                />
              </div> 
              {/* <div className="form-action">
                <label>Date-of-Birth</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleAgeChange}
                />
              </div> */}

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

              <div className="form-action">
                <label>Confirm Password </label>
                <div className="password-input-wrapper">
                  <input
                    type={!showConfirmPassword ? "password" : "ConfirmPassword"}
                    className="form-control"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                  />
                  <span
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <IoEyeOutline className="icon-m" />
                    ) : (
                      <IoEyeOffOutline className="icon-m" />
                    )}
                  </span>
                </div>
              </div>
              <div className="hhh-milly my-2">
              <input type="checkbox" />
              <p>
                I agree to <span className="span-milly">Terms of service</span>{" "}
                and <span className="span-milly">Privacy policies</span>
              </p>
            </div>

            <div className="small-button">
            <button className= "buttones" onClick={handleRegister} disabled={loading}>
              {loading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-1"
                    aria-hidden="true"
                  ></span>
                  <span role="status">Loading...</span>
                </>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
            <div className="dart">
              <div className="line"></div>
              <span>&nbsp;&nbsp; or &nbsp;&nbsp;</span>
              <div className="line"></div>
            </div>

            <div className="googles">
              <button className={!loading ? "btn btn-dark w-100 p-3 my-1" : "btn btn-outline-dark w-100 p-3 my-1" }>
                <a className="text-light text-decoration-none" href="https://www.google.com/">Continue with Google</a>
              </button>
            </div>
            <div className="bb">
              <p className="text-darks">
                Already have an account? <Link to="/login">Sign in</Link>
              </p>
            </div>
            <div className="go-homes">
                <Link to="/" className="backs">Go Back</Link>
            </div>
            </form>

            
          </div>

          </div>
                  </div>
        {/* <div className="right-side-milly">
          <img src={registerImg} className="image-fluid" />
        </div> */}
      </div>
    </>
  );
};

export default SignUp;
