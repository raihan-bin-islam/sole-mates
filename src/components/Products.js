import React, { useEffect, useState } from "react";
import { urlForAllSneakers } from "../api-config/apiHandler";
import useFetch from "../hooks/useFetch";
import ProductCard from "./ProductCard";
const Products = (props) => {
  const {
    limit = 20,
    page = 1,
    gender,
    releaseYear = 2020,
    numberOfProducts = 15,
    heading,
  } = props;
  // api parameters state values
  // const [limit, setLimit] = useState(20);
  // const [gender, setGender] = useState(category);
  // const [page, setPage] = useState(1);
  // const [releaseYear, setReleaseYear] = useState(year);
  // const [brand, setBrand] = useState(null);

  const [params, setParams] = useState({
    limit: limit,
    gender: gender,
    page: page,
    releaseYear: releaseYear,
  });
  const [products] = useFetch(urlForAllSneakers, params);

  useEffect(() => {
    setParams({ limit: limit, gender: gender, page: page, releaseYear: releaseYear });
  }, [limit, gender, page, releaseYear]);

  return (
    <div className="products">
      <h1>{heading}</h1>
      <div className="products-container">
        {products
          .filter((product, productCount = 0) => {
            productCount++;
            if (product.media.thumbUrl && productCount <= numberOfProducts) {
              return product;
            }
            return null;
          })
          .map((product) => {
            return <ProductCard data={product} key={product.id} />;
          })}
      </div>
    </div>
  );
};

export default Products;
