import React, { useState } from "react";
import "../styles/MOurWork.css";
import pic1 from "../Assets/pic1.jpg";
import pic2 from "../Assets/pic2.jpg";
import pic3 from "../Assets/pic3.jpg";
import pic4 from "../Assets/pic4.jpg";
import pic5 from "../Assets/pic5.jpg";
import pic6 from "../Assets/pic6.jpg";
import pic7 from "../Assets/pic7.jpg";
import pic8 from "../Assets/pic7.jpg";

const Section1 = () => {
  const data = [
    {
      id: 1,
      img: pic1,
      desc: "ASUS B9 Light Book",
    },
    {
      id: 2,
      img: pic2,
      desc: "ASUS B9 Light Book",
    },
    {
      id: 3,
      img: pic3,
      desc: "ASUS B9 Light Book",
    },
    {
      id: 4,
      img: pic4,
      desc: "ASUS B9 Light Book",
    },
    {
      id: 5,
      img: pic5,
      desc: "ASUS B9 Light Book",
    },
    {
      id: 6,
      img: pic6,
      desc: "ASUS B9 Light Book",
    },
    {
      id: 7,
      img: pic7,
      desc: "ASUS B9 Light Book",
    },
    {
      id: 1,
      img: pic1,
      desc: "ASUS B9 Light Book",
    },
    {
      id: 2,
      img: pic2,
      desc: "ASUS B9 Light Book",
    },
  ];

  return (
    <div className="OurWork">
      <section className="section1">
        <div className="sub1">
          <h1>Our Work</h1>
        </div>
        <hr />
        <div className="sub2">
          {data.map((user) => {
            return (
              <div className="card" key={user.id}>
                <img className="card__img" src={user.img} alt="nothing" />
                <div className="info">
                  <h1>{user.desc}</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Atque, dolor?
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="overlay"></div>
      </section>
    </div>
  );
};

export default Section1;
