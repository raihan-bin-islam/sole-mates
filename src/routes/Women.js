import React from "react";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Footer from "../components/Footer";
const Women = () => {
  const heading = "Women's Collection";
  return (
    <>
      <Navbar bg="crimson" position="relative" />
      <Products heading={heading} category="women" />
      <Footer />
    </>
  );
};

export default Women;
