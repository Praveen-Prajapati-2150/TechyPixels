import React, { useState } from "react";
import "../styles/MOurWork.css";
import pic1 from "../Assets/work1.png";
import pic2 from "../Assets/work2.png";
import pic3 from "../Assets/work3.png";
import pic4 from "../Assets/work4.png";
import pic5 from "../Assets/work5.png";
import pic6 from "../Assets/work6.png";
import pic7 from "../Assets/work7.png";
import pic8 from "../Assets/work8.png";
import pic9 from "../Assets/work9.png";

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
      img: pic8,
      desc: "ASUS B9 Light Book",
    },
    {
      id: 2,
      img: pic9,
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
