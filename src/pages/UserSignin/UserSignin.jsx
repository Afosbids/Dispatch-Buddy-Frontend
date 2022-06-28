import React from 'react'
import SignUpForm from '../../components/common/SignUpFrontEnd';
import logo from './images/logo.svg'
import { useState } from 'react'
import "./usersignin.css"
import Axios from 'axios';
import LeftImage from '../../components/LeftImage'
import { Link } from 'react-router-dom';

const UserSignin = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log("clicked", email, password);
    Axios.post(
      "https://dispatch-buddy.herokuapp.com/api-docs/",
      {
        email: email,
        password: password,
      }
    ).then((response) => {
      console.log(response);
    });
  };
  return (
    <div className="user-signin">
      <LeftImage />
      <section className="right-signin">
          <div className="logo-group">
            <img src={logo} alt="" className="logo"/>
            <h2 className="logo-text">Dispatch <br/>Buddy</h2>
          </div>
        <form className="form-group">
        <h2>Login</h2>
        <label>Email</label>
        <SignUpForm 
          icon="email-icon" 
          placeholder="Enter your email" 
          type="email"
          value={email} 
          onChange={({ target }) => setEmail(target.value)}
        />
        <label>Password</label>
        <SignUpForm 
        icon="password-icon" 
        placeholder="Enter your password"
        type="password"
        onChange={({ target }) => setPassword(target.value)}
        />
        <button className='signup-btn' type="button" onClick={handleFormSubmit}>Login</button>
        <p>Don't have an account?
          <Link to="/user-signup" style={{color: "red"}}><span> Create account</span></Link>
        </p>
        <Link to="/forgot-password"><p style={{color: "blue"}}>Forgotten your password?</p></Link> 

        <form className="signin-form">
          <h2>Login</h2>
          <label>Email</label>
          <SignUpForm icon="email-icon" placeholder="Enter your email" type="email" name="email" value={values.email} onChange={handleChange}/>
          <label>Password</label>
          <SignUpForm icon="password-icon" placeholder="Enter your password"/>
          <Link className='signin-link' to="/forgot-password"><p style={{color: "blue"}}>Forgot password?</p></Link> 
          <button className='user-signin-btn' type="submit" onClick={handleFormSubmit}>Login</button>
          <p>Don't have an account?<span> Create account</span></p>
        </form>
      </section>
        
    </div>
  )
}

export default UserSignin
