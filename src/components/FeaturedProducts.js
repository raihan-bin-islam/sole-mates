import React, { useRef } from "react";
import { urlForAllSneakers } from "../api-config/apiHandler";
import useFetch from "../hooks/useFetch";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  const params = useRef({ limit: 10, gender: "men", releaseYear: 2020, page: 1 });
  const product = useFetch(urlForAllSneakers, params.current);

  return (
    <>
      <div className="featured-products">
        <h1>Featured Products</h1>
        <div className="featured-products-container">
          {product ? (
            product.map(
              ({ id, ...data }, index) => index < 3 && <ProductCard data={data} key={id} />
            )
          ) : (
            <h3>No Products Found</h3>
          )}
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;
