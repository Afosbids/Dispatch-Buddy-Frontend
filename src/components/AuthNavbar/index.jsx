import React from "react";
import "./style.css";
import logo from "../../pages/LandingPage/images/logo.png";
import MB from "./images/Mb2.jpeg";
import { Link } from "react-router-dom";

const AuthNavbar = () => {
  const currentLoggedInUser = JSON.parse(localStorage.getItem("user"));
  console.log(currentLoggedInUser.user.name);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.replace("/user-signin");
  };


  return (
    <div className="auth-navbar">
      <div className="auth-nav-left">
        <img src={logo} alt="" />
        <p style={{ fontWeight: 800, paddingLeft: 0 }}>
          Dispatch <br /> Buddy
        </p>
      </div>

      <div className="navbar-links">
        <ul>
          <Link to="/oneincomingrequest">Home</Link>
          <Link to="/allincomingrequest"><li>Bidding</li></Link>
          <Link to="/rider-history"><li style={{width:70}}>Ride History</li></Link>
          <Link to="/rider-earnings"><li>Earnings</li></Link>
          <li>Availability</li>
          <li onClick={handleLogout}>Logout</li>
          <li>
            <label className="switch">
                <input type="checkbox"/>
                <span className="slider round"></span>
            </label>
          </li>
        </ul>
      </div>

      <div className="auth-nav-right">
        <span>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 16 16"
            height="9em"
            width="1.5em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"></path>
          </svg>
        </span>
        <Link to="/rider-profile">
          <img src={MB} alt="profile" />
        </Link>
        <span>
          <h4 style={{ width: 100 }}>{currentLoggedInUser.user.name}</h4>
        </span>
      </div>
    </div>
  );
};

export default AuthNavbar;
