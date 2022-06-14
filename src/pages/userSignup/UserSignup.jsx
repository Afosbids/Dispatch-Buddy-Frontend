import React from 'react'
import SignUpForm from '../../components/common/SignUpFrontEnd';
import "./userSignup.css"

const UserSignup = () => {
  return (
    <div className="user-signup">
         <form>
        <SignUpForm placeholder="Enter first name"/>
        <SignUpForm placeholder="NGN 234"/>
        <SignUpForm placeholder="Enter email"/>
        <SignUpForm placeholder="Password"/>
        <SignUpForm placeholder="Confirm Password"/>
      </form>
    </div>
  )
}

export default UserSignup