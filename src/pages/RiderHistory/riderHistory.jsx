import filter from "./images/filter.svg";
import "./riderHistory.css";
import AuthNavbar from "../../components/AuthNavbar";
import Axios from "axios";
import { useState, useEffect } from "react";

const RiderHistory = () => {
  const [orderHistory, setOrderHistory] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    getOrderHistory();
  }, []);

  const getOrderHistory = async () => {
    const response = await Axios.post(
      `https://dispatch-buddy-api.herokuapp.com/api/v1/rider/riderEarnings`,
      {
        riderId: user.user.userId,
      }
    );
    console.log(response.data);
    setOrderHistory(response.data.earnings.orderHistory);
  };

  const arr = Array.isArray(orderHistory)
    ? orderHistory.map((item, index) => {
        return (
          <>
            <div className="row1">
              <p className="location-parag">{item.dropOffLocation}</p>
              <p className="contact">{item.dropOffPhoneNumber}</p>
              <p className="date-time">June,Mon 5, 2022 4:15 PM</p>
              <p className="status-pending">{item.orderStatus}</p>
            </div>
            <hr className="demacated-line" />
          </>
        );
      })
    : [];
  return (
    <>
      <AuthNavbar />
      <div className="whole-body">
        <div className="history-container">
          <h1>Ride History</h1>
          <div className="input-right">
            <input type="text" placeholder="Filter" className="filter-input" />
            <img src={filter} alt="" className="filter-img" />
          </div>
        </div>
        <hr className="first-line" />
        <div className="description">
          <h3 className="desc-location">Location</h3>
          <h3 className="desc-contact">Receiver's Contact</h3>
          <h3 className="desc-date">Date/Time</h3>
          <h3 className="desc-status">Status</h3>
        </div>
        <div className="container2">{arr}</div>
      </div>
    </>
  );
};
export default RiderHistory;
