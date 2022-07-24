import { useState, useEffect } from "react";
import AuthNavbar2 from "../../components/AuthNavbar2/authNavbar2";
import arrow from "./images/arrow.svg";
import Axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./riderRequest.css";
import { Modal } from "../../components/Modal";
import OrderAcceptedModal from "../../components/OrderAcceptedModal";

const url = `https://dispatch-buddy-api.herokuapp.com/api/v1/order/request/`;
const RiderRequest = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pickUp, setPickUp] = useState("");
  const [dropOff, setDropOff] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [packageDetails, setPackageDetails] = useState("");
  const [contactName, setContanctName] = useState("");
  const [offer, setOffer] = useState("");

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    navigate("/user-signin");
  }

  const riderRequest = () => {
    Axios.post(url, {
      user_id: user.user.userId,
      pickupLocation: pickUp,
      dropOffLocation: dropOff,
      dropOffPhoneNumber: phoneNum,
      dropOffContactName: contactName,
      package: packageDetails,
      amount: offer,
    }).then((response) => {
      console.log(response.data);
    });
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    closeModal();
  }, []);

  const openModal = () => {
    setIsOpen(true);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    riderRequest();
    if (!pickUp || !dropOff || !phoneNum || !offer) {
      closeModal();
    }
  };
  return (
    <>
      <AuthNavbar2 />
      <div className="body-container">
        <div className="wrapped-header">
          <div className="Rider-header">
            <Link to="/customerdashboard">
              <div className="left-arrow">
                <img src={arrow} alt="" />
                <p>Back</p>
              </div>
            </Link>
            <div className="center-header">
              <h3>Request a Rider</h3>
            </div>
          </div>
          <br />
          <hr className="rider-line" />
          <br />
          <div className="request-form-wrapper">
            <form className="request-form" onSubmit={onSubmitHandler}>
              <label>Pick Up Location</label>
              <br />
              <input
                className="request-input"
                type="text"
                placeholder="Enter Pick Up location"
                value={pickUp}
                onChange={(e) => setPickUp(e.target.value)}
              />
              <br />
              <br />
              <label>Package Details</label>
              <br />
              <input
                className="request-input"
                type="text"
                placeholder="Enter Package details"
                value={packageDetails}
                onChange={(e) => setPackageDetails(e.target.value)}
              />
              <br />
              <br />
              <label>Drop off Contact Name</label>
              <br />
              <input
                className="request-input"
                type="text"
                placeholder="Enter Package details"
                value={contactName}
                onChange={(e) => setContanctName(e.target.value)}
              />
              <br />
              <br />
              <label>Drop off Location</label>
              <br />
              <input
                className="request-input"
                type="text"
                placeholder="Enter drop off location"
                value={dropOff}
                onChange={(e) => setDropOff(e.target.value)}
              />
              <br />
              <br />
              <label>Drop off Phone Number</label>
              <br />
              <input
                className="request-input"
                type="phone"
                placeholder="Enter drop off phone number"
                value={phoneNum}
                onChange={(e) => setPhoneNum(e.target.value)}
              />
              <br />
              <br />
              <label>Offer (NGN)</label>
              <br />
              <input
                className="request-input"
                type="digit"
                placeholder="Enter an amount"
                value={offer}
                onChange={(e) => setOffer(e.target.value)}
              />
              <br />
              <br />
              <br />
              <button
                type="submit"
                className="rider-request-btn"
                onClick={() => openModal()}
              >
                Order Ride
              </button>
            </form>
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} isClosed={closeModal}>
        <OrderAcceptedModal />
      </Modal>
    </>
  );
};
export default RiderRequest;
