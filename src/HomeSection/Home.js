import React from "react";
import "../styles/Home.css";
import About from "./About";
import Services from "./Services";
import Client from "./Client";
// import Testimonials from "./Testimonials";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import OurFeatures from "./OurFeatures";
import Video from "./Video";
import Testi from "./Testi";

const Home = () => {
  return (
    <div className="home">
      <Video />

      <About />

      <OurFeatures />

      <Services />

      <Client />

      <Testi/>
      
      {/* <Testimonials /> */}

      <ContactUs />

      <Footer />
      
    </div>
  );
};

export default Home;
