import React from 'react'
import AuthNavbar from "../../components/AuthNavbar";
import OrderCompletedModal from '../../components/OrderCompletedModal';
import './style.css'

const EndTrip = () => {
  return (
    <>
    <AuthNavbar />
    <div className="endtrip">
        <OrderCompletedModal />

    </div>
    </>
  )
}

export default EndTrip