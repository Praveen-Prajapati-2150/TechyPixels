import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about">
      <div className="about__sub1">
        <div className="about__sub1__sub1">
          <h4>What we do 😀</h4>
          <h1>About Us</h1>
        </div>
        <div className="about__sub1__sub2">
          {/* <img src="https://uploads-ssl.webflow.com/5e3ce2ec7f6e53c045fe7cfa/603debeb56041e48e008fea1_Artboard-(5).png" alt="loading error..." />  */}
        </div>
      </div>
      <div className="about__sub2">
        <div className="about__sub2__sub1">
          <article>We help to create strategies, design & development.</article>
          <p>
            We are an Ad-Tech Design Studio. We are an integrated squad of
            experienced Designers, Creators, Developers and Marketers. We are
            more inclined towards creativity. We mix our experience and
            knowledge to create solutions for clients. Our attitude is win-win
            attitude i.e, Client win we win.
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
