import React from "react";
import HeroSlider from "./HeroSlider";
import Categories from "./Categories";
import ProductDeal from "./ProductDeal";
import ServiceBox from "./ServiceBox";
import Product from "./Product";
import ProductRecomended from "./ProductRecomended";

const Home = ({ openQuickView }) => {
  return (
    <div>
      <HeroSlider />
      <Categories />
      <ProductDeal openQuickView={openQuickView} />
      <Product openQuickView={openQuickView} />
      <ProductRecomended openQuickView={openQuickView} />
      <ServiceBox />
    </div>
  );
};

export default Home;
