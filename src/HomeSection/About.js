import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about">
      <div className="about__sub1">
        <div className="about__sub1__sub1">
          <h4> What we do 😀</h4>
          <h1>About Us</h1>
        </div>
        <div className="about__sub1__sub2">
          {/* <img src="https://uploads-ssl.webflow.com/5e3ce2ec7f6e53c045fe7cfa/603debeb56041e48e008fea1_Artboard-(5).png" alt="loading error..." />  */}
        </div>
      </div>
      <div className="about__sub2">
        <div className="about__sub2__sub1">
          <article>
            The idea of bringing various integrated marketing service needs
            under one roof is our reason to exist.
          </article>
          <p>
            We've put together an Integrated Team of Creators, Designers,
            Technologists, Media Planners and Film Creators under one roof to
            deliver your Business the whole Schbang. Our Team of 250 sits across
            the cities of Mumbai and Bengaluru to serve our clients across
            categories.
          </p>
          <Link to="/about" target="_blank">
            <span>&gt;</span>Know more about our Company & Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
