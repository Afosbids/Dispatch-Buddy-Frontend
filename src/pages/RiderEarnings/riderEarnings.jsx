import "./riderEarnings.css";
import smallcar from "./images/smallcar.svg";
import time from "./images/Time.svg";
import AuthNavbar from "../../components/AuthNavbar";
import Axios from "axios";
import { useState, useEffect } from "react";

const RiderEarnings = () => {
  const [orderHistory, setOrderHistory] = useState([]);
  const [earning, setEarning] = useState([]);
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
    setEarning(response.data.earnings);
    setOrderHistory(response.data.earnings.orderHistory);
  };

  const arr = 
  Array.isArray(orderHistory)
    ? orderHistory.map((item, index) => {
    return (
      <div key={index} className="earnings-group">
        <div className="earnings-group-inner">
          <p className="earnings-right">
            <strong>Today</strong>, 10:15AM
          </p>
          <div className="earnings-left">
            <input
              type="text"
              placeholder="Delivered"
              className="earnings-input"
            />
            <p>N{item.amount}</p>
          </div>
        </div>
      </div>
    );
    
  })

  : [];


  return (
    <>
      <AuthNavbar />
      <div className="magenta-div"></div>
      <div className="body-group">
        <div className="wrapped-div">
          <br />
          {arr}
        
          <br />
          <div className="container1">
            <div className="column-text">
              <p>MY EARNINGS</p>
              <h1>{earning.totalEarnings}</h1>
            </div>
            <br />
            <div className="row-text">
              <div className="ride-div">
                <img src={smallcar} alt="" className="img-ride" />
                <p>{earning.totalRides} Rides</p>
              </div>
              <div className="time-div">
                <img src={time} alt="" className="img-time" />
                <p>890hrs . 20mins</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default RiderEarnings;
