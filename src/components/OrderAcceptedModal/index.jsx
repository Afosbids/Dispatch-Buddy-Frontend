import React from "react";
import { Link } from "react-router-dom";
import Mark from "./images/Mark.png";
import "./style.css";

const OrderAcceptedModal = () => {
  return (
    <>
      <div className="order-modal-content">
        <div className="mark-img">
          <img src={Mark} alt="" />
        </div>
        <div className="order-popup">
          <h3>Order Created</h3>
          <p className="paragraph1">
            Your order has been <strong>Created</strong>
          </p>
          <Link to="/shipperridehistory">
            <button
              type="submit"
              id="myOrderBtn"
              className="order-accepted-btn"
            >
              View My Requests
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default OrderAcceptedModal;
