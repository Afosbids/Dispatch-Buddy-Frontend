import AuthNavbar2 from "../components/AuthNavbar2";
import arrow from "./images/arrow.svg";
import "./riderRequest.css";

const RiderRequest = () => {
    return (
        <>
            <AuthNavbar2 />
            <div className="wrapped-header">
                <div className="Rider-header">
                    <div className="left-arrow">
                        <img src={arrow} alt=""/>
                        <span><p>Back</p></span>
                    </div>
                    <div>
                        <h3>Request a Rider</h3>
                    </div>
                </div>
            </div>
        </>
        
    );
}
export default RiderRequest;