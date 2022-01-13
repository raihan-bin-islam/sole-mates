import React from "react";
import categoryList from "../utils/categoryList";
const Categories = () => {
  return (
    <div className="categories">
      <h1>Shop Now</h1>
      <div className="category-list">
        {categoryList.map(({ id, category, thumbnail }) => {
          return (
            <div className="category-card" key={id}>
              <h2>{category}</h2>
              <img src={thumbnail} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
