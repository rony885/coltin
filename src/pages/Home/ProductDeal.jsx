import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import { FiRepeat } from "react-icons/fi";

import "swiper/css";

const productsArray = [
  {
    id: 1,
    name: "Mens Oversized T Shirts Business",
    vendor: "Entry",
    price: 10.0,
    selePrice: 16.95,
    mainImg: "/images/products/Fa_12a.jpg",
    hoverImg: "/images/products/Fa_13a.jpg",
    colors: [
      {
        name: "Yellow",
        class: "bg_yellow-4",
        img: "/images/products/stroller-baby-yellow.jpg",
      },
      {
        name: "Grey",
        class: "bg_grey",
        img: "/images/products/stroller-baby-grey.jpg",
      },
    ],
  },
  {
    id: 2,
    name: "Womens Sweaters Casual Long",
    vendor: "Entry",
    price: 15.5,
    selePrice: 26.95,
    mainImg: "/images/products/Fa_23a.jpg",
    hoverImg: "/images/products/Fa_24a.jpg",
    colors: [
      {
        name: "Black",
        class: "bg_dark",
        img: "/images/products/stroller-baby-black5.jpg",
      },
      {
        name: "Beige",
        class: "bg_beige",
        img: "/images/products/stroller-baby-beige.jpg",
      },
      {
        name: "Dark Blue",
        class: "bg_dark-blue",
        img: "/images/products/stroller-baby-darkblue.jpg",
      },
    ],
  },
  {
    id: 3,
    name: "Mens Leather Casual Backpack",
    vendor: "Entry",
    price: 35.0,
    selePrice: 46.95,
    mainImg: "/images/products/Fa_31a.jpg",
    hoverImg: "/images/products/Fa_32a.jpg",
    colors: [
      {
        name: "Brown",
        class: "bg_brown",
        img: "/images/products/stroller-baby-black3.jpg",
      },
      {
        name: "Black",
        class: "bg_dark",
        img: "/images/products/stroller-baby-pink.jpg",
      },
    ],
  },
  {
    id: 4,
    name: "Womens Elegant Handbag",
    vendor: "Entry",
    price: 50.0,
    selePrice: 66.95,
    mainImg: "/images/products/Fa_19a.jpg",
    hoverImg: "/images/products/Fa_20a.jpg",
    colors: [
      {
        name: "Pink",
        class: "bg_pink",
        img: "/images/products/stroller-baby-yellow.jpg",
      },
      {
        name: "Grey",
        class: "bg_grey",
        img: "/images/products/stroller-baby-black4.jpg",
      },
    ],
  },
  {
    id: 5,
    name: "Mens Oversized T Shirts Business",
    vendor: "Entry",
    price: 20.0,
    selePrice: 26.95,
    mainImg: "/images/products/Fa_12a.jpg",
    hoverImg: "/images/products/Fa_13a.jpg",
    colors: [
      {
        name: "Yellow",
        class: "bg_yellow-4",
        img: "/images/products/stroller-baby-yellow.jpg",
      },
      {
        name: "Grey",
        class: "bg_grey",
        img: "/images/products/stroller-baby-grey.jpg",
      },
    ],
  },
  {
    id: 6,
    name: "Womens Sweaters Casual Long",
    vendor: "Entry",
    price: 15.5,
    selePrice: 26.95,
    mainImg: "/images/products/Fa_23a.jpg",
    hoverImg: "/images/products/Fa_24a.jpg",
    colors: [
      {
        name: "Black",
        class: "bg_dark",
        img: "/images/products/stroller-baby-black5.jpg",
      },
      {
        name: "Beige",
        class: "bg_beige",
        img: "/images/products/stroller-baby-beige.jpg",
      },
      {
        name: "Dark Blue",
        class: "bg_dark-blue",
        img: "/images/products/stroller-baby-darkblue.jpg",
      },
    ],
  },
];

const ProductDeal = ({ openQuickView }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="widget-deals-carousel owl-style1 mb_90">
      <div className="container">
        <div className="widget-wrap">
          {/* LEFT SIDE */}
          <div className="widget-left">
            <div className="box-title">
              <h3>
                Today’s <br /> Best Deals
              </h3>
            </div>

            <div className="countdown_time">
              <div
                className="js-countdown"
                data-timer="8007500"
                data-labels="Days,Hours,Mins,Secs"
              ></div>
            </div>

            <div className="deal__btn">
              <Link to="#" className="deal__btn-link button">
                Shop All
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="block-content products-listing">
            <div className="product-layout grid__item">
              {/* OWL STYLE ARROWS (DESKTOP ONLY) */}
              {/* <div className="owl-nav d-none d-lg-flex">
                <button ref={prevRef} className="owl-prev">
                  <span className="fa fa-angle-left"></span>
                </button>
                <button ref={nextRef} className="owl-next">
                  <span className="fa fa-angle-right"></span>
                </button>
              </div> */}

              <Swiper
                modules={[Navigation]}
                speed={600}
                spaceBetween={10}
                watchSlidesProgress
                observer
                observeParents
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    allowTouchMove: true,
                  },
                  576: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                    allowTouchMove: true,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                    allowTouchMove: true,
                  },
                  992: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                    allowTouchMove: false,
                  },
                  1200: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                    allowTouchMove: false,
                  },
                }}
                className="featured-slider yt-content-slider owl-carousel"
              >
                {productsArray.map((product) => (
                  <SwiperSlide key={product.id} className="item">
                    <div className="product-item card-product">
                      <div className="product-item-container">
                        {/* IMAGE */}
                        <div className="left-block">
                          <Link to="/product-details" className="product-img">
                            <span
                              className="media media--transparent media--hover-effect"
                              style={{ paddingBottom: "100%" }}
                            >
                              <img
                                src={product.mainImg}
                                alt={product.name}
                                className="img-product"
                              />
                              <img
                                src={product.hoverImg}
                                alt={product.name}
                                className="img-hover"
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

                        {/* DETAILS */}
                        <div className="right-block">
                          <div className="caption">
                            <div className="title-vendor">
                              <Link to="/product">{product.vendor}</Link>
                            </div>

                            <h4>
                              <Link
                                to="/product-details"
                                className="title link"
                              >
                                {product.name}
                              </Link>
                            </h4>

                            <div className="price">
                              <div className="product-price--regular">
                                ${product.selePrice}
                              </div>
                              <div className="price-item--sale">
                                ${product.price}
                              </div>
                            </div>

                            <ul className="list-color-product">
                              {product.colors.map((color, index) => (
                                <li
                                  key={index}
                                  className={`list-color-item color-swatch ${
                                    index === 0 ? "active" : ""
                                  }`}
                                >
                                  <span className="tooltip">{color.name}</span>
                                  <span
                                    className={`swatch-value ${color.class}`}
                                  ></span>
                                  <img src={color.img} alt={color.name} />
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
                              Add to cart
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDeal;
