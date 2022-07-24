import React from "react";
import "./style.css";
import { ReactComponent as Successful } from "./images/SuccessfullyDone.svg";
import ReactDom from "react-dom";
import { useNavigate } from "react-router-dom";


const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .3)",
  zIndex: 1000,
};

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "50px",
  zIndex: 1000,
};

const RequestAcceptedModal = ({ open, onClose, orderId }) => {
  const navigate = useNavigate();

  if (!open) return null;
  return ReactDom.createPortal(
    <div>
      <div style={OVERLAY_STYLES} />

      <div>
        <div className="req-accepted-container" style={MODAL_STYLES}>
          <Successful />
          <h2>Request Accepted</h2>
          <p>
            You’ve accepted to pick up <strong>Collins Nwachukwu</strong>{" "}
            request.
          </p>
          <button className="btn" onClick={() => {
            onClose(false)
            navigate(`/endtrip/${orderId}`)

            }}>
            Done
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default RequestAcceptedModal;
