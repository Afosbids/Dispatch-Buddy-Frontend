import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";

const RiderInfoModal = ({ orderId, closeModal }) => {
  const [riderName, setRIderName] = useState();
  const [ridernum, setRiderNum] = useState();
  console.log(orderId);
  const fetchRider = async () => {
    const response = await Axios.get(
      `https://dispatch-buddy-api.herokuapp.com/api/v1/rider/requests/${orderId}`
    );

    if (response.data.order.rider === undefined) {
      setRIderName("nil");
      setRiderNum("nil");
    } else {
      setRIderName(response.data.order.rider.name);
      setRiderNum(response.data.order.rider.phoneNum);
    }

    console.log(response.data.order.rider);
  };

  useEffect(() => {
    fetchRider();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="order-modal-content">
        <div className="mark-img"></div>
        <div className="order-popup">
          <h1>Order Info</h1>
          <h3 className="paragraph1">
            Rider's name: <span>{riderName}</span>
          </h3>
          <h3 className="paragraph1">
            Rider's phone number: <span>{ridernum}</span>
          </h3>
          <button
            type="submit"
            id="myOrderBtn"
            className="order-accepted-btn"
            onClick={() => closeModal()}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};
export default RiderInfoModal;
