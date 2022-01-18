import React from "react";
import banner from "../assets/banner-image/banner.png";
import { CgArrowLongDown } from "react-icons/cg";

const Hero = () => {
  return (
    <div className="hero-container">
      <h1>
        The journey begins with the perfect pair. <br /> Buy yours
      </h1>
      <img src={banner} alt="" />
      <button className="arrow-down">
        <CgArrowLongDown />
      </button>
    </div>
  );
};

export default Hero;
