import React from "react";

const ProductCard = ({ data }) => {
  const {
    media: { imageUrl },
    title,
    gender,
    retailPrice,
  } = data; // grab basic details from the product data
  return (
    <>
      {imageUrl && (
        <div className="product-card">
          <img src={imageUrl} alt="" />
          <p className="name">{title}</p>
          <p className="gender">{gender.toUpperCase()}</p>
          <p className="price">${retailPrice}</p>
          <button>Add to cart</button>
        </div>
      )}
    </>
  );
};

export default ProductCard;
