import React from 'react'
import IMG from './images/signupImg.png'
import './style.css'

const LeftImage = () => {
  return (
    <section className="left-image">
        <div className="image-overlay"></div>
        <img src={IMG} alt="" />
        <p>
            Delivery service just got <br />
            easier, elegant & superb <br />
            with Dispatch Buddy{" "}
        </p>
    </section>
  )};
  
export default LeftImage






