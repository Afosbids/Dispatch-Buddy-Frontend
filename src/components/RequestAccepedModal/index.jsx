import React from 'react'
import './style.css'
import { ReactComponent as Successful } from "./images/SuccessfullyDone.svg";


const RequestAcceptedModal = () => {
  return (
    <div>
      <div>
      <div className="req-accepted-container">
        <Successful />
        <h2>Request Accepted</h2>
        <p>You’ve accepted to pick up <strong>Collins Nwachukwu</strong> request.</p>
        <button className='btn'>Done</button>
      </div>
    </div>
    </div>
  )
}

export default RequestAcceptedModal