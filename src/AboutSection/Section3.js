import React, { useState, useEffect } from "react";
import pic1 from "../Assets/pic1.jpg";
// import * as React from "react"

const Section3 = () => {

  // const colors = [
  //   "rgb(225, 0, 255)",
  //   "rgb(255, 81, 81)",
  //   "rgb(125, 255, 19)",
  //   "rgb(8, 206, 255)",
  //   "rgb(53, 50, 255)",
  //   "red",
  //   "purple",
  //   "yellow",
  //   "gray",
  //   "lilac",
  // ];

  const colors = [
    "rgb(32, 182, 154)",
    "white",
    // "black",
  ];

  const [color, setColor] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setColor((v) => (v === 1 ? 0 : v + 1));
    }, 500);
  }, []);

  return (
    <section className="section3">
      <div className="sub1" style={{ backgroundColor: "black" }}>
        <h1 style={{ color : colors[color] }} >Techy Pixels</h1>
        {/* <img src={pic1} alt="" /> */}
      </div>
      <div className="sub2">
        <h1>Techy Pixels</h1>
        <div className="sub2__1">
          <ol>
            <li>
              Solutions for Customer Experiences Across Holistic Media that
              creates a BANG!
            </li>
            <li>
              Schbang, originally spelt as Shebang is a word created in the 17th
              Century and added to the lexicon of the English language. It
              typically is used as a phrase “the whole Schbang”.
            </li>
            <li>
              The Whole Schbang is a testament to our wholeness or completeness
              of offering. The idea of bringing various integrated marketing
              service needs under 1 roof is our reason to exist.
            </li>
            <li>
              In a World where agencies are digital or creative or media – we’d
              like to stand for something a lot simpler. A client partner that
              delivers a solution.
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Section3;
