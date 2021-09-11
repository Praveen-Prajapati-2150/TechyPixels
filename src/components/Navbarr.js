import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbarr = () => {
  const [show, setShow] = useState(false);

  var scrollPos = 100;
  var yPos ;

  const transitionNavbar = () => {
    if (window.scrollY > scrollPos) {
      // if (yPos > scrollPos) {
      setShow(true);
    } else {
      setShow(false);
    }
    yPos = window.scrollY ;
    scrollPos = window.scrollY;

    console.log(window.scroolY);
    console.log(scrollPos);
    console.log(yPos)
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <div className="main">
      <nav className={`nav ${show && "nav__white "}`}>
      {/* <nav className={`show ? nav : nav__white`}> */}
        <Link to="/">
          <img
            className="nav__logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwF-x9cgqUj8qYRSWCnNIHubrpoeHUqrD8YSYbrPsqn-CUjxJUj2eF0HGINT9ILD4_wT0&usqp=CAU"
            alt="some error in logo"
          />
        </Link>

        <div
          id="nav__links"
          className={`nav__links ${show && "nav__black > a"}`}
        >
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/work">Our Work</Link>
          <Link to="/service">Service</Link>
        </div>
        <div className="nav__contact__link">
          <Link className="nav__contact" to="/contact">
            Contact
          </Link>
        </div>
      </nav>
      {/* ///////////////////////////////////// */}
    </div>
  );
};

export default Navbarr;
