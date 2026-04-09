import React, { useEffect, useState } from "react";
import ProductDetailsInfo from "./ProductDetailsInfo";
import Tabs from "./Tabs";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = ({ toggleCart, closeCart, openQuickView }) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch Products
        const productsRes = await axios.get(
          `https://apps.fusiontradebd.com/server/product_api/product/${id}/`,
        );
        setProduct(productsRes.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <ProductDetailsInfo
        product={product}
        toggleCart={toggleCart}
        closeCart={closeCart}
      />
      <Tabs product={product} />
    </div>
  );
};

export default ProductDetails;
