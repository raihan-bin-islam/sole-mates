import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import NavigationLinks from "./NavigationLinks";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="website-details">
          <h3 className="logo">Sole Mates</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quod, nisi suscipit iusto
            pariatur quis iure necessitatibus tempore nostrum soluta!
          </p>
          <div className="social-icons">
            <a href="https://www.facebook.com/raihanulislams/">
              <BsFacebook className="icons" />
            </a>
            <a href="https://www.instagram.com/raihanul_islam">
              <BsInstagram className="icons" />
            </a>
            <a href="https://www.linkedin.com/in/raihan-bin-islam/">
              <BsLinkedin className="icons" />
            </a>
            <a href="https://github.com/raihan-bin-islam/">
              <BsGithub className="icons" />
            </a>
          </div>
        </div>
        <div className="footer-links">
          <h3>Useful Links</h3>
          <NavigationLinks />
        </div>
      </div>
    </div>
  );
};

export default Footer;
