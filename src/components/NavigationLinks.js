import React from "react";
import { Link } from "react-router-dom";
const NavigationLinks = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
        <Link to="/men">Men</Link>
        <Link to="/women">Women</Link>
        <Link to="/kids">Kids</Link>
      </li>
    </ul>
  );
};

export default NavigationLinks;
