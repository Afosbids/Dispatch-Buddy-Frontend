import React, {useState} from "react";
import axios from "axios"
import "./forgotPassword.css";
import { Link } from "react-router-dom";

const url = "https://dispatch-buddy.herokuapp.com/auth/user/forgot-password";

const ForgotPassword = () => {

  const [email, setEmail] = useState("")

  const forgotPassword = async() => {
     const response = await axios.post(url, {email: email})
     console.log(response)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    forgotPassword()
    console.log(email)
    setEmail("")
     window.location.replace("/password-link")
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
            <button type="submit" className="reset-password-button" style={{marginBottom: 40, width: 350, marginLeft: 0, cursor: "pointer"}}>Reset Password</button>
          </form>
        </div>
        <Link to="/user-signin" className="Link-component"><button className="back-to-login-forgot-password" style={{marginBottom: 0, cursor: "pointer"}}>Back to Login</button></Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
