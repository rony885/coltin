import React from "react";
import { AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import { BiShuffle } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

// Example products array
const products = [
  {
    id: 1,
    vendor: "Entry",
    title: "Cleveland Pochette",
    price: 85,
    salePrice: 70,
    colors: [
      {
        name: "Pastel Brown",
        className: "bg_pastel-brown",
        img: "images/products/stroller-baby-brown.jpg",
      },
      {
        name: "Black",
        className: "bg_dark",
        img: "images/products/stroller-baby-black.jpg",
      },
    ],
    images: ["images/products/Fa_11a.jpg", "images/products/Fa_10a.jpg"],
  },
  {
    id: 2,
    vendor: "Entry",
    title: "Yekaty Women Cardigan 3/4 Sleeves",
    price: 17.3,
    colors: [
      {
        name: "Black",
        className: "bg_dark",
        img: "images/products/stroller-baby-black3.jpg",
      },
      {
        name: "Pastel Brown",
        className: "bg_pastel-brown",
        img: "images/products/stroller-baby-brown.jpg",
      },
      {
        name: "Pink",
        className: "bg_pink",
        img: "images/products/stroller-baby-pink.jpg",
      },
    ],
    images: ["images/products/Fa_29a.jpg", "images/products/Fa_30a.jpg"],
  },
  {
    id: 3,
    vendor: "Entry",
    title: "Mens Leather Shoulder Small Bag",
    price: 13.3,
    colors: [
      {
        name: "Black",
        className: "bg_dark",
        img: "images/products/stroller-baby-black3.jpg",
      },
      {
        name: "Pastel Brown",
        className: "bg_pastel-brown",
        img: "images/products/stroller-baby-brown.jpg",
      },
      {
        name: "Pink",
        className: "bg_pink",
        img: "images/products/stroller-baby-pink.jpg",
      },
    ],
    images: ["images/products/Fa_31a.jpg", "images/products/Fa_32a.jpg"],
  },
  {
    id: 4,
    vendor: "Entry",
    title: "Mens Leather Shoulder Small Bag",
    price: 13.3,
    colors: [
      {
        name: "Black",
        className: "bg_dark",
        img: "images/products/stroller-baby-yellow.jpg",
      },
      {
        name: "Pastel Brown",
        className: "bg_pastel-brown",
        img: "images/products/stroller-baby-black4.jpg",
      },
      {
        name: "Pink",
        className: "bg_pink",
        img: "images/products/stroller-baby-grey.jpg",
      },
    ],
    images: ["images/products/Fa_19a.jpg", "images/products/Fa_20a.jpg"],
  },
  {
    id: 5,
    vendor: "Entry",
    title: "Mens Leather Shoulder Small Bag",
    price: 13.3,
    colors: [
      {
        name: "Yellow",
        className: "bg_dark",
        img: "images/products/stroller-baby-yellow.jpg",
      },
      {
        name: "Pastel Brown",
        className: "bg_pastel-brown",
        img: "images/products/stroller-baby-grey.jpg",
      },
    ],
    images: ["images/products/Fa_12a.jpg", "images/products/Fa_13a.jpg"],
  },
];

const Wishlist = () => {
  return (
    <>
      <div className="breadcrumb">
        <div className="container">
          <div className="breadcrumbtitle">
            <h2>Top</h2>
          </div>
          <div className="breadcrumb-wrap d-flex justify-content-center flex-wrap align-items-center">
            <div className="breadcrumb-list">
              <Link to="/" className="text">
                Home
              </Link>
              <i className="icon icon-arrow-right"></i>
              <Link to="#" className="text">
                Wishlist
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section className="flat-spacing-2 products-listing">
        <div className="container">
          <div
            className="product-layout grid__item grid-layout wrapper-shop"
            data-grid="grid-4"
          >
            {products.map((product) => (
              <div className="item" key={product.id}>
                <div className="product-item card-product">
                  <div className="product-item-container">
                    {/* Left block */}
                    <div className="left-block">
                      <Link to="/product-details" className="product-img">
                        <span
                          className="media media--transparent media-- media--hover-effect"
                          style={{ paddingBottom: "100%" }}
                        >
                          <img
                            className="lazyload img-product"
                            src={product.images[0]}
                            alt={product.title}
                          />
                          <img
                            className="lazyload img-hover"
                            src={product.images[1]}
                            alt={product.title}
                          />
                        </span>
                      </Link>
                      <div className="list-product-btn column-right">
                        <Link
                          to="#"
                          className="box-icon bg_white wishlist btn-icon-action"
                        >
                          <AiOutlineHeart size={16} className="ss-wishlist-v" />
                          <span className="tooltip">Add to Wishlist</span>
                          <span className="icon icon-delete"></span>
                        </Link>
                        <Link
                          to="#compare"
                          data-bs-toggle="offcanvas"
                          className="box-icon bg_white compare btn-icon-action"
                        >
                          <BiShuffle size={16} />
                          <span className="tooltip">Add to Compare</span>
                          <span className="icon icon-check"></span>
                        </Link>
                        <Link
                          to="#quick_view"
                          data-bs-toggle="modal"
                          className="box-icon bg_white quickview ss-btn-loading"
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
                          <Link to="/shop" title={product.vendor}>
                            {product.vendor}
                          </Link>
                        </div>
                        <h4>
                          <Link to="/product-details" className="title link">
                            {product.title}
                          </Link>
                        </h4>
                        <div className="price">
                          {product.salePrice ? (
                            <>
                              <div className="product-price--regular">
                                ${product.price}
                              </div>
                              <div className="price-item--sale">
                                ${product.salePrice}
                              </div>
                            </>
                          ) : (
                            <div className="product-price">
                              ${product.price}
                            </div>
                          )}
                        </div>
                        <ul className="list-color-product">
                          {product.colors.map((color, index) => (
                            <li
                              className={`list-color-item color-swatch ${
                                index === 0 ? "active" : ""
                              }`}
                              key={index}
                            >
                              <span className="tooltip">{color.name}</span>
                              <span
                                className={`swatch-value ${color.className}`}
                              ></span>
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
                          // to="#quick_add"
                          data-bs-toggle="modal"
                          className="btn-addToCart grl btn_df"
                        >
                          <FiShoppingCart size={20} />
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
      </section>
    </>
  );
};

export default Wishlist;
