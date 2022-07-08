import AuthNavbar2 from "../../components/AuthNavbar2/authNavbar2";
import arrow from "./images/arrow.svg";
import "./riderRequest.css";

const RiderRequest = () => {
    return (
        <>
            <AuthNavbar2 />
            <div className="body-container">
                <div className="wrapped-header">
                    <div className="Rider-header">
                        <div className="left-arrow">
                            <img src={arrow} alt=""/>
                            <p>Back</p>
                        </div>
                        <div className="center-header">
                            <h3>Request a Rider</h3>
                        </div>
                    </div>
                    <br/>
                    <hr className="rider-line"/>
                    <br/>
                    <div className="request-form-wrapper">
                        <form className="request-form">
                            <label>Pick Up Location</label>
                            <br/>
                            <input className="request-input" type="text" placeholder="Enter Pick Up location"/>
                            <br/>
                            <br/>
                            <label>Drop off Location</label>
                            <br/>
                            <input className="request-input"  type="text" placeholder="Enter drop off location"/>
                            <br/>
                            <br/>
                            <label>Drop off Phone Number</label>
                            <br/>
                            <input className="request-input"  type="phone" placeholder="Enter drop off phone number"/>
                            <br/>
                            <br/>
                            <label>Offer (NGN)</label>
                            <br/>
                            <input className="request-input"  type="digit" placeholder="Enter an amount"/>
                            <br/>
                            <br/>
                            <br/>
                            <button type="submit" className="rider-request-btn">Order Ride</button>
                        </form>
                    </div>
                    
                </div>
            </div>
            
        </>
        
    );
}
export default RiderRequest;