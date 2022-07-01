import filter from "./images/filter.svg";
import "./riderHistory.css";
import AuthNavbar from "../../components/AuthNavbar";

const RiderHistory = () => {
    return (
    <>
        <AuthNavbar />

        <div className="history-container">
            <h1>Ride History</h1>
            <div className="input-right">
                <input type="text" placeholder="Filter" className="filter-input" />
                <img src={filter} alt="" className="filter-img" />
            </div>  
        </div>
        <hr className="first-line"/>
            <div className="description">
                <h3>Location</h3>
                <h3>Receiver's Contact</h3>
                <h3>Date/Time</h3>
                <h3>Status</h3>
            </div>
        <div className="container2">
            <div className="row1">
                <p className="location-parag">Lagos</p>
                <p>07044234422</p>
                <p>June,Mon 5, 2022  4:15 PM</p>
                <p className="status-pending">Pending</p>
            </div>
            <hr/>
            <div className="row2">
                <p className="location-parag">Abuja</p>
                <p>08099775244</p>
                <p>June,Thurs 5, 2022  1:00 PM</p>
                <p className="status-delivered">Delivered</p>
            </div>
            <hr/>
            <div className="row3">
                <p className="location-parag">Lagos</p>
                <p>07044234422</p>
                <p>May,Tues 5, 2022  4:15 PM</p>
                <p className="status-delivered">Pending</p>
            </div>
            <hr/>
            <div className="row4">
                <p className="location-parag">Abuja</p>
                <p>08099775244</p>
                <p>May,Fri 5, 2022  1:00 PM</p>
                <p className="status-delivered">Delivered</p>
            </div>
            <hr/>
            <div className="row5">
                <p className="location-parag">Abuja</p>
                <p>08099775244</p>
                <p>April,Mon 5, 2022  1:00 PM</p>
                <p className="status-delivered">Delivered</p>
            </div>
        </div>
    </>
    );
}
export default RiderHistory;