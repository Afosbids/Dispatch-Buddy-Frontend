<<<<<<< HEAD
import { useState } from 'react'
import React from 'react'
import { Link } from 'react-router-dom';
import SignUpForm from '../../components/common/SignUpFrontEnd';
import logo from './images/logo.svg'
import "./userSignup.css";
import axios from 'axios';



=======
import { useState } from "react";
import React from "react";
// import LeftImage from '../../components/LeftImage'
import { Link } from "react-router-dom";
import SignUpForm from '../../components/common/SignUpFrontEnd';
import logo from './images/logo.svg'
import "./userSignup.css";
import Axios from "axios";
>>>>>>> develop

const UserSignup = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [address, setAddress] = useState("");
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log("clicked", email, password);
    Axios.post(
      "https://dispatch-buddy.herokuapp.com/api-docs/",
      {
        name: name,
        phoneNum: phoneNum,
        email: email,
        password: password,
        user_type: "shipper",
        address: address
      }
    ).then((response) => {
      console.log(response);
    });
  };
  return (
<<<<<<< HEAD
    <div className="user-signup">
        <section className="image-section">

        <p>Delivery service just got <br/>easier, elegant & superb <br/>with Dispatch Buddy </p>
        </section>
        <section className="form-section">
          <div className="form-group">

          <div className="logo-group">
          <img src={logo} alt="" className="logo"/>
          <h2 className="logo-text">Dispatch <br/>Buddy</h2>
          </div>
          
        <div className='form-div'>

        <form>
        <h2>Sign Up as Customer</h2>
        <label>Name</label>
        <SignUpForm icon="email-icon" placeholder="Enter your name" type="text" name="fullname" value={values.fullname} onChange={handleChange} />
        <label>Phone Number</label>
        <SignUpForm icon="email-icon" placeholder="Enter your phone number" type="number" name="phonenumber" value={values.phonenumber} onChange={handleChange}/>
        <label>Email</label>
        <SignUpForm icon="email-icon" placeholder="Enter your email address" type="email" name="email" value={values.email} onChange={handleChange}/>
        <label>Password</label>
        <SignUpForm icon="password-icon" placeholder="Enter your password" type="password" value={values.password} onChange={handleChange}/>
        <label>Confirm Password</label>
        <SignUpForm icon="password-icon" placeholder="Confirm your password"/>
        <button className='signup-btn' type="button">Sign Up</button>
        <p>Already have an account?<Link to="/user-signin"><span> Sign In</span></Link></p>
        </form>
        
        </div>
=======
    <>
      <div>
        <section className="user-signup">
          <div className="image-section" >
            <img className="signup-image" src="/images/signupImg.png" alt="" />
            <h1>Delivery service just got<br/>
                easier, elegant & superb<br/>
                with Dispatch Buddy </h1>
>>>>>>> develop
          </div>
            <div className="form-section">
                <div className="logo-group">
                  <img src={logo} alt="" />
                  <h2 className="logo-text">
                    Dispatch <br />
                    Buddy
                  </h2>
                </div>
              <form className="form-group">
                <h2>Sign Up as a Customer</h2>
                <label>Name</label>
                <SignUpForm 
                    icon="email-icon" 
                    placeholder="Enter your name"
                    type="text"
                    onChange={({ target }) => setName(target.value)}
                />
                <label>Email</label>
                <SignUpForm 
                    icon="email-icon" 
                    placeholder="Enter your email" 
                    type="email"
                    value={email} 
                    onChange={({ target }) => setEmail(target.value)}
                />
                <label>Phone Number</label>
                <SignUpForm 
                    icon="email-icon" 
                    placeholder="Enter your phone number"
                    type="phone"
                    onChange={({ target }) => setPhoneNum(target.value)}
                />
                <label>Password</label>
                <SignUpForm 
                  icon="password-icon" 
                  placeholder="Enter your password"
                  type="password"
                  onChange={({ target }) => setPassword(target.value)}
                />
                <label>Address</label>
                <SignUpForm 
                    icon="password-icon" 
                    placeholder="Enter your address"
                    type="text"
                    onChange={({ target }) => setAddress(target.value)}
                />
                <button className="signup-btn" type="submit" onClick={handleFormSubmit}>Sign Up</button>
                
                {/* <br /> */}
                <p>Already have an account? 
                <Link to="/user-signin" style={{color: "red"}}><span> Sign In</span></Link> 
                </p>
              </form>
            </div>
        </section>
      </div>
    </>
  );
};
export default UserSignup;