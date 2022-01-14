import React from "react";
import NavigationLinks from "./NavigationLinks";
const Navbar = ({ bg, position = "absolute" }) => {
  return (
    <>
      <nav className="navbar" style={{ background: bg, position: position }}>
        <NavigationLinks />
        <h3 className="logo">Sole Mates</h3>
      </nav>
    </>
  );
};

export default Navbar;
