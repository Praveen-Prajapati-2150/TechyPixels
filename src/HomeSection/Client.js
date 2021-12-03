import React from "react";
import { Link } from "react-router-dom";

import new1 from "../Assets/new1.png";
import new2 from "../Assets/new2.png";
import new3 from "../Assets/new3.png";
import new4 from "../Assets/new4.png";
import new5 from "../Assets/new5.png";
import new6 from "../Assets/new6.png";

const Client = () => {
  const imageSizes = [
    {
      name: new1,
      width: 200,
      height: 200,
    },
    {
      name: new2,
      width: 200,
      height: 200,
    },
    {
      name: new3,
      width: 200,
      height: 200,
    },
    {
      name: new4,
      width: 200,
      height: 200,
    },
    {
      name: new5,
      width: 200,
      height: 200,
    },
    {
      name: new6,
      width: 200,
      height: 200,
    },
  ];

  return (
    <section className="clients">
      <div className="clients__sub1">
        <div className="clients__sub1__sub1">
          <h4> How we do --</h4>
          <h1>Our Clients</h1>
        </div>
      </div>

      <div className="clients__sub2">
        <div className="clients__sub2__sub1">
          <article>Some friends have made while working together</article>
          <p>
            We are the first-ever client centric ad-tech design company that has
            developed creative ideas and plans of action for our clients to help
            their businesses.
          </p>
          <Link exact to="/contact">
            Want to become one? Contact Us
          </Link>
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
