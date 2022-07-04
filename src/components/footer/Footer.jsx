import React from "react";
import logoAndText from "./images/logoAndText.png";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <nav className="footer__nav">
        <div className="left">
          <div>
            <img src={logoAndText} alt="" style={{ display: "inline" }} />
          </div>
          <p>© 2022 All rights reserved</p>
        </div>
        <div className="center">
          <div>
            <h4>Home</h4>
            <h4>About Us</h4>
            <h4>FAQ</h4>
            <h4>Contact Us</h4>
          </div>
          <div>
            <p>Privacy Policy</p>
            <p>Terms of Condition</p>
            <p>Legal</p>
            <p>Help</p>
          </div>
        </div>
        <div className="right" style={{paddingRight: 170, width: 400}}>
          <div>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-google"></i>
          </div>
          <div>
            <p style={{ marginLeft: 35 }}>English version</p>
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
