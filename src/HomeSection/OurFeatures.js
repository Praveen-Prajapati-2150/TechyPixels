import React from "react";
import pic1 from "../Assets/pic2.jpg";

const OurFeatures = () => {
  return (
    <section className="feature">
      <div className="feature__img">
        <img src={pic1} alt="" srcset="" />
      </div>
      <div className="feature__detail">
        <h1>Our Features</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
          consequatur optio. Incidunt dolorum porro tempora nihil eum placeat
          commodi recusandae.
        </p>
        <div className="feature__topics">
          <li className="feature__topic">Moder Design</li>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, esse.
          </p>
          <li className="feature__topic">Fully Customized</li>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, esse.
          </p>
          <li className="feature__topic">Retina Ready</li>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, esse.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurFeatures;
