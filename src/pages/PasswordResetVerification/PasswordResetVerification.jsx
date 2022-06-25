import React from "react";
import emailTick from "./images/email-tick.png";
import "./PasswordResetVerification.css";

const PasswordResetVerification = () => {
  return (
    <div className="password-reset-container">
      <div className="reset-container">
        <img src={emailTick} alt="" />
        <h1>Check your mail</h1>
        <p>
          We sent a password reset link to your email. Please clikc the link to
          reset your password
        </p>
        <p>
          Don’t receive the email? <span> Click to Resend link</span>
        </p>
        <button className="back-to-login">Back to Login</button>
      </div>
    </div>
  );
};

export default PasswordResetVerification;
