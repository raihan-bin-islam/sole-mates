import React from "react";
import categoryList from "../utils/categoryList";
const Categories = () => {
  return (
    <div className="category">
      <h1>Shop Now</h1>
      <div className="category-list"></div>
      {categoryList.map(({ id, category, thumbnail }) => {
        <div className="category-card" key={id}>
          <h2>{category}</h2>
          <img src={thumbnail} alt="" />
        </div>;
      })}
    </div>
  );
};

export default Categories;
