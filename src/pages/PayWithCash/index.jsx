import "./style.css";
import { ReactComponent as BackIcon } from "./images/backicon.svg";
import AuthNavbar2 from "../../components/AuthNavbar2/authNavbar2";

const PayWithCash = () => {
  return (
    <>
      <AuthNavbar2 />
      <div className="paywithcash-container">
        <div className="paywithcash-header">
          <div className="paywithcash-header-left">
            <BackIcon />
            <p>Back</p>
          </div>

          <p className="choosecard">Choose Cards</p>
        </div>
        <hr className="paywithcash-line" />

        <div className="paywithcash-content">
          <h4>Pay with Cash</h4>
          <div className="paywithcash-radio">
          <label htmlFor="cash" style={{display:"none"}}>Cash</label>
          <input type="radio" name="cash" />
          <p>Cash</p>
          </div>

          <button>Done</button>
          
        </div>
      </div>
    </>
  );
};

export default PayWithCash;
