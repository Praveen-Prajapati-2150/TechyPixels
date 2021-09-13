import React from "react";
import Heading1 from "./Heading1";
import "../styles/MAbout.css";
import Card from "./Card";
import Section3 from "./Section3";
import Section4 from "./Section4";
import ContactUs from "../HomeSection/ContactUs";
import Footer from "../HomeSection/Footer";

const About = () => {
  return (
    <div className="Mabout">
      <Heading1 />

      {/* <Card /> */}
      

      <Section3 />
      <Section4 />
      <ContactUs />
      <Footer/>
    </div>
  );
};

export default About;
