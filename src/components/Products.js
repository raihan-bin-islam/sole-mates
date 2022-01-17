import React, { useEffect, useState } from "react";
import { urlForAllSneakers } from "../api-config/apiHandler";
import useFetch from "../hooks/useFetch";
import ProductCard from "./ProductCard";
const Products = ({ category, year, numberOfProducts = 15, heading }) => {
  // api parameters state values
  const [limit, setLimit] = useState(20);
  const [gender, setGender] = useState(category);
  const [page, setPage] = useState(1);
  const [releaseYear, setReleaseYear] = useState(year);
  const [brand, setBrand] = useState(null);

  const [params, setParams] = useState({
    limit: limit,
    gender: gender,
    page: page,
    releaseYear: releaseYear,
    brand: brand,
  });
  const [products] = useFetch(urlForAllSneakers, params);
  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    setParams({ limit: limit, gender: gender, page: page, releaseYear: releaseYear });
  }, [limit, gender, page, releaseYear]);

  return (
    <div className="products">
      <h1>{heading}</h1>
      <div className="products-container">
        {products.map((product) => {
          return <ProductCard data={product} key={product.id} />;
        })}
      </div>
      <button onClick={nextPage}>next page</button>
    </div>
  );
};

export default Products;
