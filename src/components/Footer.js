import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";

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
            <a href="#">
              <BsFacebook className="icons" />
            </a>
            <a href="#">
              <BsInstagram className="icons" />
            </a>
            <a href="#">
              <BsLinkedin className="icons" />
            </a>
            <a href="#">
              <BsGithub className="icons" />
            </a>
          </div>
        </div>
        <div className="footer-links">
          <h3>Useful Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
              <a href="/">Men</a>
              <a href="/">Women</a>
              <a href="/">Kids</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
