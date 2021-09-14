import React from "react";
import pic1 from "../Assets/service1.jpg";
import pic2 from "../Assets/service2.jpg";
import pic3 from "../Assets/service3.jpg";
import pic4 from "../Assets/service4.png";
import pic5 from "../Assets/service5.jpg";
import pic6 from "../Assets/service6.jpg";
import pic7 from "../Assets/pic7.jpg";


// 1. Website Design
// 2. Website Development
// 3. SEO
// 4. Paid promotion (Facebook, google, insta, Amazon, flipkart)
// 5. Social media management
// 6. Branding and content creation

const Section1 = () => {
  const data = [
    {
      id: 1,
      img: pic1,
      heading: "Website Design",
      desc: "Our design specialization brings a design-centric approach to user interface and user experience design, and offers practical, skill-based instruction centered around a visual communications perspective.",
    },
    {
      id: 2,
      img: pic2,
      heading: "Website Development",
      desc: "Our group of professional web developers are dedicated to providing attractive and engaging websites to our clients. Our web development team is highly effective at furnishing quality services to our clientele.",
    },
    {
      id: 3,
      img: pic3,
      heading: "Search Engine Optimization",
      desc: "We continuously monitor the effectiveness of our SEO campaign and send you traffic and rankings reports on a regular basis. We deal in all three parts of SEO; those are On Page, Off Page and Technical SEO as well.",
    },
    {
      id: 4,
      img: pic4,
      heading: "Paid promotion",
      desc: "We Reach your ideal audience & generate leads using Google ads, facebook ads, Amazon and Flipkart. We monitor reports on a daily basis and optimize campaigns accordingly. We provide DSR (Daily status report and weekly meeting with client) to keep you in loop of everything.",
    },
    {
      id: 5,
      img: pic5,
      heading: "Social media management",
      desc: "We analyze social media audiences and develop a strategy that’s tailored to them, creating and distributing content for social media profiles, monitoring online conversations, and monitoring, measuring, and reporting on social media performance and ROI.",
    },
    {
      id: 6,
      img: pic6,
      heading: "Branding and content creation",
      desc: "Your brand is an expression of your values, mission, and core. We work closely with you with the aim of understanding your company, target audience, competition, and objectives, in order to define your branding identity. ",
    },
    // {
    //   id: 7,
    //   img: pic7,
    //   heading: "Media Planning and Buying",
    //   desc: "Technology and Design team comprises of UI/UX designers, coders, developers and web servicing specialists who strive to elevate customer experience with the finesse of design and technology.",
    // },
    // {
    //   id: 1,
    //   img: pic1,
    //   heading: "Media Planning and Buying",
    //   desc: "The Activation and Events team is focused on creating memorable events that address client briefs, deliver beyond expectations and leave a lasting impression. Schbang offers a turnkey approach to events from the initial conceptualization, to final production and management.",
    // },
    // {
    //   id: 2,
    //   img: pic2,
    //   heading: "Media Planning and Buying",
    //   desc: "Technology and Design team comprises of UI/UX designers, coders, developers and web servicing specialists who strive to elevate customer experience with the finesse of design and technology.",
    // },
  ];
  return (
    <div className="Osection1">
      <div className="sub1">
        <h1>Services</h1>
      </div>
      <div className="sub2">
        {data.map((user) => {
          return (
            <div className="Ocard">
              <div className="card1">
                <img src={user.img} alt="" />
              </div>
              <div className="card2">
                <h2>{user.heading}</h2>
                <p>{user.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section1;
