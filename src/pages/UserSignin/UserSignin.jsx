import React from 'react'
import SignUpForm from '../../components/common/SignUpFrontEnd';
import logo from './images/logo.svg'
import IMG from './images/signupImg.png'
// import mailIcon from "./images/Icon.png"
import "./usersignin.css"

const UserSignin = () => {
  return (
    <div className="user-signin">
      <section className="left-signin">
        <img src={IMG} alt="" />
        <p>Delivery service just got <br/>easier, elegant & superb <br/>with Dispatch Buddy </p>
      </section>

      <section className="right-signin">
          <div className="logo-group">
            <img src={logo} alt="" className="logo"/>
            <h2 className="logo-text">Dispatch <br/>Buddy</h2>
          </div>

        <form>
        <h2>Login</h2>
        <label>Email</label>
        <SignUpForm icon="email-icon" placeholder="Enter your email"/>
        <label>Password</label>
        <SignUpForm icon="password-icon" placeholder="Enter your password"/>
        <button className='signup-btn' type="button">Login</button>
        <p>Don't have an account?<span> Create account</span></p>
        </form>
      </section>
        
    </div>
  )
}

export default UserSignin