import React from "react";
import "./forgotPassword.css";

const ForgotPassword = () => {
  return (
    <div className="main-container">
      <div className="forgot-password-container">
        <h1>Forgot Password</h1>
        <p className="enter-email">
          Enter the email associated with your account and we’ll send an email
          with instruction to reset your password
        </p>
        <div className="form-div-container">
          <form action="" className="form-div">
            <label>Email</label>
            <input
              type="text"
              className="input-field-class"
              placeholder="Enter your email"
            />
            <input
              type="button"
              value="Reset Password"
              className="input-button-type"
            />
          </form>
        </div>
        <button className="back-to-login">Back to Login</button>
      </div>
    </div>
  );
};

export default ForgotPassword;
