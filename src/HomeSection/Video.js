import React from "react";
import { Link } from "react-router-dom";
import video from "../Assets/video.mp4";

const Video = () => {
  return (
    <div className="videoClass">
      <section className="home__videoBg">
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
        <a
          target="_blank"
          href=" https://instagram.com/techypixels
"
        >
          <img
            src="https://image.flaticon.com/icons/png/128/2111/2111463.png"
            alt="error 404"
          />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/company/79881017/admin/

"
        >
          <img
            src="https://image.flaticon.com/icons/png/128/1409/1409945.png"
            alt="error 404"
          />
        </a>
        <a
          target="_blank"
          href=" https://www.facebook.com/techypixels
"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1312/1312139.png"
            alt="error 404"
          />
        </a>
        <a
          target="_blank"
          href=" https://wa.link/jm3eul
"
        >
          <img
            src="https://image.flaticon.com/icons/png/128/220/220236.png"
            alt="error 404"
          />
        </a>
      </section>
    </div>
  );
};

export default Video;
