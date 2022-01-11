import React, { useEffect, useState } from "react";
import API_KEY from "./apikey";
import ProductCard from "./ProductCard";
const FeaturedProducts = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(
      "https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=10&gender=men&page=2&releaseYear=2020",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "v1-sneakers.p.rapidapi.com",
          "x-rapidapi-key": API_KEY,
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProduct(data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="featured-products">
      <h1>Featured Products</h1>
      <div className="featured-products-container">
        {product &&
          product.map(
            ({ id, gender, name, media: { imageUrl }, retailPrice }, index) =>
              index < 3 &&
              imageUrl && (
                <ProductCard
                  id={id}
                  gender={gender}
                  name={name}
                  imageUrl={imageUrl}
                  retailPrice={retailPrice}
                />
              )
          )}
      </div>
    </div>
  );
};

export default FeaturedProducts;
