import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedProducts />
    </div>
  );
};

export default App;
