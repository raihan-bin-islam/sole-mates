import React from "react";

const ProductCard = ({ data }) => {
  const {
    media: { thumbUrl },
    title,
    gender,
    retailPrice,
  } = data; // grab basic details from the product data
  return (
    <>
      {thumbUrl && (
        <div className="product-card">
          <img src={thumbUrl} alt="" />
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
