import React from "react";

const ProductCard = ({ data }) => {
  const { id, imageUrl, name, gender, retailPrice } = data;
  return (
    imageUrl && (
      <div className="product-card" key={id}>
        <img src={imageUrl} alt="" />
        <p className="name">{name}</p>
        <p className="gender">{gender.toUpperCase()}</p>
        <p className="price">${retailPrice}</p>
        <button>Add to cart</button>
      </div>
    )
  );
};

export default ProductCard;
