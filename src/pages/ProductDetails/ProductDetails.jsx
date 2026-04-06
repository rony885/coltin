import React from "react";
import ProductDetailsInfo from "./ProductDetailsInfo";
import Tabs from "./Tabs";
import Product from "./Product";

const ProductDetails = ({ toggleCart, closeCart, openQuickView }) => {
  return (
    <div>
      <ProductDetailsInfo toggleCart={toggleCart} closeCart={closeCart} />
      <Tabs />
      <Product openQuickView={openQuickView} />
    </div>
  );
};

export default ProductDetails;
