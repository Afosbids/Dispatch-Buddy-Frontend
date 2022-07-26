import React from 'react'
import './style.css'
import { ReactComponent as Successful } from "./images/SuccessfullyDone.svg";
import Axios from 'axios';


const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  zIndex: 1000,
};




const OrderCompletedModal = ({ open, onClose, orderId }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user.user.userId)
 

  const endTrip = async () => {
    const response = await Axios.patch(
      `https://dispatch-buddy-api.herokuapp.com/api/v1/rider/end-ride`,
      {
        orderId: orderId,
        riderId: user.user.userId,
      }
      
    );
    onClose()
    
    console.log(response);
    
  };

  if (!open) return null;

  return (
    <div className="order-com-mod">
      <div className="order-com-container" style={MODAL_STYLES}>
        <p>Order completed</p>
        <Successful />
        <h1>Dispatch order completed</h1>
        <p>You’ve delieved your order</p>
        <p>14km - 35mins</p>
        <button className="btn" onClick={endTrip}>End Trip</button>
      
      </div>
    </div>
  )
}

export default OrderCompletedModal