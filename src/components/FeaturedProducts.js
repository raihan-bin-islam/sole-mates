import React, { useEffect, useState } from "react";

const FeaturedProducts = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
    fetch("https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=10&gender=men&page=2&releaseYear=2020", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v1-sneakers.p.rapidapi.com",
        "x-rapidapi-key": apiKey,
      },
    })
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
                <div className="featured-product-card" key={id}>
                  <img src={imageUrl} alt="" />
                  <p className="name">{name}</p>
                  <p className="gender">{gender.toUpperCase()}</p>
                  <p className="price">${retailPrice}</p>
                  <button>Add to cart</button>
                </div>
              )
          )}
      </div>
    </div>
  );
};

export default FeaturedProducts;
