import React from "react";
// import bg from "../Assets/bg.mp4";
// import bg1 from "../Assets/bg1.mp4";
import video from "../Assets/video.mp4";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
// import Slider from "infinite-react-carousel";
import pic1 from "../Assets/pic1.jpg";
import pic2 from "../Assets/pic2.jpg";
import pic3 from "../Assets/pic3.jpg";
import pic4 from "../Assets/pic4.jpg";

// const slider = (
//   <AwesomeSlider>
//     <div data-src="/path/to/image-0.png" />
//     <div data-src="/path/to/image-1.png" />
//     <div data-src="/path/to/image-2.jpg" />
//   </AwesomeSlider>
// );

const Home = () => {
  return (
    <div className="home">
      <section className="home__videoBg">
        {/* <video loop autoPlay src={bg} type="video/mp4"></video>
          <video width="100%" height="calc( 100% - 85px )" autoPlay loop >
            <source src={bg1} type="video/mp4" />
            <source src={require("../Assets/bg1.mp4")} type="video/mp4" />
          </video> */}
        <video
          loop
          autoPlay
          muted
          width="100%"
          height="calc( 100% - 85px )"
          src={video}
          type="video/mp4"
        ></video>
        {/* <video width="100%" height="calc( 100% - 85px )" loop autoPlay>
          <source src={bg} type="video/mp4" />
          <source src={require("../Assets/bg.mp4")} type="video/mp4" />
        </video> */}
      </section>

      {/* <svg
        className="svg3"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#F6DCBF"
          fill-opacity="1"
          d="M0,32L34.3,80C68.6,128,137,224,206,224C274.3,224,343,128,411,117.3C480,107,549,181,617,208C685.7,235,754,213,823,213.3C891.4,213,960,235,1029,229.3C1097.1,224,1166,192,1234,186.7C1302.9,181,1371,203,1406,213.3L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg> */}

      <span className="vertical" >
        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#F6DCBF"
            fill-opacity="1"
            d="M0,128L34.3,128C68.6,128,137,128,206,128C274.3,128,343,128,411,117.3C480,107,549,85,617,85.3C685.7,85,754,107,823,122.7C891.4,139,960,149,1029,138.7C1097.1,128,1166,96,1234,74.7C1302.9,53,1371,43,1406,37.3L1440,32L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
          ></path>
        </svg>
      </span>

      <section className="about">
      
        <div className="about__sub1">
          <div className="about__sub1__sub1">
            <h4> What we do 😀</h4>
            <h1>About Us</h1>
          </div>
          <div className="about__sub1__sub2">
            {/* <img src="https://uploads-ssl.webflow.com/5e3ce2ec7f6e53c045fe7cfa/603debeb56041e48e008fea1_Artboard-(5).png" alt="loading error..." />  */}
          </div>
        </div>
        <div className="about__sub2">
          <div className="about__sub2__sub1">
            <article>
              The idea of bringing various integrated marketing service needs
              under one roof is our reason to exist.
            </article>
            <p>
              We've put together an Integrated Team of Creators, Designers,
              Technologists, Media Planners and Film Creators under one roof to
              deliver your Business the whole Schbang. Our Team of 250 sits
              across the cities of Mumbai and Bengaluru to serve our clients
              across categories.
            </p>
            <Link to="/about" target="_blank">
              <span>&gt;</span>Know more about our Company & Services
            </Link>
          </div>
        </div>
      </section>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#F6DCBF"
          fill-opacity="1"
          d="M0,128L34.3,128C68.6,128,137,128,206,128C274.3,128,343,128,411,117.3C480,107,549,85,617,85.3C685.7,85,754,107,823,122.7C891.4,139,960,149,1029,138.7C1097.1,128,1166,96,1234,74.7C1302.9,53,1371,43,1406,37.3L1440,32L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        ></path>
      </svg>

      <svg
        className="svg1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#B2B1B9"
          fill-opacity="1"
          d="M0,96L80,112C160,128,320,160,480,160C640,160,800,128,960,122.7C1120,117,1280,139,1360,149.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>

      <section className="services">
        <div className="services__sub1">
          <div className="services__sub1__sub1">
            <h4> How we do 😎</h4>
            <h1>
              Our
              <br />
              Services
            </h1>
          </div>
        </div>
        <div className="services__sub2">
          <div className="services__sub2__junior">
            <div className="services__sub2__sub1">
              <article>We bring the whole Schbang!</article>
              <p>
                We're not just advertisers, we're creators. We think Design and
                Digital. We're technology focused and a production house. We're
                truely integrated and house all your requirements under one
                roof.
              </p>
              <Link to="/service">Explore Our Work</Link>
            </div>
            <div className="services__sub2__sub2">
              <div className="services__box1 serviceBox">
                <img
                  src="https://image.flaticon.com/icons/png/512/2920/2920281.png"
                  alt=""
                />
                <h3>Computer Technology</h3>
              </div>
              <div className="services__box2 serviceBox">
                <img
                  src="https://image.flaticon.com/icons/png/512/2920/2920281.png"
                  alt=""
                />
                <h3>Computer Technology</h3>
              </div>
              <div className="services__box3 serviceBox">
                <img
                  src="https://image.flaticon.com/icons/png/512/2920/2920281.png"
                  alt=""
                />
                <h3>Computer Technology</h3>
              </div>
              <div className="services__box4 serviceBox">
                <img
                  src="https://image.flaticon.com/icons/png/512/2920/2920281.png"
                  alt=""
                />
                <h3>Computer Technology</h3>
              </div>
              <div className="services__box5 serviceBox">
                <img
                  src="https://image.flaticon.com/icons/png/512/2920/2920281.png"
                  alt=""
                />
                <h3>Computer Technology</h3>
              </div>
              <div className="services__box6 serviceBox">
                <img
                  src="https://image.flaticon.com/icons/png/512/2920/2920281.png"
                  alt=""
                />
                <h3>Computer Technology</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <svg
        className="svg2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#B2B1B9"
          fill-opacity="1"
          d="M0,128L48,160C96,192,192,256,288,282.7C384,309,480,299,576,245.3C672,192,768,96,864,69.3C960,43,1056,85,1152,96C1248,107,1344,85,1392,74.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>

      <svg
        className="svg3"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#B8B5FF"
          fill-opacity="1"
          d="M0,320L34.3,304C68.6,288,137,256,206,218.7C274.3,181,343,139,411,144C480,149,549,203,617,192C685.7,181,754,107,823,90.7C891.4,75,960,117,1029,165.3C1097.1,213,1166,267,1234,288C1302.9,309,1371,299,1406,293.3L1440,288L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>

      <section className="clients">
        <div className="clients__sub1">
          <div className="clients__sub1__sub1">
            <h4> How we do 😋</h4>
            <h1>
              Our <br /> Clients
            </h1>
          </div>
        </div>

        <div className="clients__sub2">
          <div className="clients__sub2__junior">
            <div className="clients__sub2__sub1">
              <article>
                We've worked with 100+ clients across the globe.
              </article>
              <p>
                We're not just advertisers, we're creators. We think Design and
                Digital. We're technology focused and a production house. We're
                truly integrated and house all your requirements under one roof.
              </p>
              <Link to="/contact">Want to become one? Contact Us</Link>
            </div>
          </div>
          <div className="clients__sub2__sub2">
            
          </div>
        </div>
      </section>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#B8B5FF"
          fill-opacity="1"
          d="M0,160L34.3,138.7C68.6,117,137,75,206,58.7C274.3,43,343,53,411,80C480,107,549,149,617,154.7C685.7,160,754,128,823,149.3C891.4,171,960,245,1029,261.3C1097.1,277,1166,235,1234,229.3C1302.9,224,1371,256,1406,272L1440,288L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        ></path>
      </svg>

      <section className="testimonials">
        <div className="testi__sub1">
          <h1>TESTIMONIALS</h1>
        </div>
        <div className="testi__sub2">
          <AwesomeSlider className="testi__sub1__carasouel">
            <div data-src={pic1} />
            <div data-src={pic2} />
            <div data-src={pic3} />
            <div data-src={pic4} />
          </AwesomeSlider>
        </div>

        {/* <div>
          <Slider dots>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
          </Slider> */}
        {/* <img
            src="https://image.flaticon.com/icons/png/512/2920/2920281.png"
            alt=""
            className="testi__img"
          />
          <h2>Alex Martin</h2>
          <p>Envato Customer</p>
        </div>
        <div className="testi__sub2">
          <p>
            " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            itaque non doloremque dolorem, soluta eius ullam error corrupti
            voluptate odio reprehenderit voluptatibus a, amet maiores porro illo
            autem perferendis. Inventore! "
          </p>
          <img
            src="http://innovationplans.com/wavo3/img/icons/quote.svg"
            alt=""
            className="testi__quote"
          /> *
        </div> */}
      </section>

      <section className="ContactUs">
        <div className="ContactUs__sub1">
          <h6>LET'S TALK</h6>
          <h1>
            {" "}
            <span>Contact</span>
            <span>Us.</span>
          </h1>
        </div>
        <Link to="/contact">
          <button className="ContactUs__button">GET IN TOUCH</button>
        </Link>
      </section>

      <section className="footer">
        <h6>All right reserved.</h6>
        <h6>© 2021, Techy Pixels. Made with passion and love.</h6>
      </section>
    </div>
  );
};

export default Home;
