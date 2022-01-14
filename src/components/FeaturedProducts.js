import React from "react";
import Products from "./Products";

const FeaturedProducts = () => {
  return (
    <>
      <div className="featured-products">
        <h1>Featured Products</h1>
        <div className="featured-products-container">
          <Products releaseYear={2020} numberOfProducts={3} />
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;
