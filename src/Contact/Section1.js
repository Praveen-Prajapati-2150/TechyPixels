import React from "react";

const Section1 = () => {
  return (
    <div className="Psection1">
      {/* <div className="sub1">
        <h1>We're a call away. Say Hi.</h1>
      </div> */}
      <div className="sub2">
        <div className="sub__1 scard">
          <h1>Become a Client</h1>
          <p>+91 7060901607</p>
          <p>+91 9667545781</p>
          <p>
            <a target="_blank" href = "mailto: sales@techypixels.com">sales@techypixels.com</a>
          </p>

        </div>
        <div className="sub__2 scard">
          <h1>Press Inquiries</h1>
          <p>+91 7060901607</p>
          <p>+91 9667545781</p>
          <p>
            <a target="_blank" href = "mailto: hello@techypixels.com">hello@techypixels.com</a>
          </p>
        </div>
        <div className="sub__3 scard">
          <h1>Visit Us</h1>
          {/* <h2>Delhi</h2> */}
          <p>B-13, Mansaram Park, Uttam nagar, Delhi 110059</p>
        </div>
      </div>
      {/* <div className="sub3">
        <h1>We'd love to here from you</h1>
        <p>
          Whether you have questions about feature, trials, pricing, need a
          demo, or anything else, our team is ready to answer all your questions
        </p>
      </div> */}
    </div>
  );
};

export default Section1;
