import React from "react";
import pic1 from "../Assets/pic1.jpg";
import pic2 from "../Assets/pic2.jpg";
import pic3 from "../Assets/pic3.jpg";
import pic4 from "../Assets/pic4.jpg";
import TestimonialCard from "material-testimonial-card";
import "../styles/Home.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AutoRotatingCarousel } from "material-auto-rotating-carousel";
const Slide = require("./Slide").default;
const { red, blue, green } = require("@material-ui/core/colors");
const Button = require("@material-ui/core/Button").default;

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Testimonials = () => {
  return (
    <section className="testimonials">
      {/* <div className="testi__sub1"><h1>TESTIMONIALS</h1></div> */}
      <div className="testi__sub1">
        <div style={{ position: "relative", width: "100%", height: 500 }}>
          {/* <Button onClick={() => setState({ open: true })}>
            Open carousel
          </Button> */}
          <AutoRotatingCarousel
            // label="Get started"
            // open={state.open}
            // onClose={() => setState({ open: false })}
            // onStart={() => setState({ open: false })}
            style={{ position: "absolute" }}
          >
            <Slide
              media={
                <img src="http://www.icons101.com/icon_png/size_256/id_79394/youtube.png" />
              }
              mediaBackgroundStyle={{ backgroundColor: red[400] }}
              style={{ backgroundColor: red[600] }}
              title="This is a very cool feature"
              subtitle="Just using this will blow your mind."
            />
            <Slide
              media={
                <img src="http://www.icons101.com/icon_png/size_256/id_80975/GoogleInbox.png" />
              }
              mediaBackgroundStyle={{ backgroundColor: blue[400] }}
              style={{ backgroundColor: blue[600] }}
              title="Ever wanted to be popular?"
              subtitle="Well just mix two colors and your are good to go!"
            />
            <Slide
              media={
                <img src="http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png" />
              }
              mediaBackgroundStyle={{ backgroundColor: green[400] }}
              style={{ backgroundColor: green[600] }}
              title="May the force be with you"
              subtitle="The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe."
            />
          </AutoRotatingCarousel>
        </div>

        {/* <TestimonialCard
          className="card"
          name={"John Smith"}
          image={pic1}
          content={
            "Wow! This testimonial card is so amazing! I would like to use it in my project!"
          }
          project={"Testimonial card"}
        /> */}

        {/* <Carousel responsive={responsive}>
        </Carousel> */}
      </div>
    </section>
  );
};

export default Testimonials;

/* <SlideTestimonial
              image="/images/1.jpg"
              alt="Arif Shariati"
              imageRadius="50%"
              title="Arif Shariati"
              subtitle="CEO"
              testimonial={
                "Awesome React Material UI Testimonial component Package"
              }
              backgroundGradient={["#FE6B8B", "#FF8E53"]}
              backgroundColor="#f9f9f9"
              transition={true}
              direction="left"
              speed={1000}
              shadow={5}
            /> */

/* <Carousel
className="testi__carasouel"
data={data}
time={2000}
width="1300px"
height="400px"
captionStyle={captionStyle}
radius="10px"
slideNumber={true}
slideNumberStyle={slideNumberStyle}
captionPosition="bottom"
automatic={true}
dots={true}
pauseIconColor="white"
pauseIconSize="40px"
slideBackgroundColor="darkgrey"
slideImageFit="cover"
thumbnails={true}
thumbnailWidth="100px"
style={{
  textAlign: "center",
  maxWidth: "850px",
  maxHeight: "500px",
  margin: "40px auto",
}}
> */

// const data = [
//   {
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
//     caption: "San Francisco",
//   },
//   {
//     image:
//       "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
//     caption: "Scotland",
//   },
//   {
//     image:
//       "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
//     caption: "Darjeeling",
//   },
//   {
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
//     caption: "San Francisco",
//   },

// ];
