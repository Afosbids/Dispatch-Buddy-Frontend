import "./style.css";
import { useEffect, useState } from "react";
import { ReactComponent as FilterIcon } from "./images/filtericon.svg";
import AuthNavbar2 from "../../components/AuthNavbar2/authNavbar2";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const ShipperRideHistory = () => {
  const [orders, setOrders] = useState();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user.user.userId;
  if (!user) {
    navigate("/user-signin");
  }

  const getAllOrders = async () => {
    const response = await Axios.get(
      `https://dispatch-buddy-api.herokuapp.com/api/v1/order/shipper-orders/${userId}`
    );
    setOrders(response.data.orders);
  };

  useEffect(() => {
    getAllOrders();
    console.log("order: ", orders);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ordersArray = Array.isArray(orders)
    ? orders.map((order) => {
        return (
          <>
            <div className="shipperridehistory-content">
              <p>{order.dropOffLocation}</p>
              <p className="content-amount">{order.amount}</p>
              <p className="content-datetime">
                {new Date(order.createdAt).toDateString() +
                  " " +
                  new Date(order.createdAt).toLocaleTimeString()}
              </p>
              <p className="content-status">{order.orderStatus}</p>
            </div>
            <hr className="content-line" />
          </>
        );
      })
    : [];

  return (
    <>
      <AuthNavbar2 />
      <div className="ShipperRideHistory">
        <div className="shipperridehistory">
          <div className="shipperridehistory-header">
            <h2>History</h2>
            <div className="filter">
              <div>
                <p>Filter</p>
              </div>

              <div className="filter-icon">
                <FilterIcon />
              </div>
            </div>
          </div>

          <div className="shipperridehistory-title">
            <p>Delivery Location</p>
            <p>Amount</p>
            <p>Date/Time</p>
            <p>Status</p>
          </div>
          {ordersArray}

          {/* <div className="shipperridehistory-content">
                <p>Ikeja - Ajah</p>
                <p className="content-amount">N4,000</p>
                <p className="content-datetime">June Mon 5, 2022  4:15 PM</p>
                <p className="content-status">Delivered</p>
            </div>
            <hr className="content-line" />
            <div className="shipperridehistory-content">
                <p>Ikeja - Ajah</p>
                <p className="content-amount">N4,000</p>
                <p className="content-datetime">June Mon 5, 2022  4:15 PM</p>
                <p className="content-status">Delivered</p>
            </div>
            <hr className="content-line" />
            <div className="shipperridehistory-content">
                <p>Ikeja - Ajah</p>
                <p className="content-amount">N4,000</p>
                <p className="content-datetime">June Mon 5, 2022  4:15 PM</p>
                <p className="content-status">Delivered</p>
            </div> */}
        </div>
      </div>
    </>
  );
};

export default ShipperRideHistory;
