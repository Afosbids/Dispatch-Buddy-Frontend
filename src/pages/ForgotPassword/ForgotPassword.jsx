import React, {useState} from "react";
import axios from "axios"
import "./forgotPassword.css";

const url = "https://dispatch-buddy.herokuapp.com/auth/user/forgot-password";

const ForgotPassword = () => {

  const [email, setEmail] = useState("")

  const forgotPassword = async() => {
     const response = await axios.post("/auth/user/forgot-password", {email: email})
     console.log(response)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    forgotPassword()
    console.log(email)
    setEmail("")
    // window.location.replace("/password-link")
  }

  
  return (
    <div className="main-forgot-password--container">
      <div className="forgot-password-container">
        <h1>Forgot Password</h1>
        <p className="enter-email">
          Enter the email associated with your account and we’ll send an email
          with instruction to reset your password
        </p>
        <div className="form-div-container">
          <form onSubmit={handleSubmit} className="form-div">
            <label>Email</label>
            <input
              type="text"
              className="input-field-class"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="submit"
              value="Reset Password"
              className="reset-password-button"
            />
          </form>
        </div>
        <button className="back-to-login-forgot-password">Back to Login</button>
      </div>
    </div>
  );
};

export default ForgotPassword;
