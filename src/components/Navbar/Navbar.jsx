import { useState } from "react";
import logo from "../../pages/LandingPage/images/logo.png";
import "./navbar.css";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <nav
      onClick={handleClick}
      className={`navbar collapsible ${toggle ? "collapsible--expanded" : ""}`}
    >
      <div className="left">
        <img src={logo} alt="" />
        <p>Dispatch Buddy</p>
      </div>
      <div className="toggler">
        <p>toggler</p>
      </div>
      <div className="nav__list collapsible__content">
        <ul>
          <li className="nav__item">Home</li>
          <li className="nav__item">About</li>
          <li className="nav__item">Services</li>
          <li className="nav__item">Contact Us</li>
          <li className="nav__item login-nav">Login</li>
        </ul>
      </div>
      <div className="login">
        <p>Login</p>
      </div>
    </nav>
  );
};

export default Navbar;
