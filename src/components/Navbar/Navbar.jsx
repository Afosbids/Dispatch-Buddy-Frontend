import { useState } from "react";
import {Link} from "react-router-dom"
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
      <div className="Left">
        <img src={logo} alt="" />
        <p style={{fontWeight: 800, paddingLeft: 0}}>Dispatch Buddy</p>
      </div>
      <div className="toggler">
        <p>toggler</p>
      </div>
      <div className="nav__list collapsible__content">
        <ul>
          <Link to="/"><li className="nav__item" style={{paddingRight: 10}}>Home</li></Link>
          <li className="nav__item">About</li>
          <li className="nav__item">Services</li>
          <li className="nav__item" style={{width: 100}}><p>Contact Us</p></li>
          <li className="nav__item login-nav">Login</li>
        </ul>
      </div>
      <div className="login">
      <Link to="/user-signin"><p>Login</p></Link> 
      </div>
    </nav>
  );
};
export default Navbar;
