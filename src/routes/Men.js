import React from "react";
import Products from "../components/Products";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Men = () => {
  const heading = "Men's Collection";
  return (
    <>
      <Navbar bg="crimson" position="relative" />
      <Products heading={heading} gender="men" />
      <Footer />
    </>
  );
};

export default Men;
