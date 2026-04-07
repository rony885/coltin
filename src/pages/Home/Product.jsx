import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import { FiRepeat } from "react-icons/fi";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import products from "../../DataJs/product.js";

const Product = ({ openQuickView }) => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    setProductsData(products);
  }, []);

  return (
    <Wrapper>
      <div className="widget-product-carousel owl-style1 mb_40">
        <div className="container">
          <div className="box-title">
            <h3>Customer Most Loved</h3>
            <div className="view-all">
              <Link to="/product">View all product</Link>
            </div>
          </div>

          <div className="products-listing">
            <div className="block-content product-layout grid__item">
              {/* NORMAL ITEM CARDS */}
              {productsData.map((product) => (
                <div className="item" key={product.id}>
                  <div className="product-item card-product">
                    <div className="product-item-container">
                      {/* Left block */}
                      <div className="left-block">
                        <Link to="/product-details" className="product-img">
                          <span
                            className="media media--transparent media--hover-effect"
                            style={{ paddingBottom: "100%" }}
                          >
                            <img
                              className="lazyload img-product"
                              src={product.images.main}
                              alt={product.title}
                            />
                            <img
                              className="lazyload img-hover"
                              src={product.images.hover}
                              alt={product.title}
                            />
                          </span>
                        </Link>

                        <div className="list-product-btn column-right">
                          <Link className="box-icon bg_white wishlist btn-icon-action">
                            <AiOutlineHeart size={16} />
                            <span className="tooltip">Add to Wishlist</span>
                          </Link>

                          <Link
                            to="#compare"
                            data-bs-toggle="offcanvas"
                            className="box-icon bg_white compare btn-icon-action"
                          >
                            <FiRepeat size={16} />
                            <span className="tooltip">Add to Compare</span>
                          </Link>

                          <Link
                            className="box-icon bg_white quickview"
                            onClick={openQuickView}
                          >
                            <AiOutlineEye size={16} />
                            <span className="tooltip">Quick View</span>
                          </Link>
                        </div>
                      </div>

                      {/* Right block */}
                      <div className="right-block">
                        <div className="caption">
                          <div className="title-vendor">
                            <Link to="/product">{product.vendor}</Link>
                          </div>

                          <h4 className="title-product">
                            <Link to="/product-details">{product.title}</Link>
                          </h4>

                          <div className="price">
                            {product.price.sale ? (
                              <>
                                <div className="product-price--regular">
                                  ${product.price.regular}
                                </div>
                                <div className="price-item--sale">
                                  ${product.price.sale}
                                </div>
                              </>
                            ) : (
                              <div className="product-price">
                                ${product.price.regular}
                              </div>
                            )}
                          </div>

                          <ul className="list-color-product">
                            {product.colors.map((color, idx) => (
                              <li
                                key={idx}
                                className={`list-color-item color-swatch ${
                                  color.active ? "active" : ""
                                }`}
                              >
                                <span className="tooltip">{color.name}</span>
                                <span
                                  className={`swatch-value ${color.class}`}
                                />
                                <img
                                  className="lazyload"
                                  src={color.img}
                                  alt={color.name}
                                />
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="button-link">
                          <Link
                            to="#quick_add"
                            data-bs-toggle="modal"
                            className="btn-addToCart grl btn_df"
                          >
                            <BsCart size={20} />
                            <span>Add to cart</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .product-layout {
    display: flex;
    flex-wrap: wrap;
    margin-left: -5px;
    margin-right: -5px;
  }

  .product-layout .item {
    width: 20%;
    padding: 0 5px 10px; /* 10px gap */
    box-sizing: border-box;
  }

  @media (max-width: 1200px) {
    .product-layout .item {
      width: 25%;
    }
  }

  @media (max-width: 992px) {
    .product-layout .item {
      width: 33.3333%;
    }
  }

  @media (max-width: 768px) {
    .product-layout .item {
      width: 50%;
    }
  }
`;

export default Product;
