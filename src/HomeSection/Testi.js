import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import pic1 from "../Assets/pic1.jpg";
import pic2 from "../Assets/pic2.jpg";
import pic3 from "../Assets/pic3.jpg";
import pic4 from "../Assets/pic4.jpg";

const Testi = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="newtesti">
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div className="card">
          <div className="cardT">
            <h1>Praveen Prajpati</h1>
            <span>"</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut totam
              non atque tempore libero corrupti voluptatum, quod sint ipsum, in
              minima odio alias deserunt reprehenderit obcaecati ducimus magnam
              facilis dolore!
            </p>
            <span>"</span>
          </div>
        </div>
        <div className="card">
          <div className="cardT">
            <h1>Harish Pandey</h1>
            <span>"</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut totam
              non atque tempore libero corrupti voluptatum, quod sint ipsum, in
              minima odio alias deserunt reprehenderit obcaecati ducimus magnam
              facilis dolore! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Aut totam non atque tempore libero corrupti voluptatum, quod
              sint ipsum, in minima odio alias deserunt reprehenderit obcaecati
              ducimus magnam facilis dolore!
            </p>
            <span>"</span>
          </div>
        </div>
        <div className="card">
          <div className="cardT">
            <h1>Akash Gupta</h1>
            <span>"</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut totam
              non libero corrupti voluptatum, quod sint ipsum, in minima odio
              alias deserunt reprehenderit obcaecati ducimus magnam facilis
              dolore!
            </p>
            <span>"</span>
          </div>
        </div>
        <div className="card">
          <div className="cardT">
            <h1>Rahul Vatsalya</h1>
            <span>"</span>
            <p center>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut totam
              non atque tempore libero corrupti voluptatum, quod sint ipsum, in
              non atque tempore libero corrupti voluptatum, quod sint ipsum, in
              minima odio alias deserunt reprehenderit obcaecati ducimus magnam
              facilis dolore!
            </p>
            <span>"</span>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Testi;
