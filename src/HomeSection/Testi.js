import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


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
            <h1>Aman Saxena</h1>
            <span>"</span>
            <p>
            They have an impressive communication process and genuine interest in our success.
            </p>
            <span>"</span>
          </div>
        </div>
        <div className="card">
          <div className="cardT">
            <h1>Dinesh Pandey</h1>
            <span>"</span>
            <p>
            They listened to what we wanted and pushed us to build a quality platform together. They were great partners.
            </p>
            <span>"</span>
          </div>
        </div>
        <div className="card">
          <div className="cardT">
            <h1>Narendra Kumar</h1>
            <span>"</span>
            <p>
              Well Done Work !
            </p>
            <span>"</span>
          </div>
        </div>
        
      </Carousel>
    </div>
  );
};

export default Testi;
