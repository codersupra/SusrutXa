import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-overlay">
        <h1>Revolutionizing Space Exploration</h1>
        <p>Building the future, one mission at a time.</p>
        <button className="cta-button">Learn More</button>
      </div>
    </div>
  );
};

export default Hero;
