import React from "react";
import Products from "./Products";

const FeaturedProducts = () => {
  const heading = "Featured Products";
  return (
    <>
      <Products heading={heading} year={2020} numberOfProducts={3} />
    </>
  );
};

export default FeaturedProducts;
