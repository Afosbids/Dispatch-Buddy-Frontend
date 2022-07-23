import React, { useState, useEffect } from "react";
import filter from "./images/filter.svg";
import "./riderHistory.css";
import AuthNavbar from "../../components/AuthNavbar";
import axios from "axios";

const RiderHistory = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://dispatch-buddy-api.herokuapp.com/api/v1/rider/history/62ce6d2dcb417c757adcce5e"
      )
      .then((resp) => {
        setData(resp.data.bids);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(data);
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
        <div className="container2">
          {data.map((item) => (
            <div key={item._id}>
              <div className="row1">
                <p className="location-parag">Lagos</p>
                <p className="contact">07044234422</p>
                <p className="date-time">
                    {new Date(item.createdAt).toLocaleDateString()}
                    </p>
                <p className="status-pending">{item.bidStatus}</p>
              </div>
              <hr className="demacated-line" />
            </div>
          ))}
          {/* <div className="row2">
                    <p className="location-parag">Abuja</p>
                    <p className="contact">08099775244</p>
                    <p className="date-time">June,Thurs 5, 2022  1:00 PM</p>
                    <p className="status-delivered">Delivered</p>
                </div> */}
          {/* <hr className="demacated-line"/>
                <div className="row3">
                    <p className="location-parag">Lagos</p>
                    <p className="contact">07044234422</p>
                    <p className="date-time">May,Tues 5, 2022  4:15 PM</p>
                    <p className="status-delivered">Pending</p>
                </div> */}
          {/* <hr className="demacated-line"/>
                <div className="row4">
                    <p className="location-parag">Abuja</p>
                    <p className="contact">08099775244</p>
                    <p className="date-time">May,Fri 5, 2022  1:00 PM</p>
                    <p className="status-delivered">Delivered</p>
                </div> */}
          {/* <hr className="demacated-line"/>
                <div className="row5">
                    <p className="location-parag">Abuja</p>
                    <p className="contact">08099775244</p>
                    <p className="date-time">April,Mon 5, 2022  1:00 PM</p>
                    <p className="status-delivered">Delivered</p>
                </div> */}
        </div>
      </div>
    </>
  );
};
export default RiderHistory;
