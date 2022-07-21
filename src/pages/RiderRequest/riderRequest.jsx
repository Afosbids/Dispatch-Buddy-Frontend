import { useState , useEffect} from "react";
import AuthNavbar2 from "../../components/AuthNavbar2/authNavbar2";
import arrow from "./images/arrow.svg";
import "./riderRequest.css";
import { Modal } from '../../components/Modal'
import OrderAcceptedModal from '../../components/OrderAcceptedModal';
import {Link} from "react-router-dom"


const RiderRequest = () => {
    const [isOpen, setIsOpen] = useState(false)


    const closeModal=()=>{
        setIsOpen(false)
    }

    useEffect(()=>{
        closeModal()
    },[])

    const openModal=()=>{
        setIsOpen(true)
    }

    const onSubmitHandler=(e)=>{
        e.preventDefault()
    }
    return (
        <>
            <AuthNavbar2 />
            <div className="body-container">
                <div className="wrapped-header">
                    <div className="Rider-header">
                        <div className="left-arrow">
                            <Link to="/customerdashboard"><img src={arrow} alt=""/> </Link>
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
                        <form className="request-form" onSubmit={onSubmitHandler}>
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
                            <button 
                                type="submit" 
                                className="rider-request-btn"
                                onClick={()=>openModal()}>Order Ride</button>
                        </form>
                    </div>
                    
                </div>
            </div>
            <Modal isOpen ={isOpen} isClosed = {closeModal}>
                <OrderAcceptedModal />
            </Modal>
        </>
        
    );
}
export default RiderRequest;