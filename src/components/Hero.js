import React from "react";
import banner from "../assets/banner-image/banner.png";
import { CgArrowLongDown } from "react-icons/cg";
import { Link } from "react-scroll";
const Hero = () => {
  return (
    <div className="hero-container">
      <h1>
        The journey begins with the perfect pair. <br /> Buy yours
      </h1>
      <img src={banner} alt="" />

      <Link className="arrow-down" to="category" smooth={true} duration={800} spy={true}>
        <CgArrowLongDown />
      </Link>
    </div>
  );
};

export default Hero;
