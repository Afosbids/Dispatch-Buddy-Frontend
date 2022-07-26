import React from 'react'
import emailTick from "./images/email-tick.png"
import { useLocation } from 'react-router-dom'
import "./verifyEmail.css"

const VerifyEmail = () => {
  const location = useLocation();
  console.log(location.pathname.split("-")[0]);

  return (
    <div>
      <div className="verify-emal-container">
        <div className="verify-email-div">
          <img src={emailTick} alt="" />
          <h1>Verify your Email</h1>
          <p>
            Hi there, use the link below to verify your email and start enjoying
            Fintech
          </p>
          <button className="verify-email-button" type="button">
            Verify Email
          </button>
          <button className="return-to-LoginPage">Return to Login</button>
        </div>
      </div>
    </div>
  );
}

export default VerifyEmail