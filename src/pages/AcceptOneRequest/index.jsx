import React from "react";
import "./style.css";
import AuthNavbar from "../../components/AuthNavbar";
import { ReactComponent as Mastercard } from "./images/Mastercard.svg";

const AcceptOneRequest = () => {
  return (
    <>
      <AuthNavbar />
      <div className="container">
        <div className="accept-one-left">
          <div className="request-details">
            <h4>Request details</h4>
            <div className="pickup-loaction">
              <h3>Pickup location</h3>
              <p>5, Akintayo Street, Victoria Island, Lagos</p>
            </div>

            <div className="delivery-location">
              <h3>Delivery location</h3>
              <p>89B, Olumakinde Street, Lekki, Lagos</p>
            </div>

            <div className="package-details">
              <h3>Package details</h3>
              <p>New Hp core i7 Laptop (fully packed)</p>
            </div>

            <div className="drop-off-contact">
              <h3>Drop off Contact</h3>
              <p>Tomiwa Olatunde</p>
              <p>08099446672</p>
            </div>

            <div className="payment-method">
              <h3>Payment method</h3>
              <p>N3,500 </p>
              <div className="sub-payment">
                <div className="card-payment">
                  <input type="radio" name="Card Payment" style={{accentColor:"#E02B45"}}/>
                  <label htmlFor="Card Payment">Card Payment</label>
                </div>
               
                <Mastercard />
              </div>
            </div>

            <div className="btn-container">
              <button className="accept-request">Accept Request</button>
              <br />
              <button className="decline-request">Decline Request</button>
            </div>
          </div>
        </div>

        <div className="accept-one-right">
          
        </div>
      </div>
    </>
  );
};

export default AcceptOneRequest;
