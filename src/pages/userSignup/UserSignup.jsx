import React from 'react'
import SignUpForm from '../../components/common/SignUpFrontEnd';
import signupimg from './images/signupImg.png'
// import mailIcon from "./images/Icon.png"
import "./userSignup.css"

const UserSignup = () => {
  return (
    <div className="user-signup">
        <section className="image-section">
        <img src={signupimg} alt=""  className="signup-img"/>
        </section>
        <section className="form-section">
          <h2 className="logo-text">Dispatch Buddy</h2>
        <form>
        <h2>Sign Up as Customer</h2>
        <label>Name</label>
        <SignUpForm icon="email-icon" placeholder="Enter your name" />
        <label>Phone Number</label>
        <SignUpForm icon="email-icon" placeholder="Enter your phone number"/>
        <label>Email</label>
        <SignUpForm icon="email-icon" placeholder="Enter your email"/>
        <label>Password</label>
        <SignUpForm icon="password-icon" placeholder="Enter your password"/>
        <label>Confirm Password</label>
        <SignUpForm icon="password-icon" placeholder="Confirm your password"/>
        <button className='signup-btn' type="button">Sign Up</button>
        <p>Already have an account?<span> Sign In</span></p>
        </form>
        
        </section>
        
    </div>
  )
}

export default UserSignup