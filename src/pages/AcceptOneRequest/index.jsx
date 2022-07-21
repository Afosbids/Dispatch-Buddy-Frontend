import React from "react";
import "./style.css";
import AuthNavbar from "../../components/AuthNavbar";
import { ReactComponent as Mastercard } from "./images/Mastercard.svg";
import { useEffect, useState } from "react";
import Axios from "axios";
// import IncomingRequestModal from "../../components/IncomingRequestModal";
import RequestAcceptedModal from "../../components/RequestAccepedModal";

const AcceptOneRequest = () => {
    const [orders, setOrders] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
  
    useEffect(() => {
      Axios.get("https://dispatch-buddy-api.herokuapp.com/api/v1/rider/requests")
        .then((res) => {
            const pendingOrders = res.data.orders.filter(function(item){
              return item.orderStatus == "Pending";
            })
          setOrders(pendingOrders[0]);
        })
        .catch((err) => console.log(err));
    }, [isOpen]);
  
    const acceptRequest = async (id) => {
      const response = await Axios.patch(
        `https://dispatch-buddy-api.herokuapp.com/api/v1/rider/accept-request`,
        {
          id: id,
        }
      );
      console.log(response);
      setIsOpen(true);
    };

    console.log(orders._id)

  return (
    <>
      {/* <IncomingRequestModal /> */}
      {/* <RequestAcceptedModal /> */}
      
      <AuthNavbar />
      <div className="acceptone-container">
        <div className="accept-one-left">
          <div className="request-details">
            <h4>Request details</h4>
            <div className="pickup-loaction">
              <h3>Pickup location</h3>
              <p>{orders.pickupLocation}</p>
            </div>

            <div className="delivery-location">
              <h3>Delivery location</h3>
              <p>{orders.dropOffLocation}</p>
            </div>

            <div className="package-details">
              <h3>Package details</h3>
              <p>New Hp core i7 Laptop (fully packed)</p>
            </div>

            <div className="drop-off-contact">
              <h3>Drop off Contact</h3>
              <p>Tomiwa Olatunde</p>
              <p>{orders.dropOffPhoneNumber}</p>
            </div>

            <div className="payment-method">
              <h3>Payment method</h3>
              <p>{orders.amount}</p>
              <div className="sub-payment">
                <div className="card-payment">
                  <input
                    type="radio"
                    name="Card Payment"
                    style={{ accentColor: "#E02B45" }}
                  />
                  <label htmlFor="Card Payment">Card Payment</label>
                </div>

                <Mastercard />
              </div>
            </div>

            <div className="btn-container">
              <button className="accept-request" onClick={() => acceptRequest(orders._id)}>Accept Request</button>
              <RequestAcceptedModal
                  open={isOpen}
                  onClose={() => setIsOpen(false)}
                />
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
