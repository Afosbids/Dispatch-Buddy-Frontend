import "./paymentOption.css";
import AuthNavbar2 from "../../components/AuthNavbar2/authNavbar2";
import Card from "./images/Card.png";
import arrow from "./images/arrow.svg";


const PaymentOption = () => {
    return (
        <>
                <AuthNavbar2 />
                <div className="payment-body-container">
                <div className="payment-wrapped-header">
                    <div className="payment-option-header">
                        <div className="payment-option-arrow">
                            <img src={arrow} alt=""/>
                            <p>Back</p>
                        </div>
                        <div className="payment-center-header">
                            <h3>Choose a Payment method</h3>
                        </div>
                    </div>
                    <br/>
                    <hr className="payment-option-line"/>
                    <br/>
                    <div className="request-form-wrapper">
                        <img src={Card} alt=""/>
                        <div className="payment-option-desc">
                            <p><strong>Choose a Payment method</strong><br/>
                            <span>You've not added a card yet</span></p>
                        </div>
                        {/* <br/> */}
                        <button type="submit" className="payment-option-btn1">Card</button>
                        <br/>
                        <button type="submit" className="payment-option-btn2">Cash</button>
                    </div>
                    
                </div>
            </div>

        </> 
    );
}
export default PaymentOption;