import React from 'react';
import RiderRequest from '../RiderRequest/riderRequest';
// import OrderAcceptedModal from '../../components/OrderAcceptedModal';
import "./orderAccepted.css";


const OrderAccepted = () => {
    
    return (
        <>
            <div id="myOrderAcceptedModal" className="order-modal">
                <RiderRequest />
            </div>
        </>
    );
        
}
export default OrderAccepted;