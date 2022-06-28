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
import { Link } from "react-router-dom";
import star from "./images/star.png";
import Footer from "../../components/footer/Footer"
import "./landingPage.css";

const LandingPage = () => {
  return (
    <>
    <div className="landing-page-div">
      <section className="hero">
        <div className="overlay"></div>
        <img src={shutterStock} className="hero__img" alt="" />
        <div className="hero__content">
          <h1 className="hero__text">
            Fast, Reliable &amp; Quality Dispatch Service
          </h1>
          <p className="hero__slogan">Send. Track. Recive </p>
          <div className="hero__button">
            <Link to="/user-signup"><button style={{cursor: "pointer"}} className="btn customer__button">
              Register as a Customer
            </button></Link>
            <Link to="/rider-signup">
            <button style={{cursor: "pointer"}} className="btn rider__button">
              Register as a Rider
            </button>
            </Link>
            
          </div>
        </div>
      </section>
      <section className="top__notch">
        <div>
          <h3>Top Notch Services</h3>
          <p style={{width: 650, fontSize: 18, marginTop: 20}}>
            Quickly integrate powerful solutions that gives you more flexibility
            and control over your parcel shipping and logistics processes.
          </p>
        </div>
      </section>
      <section className="service__grid">
        <div className="service__div">
          <img src={secureData} alt="" />
          <h4>Reliable and secure</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue at
            eu, magna suscipit purus. Felis mauris eu ultrices vestibulum id
            pellentesque consectetur.
          </p>
        </div>
        <div className="service__div">
          <img src={time} alt="" />
          <h4>On-time delivery</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue at
            eu, magna suscipit purus. Felis mauris eu ultrices vestibulum id
            pellentesque consectetur.
          </p>
        </div>
        <div className="service__div">
          <img src={shipping} alt="" />
          <h4>Track your shipment</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue at
            eu, magna suscipit purus. Felis mauris eu ultrices vestibulum id
            pellentesque consectetur.
          </p>
        </div>
        <div className="service__div">
          <img src={customerCare} alt="" />
          <h4>Great customer service</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue at
            eu, magna suscipit purus. Felis mauris eu ultrices vestibulum id
            pellentesque consectetur.
          </p>
        </div>
        <div className="service__div">
          <img src={world} alt="" />
          <h4>Nationwide Delivery</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue at
            eu, magna suscipit purus. Felis mauris eu ultrices vestibulum id
            pellentesque consectetur.
          </p>
        </div>
        <div className="service__div">
          <img src={building} alt="" />
          <h4>Order Fulfilment</h4>
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

      <h3
        className="about-us"
        style={{ textAlign: "center", marginTop: 70, marginBottom: 50 }}
      >
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
          <div className="name-star-div" style={{ paddingTop: 10 }}>
            <h4 className="">Jenifer Harrison</h4>
            <div className="star" style={{ paddingTop: 0, width: 120 }}>
              <img src={star} alt="" style={{ display: "inline-block" }} />
              <img src={star} alt="" style={{ display: "inline-block" }} />
              <img src={star} alt="" style={{ display: "inline-block" }} />
              <img src={star} alt="" style={{ display: "inline-block" }} />
              <img src={star} alt="" style={{ display: "inline-block" }} />
            </div>
          </div>
        </div>
        <div className="client__testimonies__div">
          <img src={customerStockImage} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id est leo
            a eget risus nunc. Arcu amet nibh arcu risus vulputate. Amet, ac
            nec, nunc viverra massa blandit nec enim volutpat. Cursus pretium
            velit eget justo, turpis.
          </p>
          <div className="name-star-div" style={{ paddingTop: 10 }}>
            <h4 className="">Jenifer Harrison</h4>
            <div className="star" style={{ paddingTop: 0, width: 120 }}>
              <img src={star} alt="" style={{ display: "inline-block" }} />
              <img src={star} alt="" style={{ display: "inline-block" }} />
              <img src={star} alt="" style={{ display: "inline-block" }} />
              <img src={star} alt="" style={{ display: "inline-block" }} />
              <img src={star} alt="" style={{ display: "inline-block" }} />
            </div>
          </div>
        </div>
        <div className="client__testimonies__div">
          <img src={customerStockImage} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id est leo
            a eget risus nunc. Arcu amet nibh arcu risus vulputate. Amet, ac
            nec, nunc viverra massa blandit nec enim volutpat. Cursus pretium
            velit eget justo, turpis.
          </p>
          <div className="name-star-div" style={{ paddingTop: 10 }}>
            <h4 className="">Jenifer Harrison</h4>
            <div className="star" style={{ paddingTop: 0, width: 120 }}>
              <img src={star} alt="" style={{ display: "inline-block" }} />
              <img src={star} alt="" style={{ display: "inline-block" }} />
              <img src={star} alt="" style={{ display: "inline-block" }} />
              <img src={star} alt="" style={{ display: "inline-block" }} />
              <img src={star} alt="" style={{ display: "inline-block" }} />
            </div>
          </div>
        </div>
        <div className="client__testimonies__div">
          <img src={customerStockImage} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id est leo
            a eget risus nunc. Arcu amet nibh arcu risus vulputate. Amet, ac
            nec, nunc viverra massa blandit nec enim volutpat. Cursus pretium
            velit eget justo, turpis.
          </p>
          <div className="name-star-div" style={{ paddingTop: 10 }}>
            <h4 className="">Jenifer Harrison</h4>
            <div className="star" style={{ paddingTop: 0, width: 120 }}>
              <img src={star} alt="" style={{ display: "inline-block" }} />
              <img src={star} alt="" style={{ display: "inline-block" }} />
              <img src={star} alt="" style={{ display: "inline-block" }} />
              <img src={star} alt="" style={{ display: "inline-block" }} />
              <img src={star} alt="" style={{ display: "inline-block" }} />
            </div>
          </div>
        </div>
        <div className="client__testimonies__div">
          <img src={customerStockImage} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id est leo
            a eget risus nunc. Arcu amet nibh arcu risus vulputate. Amet, ac
            nec, nunc viverra massa blandit nec enim volutpat. Cursus pretium
            velit eget justo, turpis.
          </p>
          <div className="name-star-div" style={{ paddingTop: 10 }}>
            <h4 className="">Jenifer Harrison</h4>
            <div className="star" style={{ paddingTop: 0, width: 120 }}>
              <img src={star} alt="" style={{ display: "inline-block" }} />
              <img src={star} alt="" style={{ display: "inline-block" }} />
              <img src={star} alt="" style={{ display: "inline-block" }} />
              <img src={star} alt="" style={{ display: "inline-block" }} />
              <img src={star} alt="" style={{ display: "inline-block" }} />
            </div>
          </div>
        </div>
        <div className="client__testimonies__div">
          <img src={customerStockImage} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id est leo
            a eget risus nunc. Arcu amet nibh arcu risus vulputate. Amet, ac
            nec, nunc viverra massa blandit nec enim volutpat. Cursus pretium
            velit eget justo, turpis.
          </p>
          <div className="name-star-div" style={{ paddingTop: 10 }}>
            <h4 className="">Jenifer Harrison</h4>
            <div className="star" style={{ paddingTop: 0, width: 120 }}>
              <img src={star} alt="" style={{ display: "inline-block" }} />
              <img src={star} alt="" style={{ display: "inline-block" }} />
              <img src={star} alt="" style={{ display: "inline-block" }} />
              <img src={star} alt="" style={{ display: "inline-block" }} />
              <img src={star} alt="" style={{ display: "inline-block" }} />
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default LandingPage;
