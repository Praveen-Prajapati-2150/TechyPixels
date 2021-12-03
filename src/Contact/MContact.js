import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import "../styles/MContact.css";
import Section4 from "./Section4";

const Contact = () => {
  return (
    <div className="MContact">
      <Section4 />
      <div className="BSection1">
        <Section1 />
        <Section2 />
      </div>
      <Section3 />
    </div>
  );
};

export default Contact;
