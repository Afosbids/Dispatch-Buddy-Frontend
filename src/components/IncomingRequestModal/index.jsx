import React from "react";
import "./style.css";


const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  zIndex: 1000,
};

function IncomingRequestModal({distance, time, pickupLoc}) {
  return (
    <div>
      <div className="modal-background" >
        <div className="modal-container" style={MODAL_STYLES}>
          <div className="modal-title">
            <h4>Incoming Request</h4>
          </div>
          <div className="modal-content">
            <h1>{time} . {distance} .</h1>
            <h4>Collins Nwachukwu</h4>
            <p style={{ width: "60%" }}>
              {pickupLoc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IncomingRequestModal;
