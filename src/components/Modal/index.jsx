import React from 'react'
import './style.css'

function Modal() {
  return (
    <div className="modal-background">
        <div className="modal-container">
            <div className="modal-title">
                <h4>Incoming Request</h4>
            </div>
            <div className="modal-content">
                <h1>4 min . 2.0 km</h1>
                <h4>Collins Nwachukwu</h4>
                <p style={{width:"60%"}}>5, Akintayo Street, Victoria Island, Lagos</p>
            </div>
        </div>
    </div>
  )
}

export default Modal