import React from "react";
import FeaturedProducts from "./components/FeaturedProducts";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedProducts />
    </div>
  );
};

export default App;
