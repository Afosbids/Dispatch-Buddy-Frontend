import "./riderEarnings.css";
import smallcar from "./images/smallcar.svg";
import time from "./images/Time.svg";


const RiderEarnings = () => {
    return (
        <>
        <nav>
            
        </nav>
        <div className="magenta-div"></div>
        <br/>
        <br/>
        <div className="wrapped-div">
            <div className="earnings-group">
                <div className="earnings-group-inner">
                    <p><strong>Yesterday</strong>, 3:30PM</p>
                    <div>
                    <input type="text" placeholder="Delivered" className="earnings-input"/>
                    <p>N3,500.00</p>
                    </div>   
                </div>
            </div>
            <br/>
            <div className="earnings-group">
                <div className="earnings-group-inner">
                    <p><strong>Yesterday</strong>, 3:30PM</p>
                    <div>
                    <input type="text" placeholder="Delivered" className="earnings-input"/>
                    <p>N3,500.00</p>
                    </div>   
                </div>
            </div>
            <br/>
            <div className="earnings-group">
                <div className="earnings-group-inner">
                    <p><strong>Yesterday</strong>, 3:30PM</p>
                    <div>
                    <input type="text" placeholder="Delivered" className="earnings-input"/>
                    <p>N3,500.00</p>
                    </div>   
                </div>
            </div>
            <div className="earnings-group">
                <div className="earnings-group-inner">
                    <p><strong>Today</strong>, 10:15AM</p>
                    <div>
                    <input type="text" placeholder="Delivered" className="earnings-input"/>
                    <p>N2,200.00</p>
                    </div>   
                </div>
            </div>
            <br/>
            <div className="container1">
                <div className="column-text">
                    <p>MY EARNINGS</p>
                    <h1>N236,000</h1>
                </div>
                
                <div className="row-text">
                    <div className="ride-div">
                        <img src={smallcar} alt=""/>
                        <p>112 Rides</p>
                    </div>
                    <div className="time-div">
                        <img src={time} alt=""/>
                        <p>890hrs . 20mins</p>
                    </div>
                </div> 
            </div>
        </div>
        </>
    );
}
export default RiderEarnings;