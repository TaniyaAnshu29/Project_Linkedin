import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css"; 
const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate(); 
  const handleSignIn = () => {
    navigate("/home"); 
  };
  return (
    <div className="page-container">
      <div className="linkedin-logo">
        <span>Linked</span>
        <span className="in">in</span>
      </div>
      <div className="login-container">
        <h2 className="sign-in-title">Sign in</h2>
        <button className="social-btn">
          <i className="fa-brands fa-google"></i> Continue with Google
        </button>
        <button className="social-btn">
          <i className="fa-brands fa-apple"></i> Sign in with Apple
        </button>
        <div className="separator">
          <span></span>
          <p>or</p>
          <span></span>
        </div>
        <input type="text" className="input-field" placeholder="Email or phone" />
        <div className="password-container">
          <input
            type={passwordVisible ? "text" : "password"}
            className="input-field"
            placeholder="Password"
          />
          <span
            className="show-password"
            onClick={() => setPasswordVisible(!passwordVisible)}>
            {passwordVisible ? "Hide" : "Show"}
          </span>
        </div>
        <a href="#" className="forgot-password">Forgot password?</a>
        <button className="sign-in-btn" onClick={handleSignIn}>Log in</button>
      </div>
      <p className="join-now-container">New to LinkedIn? Join now</p>
    </div>
  );
};
export default LoginPage;