import React from "react";
import { useEffect } from "react/cjs/react.development";
import categoryList from "../utils/categoryList";
const Categories = () => {
  useEffect(() => {
    console.log(categoryList);
  });
  return (
    <div className="categories">
      <h1>Shop Now</h1>
      <div className="category-list">
        {categoryList.map(({ id, category, thumbnail }) => {
          return (
            <div className="category-card" key={id}>
              <h2>{category.toUpperCase()}</h2>
              <img src={thumbnail} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
