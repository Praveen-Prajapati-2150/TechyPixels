import React from "react";
import pic1 from "../Assets/pic1.jpg";
import pic2 from "../Assets/pic2.jpg";
import pic3 from "../Assets/pic3.jpg";
import pic4 from "../Assets/pic4.jpg";
import pic5 from "../Assets/pic5.jpg";
import pic6 from "../Assets/pic6.jpg";
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
      desc: "Technology and Design team comprises of UI/UX designers, coders, developers and web servicing specialists who strive to elevate customer experience with the finesse of design and technology.",
    },
    {
      id: 2,
      img: pic2,
      heading: "Website Development",
      desc: "Technology and Design team comprises of UI/UX designers, coders, developers and web servicing specialists who strive to elevate customer experience with the finesse of design and technology.",
    },
    {
      id: 3,
      img: pic3,
      heading: "SEO",
      desc: "Technology and Design team comprises of UI/UX designers, coders, developers and web servicing specialists who strive to elevate customer experience with the finesse of design and technology.",
    },
    {
      id: 4,
      img: pic4,
      heading: "Paid promotion",
      desc: "Technology and Design team comprises of UI/UX designers, coders, developers and web servicing specialists who strive to elevate customer experience with the finesse of design and technology.",
    },
    {
      id: 5,
      img: pic5,
      heading: "Social media management",
      desc: "Technology and Design team comprises of UI/UX designers, coders, developers and web servicing specialists who strive to elevate customer experience with the finesse of design and technology.",
    },
    {
      id: 6,
      img: pic6,
      heading: "Branding and content creation",
      desc: "The Activation and Events team is focused on creating memorable events that address client briefs, deliver beyond expectations and leave a lasting impression. Schbang offers a turnkey approach to events from the initial conceptualization, to final production and management.",
    },
    {
      id: 7,
      img: pic7,
      heading: "Media Planning and Buying",
      desc: "Technology and Design team comprises of UI/UX designers, coders, developers and web servicing specialists who strive to elevate customer experience with the finesse of design and technology.",
    },
    {
      id: 1,
      img: pic1,
      heading: "Media Planning and Buying",
      desc: "The Activation and Events team is focused on creating memorable events that address client briefs, deliver beyond expectations and leave a lasting impression. Schbang offers a turnkey approach to events from the initial conceptualization, to final production and management.",
    },
    {
      id: 2,
      img: pic2,
      heading: "Media Planning and Buying",
      desc: "Technology and Design team comprises of UI/UX designers, coders, developers and web servicing specialists who strive to elevate customer experience with the finesse of design and technology.",
    },
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
