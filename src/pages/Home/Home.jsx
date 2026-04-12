import React from "react";
import HeroSlider from "./HeroSlider";
import Categories from "./Categories";
import ProductDeal from "./ProductDeal";
import ServiceBox from "./ServiceBox";
import Product from "./Product";
import ProductRecomended from "./ProductRecomended";

import NewArrivals from "./NewArrivals";
import FeaturedOffers from "./FeaturedOffers";
import Video from "./Video";
import Brand from "./Brand";

const Home = ({ openQuickView, categories }) => {
  return (
    <div>
      <HeroSlider />
      <Categories categories={categories} />
      <ProductDeal openQuickView={openQuickView} />
      <Product openQuickView={openQuickView} />
      <NewArrivals />
      <ProductRecomended openQuickView={openQuickView} />
      <FeaturedOffers />
      <Video />
      <Brand />
      <ServiceBox />
    </div>
  );
};

export default Home;
