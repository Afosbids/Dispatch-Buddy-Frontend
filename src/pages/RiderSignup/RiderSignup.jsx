import React from 'react'
import SignUpForm from '../../components/common/SignUpFrontEnd';
import logo from './images/logo.svg'
import IMG from './images/signupImg.png'
import "./ridersignup.css"

const RiderSignup= () => {
  return (
    <div className="rider-signup">
        <section className="left-signup">
          <img src={IMG} alt="" />
          <p>Delivery service just got <br/>easier, elegant & superb <br/>with Dispatch Buddy </p>
        </section>

        <section className="right-signup">
          <div className="logo-group">
          <img src={logo} alt="" className="logo"/>
          <h2 className="logo-text">Dispatch <br/>Buddy</h2>
          </div>
          
        <form>
        <h2>Sign Up as Rider</h2>
        <label>Name</label>
        <SignUpForm icon="email-icon" placeholder="Enter your name" />
        <label>Phone Number</label>
        <SignUpForm icon="email-icon" placeholder="Enter your phone number"/>
        <label>Email</label>
        <SignUpForm icon="email-icon" placeholder="Enter your email"/>
        <label>City</label>
        <SignUpForm placeholder="Select"/>
        <label>Bike Documents</label>
        <SignUpForm icon="upload-icon" placeholder="Upload" type="file"/>
        <label>Valid ID Card</label>
        <SignUpForm icon="upload-icon" placeholder="Upload" type="file"/>
        <label>Passport Photo</label>
        <SignUpForm icon="upload-icon" placeholder="Upload" type="file"/>
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

export default RiderSignup