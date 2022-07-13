import React from 'react';
import RiderRequest from '../RiderRequest/riderRequest';
import Mark from './images/Mark.png';
import "./orderAccepted.css";
// import AuthNavbar2 from "../../components/AuthNavbar2/authNavbar2";
// import arrow from "./images/arrow.svg";

const OrderAccepted = () => {
    return (
        <>
            <div id="myOrderAcceptedModal" className="order-modal">
                <RiderRequest />

                <div className="order-modal-content">
                    <div className="mark-img">
                        <img src={Mark} alt=""/>
                    </div>
                    <div className="order-popup">
                        <h3>Order Accepted</h3>
                        <p className="paragraph1">Your order has been accepted by <br/>
                        <strong>Matthew Balogun</strong></p>
                        <button type="submit" id="myOrderBtn" className="order-accepted-btn">View Rider</button>
                    </div>
                </div>
            </div>
        </>
    );
        
}
export default OrderAccepted;