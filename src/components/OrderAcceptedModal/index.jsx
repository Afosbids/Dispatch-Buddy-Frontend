import React from 'react';
import Mark from './images/Mark.png';
import "./style.css";

const OrderAcceptedModal = () => {
    return (
        <>
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
        </>

    );
}
export default OrderAcceptedModal;


