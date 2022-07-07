import React from 'react'
import './style.css'
import { ReactComponent as Successful } from "./images/SuccessfullyDone.svg";


const OrderCompletedModal = () => {
  return (
    <div className="order-com-mod">
      <div className="order-com-container">
        <p>Order completed</p>
        <Successful />
        <h1>Dispatch order completed</h1>
        <p>You’ve delieved your order</p>
        <p>14km - 35mins</p>
        <button className="btn">Done</button>
      </div>
    </div>
  )
}

export default OrderCompletedModal