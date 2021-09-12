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

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

// IMPORTING ICONS
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import SchoolIcon from "@material-ui/icons/School";
import PersonIcon from "@material-ui/icons/Person";
import BookmarksIcon from "@material-ui/icons/Bookmarks";

// REACT APP IMPORTS
import Home from "../HomeSection/Home.js";
import MAbout from "../AboutSection/MAbout.js";
import MOurWork from "../OurWorkSection/MOurWork.js";
import Services from "../Service/MServices";
import MContact from "../Contact/MContact.js";
import Navbar from "../components/Navbarr.js";
import MNavbar from "../components/MNavbar.js";

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
                TechyPixels
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
                      <ListItemIcon>{/* <HomeIcon /> */}</ListItemIcon>
                      <Typography variant="h6">Home</Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => setAnchor(null)}
                      component={Link}
                      to="/about"
                    >
                      <ListItemIcon>{/* <SchoolIcon /> */}</ListItemIcon>
                      <Typography variant="h6">About </Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => setAnchor(null)}
                      component={Link}
                      to="/work"
                    >
                      <ListItemIcon>{/* <PersonIcon /> */}</ListItemIcon>
                      <Typography variant="h6"> Our Work</Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => setAnchor(null)}
                      component={Link}
                      to="/service"
                    >
                      <ListItemIcon>{/* <BookmarksIcon /> */}</ListItemIcon>
                      <Typography variant="h6"> Service </Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => setAnchor(null)}
                      component={Link}
                      to="/contact"
                    >
                      <ListItemIcon>{/* <BookmarksIcon /> */}</ListItemIcon>
                      <Typography variant="h6"> Contact </Typography>
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
                  >
                    {/* <HomeIcon /> */}
                    Home
                  </Button>
                  <Button
                    variant="text"
                    component={Link}
                    to="/about"
                    color="default"
                  >
                    {/* <SchoolIcon /> */}
                    About
                  </Button>
                  <Button
                    variant="text"
                    component={Link}
                    to="/work"
                    color="default"
                  >
                    {/* <PersonIcon /> */}
                    Our Work
                  </Button>
                  <Button
                    variant="text"
                    component={Link}
                    to="/service"
                    color="default"
                  >
                    {/* <BookmarksIcon /> */}
                    Services
                  </Button>
                  <Button
                    variant="text"
                    component={Link}
                    to="/contact"
                    color="default"
                  >
                    {/* <BookmarksIcon /> */}
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
            <Route exact path="/service" component={Services} />
            <Route exact path="/contact" component={MContact} />
          </Switch>
        </BrowserRouter>
      </HideOnScroll>
    </div>
  );
};

export default Header;
