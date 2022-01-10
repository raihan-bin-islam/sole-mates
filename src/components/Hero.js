import React from "react";
import banner from "../assets/banner-image/banner.png";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-container">
        <h1>Up to 50% off on Nike, Adidas, Reebok and Others</h1>
        <img src={banner} alt="" />
        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, magni.</h2>
      </div>
    </div>
  );
};

export default Hero;
