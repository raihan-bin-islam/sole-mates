import React from "react";
import { Link } from "react-router-dom";
import categoryList from "../utils/categoryList";
const Categories = () => {
  return (
    <div className="categories">
      <h1>Shop Now</h1>
      <div className="category-list">
        {categoryList.map(({ id, category, thumbnail }) => {
          return (
            <div className="category-card" key={id}>
              <Link to={category}>
                <h2>{category.toUpperCase()}</h2>
                <img src={thumbnail} alt="" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
