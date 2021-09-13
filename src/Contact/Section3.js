import React from "react";
import { Link } from "react-router-dom";
// import "../Assets/MContact.css"

const Contact = () => {
  return (
    <section className="Contact">
      <div className="Contact__sub1">
        {/* <h6>LET'S TALK</h6> */}
        <h1>
          <span>Explore </span>
          our
          <span> website design </span>
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
