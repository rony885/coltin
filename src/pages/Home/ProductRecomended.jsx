import React from "react";
import styled from "styled-components";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import { FiRepeat } from "react-icons/fi";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Product data array
const products = [
  {
    id: 1,
    vendor: "Entry",
    name: "Cleveland Pochette",
    priceRegular: "$20.00",
    priceSale: "$10.00",
    images: ["images/products/Fa_11a.jpg", "images/products/Fa_10a.jpg"],
    colors: [
      {
        name: "Pastel Brown",
        class: "bg_pastel-brown",
        image: "images/products/stroller-baby-brown.jpg",
      },
      {
        name: "Black",
        class: "bg_dark",
        image: "images/products/stroller-baby-black.jpg",
      },
    ],
  },
  {
    id: 2,
    vendor: "Entry",
    name: "Yekaty Women Cardigan 3/4 Sleeves",
    priceRegular: "$17.30",
    images: ["images/products/Fa_29a.jpg", "images/products/Fa_30a.jpg"],
    colors: [
      {
        name: "Black",
        class: "bg_dark",
        image: "images/products/stroller-baby-black3.jpg",
      },
      {
        name: "Pastel Brown",
        class: "bg_pastel-brown",
        image: "images/products/stroller-baby-brown.jpg",
      },
      {
        name: "Pink",
        class: "bg_pink",
        image: "images/products/stroller-baby-pink.jpg",
      },
    ],
  },
  {
    id: 3,
    vendor: "Entry",
    name: "Mens Leather Shoulder Small Bag",
    priceRegular: "$13.30",
    images: ["images/products/Fa_31a.jpg", "images/products/Fa_32a.jpg"],
    colors: [
      {
        name: "Black",
        class: "bg_dark",
        image: "images/products/stroller-baby-black3.jpg",
      },
      {
        name: "Pastel Brown",
        class: "bg_pastel-brown",
        image: "images/products/stroller-baby-brown.jpg",
      },
      {
        name: "Pink",
        class: "bg_pink",
        image: "images/products/stroller-baby-pink.jpg",
      },
    ],
  },
  {
    id: 4,
    vendor: "Entry",
    name: "Women's 3/4 Length Sleeve VNeck",
    priceRegular: "$85.00",
    priceSale: "$70.00",
    images: ["images/products/Fa_19a.jpg", "images/products/Fa_20a.jpg"],
    colors: [
      {
        name: "Yellow",
        class: "bg_yellow-4",
        image: "images/products/stroller-baby-yellow.jpg",
      },
      {
        name: "Black",
        class: "bg_dark",
        image: "images/products/stroller-baby-black4.jpg",
      },
      {
        name: "Grey",
        class: "bg_grey",
        image: "images/products/stroller-baby-grey.jpg",
      },
    ],
  },
  {
    id: 5,
    vendor: "Entry",
    name: "Cleveland Pochette",
    priceRegular: "$20.00",
    priceSale: "$10.00",
    images: ["images/products/Fa_11a.jpg", "images/products/Fa_10a.jpg"],
    colors: [
      {
        name: "Pastel Brown",
        class: "bg_pastel-brown",
        image: "images/products/stroller-baby-brown.jpg",
      },
      {
        name: "Black",
        class: "bg_dark",
        image: "images/products/stroller-baby-black.jpg",
      },
    ],
  },
  {
    id: 6,
    vendor: "Entry",
    name: "Yekaty Women Cardigan 3/4 Sleeves",
    priceRegular: "$17.30",
    images: ["images/products/Fa_29a.jpg", "images/products/Fa_30a.jpg"],
    colors: [
      {
        name: "Black",
        class: "bg_dark",
        image: "images/products/stroller-baby-black3.jpg",
      },
      {
        name: "Pastel Brown",
        class: "bg_pastel-brown",
        image: "images/products/stroller-baby-brown.jpg",
      },
      {
        name: "Pink",
        class: "bg_pink",
        image: "images/products/stroller-baby-pink.jpg",
      },
    ],
  },
];

