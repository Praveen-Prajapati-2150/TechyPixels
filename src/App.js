import "./App.css";
import MAbout from "./AboutSection/MAbout.js";
import Contact from "./Contact/MContact.js";
import Home from "./HomeSection/Home.js";
import MOurWork from "./OurWorkSection/MOurWork.js";
import Navbar from "./components/Navbarr.js";
import MNavbar from "./components/MNavbar.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Services from "./Service/MServices";
import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import ContactUs from "./HomeSection/ContactUs";
import Footer from "./HomeSection/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

function App() {
  const showWhereClicked = (e) => {
    console.log(`you have clicked X:${e.screenX} Y:${e.screenY}`);

    // do stuff
  };
  // console.log(window.)

  return (
    <div className="app">
      <React.Fragment>
        <div id="back-to-top" />

        {/* <Router>
          <Switch>
            <Route exact path="/">
              <MNavbar />
              <Navbar />
              <Home />
            </Route>
            <Route exact path="/about">
              <Navbar />
              <MAbout />
              <Footer />
            </Route>
            <Route exact path="/work">
              <Navbar />
              <MOurWork />
              <Footer />
            </Route>
            <Route exact path="/service">
              <Navbar />
              <Services />
              <Footer />
            </Route>
            <Route exact path="/contact">
              <Navbar />
              <Contact />
              <Footer />
            </Route>
          </Switch>
        </Router> */}

        <MNavbar/>

        {/* <Toolbar id="back-to-top-anchor" /> */}

        <ScrollTop>
          <Fab
            style={{
              color: "rgb(32, 182, 154)",
              backgroundColor: "transparent",
              border: "2px solid rgb(32, 182, 154)",
            }}
            color="primary"
            size="small"
            aria-label="scroll back to top"
          >
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </React.Fragment>
    </div>
  );
}

export default App;
