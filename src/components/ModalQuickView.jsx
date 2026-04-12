import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const ModalQuickView = ({ isOpen, onClose, toggleCart }) => {
  // const [thumbsSwiper, setThumbsSwiper] = useState(null);

  if (!isOpen) return null;

  const productImages = [
    {
      id: 1,
      src: "/images/products/orange-1.jpg",
      alt: "Orange",
    },
    { id: 2, src: "/images/products/pink-1.jpg", alt: "Pink" },
    { id: 3, src: "/images/products/Fa_11a.jpg", alt: "White" },
    { id: 4, src: "/images/products/Fa_31a.jpg", alt: "White" },
  ];

  return (
    <Wrapper>
      {/* BACKDROP */}
      <div
        className="modal-backdrop fade show"
        style={{ zIndex: 1055 }}
        onClick={onClose}
      />

      {/* MODAL */}
      <div
        className="modal fade modalDemo show"
        id="quick_view"
        role="dialog"
        aria-modal="true"
        style={{
          display: "block",
          zIndex: 1060,
        }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="header">
              <span
                className="icon-close icon-close-popup"
                onClick={onClose}
              ></span>
            </div>

            <div className="wrap">
              {/* Product Images (React Slider) */}
              <div className="product-media-wrap">
                {/* Main Slider */}
                <Swiper
                  style={{ "--swiper-navigation-color": "#000" }}
                  modules={[Navigation, Thumbs]}
                  navigation
                  // thumbs={{ swiper: thumbsSwiper }}
                  thumbs={{ swiper: null }}
                  className="main-slider"
                >
                  {productImages.map((img, index) => (
                    <SwiperSlide key={index}>
                      <img src={img.src} alt={img.alt} />
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Thumbnail Slider */}
                {/* <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={10}
                  slidesPerView={3}
                  freeMode
                  watchSlidesProgress
                  className="thumb-slider mt-3"
                >
                  {productImages.map((img, index) => (
                    <SwiperSlide key={index}>
                      <img src={img.src} alt={img.alt} className="thumb-img" />
                    </SwiperSlide>
                  ))}
                </Swiper> */}
              </div>

              {/* Product Info */}
              <div className="product-info-wrap position-relative">
                <div className="product-info-list">
                  <div className="product-info-title">
                    <h5>
                      <Link className="link" to="/product-detail">
                        Ribbed Tank Top
                      </Link>
                    </h5>
                  </div>

                  {/* Viewing Badge */}
                  <div className="ss-product-info-badges">
                    <div className="product-status-content">
                      <svg width="19" height="19" viewBox="0 0 12 12">
                        <circle cx="6" cy="6" r="1.5" fill="#1D1D1B" />
                        <path
                          d="M6,2C4,2,2,3,0,6c2,3,4,4,6,4s4-1,6-4C10,3,8,2,6,2z"
                          fill="#1D1D1B"
                        />
                      </svg>
                      <span>27</span> people are viewing this right now
                    </div>
                  </div>

                  {/* Price */}
                  <div className="product-info-price">
                    <div className="price">$18.00</div>
                  </div>

                  {/* Description */}
                  <div className="product-description">
                    <p>
                      Nunc arcu faucibus et lorem eu mauris adipiscing conubia
                      ac aptent ligula facilisis auctor habitant parturient.
                    </p>
                  </div>

                  {/* Variants */}
                  <div className="product-info-variant-picker">
                    {/* Color */}
                    <div className="variant-picker-item">
                      <div className="variant-picker-label">
                        Color:
                        <span className="fw-6 variant-picker-label-value">
                          Orange
                        </span>
                      </div>
                      <div className="variant-picker-values">
                        <input
                          id="color-orange"
                          type="radio"
                          name="color"
                          defaultChecked
                        />
                        <label
                          className="hover-tooltip radius-60"
                          htmlFor="color-orange"
                        >
                          <span className="btn-checkbox bg-color-orange"></span>
                          <span className="tooltip">Orange</span>
                        </label>

                        <input id="color-black" type="radio" name="color" />
                        <label
                          className="hover-tooltip radius-60"
                          htmlFor="color-black"
                        >
                          <span className="btn-checkbox bg-color-black"></span>
                          <span className="tooltip">Black</span>
                        </label>

                        <input id="color-white" type="radio" name="color" />
                        <label
                          className="hover-tooltip radius-60"
                          htmlFor="color-white"
                        >
                          <span className="btn-checkbox bg-color-white"></span>
                          <span className="tooltip">White</span>
                        </label>
                      </div>
                    </div>

                    {/* Size */}
                    <div className="variant-picker-item">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="variant-picker-label">
                          Size:
                          <span className="fw-6 variant-picker-label-value">
                            S
                          </span>
                        </div>

                        {/* <Link
                          to="#find_size"
                          data-bs-toggle="modal"
                          className="find-size d-flex gap-10 fw-6"
                        >
                          <img src="/images/products/scale.svg" alt="" />
                          Size Chart
                        </Link> */}
                        <div class="find-size btn-choose-size fw-6">
                          <Link
                            // to="#find_size"
                            // data-bs-toggle="modal"
                            class="find-size gap-10 d-flex"
                          >
                            <img src="/images/products/scale.svg" alt="" />
                            Size Chart
                          </Link>
                        </div>
                      </div>

                      <div className="variant-picker-values">
                        <input
                          type="radio"
                          name="size"
                          id="size-s"
                          defaultChecked
                        />
                        <label className="style-text" htmlFor="size-s">
                          <span>S</span>
                        </label>

                        <input type="radio" name="size" id="size-m" />
                        <label className="style-text" htmlFor="size-m">
                          <span>M</span>
                        </label>

                        <input type="radio" name="size" id="size-l" />
                        <label className="style-text" htmlFor="size-l">
                          <span>L</span>
                        </label>

                        <input type="radio" name="size" id="size-xl" />
                        <label className="style-text" htmlFor="size-xl">
                          <span>XL</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Quantity */}
                  <div className="product-info-quantity">
                    <div className="quantity-title">Quantity</div>
                    <div className="wg-quantity">
                      <span className="btn-quantity minus-btn">-</span>
                      <input type="text" />
                      <span className="btn-quantity plus-btn">+</span>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="product-info-buy-button">
                    <div className="d-flex gap-10">
                      <Link
                        to="#"
                        onClick={() => {
                          toggleCart(); // open/add to cart
                          onClose(); // close the quick view modal
                        }}
                        className="ss-btn btn-fill flex-grow-1 fw-6"
                      >
                        Add to cart – $18.00
                      </Link>

                      <Link to="#" className="box-icon bg_white hover-tooltip">
                        <span className="icon icon-heart"></span>
                        <span className="tooltip">Wishlist</span>
                      </Link>

                      <Link
                        to="#compare"
                        data-bs-toggle="offcanvas"
                        className="box-icon bg_white hover-tooltip"
                      >
                        <span className="icon icon-compare"></span>
                        <span className="tooltip">Compare</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .button-style-arrow::before,
  .button-style-arrow::after {
    display: none !important;
  }

  .swiper-button-prev:after,
  .swiper-rtl .swiper-button-next:after {
    content: "" !important;
  }

  .swiper-button-next:after,
  .swiper-rtl .swiper-button-prev:after {
    content: "" !important;
  }
`;

export default ModalQuickView;
