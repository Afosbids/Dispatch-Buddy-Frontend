import filter from "./images/filter.svg";
import "./riderHistory.css";

const RiderHistory = () => {
    return (
    <>
        <div className="container1">
            <h1>Ride History</h1>
            <div className="input-right">
                <input type="text" placeholder="Filter" className="filter-input" />
                <img src={filter} alt="" className="filter-img" />
            </div>  
        </div>
            <div className="description">
                <h3>Location</h3>
                <h3>Phone Number</h3>
                <h3>Date/Time</h3>
                <h3>Status</h3>
            </div>
        <div className="container2">
            <div className="row1">
                <p className="location-parag">Lagos</p>
                <p>07044234422</p>
                <p>Mon 5, 2022  4:15 PM</p>
                <p className="status-pending">Pending</p>
            </div>
            <hr/>
            <div className="row2">
                <p className="location-parag">Abuja</p>
                <p>08099775244</p>
                <p>Mon 5, 2022  4:15 PM</p>
                <p className="status-delivered">Delivered</p>
            </div>
            <hr/>
            <div className="row3">
                <p className="location-parag">Lagos</p>
                <p>07044234422</p>
                <p>Mon 5, 2022  4:15 PM</p>
                <p className="status-pending">Pending</p>
            </div>
            <hr/>
            <div className="row4">
                <p className="location-parag">Abuja</p>
                <p>08099775244</p>
                <p>Mon 5, 2022  4:15 PM</p>
                <p className="status-delivered">Delivered</p>
            </div>
            <hr/>
            <div className="row5">
                <p className="location-parag">Abuja</p>
                <p>08099775244</p>
                <p>Mon 5, 2022  4:15 PM</p>
                <p className="status-delivered">Delivered</p>
            </div>
        </div>
    </>
    );
}
export default RiderHistory;