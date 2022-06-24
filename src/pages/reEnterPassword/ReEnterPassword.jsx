import React, {useState} from 'react'
import {useLocation} from "react-router-dom"
// import axios from "axios"
import "./reEnterPassword.css"

const initialState = {
    email: "",
    password: ""
}

// const url = "https://dispatch-buddy.herokuapp.com/auth/user/reset-password"


const ReEnterPassword = () => {
   const [form, setForm] = useState(initialState)
   const location = useLocation()

    console.log(location)
   const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)
   }
   const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
   }
  return (
    <div className="reset-password-main-div">
        
        <div className="reset-password-container">
            
        <form className="re-enterPassword" onSubmit={handleSubmit}>
        <h1>Reset Yout Password</h1>
            <div className="first form-group">
                <label htmlFor="">Enter Email</label>
                <input type="text" name="email" id="" onChange={handleChange}/>
                
            </div>
            <div className=" second form-group">
                <label htmlFor="">Enter Password</label>
                <input type="text" name="password" id="" onChange={handleChange}/>
                
            </div>
            <button type="submit" className="reset-password-button">Reset Password</button>
        </form>
        </div>
       
    </div>
  )
}

export default ReEnterPassword