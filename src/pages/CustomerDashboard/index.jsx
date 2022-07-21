// import AuthNavbar from "../../components/AuthNavbar";
import "./style.css";
import { ReactComponent as Overview } from "./images/overviewicon.svg";
import { ReactComponent as OrderComplete } from "./images/ordercompleteicon.svg";
import { ReactComponent as Messages } from "./images/Messages.svg";
import { ReactComponent as Email } from "./images/email.svg";
import { ReactComponent as Call } from "./images/call.svg";
import { ReactComponent as Location } from "./images/location.svg";
import AuthNavbar2 from "../../components/AuthNavbar2/authNavbar2";
import Axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CustomerDashboard = () => {
  const currentLoggedInUser = JSON.parse(localStorage.getItem("user"));
  const [shipperOrder, setShipperOrder] = useState([]);

  useEffect(() => {
    Axios.get(
      `https://dispatch-buddy-api.herokuapp.com/api/v1/order/shipper-orders/${currentLoggedInUser.user.userId}`
    )
      .then((res) => {
        setShipperOrder(res.data);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, []);

  console.log(shipperOrder);

  const arr = Array.isArray(shipperOrder.orders)
    ? shipperOrder.orders.map((item, index) => {
        let text = item.createdAt;
        let result = text.slice(11, 16);
        return (
          <div className="my-orders-body" key={index}>
            <div className="my-orders-body-left">
              <p>
                <strong>Today, </strong> {result} PM
              </p>
              <p className="my-orders-body-sec-p">Order No - {item._id}</p>
            </div>
            <div className="my-orders-body-right">
              <p
                className={
                  item.orderStatus === "Pending"
                    ? "order-status-pending"
                    : "order-status-complete"
                }
              >
                {item.orderStatus}
              </p>
              <p className="my-orders-body-sec-p">#{item.amount}</p>
            </div>
          </div>
        );
      })
    : [];

  return (
    <>
      <AuthNavbar2 />
      <div className="cus-dash-body">
        <div className="customer-dashboard-overview">
          <Overview className="overview-icon" />
          <p>Overview</p>
        </div>
        <div className="customer-dashboard-container">
          <div className="cus-dash-box total-orders">
            <div className="cus-dash-box-header">
              <h3>Total Orders</h3>
              <Link to="/rider-request">
                <button>Make a Request</button>
              </Link>
            </div>
            <div className="total-orders-body">
              <div>
                <h1>200</h1>
                <p>Orders completed</p>
              </div>
              <div className="total-orders-body-right">
                <OrderComplete />
              </div>
            </div>
          </div>
          <div className="cus-dash-box my-orders">
            <div className="cus-dash-box-header">
              <h3 style={{ marginBottom: "5px" }}>My Orders</h3>
              <p style={{ marginBottom: "-5px" }}>See all</p>
            </div>
            <div>{arr}</div>
          </div>
          <div className="cus-dash-box messages">
            <div className="cus-dash-box-header">
              <h3>Messages</h3>
            </div>

            <div className="messages-body">
              <Messages />
              <h3>No Messages</h3>
              <p>You currently do not have any message</p>
            </div>
          </div>
          <div className="cus-dash-box contactus">
            <div className="cus-dash-box-header">
              <h3>Contact Us</h3>
            </div>
            <div className="contactus-body">
              <h2>Get in touch</h2>
              <p className="blur-paragraph">
                Any question or remarks? Send us a message
              </p>
              <div className="contactus-icon">
                <Email className="" />
                <p>hello@buddydispatch.com</p>
              </div>
              <div className="contactus-icon">
                <Call className="" />
                <p>08099776655, 07099664422</p>
              </div>
              <div className="contactus-icon">
                <Location className="" />
                <p>25, Adetola street, Ikoyi, Lagos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerDashboard;
