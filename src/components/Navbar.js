import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);

  var scrollPos;

  const transitionNavbar = () => {
    if (window.scrollY > scrollPos) {
      setShow(true);
    } else {
      setShow(false);
    }
    scrollPos = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <nav className={`nav ${show && "nav__white"}`}>
      <Link to="/">
        <img
          className="nav__logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwF-x9cgqUj8qYRSWCnNIHubrpoeHUqrD8YSYbrPsqn-CUjxJUj2eF0HGINT9ILD4_wT0&usqp=CAU"
          alt="some error in logo"
        />
      </Link>

      <div className={`nav__links ${show && "nav__black > a"}`}>
        <Link className="nav__black" to="/">
          Home
        </Link>
        <Link to="/about">About</Link>
        <Link to="/work">Work</Link>
        <Link to="/service">Service</Link>
        <Link className="nav__contact" to="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
