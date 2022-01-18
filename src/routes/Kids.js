import React from "react";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Footer from "../components/Footer";
const Kids = () => {
  const heading = "Kid's Collection";
  return (
    <>
      <Navbar bg="crimson" position="relative" />
      {/* <Products heading={heading} category="preschool" /> */}
      <Footer />
    </>
  );
};

export default Kids;
