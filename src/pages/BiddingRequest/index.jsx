import React from "react";
import "./style.css";
import AuthNavbar from "../../components/AuthNavbar";
import BiddingCard from "../../components/BiddingCard";
import { useEffect, useState } from "react";
import Axios from "axios";
import RequestAcceptedModal from "../../components/RequestAccepedModal";

const BiddingRequest = () => {
  const [biddingRequest, setBiddingRequest] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    Axios.get("https://dispatch-buddy-api.herokuapp.com/api/v1/rider/requests")
      .then((res) => {
        console.log(res.data);
        setBiddingRequest(res.data);
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

  const arr = Array.isArray(biddingRequest.orders)
    ? biddingRequest.orders.map((item, index) => {
        return (
          <div
            className={
              item.orderStatus === "Accepted"
                ? "bidding-accepted"
                : "biddingdisabled"
            }
          >
            <BiddingCard key={index}>
              <div className="pickup-loaction">
                <h3>Pickup location</h3>
                <p>{item.pickupLocation}</p>
              </div>

              <div className="delivery-location">
                <h3>Delivery location</h3>
                <p>{item.dropOffLocation}</p>
              </div>

              <div className="package-details">
                <h3>Package</h3>
                <p>New Hp core i7 Laptop (fully packed)</p>
              </div>

              <div className="drop-off-contact">
                <h3>Offer</h3>
                <p>{item.amount}</p>
              </div>

              <div className="package-details">
                <h3>Payment method</h3>
                <p>Cash</p>
              </div>

              <div className="btn-contain">
                <button
                  className="accept-req "
                  onClick={() => acceptRequest(item._id)}
                >
                  Accept Request
                </button>
                <RequestAcceptedModal
                  open={isOpen}
                  onClose={() => setIsOpen(false)}
                />
                <br />
                <button className="decline-req">Decline Request</button>
              </div>
            </BiddingCard>
          </div>
        );
      })
    : [];

  return (
    <>
      <AuthNavbar />
      <div className="container">
        <div className="all-bidding">
          <div className="bidding-head">
            <h2>Bidding Orders</h2>
            <div className="head-status">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M9 0C7.21997 0 5.47991 0.527841 3.99987 1.51677C2.51983 2.50571 1.36628 3.91131 0.685088 5.55585C0.00389957 7.20038 -0.17433 9.00998 0.172937 10.7558C0.520204 12.5016 1.37737 14.1053 2.63604 15.364C3.89472 16.6226 5.49836 17.4798 7.24419 17.8271C8.99002 18.1743 10.7996 17.9961 12.4442 17.3149C14.0887 16.6337 15.4943 15.4802 16.4832 14.0001C17.4722 12.5201 18 10.78 18 9C18 6.61305 17.0518 4.32387 15.364 2.63604C13.6761 0.948212 11.387 0 9 0ZM9 16.5C7.51664 16.5 6.0666 16.0601 4.83323 15.236C3.59986 14.4119 2.63856 13.2406 2.07091 11.8701C1.50325 10.4997 1.35473 8.99168 1.64411 7.53682C1.9335 6.08197 2.64781 4.74559 3.6967 3.6967C4.7456 2.64781 6.08197 1.9335 7.53683 1.64411C8.99168 1.35472 10.4997 1.50325 11.8701 2.0709C13.2406 2.63856 14.4119 3.59985 15.236 4.83322C16.0601 6.06659 16.5 7.51664 16.5 9C16.5 10.9891 15.7098 12.8968 14.3033 14.3033C12.8968 15.7098 10.9891 16.5 9 16.5Z"
                  fill="#21334F"
                />
                <path
                  d="M8.99987 7.27498C8.80096 7.27498 8.61019 7.354 8.46954 7.49465C8.32889 7.6353 8.24987 7.82607 8.24987 8.02498V13.125C8.24987 13.3239 8.32889 13.5147 8.46954 13.6553C8.61019 13.796 8.80096 13.875 8.99987 13.875C9.19878 13.875 9.38955 13.796 9.5302 13.6553C9.67085 13.5147 9.74987 13.3239 9.74987 13.125V8.02498C9.74987 7.82607 9.67085 7.6353 9.5302 7.49465C9.38955 7.354 9.19878 7.27498 8.99987 7.27498ZM8.99987 4.19998C8.79683 4.20762 8.60442 4.2927 8.46216 4.43775C8.31989 4.58281 8.23856 4.77684 8.23487 4.97998V5.09998C8.23451 5.19784 8.25453 5.29469 8.29365 5.38439C8.33278 5.47408 8.39014 5.55465 8.4621 5.62097C8.53406 5.68728 8.61903 5.73789 8.71162 5.76957C8.8042 5.80125 8.90237 5.81331 8.99987 5.80498C9.19641 5.79756 9.38289 5.71616 9.52197 5.57708C9.66104 5.43801 9.74244 5.25152 9.74987 5.05498V4.87498C9.75046 4.77966 9.73085 4.68529 9.69234 4.5981C9.65383 4.5109 9.59729 4.43285 9.52643 4.36908C9.45558 4.30531 9.37202 4.25727 9.28126 4.22813C9.1905 4.19898 9.0946 4.18939 8.99987 4.19998Z"
                  fill="#21334F"
                />
              </svg>
              <p>You can accept or decline a bid.</p>
            </div>
          </div>

          <div className="bidding-children">{arr}</div>
        </div>
      </div>
    </>
  );
};

export default BiddingRequest;
