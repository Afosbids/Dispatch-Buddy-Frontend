import React from 'react'
import SignUpForm from '../../components/common/SignUpFrontEnd';
import logo from './images/logo.svg'
import { useState } from 'react'
import "./usersignin.css"
import axios from 'axios';
import LeftImage from '../../components/LeftImage'
import { Link } from "react-router-dom";

const UserSignin = () => {

  const [values, setValues] = useState({
    email: '',
    password: '',
})

const isFormValid = () => {
    const { email, password } = values;
    if (email && password) {
      return true;
    }
    return false;
  }

const handleChange = (e) => {
  setValues({ ...values, [e.target.name]: e.target.value })
}
const handleFormSubmit = async (e) => {
  e.preventDefault();
  if (isFormValid()) {
        console.log('Form is valid');
      } else {
        console.log('Form is invalid');
      }
  try {
    await axios.post('https://dispatch-buddy.herokuapp.com/api-docs/', values);
  } catch (error) {
    console.log(error)
  }
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
        <SignUpForm icon="email-icon" placeholder="Enter your email" type="email" name="email" value={values.email} onChange={handleChange}/>
        <label>Password</label>
        <SignUpForm icon="password-icon" placeholder="Enter your password" type="password" value={values.password} onChange={handleChange}/>
        <a href="/password">Forgot password?</a>
        <button className='signup-btn' type="button" onClick={handleFormSubmit}>Login</button>
        <p>Don't have an account?<span><Link to='/user-signup' variant="body2"> Create account</Link></span></p>
        </form>
      </section>
        
    </div>
  )
}

export default UserSignin
