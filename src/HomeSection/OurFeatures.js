import React from "react";
import pic1 from "../Assets/pic2.jpg";
import service2 from "../Assets/service2.jpg"

const OurFeatures = () => {
  return (
    <section className="feature">
      <div className="feature__img">
        <img src={service2} alt="" srcset="" />
      </div>
      <div className="feature__detail">
        <h1>Work Domain</h1>
        <p>
          Our dedicated team Deals in these Domains
        </p>
        <div className="feature__topics">
          <li className="feature__topic">Design</li>
          <p>
          Web Design, Illustrations, Graphics, Motion Graphics, Logo Creation, Creative Design.
          </p>
          <li className="feature__topic">Development</li>
          <p>
          Web Development, Website Maintenence, Android & Ios App Development, 
          </p>
          <li className="feature__topic">Branding</li>
          <p>
          SEO, SMO, Paid Promotions on Google, Facebook, Instagram, Amazon, Flipkart.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurFeatures;
