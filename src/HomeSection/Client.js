import React from "react";
import { Link } from "react-router-dom";
import Logo1 from "../Assets/Logo1.png";
import Logo2 from "../Assets/Logo2.png";
import Logo3 from "../Assets/Logo3.png";
import Logo4 from "../Assets/Logo4.png";
import Logo5 from "../Assets/Logo5.jpg";
import Logo6 from "../Assets/Logo6.png";

const Client = () => {
  const imageSizes = [
    {
      name: Logo1,
      width: 200,
      height: 200,
    },
    {
      name: Logo2,
      width: 200,
      height: 200,
    },
    {
      name: Logo3,
      width: 200,
      height: 200,
    },
    {
      name: Logo4,
      width: 200,
      height: 200,
    },
    {
      name: Logo5,
      width: 200,
      height: 200,
    },
    {
      name: Logo6,
      width: 200,
      height: 200,
    },
  ];

  return (
    <section className="clients">
      <div className="clients__sub1">
        <div className="clients__sub1__sub1">
          <h4> How we do 😋</h4>
          <h1>Our Clients</h1>
        </div>
      </div>

      <div className="clients__sub2">
        <div className="clients__sub2__sub1">
          <article>We've worked with 100+ clients across the globe.</article>
          <p>
            We're not just advertisers, we're creators. We think Design and
            Digital. We're technology focused and a production house. We're
            truly integrated and house all your requirements under one roof.
          </p>
          <Link to="/contact">Want to become one? Contact Us</Link>
        </div>
        <div className="clients__sub2__sub2">
          {imageSizes.map((user) => (
            <>
              <div className="clients__sub2__logo">
                <img src={user.name} alt="error 404" />
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Client;
