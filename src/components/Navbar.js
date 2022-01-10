import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <a href="/">Home</a>
            <a href="/men">Men</a>
            <a href="/women">Women</a>
            <a href="/kids">Kids</a>
          </li>
        </ul>
        <h3 className="logo">Sole Mates</h3>
      </nav>
    </>
  );
};

export default Navbar;
