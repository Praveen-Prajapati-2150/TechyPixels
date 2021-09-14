import React from "react";
import { Link } from "react-router-dom";
// import "../Assets/MContact.css"

const Contact = () => {
  return (
    <section className="Contact">
      <div className="Contact__sub1">
        <h1>
          <span>Explore </span>
          our website
          <span> design </span>
          and
          <span> development </span>
          portfolios
        </h1>
      </div>
      <div>
        <Link to="/work">
          <button className="Contact__button">Checkout Our Work</button>
        </Link>
      </div>
    </section>
  );
};

export default Contact;
