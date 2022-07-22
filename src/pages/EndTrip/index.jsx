import React from 'react'
import AuthNavbar from "../../components/AuthNavbar";
import OrderCompletedModal from '../../components/OrderCompletedModal';
import './style.css'
import { useState} from 'react';
import { useParams } from "react-router-dom";


const EndTrip = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();
  console.log(id)
  return (

    <>
    <AuthNavbar />
    <button onClick={() => setIsOpen(true)}>arrive destination</button>

    <div className="endtrip">
        <OrderCompletedModal open={isOpen}
                  onClose={() => setIsOpen(false)} orderId={id} />

    </div>
    </>
  )
}

export default EndTrip