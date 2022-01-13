import React from "react";
import NavigationLinks from "./NavigationLinks";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <NavigationLinks />
        <h3 className="logo">Sole Mates</h3>
      </nav>
    </>
  );
};

export default Navbar;
