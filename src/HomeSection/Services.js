import React from "react";
import { Link } from "react-router-dom";

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
                src="https://image.flaticon.com/icons/png/512/2693/2693507.png"
                alt=""
              />
              <h3>UI & UX Design</h3>
            </div>
            <div className="services__box2 serviceBox">
              <img
                src="https://img-premium.flaticon.com/png/512/2170/premium/2170024.png?token=exp=1631270745~hmac=930b6b1c0ade08b32e8bf48ce406269c"
                alt=""
              />
              <h3>Web Development</h3>
            </div>
            <div className="services__box3 serviceBox">
              <img
                src="https://img-premium.flaticon.com/png/512/2816/premium/2816961.png?token=exp=1631270833~hmac=7220e0d2b592c8490ca0a785320e8383"
                alt=""
              />
              <h3>Social Media Management</h3>
            </div>
            <div className="services__box4 serviceBox">
              <img
                src="https://image.flaticon.com/icons/png/512/3067/3067260.png"
                alt=""
              />
              <h3>Paid Promotions</h3>
            </div>
            <div className="services__box5 serviceBox">
              <img
                src="https://image.flaticon.com/icons/png/512/3004/3004613.png"
                alt=""
              />
              <h3>SEO</h3>
            </div>
            <div className="services__box6 serviceBox">
              <img
                src="https://img-premium.flaticon.com/png/512/2537/premium/2537940.png?token=exp=1631271033~hmac=d047c5ce1a8cd37be83fb84e0d37c579"
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
