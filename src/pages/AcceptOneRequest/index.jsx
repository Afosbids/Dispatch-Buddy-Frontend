import React from "react";
import "./style.css";
import AuthNavbar from "../../components/AuthNavbar";
import { ReactComponent as Mastercard } from "./images/Mastercard.svg";
import { useEffect, useState } from "react";
import Axios from "axios";
import RequestAcceptedModal from "../../components/RequestAccepedModal";
import IncomingRequestModal from "../../components/IncomingRequestModal";

const AcceptOneRequest = () => {
  const [orders, setOrders] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [distanceTime, setDistanceTime] = useState([]);


  useEffect(() => {
    Axios.get("https://dispatch-buddy-api.herokuapp.com/api/v1/rider/requests")
      .then((res) => {
        const pendingOrders = res.data.orders.filter(function (item) {
          return item.orderStatus === "Pending";
        });
        setOrders(pendingOrders[0]);
      })
      .catch((err) => console.log(err));
  }, []);



  localStorage.setItem("pickupLocation", orders.pickupLocation);
  localStorage.setItem("dropOffLocation", orders.dropOffLocation);

  const pickupLocation = localStorage.getItem("pickupLocation");
  const dropOffLocation = localStorage.getItem("dropOffLocation");

  const handleDistance = async () => {
    const response = await Axios.post(
      `https://dispatch-buddy-api.herokuapp.com/api/v1/distance/diff/`,
      {
        pickupLocation: pickupLocation,
        dropOffLocation: dropOffLocation,
      }
    );
    setDistanceTime(response.data);
  };

  useEffect(() => {
    handleDistance();
  }, []);

  const user = JSON.parse(localStorage.getItem("user"));
  const acceptRequest = async (id) => {
    const response = await Axios.patch(
      `https://dispatch-buddy-api.herokuapp.com/api/v1/rider/accept-request`,
      {
        id: id,
        riderId: user.user.userId,
      }
    );
    setIsOpen(true);
  };



  return (
    <>
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
              <p>{orders.package}</p>
            </div>

            <div className="drop-off-contact">
              <h3>Drop off Contact</h3>
              <p>{orders.dropOffContactName}</p>
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
              <button
                className="accept-request"
                onClick={() => acceptRequest(orders._id)}
              >
                Accept Request
              </button>
              <RequestAcceptedModal
                open={isOpen}
                onClose={setIsOpen}
                orderId={orders._id}
              />
              <br />
              <button className="decline-request">Decline Request</button>
            </div>
          </div>
        </div>

        <div className="accept-one-right">
          <IncomingRequestModal
            distance={distanceTime.distance}
            time={distanceTime.estimatedTime}
            pickupLoc={orders.pickupLocation}
          />
        </div>

      </div>
    </>
  );
};

export default AcceptOneRequest;
