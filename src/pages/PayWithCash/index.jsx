import "./style.css";
import { ReactComponent as BackIcon } from "./images/backicon.svg";
import AuthNavbar2 from "../../components/AuthNavbar2/authNavbar2";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const PayWithCash = () => {

  const [confirmation, setConfirmation] = useState({msg: ""})
  const [selected, setSeleted] = useState(false)
  
  const handleChange = () => {
    setSeleted(true)
  }

  const paymentOption= async()=>{
      const res = await axios.post("https://dispatch-buddy-api.herokuapp.com/payment/62d3ea5114ea654b191808ff", {Cash: "Cash"})
          setConfirmation(res.data)
      }

  return (
    <>
      <AuthNavbar2 />
      <div className="paywithcash-container">
        <div className="paywithcash-header">
          <div className="paywithcash-header-left">
            <Link to="/payment-option"><BackIcon /></Link>
            <p>Back</p>
          </div>

          <p className="choosecard">Choose Cards</p>
        </div>
        <hr className="paywithcash-line" />
        {confirmation && <p style={{color:"green", textAlign:"center"}}>{confirmation.msg}</p>}
        <div className="paywithcash-content">
          <h4>Pay with Cash</h4>
          <div className="paywithcash-radio">
          <label htmlFor="cash" style={{display:"none"}}>Cash</label>
          <input type="radio" name="cash" 
            checked={selected === true}
            onChange={()=>handleChange()}/>
        
          <p>Cash</p>
          </div>

          <Link><button onClick={()=> {selected && paymentOption()}}>Done</button></Link>

        </div>
      </div>
    </>
  );
};

export default PayWithCash;
