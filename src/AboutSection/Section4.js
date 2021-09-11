import React from "react";
import ComputerIcon from "@material-ui/icons/Computer";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import BrushIcon from "@material-ui/icons/Brush";
// import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import LanguageIcon from "@material-ui/icons/Language";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";

const Section4 = () => {
  return (
    <div className="section4">
      <div className="sub1">
        <h2>Our Principles</h2>
      </div>
      <div className="sub2">
        <div className="sub2__1">
            <div className="icon1 sub2Icon">
              <ComputerIcon className="material-Icon" />
              <h3>Client's Business Wins, We Win</h3>
            </div>
            <div className="icon2 sub2Icon">
              <MenuBookIcon className="material-Icon" />
              <h3>Our Word is our Bond</h3>
            </div>
            <div className="icon3 sub2Icon">
              <BrushIcon className="material-Icon" />
              <h3>Creativity is Sacred. Aesthetics are God</h3>
            </div>
            <div className="icon4 sub2Icon">
              <ThumbUpIcon className="material-Icon" />
              <h3>Partnerships with Win - Win Attitudes</h3>
            </div>
        </div>
        {/* ----------------------------- */}
        <br />
        {/* ----------------------------- */}
        <div className="sub2__2">
            <div className="icon5 sub2Icon">
              <SupervisedUserCircleIcon className="material-Icon" />
              <h3>Be Culturally Relevant, Always</h3>
            </div>
            <div className="icon6 sub2Icon">
              <PhoneIphoneIcon className="material-Icon" />
              <h3>Technology to Simplify</h3>
            </div>
            <div className="icon7 sub2Icon">
              <LanguageIcon className="material-Icon" />
              <h3>Build Local. Serve Global. Learn Global. Serve Local.</h3>
            </div>
            <div className="icon8 sub2Icon">
              <EmojiObjectsIcon className="material-Icon" />
              <h3>Think, Plan and then Execute Fearlessly</h3>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
