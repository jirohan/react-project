import React from "react";
import "./Hero.css";
import Header from "../Header/Header";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />
        {/* the best ads */}
        <div className="the-best-ads">
          <div></div>
          <span>The best gym in the town</span>
        </div>
        {/* hero heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body an
              live up your life to fullest. Body = Mind
            </span>
          </div>
        </div>
        {/* Figures */}
        <div className="figures">
          <div>
            <span>+140</span>
            <span>Expert Coaches</span>
          </div>
          <div>
            <span>+988</span>
            <span>Members Joined</span>
          </div>
          <div>
            <span>+150</span>
            <span>Fitenss programs</span>
          </div>
        </div>
      </div>
      <div className="right-h">right-side</div>
    </div>
  );
};

export default Hero;
