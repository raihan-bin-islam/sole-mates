import React, { useEffect, useState } from "react";
import { urlForAllSneakers } from "../api-config/apiHandler";
import useFetch from "../hooks/useFetch";
import ProductCard from "./ProductCard";
const Products = (props) => {
  const {
    limit = 20,
    gender = "men",
    page = 1,
    releaseYear,
    numberOfProducts = limit - 5,
    heading,
  } = props;
  const [params, setParams] = useState({
    limit: limit,
    gender: gender,
    page: page,
    releaseYear: releaseYear,
  });
  const products = useFetch(urlForAllSneakers, params);
  useEffect(() => {
    setParams({ limit: limit, gender: gender, page: page, releaseYear: releaseYear });
  }, [limit, gender, page, releaseYear, numberOfProducts, heading]);

  return (
    <div className="products">
      <h1>{heading}</h1>
      <div className="products-container">
        {products.map(
          ({ id, ...data }, index) =>
            index < numberOfProducts && <ProductCard data={data} key={id} />
        )}
      </div>
    </div>
  );
};

export default Products;
