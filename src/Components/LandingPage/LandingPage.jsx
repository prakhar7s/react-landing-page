import React from "react";

import "./LandingPage.css";

import { ReactComponent as RealTime } from "../../assets/real-time.svg";

// Brand Icons
import AppleIcon from "@material-ui/icons/Apple";
import InstagramIcon from "@material-ui/icons/Instagram";
import PinterestIcon from "@material-ui/icons/Pinterest";
import FacebookIcon from "@material-ui/icons/Facebook";
import RedditIcon from "@material-ui/icons/Reddit";
import YouTubeIcon from "@material-ui/icons/YouTube";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="container">
        <header>
          <div className="app-name">
            <span className="first">M</span>y <span className="first">W</span>
            ebsite
          </div>
          <div className="header-links">
            <a href="#">Sign In</a>
            <a href="#">GET STARTED</a>
          </div>
        </header>
        <div className="left-portion">
          <h1 className="heading">Manage Your Team and get more done</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            molestiae, numquam quas laborum facere iste et quasi, nam nihil rem
            iure temporibus minima amet similique asperiores cupiditate voluptas
            aspernatur totam!
          </p>
          <div className="links">
            <a href="#">try for free</a>
            <a href="#">contact sales</a>
          </div>
          <div className="trusted-by">
            <p>Trusted by the world 's most innovative compaines</p>
            <div className="brands">
              <AppleIcon />
              <h4>Google</h4>
              <InstagramIcon />
              <RedditIcon />
              <PinterestIcon />
              <h4>SAMSUNG</h4>
              <FacebookIcon />
              <YouTubeIcon />
            </div>
          </div>
        </div>
        <div className="svg-image">
          <RealTime />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
