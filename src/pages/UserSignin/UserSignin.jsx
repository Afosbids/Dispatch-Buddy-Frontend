import React from 'react'
import SignUpForm from '../../components/common/SignUpFrontEnd';
import logo from './images/logo.svg'
import { useState } from 'react'
import "./usersignin.css"
import axios from 'axios';
import LeftImage from '../../components/LeftImage'
import { Link } from 'react-router-dom';

const UserSignin = () => {

  const [values, setValues] = useState({
    email: '',
    password: '',
})

const handleChange = (e) => {
  setValues({ ...values, [e.target.name]: e.target.value })
}
const handleFormSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post('https://dispatch-buddy.herokuapp.com/api-docs/', values);
    console.log(res)
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