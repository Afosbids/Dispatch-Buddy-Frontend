import React from "react";
import building from "./images/building.png";
import world from "./images/world.png";
import customerCare from "./images/customer-care.png";
import secureData from "./images/secure-data.png";
import shipping from "./images/shipping.png";
import time from "./images/time.png";
import shutterStock from "./images/shutterstock.png";
import shutterStock2 from "./images/shutterstock2.png";
import customerStockImage from "./images/customerStockImage.jpeg";
import "./landingPage.css";

const LandingPage = () => {
  return (
    <>
      <section className="hero">
        <div className="overlay"></div>
        <img src={shutterStock} className="hero__img" alt="" />
        <div className="hero__content">
          <h1 className="hero__text">
            Fast, Reliable &amp; Quality Dispatch Service
          </h1>
          <p className="hero__slogan">Send. Track. Recive </p>
          <div className="hero__button">
            <button className="button customer__button">
              Register as a Customer
            </button>
            <button className="button rider__button">
              Register as a Rider
            </button>
          </div>
        </div>
      </section>
      <section className="top__notch">
        <div>
          <h3>Top Notch Services</h3>
          <p>
            Quickly integrate powerful solutions that gives you more flexibility
            and control over your parcel shipping and logistics processes.
          </p>
        </div>
      </section>
      <section className="service__grid">
        <div className="service__div">
          <img src={secureData} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue at
            eu, magna suscipit purus. Felis mauris eu ultrices vestibulum id
            pellentesque consectetur.
          </p>
        </div>
        <div className="service__div">
          <img src={time} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue at
            eu, magna suscipit purus. Felis mauris eu ultrices vestibulum id
            pellentesque consectetur.
          </p>
        </div>
        <div className="service__div">
          <img src={shipping} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue at
            eu, magna suscipit purus. Felis mauris eu ultrices vestibulum id
            pellentesque consectetur.
          </p>
        </div>
        <div className="service__div">
          <img src={customerCare} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue at
            eu, magna suscipit purus. Felis mauris eu ultrices vestibulum id
            pellentesque consectetur.
          </p>
        </div>
        <div className="service__div">
          <img src={world} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue at
            eu, magna suscipit purus. Felis mauris eu ultrices vestibulum id
            pellentesque consectetur.
          </p>
        </div>
        <div className="service__div">
          <img src={building} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue at
            eu, magna suscipit purus. Felis mauris eu ultrices vestibulum id
            pellentesque consectetur.
          </p>
        </div>
      </section>
      <section className="pickNpay">
        <div className="pickNpay__img">
          <img src={shutterStock2} alt="" />
        </div>
        <div className="pickNpay__text">
          <h3>Quality Riders &amp; Partners ready to deliver</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis
            volutpat tortor ultricies tincidunt magna. Faucibus tempus pretium
            sed enim integer at aliquet a. Semper vel id lectus quis vitae,
            velit est. Orci mi sed dui viverra.
          </p>
        </div>
      </section>

      <h3 style={{ textAlign: "center", marginTop: 70, marginBottom: 50 }}>
        What Our Clients Say About Us
      </h3>
      <section className="client__testimonies">
        <div className="client__testimonies__div">
          <img src={customerStockImage} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id est leo
            a eget risus nunc. Arcu amet nibh arcu risus vulputate. Amet, ac
            nec, nunc viverra massa blandit nec enim volutpat. Cursus pretium
            velit eget justo, turpis.
          </p>
        </div>
        <div className="client__testimonies__div">
          <img src={customerStockImage} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id est leo
            a eget risus nunc. Arcu amet nibh arcu risus vulputate. Amet, ac
            nec, nunc viverra massa blandit nec enim volutpat. Cursus pretium
            velit eget justo, turpis.
          </p>
        </div>
        <div className="client__testimonies__div">
          <img src={customerStockImage} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id est leo
            a eget risus nunc. Arcu amet nibh arcu risus vulputate. Amet, ac
            nec, nunc viverra massa blandit nec enim volutpat. Cursus pretium
            velit eget justo, turpis.
          </p>
        </div>
        <div className="client__testimonies__div">
          <img src={customerStockImage} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id est leo
            a eget risus nunc. Arcu amet nibh arcu risus vulputate. Amet, ac
            nec, nunc viverra massa blandit nec enim volutpat. Cursus pretium
            velit eget justo, turpis.
          </p>
        </div>
        <div className="client__testimonies__div">
          <img src={customerStockImage} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id est leo
            a eget risus nunc. Arcu amet nibh arcu risus vulputate. Amet, ac
            nec, nunc viverra massa blandit nec enim volutpat. Cursus pretium
            velit eget justo, turpis.
          </p>
        </div>
        <div className="client__testimonies__div">
          <img src={customerStockImage} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id est leo
            a eget risus nunc. Arcu amet nibh arcu risus vulputate. Amet, ac
            nec, nunc viverra massa blandit nec enim volutpat. Cursus pretium
            velit eget justo, turpis.
          </p>
        </div>
      </section>
      <footer>
        <nav className="footer__nav">
          <div className="left">
            <img src="" alt="" />
            <h4>Dispatch buddy</h4>
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
          <div className="right">
            <div>
              <i className="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-google"></i>
            </div>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default LandingPage;
