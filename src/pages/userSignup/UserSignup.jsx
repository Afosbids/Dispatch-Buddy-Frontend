import React from 'react'
import { Link } from 'react-router-dom';
import SignUpForm from '../../components/common/SignUpFrontEnd';

import logo from './images/logo.svg'
// import mailIcon from "./images/Icon.png"
import "./userSignup.css"

const UserSignup = () => {
  return (
    <div className="user-signup">
        <section className="image-section">

        <p>Delivery service just got <br/>easier, elegant & superb <br/>with Dispatch Buddy </p>
        </section>
        <section className="form-section">
          <div className="logo-group">
          <img src={logo} alt="" className="logo"/>
          <h2 className="logo-text">Dispatch <br/>Buddy</h2>
          </div>
          
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
        <p>Already have an account?<Link to="/user-signin"><span> Sign In</span></Link></p>
        </form>
        
        </section>
        
    </div>
  )
}

export default UserSignup