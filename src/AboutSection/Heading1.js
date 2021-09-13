import React from "react";

const Heading1 = () => {
  const heading = {
    display: "flex",

    margin: "100px 0px",
  };
  return (
    <div style={heading} className="heading">
      <div className="sub1">
        <h1>
        A
          <span> Gamut </span>
          of Services
          <span> under </span>
          One
          Roof
          {/* <span className="Pixels">Pixels</span>! */}
          {/* A Gamut of Services under One Roof */}
        </h1>
      </div>
      {/* <div className="sub2">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/I-Gfx7Xo0W0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div> */}
    </div>
  );
};

export default Heading1;
