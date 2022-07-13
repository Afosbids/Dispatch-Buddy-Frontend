import AuthNavbar from "../../components/AuthNavbar";
import "./style.css";
import { ReactComponent as Overview } from "./images/overviewicon.svg";
import { ReactComponent as OrderComplete } from "./images/ordercompleteicon.svg";
import { ReactComponent as Messages } from "./images/Messages.svg";
import { ReactComponent as Email } from "./images/email.svg";
import { ReactComponent as Call } from "./images/call.svg";
import { ReactComponent as Location } from "./images/location.svg";
import AuthNavbar2 from "../../components/AuthNavbar2/authNavbar2";

const CustomerDashboard = () => {
  return (
    <>
      <AuthNavbar2 />
      <div className="cus-dash-body">
        <div className="customer-dashboard-overview">
          <Overview className="overview-icon"/>
          <p>Overview</p>
        </div>
        <div className="customer-dashboard-container">
          <div className="cus-dash-box total-orders">
            <div className="cus-dash-box-header">
              <h3>Total Orders</h3>
              <button>Make a Request</button>
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
            <div
              className="cus-dash-box-header"
            >
              <h3 style={{marginBottom:'5px'}}>My Orders</h3>
              <p style={{marginBottom:'-5px'}}>See all</p>
            </div>
            <div>
              <div className="my-orders-body">
                <div className="my-orders-body-left">
                  <p>
                    <strong>Today, </strong> 4:15PM{" "}
                  </p>
                  <p className="my-orders-body-sec-p">Order No - 1836897632</p>
                </div>
                <div className="my-orders-body-right">
                  <p className="order-status-complete">Pending</p>
                  <p className="my-orders-body-sec-p">#2,200.00</p>
                </div>
              </div>
            </div>
            <div>
              <div className="my-orders-body">
                <div className="my-orders-body-left">
                  <p>
                    <strong>Today, </strong> 4:15PM{" "}
                  </p>
                  <p className="my-orders-body-sec-p">Order No - 1836897632</p>
                </div>
                <div className="my-orders-body-right">
                  <p className="order-status-pending">Pending</p>
                  <p className="my-orders-body-sec-p">#2,200.00</p>
                </div>
              </div>
              <div className="my-orders-body">
                <div className="my-orders-body-left">
                  <p>
                    <strong>Today, </strong> 4:15PM{" "}
                  </p>
                  <p className="my-orders-body-sec-p">Order No - 1836897632</p>
                </div>
                <div className="my-orders-body-right">
                  <p className="order-status-pending">Pending</p>
                  <p className="my-orders-body-sec-p">#2,200.00</p>
                </div>
              </div>
              <div className="my-orders-body">
                <div className="my-orders-body-left">
                  <p>
                    <strong>Today, </strong> 4:15PM{" "}
                  </p>
                  <p className="my-orders-body-sec-p">Order No - 1836897632</p>
                </div>
                <div className="my-orders-body-right">
                  <p className="order-status-pending">Pending</p>
                  <p className="my-orders-body-sec-p">#2,200.00</p>
                </div>
              </div>
              <div className="my-orders-body">
                <div className="my-orders-body-left">
                  <p>
                    <strong>Today, </strong> 4:15PM{" "}
                  </p>
                  <p className="my-orders-body-sec-p">Order No - 1836897632</p>
                </div>
                <div className="my-orders-body-right">
                  <p className="order-status-pending">Pending</p>
                  <p className="my-orders-body-sec-p">#2,200.00</p>
                </div>
              </div>
            </div>
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
                <Email className="icon" />
                <p>hello@buddydispatch.com</p>
              </div>
              <div className="contactus-icon">
                <Call className="icon" />
                <p>08099776655, 07099664422</p>
              </div>
              <div className="contactus-icon">
                <Location className="icon" />
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
