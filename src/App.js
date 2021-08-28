import "./App.css";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Home from "./pages/Home.js";
import Work from "./pages/Work.js";
import Navbar from "./components/Navbar.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Services from "./pages/Services";

function App() {
  const showWhereClicked = (e) => {
    console.log(`you have clicked X:${e.screenX} Y:${e.screenY}`);

    // do stuff
  };
  // console.log(window.)

  return (
    <div className="app">
      <div className="dot"></div>
      {/* <div className="myContainer" onClick={window.showWhereClicked}>
                I am 500px tall.
            </div> */}

      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Home />
          </Route>
          <Route exact path="/about">
            <Navbar />
            <About />
          </Route>
          <Route exact path="/work">
            <Navbar />
            <Work />
          </Route>
          <Route exact path="/service">
            <Navbar />
            <Services />
          </Route>
          <Route exact path="/contact">
            <Navbar />
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