const ProductRecomended = ({ openQuickView }) => {
  return (
    <Wrapper>
      <div className="widget-product-carousel owl-style1 mb_40">
        <div className="container">
          <div className="box-title">
            <h3>Recommended for You</h3>
            <div className="view-all">
              <Link to="/shop">View all product</Link>
            </div>
          </div>

          <div className="products-listing">
            <div className="block-content product-layout grid__item">
              <Swiper
                modules={[Navigation]}
                navigation={{
                  nextEl: ".custom-swiper-next",
                  prevEl: ".custom-swiper-prev",
                }}
                spaceBetween={10}
                loop={false}
                slidesPerView={5}
                breakpoints={{
                  0: { slidesPerView: 2 },
                  576: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  992: { slidesPerView: 4 },
                  1200: { slidesPerView: 5 },
                }}
                onSwiper={(swiper) => {
                  swiper.params.navigation.prevEl = ".custom-swiper-prev";
                  swiper.params.navigation.nextEl = ".custom-swiper-next";
                  swiper.navigation.init();
                  swiper.navigation.update();
                }}
                className="featured-slider"
              >
                {products.map((product) => (
                  <SwiperSlide key={product.id} className="item">
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
                                src={product.images[0]}
                                alt={product.name}
                              />
                              <img
                                className="lazyload img-hover"
                                src={product.images[1]}
                                alt={product.name}
                              />
                            </span>
                          </Link>
                          <div className="list-product-btn column-right">
                            <Link
                              to="#"
                              className="box-icon bg_white wishlist btn-icon-action"
                            >
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
                              // to="#quick_view"
                              // data-bs-toggle="modal"
                              className="box-icon bg_white quickview ss-btn-loading"
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
                              <Link to="/product-details">{product.name}</Link>
                            </h4>
                            <div className="price">
                              {product.priceSale ? (
                                <>
                                  <div className="product-price--regular">
                                    {product.priceRegular}
                                  </div>
                                  <div className="price-item--sale">
                                    {product.priceSale}
                                  </div>
                                </>
                              ) : (
                                <div className="product-price">
                                  {product.priceRegular}
                                </div>
                              )}
                            </div>
                            <ul className="list-color-product">
                              {product.colors.map((color, idx) => (
                                <li
                                  key={idx}
                                  className={`list-color-item color-swatch ${
                                    idx === 0 ? "active" : ""
                                  }`}
                                >
                                  <span className="tooltip">{color.name}</span>
                                  <span
                                    className={`swatch-value ${color.class}`}
                                  ></span>
                                  <img
                                    className="lazyload"
                                    src={color.image}
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
                  </SwiperSlide>
                ))}

                {/* ✅ Custom buttons */}
                <div className="custom-swiper-prev">‹</div>
                <div className="custom-swiper-next">›</div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .featured-slider {
    position: relative;
  }

  .custom-swiper-prev,
  .custom-swiper-next {
    position: absolute;
    top: 50%;
    width: 40px;
    height: 40px;
    border: 1px solid #1f2329;
    color: #1f2329;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transform: translateY(-50%);
    z-index: 10;
    font-size: 24px;
    font-weight: bold;
    transition: all 0.3s ease;
  }

  .custom-swiper-prev:hover,
  .custom-swiper-next:hover {
    background-color: #1f2329;
    color: #fff;
    transform: translateY(-50%) scale(1.1);
  }

  .custom-swiper-prev {
    left: 6px;
    z-index: 9999;
  }

  .custom-swiper-next {
    right: 6px;
    z-index: 9999;
  }

  @media (max-width: 768px) {
    .custom-swiper-prev {
      left: -20px;
    }
    .custom-swiper-next {
      right: -20px;
    }
  }
`;

export default ProductRecomended;
