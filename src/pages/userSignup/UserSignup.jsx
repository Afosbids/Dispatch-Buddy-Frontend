import { useState } from 'react'
import SignUpForm from '../../components/common/SignUpFrontEnd';
import logo from './images/logo.svg'
import "./userSignup.css";
import axios from 'axios';
import { Link } from "react-router-dom";



const UserSignup = () => {

const [values, setValues] = useState({
    fullname: '',
    phonenumber: '',
    email: '',
    password: '',
    confirmPassword: '',
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


