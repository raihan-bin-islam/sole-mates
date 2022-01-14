import React, { useRef } from "react";
import { urlForAllSneakers } from "../api-config/apiHandler";
import useFetch from "../hooks/useFetch";
import ProductCard from "./ProductCard";
const Products = (props) => {
  const { limit = 20, gender = "men", page = 1, releaseYear, numberOfProducts = limit - 5 } = props;
  const params = useRef({ limit: limit, gender: gender, page: page, releaseYear: releaseYear });
  const products = useFetch(urlForAllSneakers, params.current);
  return products.map(
    ({ id, ...data }, index) => index < numberOfProducts && <ProductCard data={data} key={id} />
  );
};

export default Products;
