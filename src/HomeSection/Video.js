import React from "react";
import { Link } from "react-router-dom";
import video from "../Assets/video.mp4";

const Video = () => {
  return (
    <div className="videoClass">
      <section className="home__videoBg">
        {/* <video width="100%" height="calc( 100% - 85px )" autoPlay loop >
            <source src={bg1} type="video/mp4" />
            <source src={require("../Assets/bg1.mp4")} type="video/mp4" />
          </video>  */}
        <video
          loop
          autoPlay
          muted
          width="100%"
          height="calc( 100% - 85px )"
          src={video}
          type="video/mp4"
        ></video>
      </section>
      <section className="socialMedia-icon">
        <Link target="_blank" to="/https://www.instagram.com/techypixels/">
          <img
            src="https://image.flaticon.com/icons/png/128/2111/2111463.png"
            alt="error 404"
          />
        </Link>
        <Link target="_blank" to="/www.facebook.com">
          <img
            src="https://image.flaticon.com/icons/png/128/1409/1409945.png"
            alt="error 404"
          />
        </Link>
        <Link target="_blank" to="/www.facebook.com">
          <img
            src="https://image.flaticon.com/icons/png/128/1409/1409937.png"
            alt="error 404"
          />
        </Link>
        <Link target="_blank" to="/www.facebook.com">
          <img
            src="https://image.flaticon.com/icons/png/128/220/220236.png"
            alt="error 404"
          />
        </Link>
      </section>
    </div>
  );
};

export default Video;
