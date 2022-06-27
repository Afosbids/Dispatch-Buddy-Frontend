import { useState } from 'react'
import React from 'react'
import { Link } from 'react-router-dom';
import SignUpForm from '../../components/common/SignUpFrontEnd';
import logo from './images/logo.svg'
import "./userSignup.css";
import axios from 'axios';



const UserSignup = () => {

  const [values, setValues] = useState({
      fullname: '',
      phonenumber: '',
      email: '',
      password: '',
      confirmPassword: '',
})

const validateForm = () => {
    const { fullname, phonenumber, email, password, confirmPassword } = values;
    let errors = {};
    if (!fullname) {
      errors.fullname = 'Name is required';
    }
    if (!phonenumber) {
      errors.phonenumber = 'Phone number is required';
    }
    if (!email) {
      errors.email = 'Email is required';
    }
    if (!password) {
      errors.password = 'Password is required';
    }
    if (!confirmPassword) {
      errors.confirmPassword = 'Confirm password is required';
    }
    if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords must match';
    }
    return errors;
  }
  const isFormValid = () => {
      const errors = validateForm();
      return Object.keys(errors).length === 0;
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
          <SignUpForm icon="password-icon" placeholder="Confirm your password" type="password" name="confirm-password" value={values.confirmPassword} onChange={handleChange}/>
          <button className='signup-btn' type="button" onClick={handleFormSubmit}>Sign Up</button>
          <p>Already have an account?
            <span><Link to='/user-Signin' variant="body2"> Sign In</Link></span>
          </p>
          </form>
          
          </div>
            </div>
          </section>
          
      </div>
  )
}

export default UserSignup