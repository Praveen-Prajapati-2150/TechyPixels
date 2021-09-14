import React from "react";
import { Link } from "react-router-dom";
import pic1 from "../Assets/serviceicon1.png"
import pic2 from "../Assets/serviceicon2.png"
import pic3 from "../Assets/serviceicon3.png"
import pic4 from "../Assets/serviceicon4.png"
import pic5 from "../Assets/serviceicon5.png"
import pic6 from "../Assets/serviceicon6.png"

        // --h1-style: 'Roboto', sans-serif;
        // --article--style: 'Roboto', sans-serif;
        // --p-style: 'Poppins', sans-serif;
        // --h1-size: 64px;
        // --article-size: 35px;
        // --p-size: 20px;
        // --a-size: 16px;

        // --h1-size: 48px;
        // --article-size: 24px;
        // --p-size: 16px;
        // --a-size: 16px;

const Services = () => {
  return (
    <section className="services">
      <div className="services__sub1">
        <div className="services__sub1__sub1">
          <h4> How we do 😎</h4>
          <h1>Our Services</h1>
        </div>
      </div>
      <div className="services__sub2">
        <div className="services__sub2__junior">
          <div className="services__sub2__sub1">
            <article>Every project existing in the digital world is a result of a creative idea.</article>
            <p>
            Articulate your creative vision and make the perfect plan of execution with Techy Pixels using Design, Development and Advertising services.

            </p>
            <Link to="/service">Explore Our Work</Link>
          </div>
          <div className="services__sub2__sub2">
            <div className="services__box1 serviceBox">
              <img
                src={pic2}
                alt=""
              />
              <h3>UI & UX Design</h3>
            </div>
            <div className="services__box2 serviceBox">
              <img
              src={pic1}
                alt=""
              />
              <h3>Web Development</h3>
            </div>
            <div className="services__box3 serviceBox">
              <img
              src={pic3}
                alt=""
              />
              <h3>Social Media Management</h3>
            </div>
            <div className="services__box4 serviceBox">
              <img
              src={pic4}
                alt=""
              />
              <h3>Paid Promotions</h3>
            </div>
            <div className="services__box5 serviceBox">
              <img
              src={pic5}
                alt=""
              />
              <h3>SEO</h3>
            </div>
            <div className="services__box6 serviceBox">
              <img
              src={pic6}
                alt=""
              />
              <h3>Branding & Contect Creation</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
