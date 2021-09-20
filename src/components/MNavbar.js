// IMPORTING APIS
import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useMediaQuery,
  Button,
  useScrollTrigger,
  Slide,
  Menu,
  MenuItem,
  ListItemIcon,
} from "@material-ui/core";

import "../styles/Navbar.css";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

// IMPORTING ICONS
import MenuIcon from "@material-ui/icons/Menu";

// REACT APP IMPORTS
import Home from "../HomeSection/Home.js";
import MAbout from "../AboutSection/MAbout.js";
import MOurWork from "../OurWorkSection/MOurWork.js";
import MServices from "../Service/MServices";
import MContact from "../Contact/MContact.js";
import MContactSection1 from "../Contact/Section1.js";
import mainLogo from "../Assets/mainLogo3.png";
// import mainLogo1svg from "../Assets/mainLogo2";

// LOCAL-STYLING
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  contact: {
    backgroundColor: "white",
    color: "black",
    border: "2px solid black",
    transition: "0.7s",
    padding: "6px 20px",
    borderRadius: "0px",
    "&:hover": {
      backgroundColor: "black",
      color: "white",
      border: "2px solid black",
      padding: "6px 20px",
    },
  },
}));

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction={"down"} in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = (props) => {
  const classes = useStyles();
  const [anchor, setAnchor] = React.useState(null);
  const open = Boolean(anchor);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleMenu = (event) => {
    setAnchor(event.currentTarget);
  };
  return (
    <div className={classes.root}>
      <HideOnScroll {...props}>
        <BrowserRouter>
          <AppBar style={{ backgroundColor: "white" }}>
            <Toolbar>
              <Typography
                variant="h5"
                // component="p"
                // color="textSecondary"
                component={Link}
                to="/"
                style={{ color: "black", textDecoration: "none" }}
                className={classes.title}
              >
                <img style={{height:"70px",widht:"100px",zIndex:"1000", color:"black"}} src={mainLogo} alt="" />
                {/* Techy Pixels */}
                
              </Typography>
              {isMobile ? (
                <>
                  <IconButton
                    color="textPrimary"
                    className={classes.menuButton}
                    edge="start"
                    aria-label="menu"
                    onClick={handleMenu}
                  >
                    <MenuIcon style={{ color: "black" }} />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchor}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    KeepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={open}
                  >
                    <MenuItem
                      onClick={() => setAnchor(null)}
                      component={Link}
                      to="/"
                    >
                      <Typography variant="h6">Home</Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => setAnchor(null)}
                      component={Link}
                      to="/about"
                    >
                      <Typography variant="h6">About </Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => setAnchor(null)}
                      component={Link}
                      to="/work"
                    >
                      <Typography variant="h6"> Our Work</Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => setAnchor(null)}
                      component={Link}
                      to="/service"
                    >
                      <Typography variant="h6"> Service </Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => setAnchor(null)}
                      component={Link}
                      to="/contact"
                    >
                      <Typography variant="h6">Contact</Typography>
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <div style={{ marginRight: "2rem" }}>
                  <Button
                    variant="text"
                    component={Link}
                    to="/"
                    color="default"
                    style={{ marginRight: "8px" }}
                  >
                    Home
                  </Button>
                  <Button
                    variant="text"
                    component={Link}
                    to="/about"
                    color="default"
                    style={{ marginRight: "8px" }}
                  >
                    About
                  </Button>
                  <Button
                    variant="text"
                    component={Link}
                    to="/work"
                    color="default"
                    style={{ marginRight: "8px" }}
                  >
                    Our Work
                  </Button>
                  <Button
                    variant="text"
                    component={Link}
                    to="/service"
                    color="default"
                    style={{ marginRight: "13px" }}
                  >
                    Services
                  </Button>
                  <Button
                    variant="text"
                    component={Link}
                    to="/contact"
                    color="default"
                    // className="Mnavbar__contact"

                    className={classes.contact}
                  >
                    Contact
                  </Button>
                </div>
              )}
            </Toolbar>
          </AppBar>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={MAbout} />
            <Route exact path="/work" component={MOurWork} />
            <Route exact path="/service" component={MServices} />
            <Route exact path="/contact" component={MContact} />
          </Switch>
        </BrowserRouter>
      </HideOnScroll>
    </div>
  );
};

export default Header;
