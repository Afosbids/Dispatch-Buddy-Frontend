import AuthNavbar from "../../components/AuthNavbar";
import "./style.css";
import { ReactComponent as FilterIcon } from "./images/filtericon.svg"

const ShipperRideHistory = () => {
  return (
    <>
      <AuthNavbar />
      <div className="ShipperRideHistory">

        <div className="shipperridehistory">
            <div className="shipperridehistory-header">
                <h2>History</h2>
                <div className="filter">
                    <div><p>Filter</p></div>
                    
                    <div className="filter-icon"><FilterIcon /></div>
                </div>
            </div>

            <div className="shipperridehistory-title">
                <p>Delivery Location</p>
                <p>Amount</p>
                <p>Date/Time</p>
                <p>Status</p>
            </div>
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
            </div>
        </div>
      </div>
    </>
  );
};

export default ShipperRideHistory;
