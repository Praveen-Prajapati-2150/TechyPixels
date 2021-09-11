import React from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <section className="ContactUs">
      <div className="ContactUs__sub1">
        <h6>LET'S TALK</h6>
        <h1>
          <span>

          Contact
          </span>
          {/* <span>Us.</span> */}
          Us.
        </h1>
      </div>
      <div>
        <Link to="/contact">
          <button className="ContactUs__button">GET IN TOUCH</button>
        </Link>
      </div>
    </section>
  );
};

export default ContactUs;
