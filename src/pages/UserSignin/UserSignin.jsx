import React from 'react'
import SignUpForm from '../../components/common/SignUpFrontEnd';
import logo from './images/logo.svg'
import "./usersignin.css"
import LeftImage from '../../components/LeftImage'
import { Link } from 'react-router-dom';

const UserSignin = () => {
  return (
    <div className="user-signin">
      <LeftImage />
      <section className="right-signin">
          <div className="logo-group">
            <img src={logo} alt="" className="logo"/>
            <h2 className="logo-text">Dispatch <br/>Buddy</h2>
          </div>

        <form className='signin-form'>
        <h2>Login</h2>
        <label>Email</label>
        <SignUpForm icon="email-icon" placeholder="Enter your email"/>
        <label>Password</label>
        <SignUpForm icon="password-icon" placeholder="Enter your password"/>
        <button className='signup-btn' type="button">Login</button>
        <p>Don't have an account?<span> Create account</span></p>
         <Link to="/forgot-password"><p style={{color: "blue"}}>Forgotten your password?</p></Link> 
        </form>
      </section>
        
    </div>
  )
}

export default UserSignin