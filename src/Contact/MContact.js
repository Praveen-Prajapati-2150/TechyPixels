import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import "../styles/MContact.css"

const Contact = () => {
  return (
    <div className="MContact">
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
};

export default Contact;
