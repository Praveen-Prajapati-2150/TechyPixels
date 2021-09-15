import React from "react";
import "../styles/MOurWork.css";
import pic1 from "../Assets/work1.png";
import pic2 from "../Assets/work2.png";
import pic3 from "../Assets/work3.png";
import pic4 from "../Assets/work4.png";
import pic5 from "../Assets/work5.png";
import pic6 from "../Assets/work6.png";
import pic7 from "../Assets/work7.png";
import pic8 from "../Assets/work8.png";
import pic9 from "../Assets/work9.png";

const Section1 = () => {
  const data = [
    {
      id: 1,
      img: pic1,
      desc: "Graphic Design 'CleanQ'",
    },
    {
      id: 2,
      img: pic2,
      desc: "Blender 3d model with adobe photoshop.",
    },
    {
      id: 3,
      img: pic3,
      desc: "Burger king impossible whopper.",
    },
    {
      id: 4,
      img: pic4,
      desc: "September Forest Design",
    },
    {
      id: 5,
      img: pic5,
      desc: "Charmee Cosmetics Design",
    },
    {
      id: 6,
      img: pic6,
      desc: "Je Suis Belle Logo Design",
    },
    {
      id: 7,
      img: pic7,
      desc: "UI for brand name 'NIKE'",
    },
    {
      id: 8,
      img: pic8,
      desc: "Logo Design for 'Nanasi'",
    },
    {
      id: 9,
      img: pic9,
      desc: "UI for brand name 'ADIDAS'",
    },
  ];

  return (
    <div className="OurWork">
      <section className="section1">
        <div className="sub1">
          <h1>Our Work</h1>
        </div>
        <hr />
        <div className="sub2">
          {data.map((user) => {
            return (
              <div className="card" key={user.id}>
                <img className="card__img" src={user.img} alt="nothing" />
                <div className="info">
                  <h1>{user.desc}</h1>
                  {/* <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Atque, dolor?
                  </p> */}
                </div>
              </div>
            );
          })}
        </div>
        <div className="overlay"></div>
      </section>
    </div>
  );
};

export default Section1;
