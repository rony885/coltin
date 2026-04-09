import React, { useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import HoverZoom from "../../components/HoverZoom";
import { FaHeart, FaShoppingCart, FaTruck } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Link } from "react-router-dom";
// import ModalFindSize from "../../components/Modal/ModalFindSize";
import ModalShareSocial from "../../components/Modal/ModalShareSocial";
import ModalDeliveryReturn from "../../components/Modal/ModalDeliveryReturn";
import { useCartContext } from "../../context/CartContext";
import { AiOutlineHeart } from "react-icons/ai";

const productImages = [
  { src: "/images/products/brown-2.jpg", color: "brown" },
  { src: "/images/products/brown-3.jpg", color: "brown" },
  { src: "/images/products/white-5.jpg", color: "white" },
  { src: "/images/products/white-4.jpg", color: "white" },
  { src: "/images/products/white-3.jpg", color: "white" },
  { src: "/images/products/black-5.jpg", color: "black" },
  { src: "/images/products/black-3.jpg", color: "black" },
  { src: "/images/products/black-4.jpg", color: "black" },
];

const ProductDetailsInfo = ({ toggleCart, product }) => {
  const { addToWishlist, isInWishlist, removeWishlistItem, addToCart } =
    useCartContext();

  // State to keep track of the quantity
  const [quantity, setQuantity] = useState(1);

  // Function to handle the decrement button click
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Function to handle the increment button click
  const handleIncrement = () => {
    quantity < product.p_purchase_stock
      ? setQuantity(quantity + 1)
      : setQuantity(product.p_purchase_stock);
  };

  // Function to handle manual input change (optional)
  const handleInputChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [zoomData, setZoomData] = useState(null);
  const [popupOpen, setPopupOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  // const [openSizeModal, setOpenSizeModal] = useState(false);
  const [openShareModal, setOpenShareModal] = useState(false);
  const [openDeliveryReturnModal, setOpenDeliveryReturnModal] = useState(false);

  const openPopup = (index) => {
    setActiveIndex(index);
    setPopupOpen(true);
  };

  const closePopup = () => setPopupOpen(false);

  return (
    <Wrapper>
      <section className="flat-spacing-4 pt_0 my-4">
        <div className="tf-main-product section-image-zoom zoom-active">
          <div className="container">
            <div className="row">
              {/* ======= LEFT: SLIDER ======= */}
              <div className="col-md-6">
                <div className="ss-product-media-wrap thumbs-bottom sticky-top">
                  <div className="thumbs-slider">
                    {/* Main Slider */}
                    <Swiper
                      modules={[Navigation, Thumbs]}
                      thumbs={{
                        swiper:
                          thumbsSwiper && !thumbsSwiper.destroyed
                            ? thumbsSwiper
                            : null,
                      }}
                      navigation={{
                        nextEl: ".thumbs-next",
                        prevEl: ".thumbs-prev",
                      }}
                      slidesPerView={1}
                      spaceBetween={10}
                      breakpoints={{
                        0: {
                          allowTouchMove: true,
                        },
                        992: {
                          allowTouchMove: false,
                        },
                      }}
                      className="swiper tf-product-media-main"
                    >
                      {productImages.map((item, index) => (
                        <SwiperSlide key={index} data-color={item.color}>
                          <div
                            className="item zoom-container"
                            onClick={() => openPopup(index)}
                          >
                            <HoverZoom
                              onZoomMove={setZoomData}
                              imageUrl={item.src}
                              width={630}
                              height={630}
                              zoomScale={2.5}
                              lensSize={120}
                              zoomWidth={500} // separate zoom box width
                              zoomHeight={500} // separate zoom box height
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain", // ✅ IMPORTANT
                              }}
                            />
                          </div>
                        </SwiperSlide>
                      ))}

                      <div className="swiper-button-next button-style-arrow thumbs-next"></div>
                      <div className="swiper-button-prev button-style-arrow thumbs-prev"></div>
                    </Swiper>

                    {/* Thumbnail Slider */}
                    <Swiper
                      modules={[Thumbs]}
                      onSwiper={setThumbsSwiper}
                      slidesPerView={5}
                      spaceBetween={10}
                      watchSlidesProgress
                      className="swiper ss-product-media-thumbs"
                    >
                      {productImages.map((item, index) => (
                        <SwiperSlide key={index} data-color={item.color}>
                          <div className="item">
                            <img src={item.src} alt="thumbnail" />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>

              {/* Zoom Box */}
              {zoomData && zoomData.visible && window.innerWidth >= 992 && (
                <div
                  style={{
                    position: "absolute",
                    top: 200,
                    right: 300,
                    width: 500,
                    height: 500,
                    border: "2px solid #1A1A2C",
                    borderRadius: "8px",
                    backgroundImage: `url(${zoomData.imageUrl})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: `${
                      zoomData.imgWidth * zoomData.zoomScale
                    }px ${zoomData.imgHeight * zoomData.zoomScale}px`,
                    backgroundPosition: `
        -${zoomData.x * zoomData.zoomScale - 250}px
        -${zoomData.y * zoomData.zoomScale - 250}px
      `,
                    pointerEvents: "none",
                    zIndex: 9999,
                  }}
                />
              )}

              {/* ======= RIGHT: PRODUCT INFO ======= */}
              <div className="col-md-6">
                <div className="tf-product-info-wrap">
                  <div className="product-info-list">
                    <h5 className="mb-4">
                      {product?.p_name} ({product?.p_brand?.name})
                    </h5>

                    <div className="product-single_attribure instock">
                      <label>Availability: </label>
                      {product?.p_purchase_stock > 0 ? (
                        <span className="text-success">In Stock</span>
                      ) : (
                        <span className="text-danger">Out of Stock</span>
                      )}
                    </div>

                    <div className="product-single_attribure">
                      <label>Product Code:</label>
                      <span className="product-single__type_sku">
                        {" "}
                        {product?.p_code}{" "}
                      </span>
                    </div>

                    <div className="product-single_attribure">
                      <label>Category:</label>
                      <span>
                        {" "}
                        {product?.p_category?.name} (
                        {product?.p_sub_category?.name || "N/A"}){" "}
                      </span>
                    </div>

                    <div className="product-info-price">
                      {product?.p_payable_price !== product?.p_price ? (
                        <>
                          <div className="price-on-sale">
                            {" "}
                            ৳&nbsp;{product?.p_payable_price}
                          </div>
                          <div className="compare-at-price">
                            {" "}
                            ৳&nbsp;{product?.p_price}
                          </div>
                        </>
                      ) : (
                        <div className="price-on-sale text-dark">
                          {" "}
                          ৳&nbsp;{product?.p_payable_price}
                        </div>
                      )}
                    </div>

                    {/* <div className="product-info-variant-picker">
                      <div className="variant-picker-item">
                        <div className="variant-picker-label">
                          Color:&nbsp;
                          <span className="fw-6 variant-picker-label-value value-currentColor">
                            Beige
                          </span>
                        </div>
                        <div className="variant-picker-values">
                          <input
                            id="values-beige"
                            type="radio"
                            name="color1"
                            checked
                          />
                          <label
                            className="hover-tooltip radius-60 color-btn"
                            for="values-beige"
                            data-color="beige"
                            data-value="Beige"
                          >
                            <span className="btn-checkbox bg-color-beige"></span>
                            <span className="tooltip">Beige</span>
                          </label>
                          <input id="values-black" type="radio" name="color1" />
                          <label
                            className="hover-tooltip radius-60 color-btn"
                            data-price="9"
                            for="values-black"
                            data-color="black"
                            data-value="Black"
                          >
                            <span className="btn-checkbox bg-color-black"></span>
                            <span className="tooltip">Black</span>
                          </label>
                          <input id="values-blue" type="radio" name="color1" />
                          <label
                            className="hover-tooltip radius-60 color-btn"
                            data-price="10"
                            for="values-blue"
                            data-color="blue"
                            data-value="Blue"
                          >
                            <span className="btn-checkbox bg-color-blue"></span>
                            <span className="tooltip">Blue</span>
                          </label>
                          <input id="values-white" type="radio" name="color1" />
                          <label
                            className="hover-tooltip radius-60 color-btn"
                            data-price="12"
                            for="values-white"
                            data-color="white"
                            data-value="White"
                          >
                            <span className="btn-checkbox bg-color-white"></span>
                            <span className="tooltip">White</span>
                          </label>
                        </div>
                      </div>

                      <div className="variant-picker-item">
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="variant-picker-label">
                            Size:
                            <span className="fw-6 variant-picker-label-value">
                              S
                            </span>
                          </div>
                          <Link
                            // to="#find_size"
                            // data-bs-toggle="modal"
                            className="find-size gap-10 d-flex"
                            onClick={() => setOpenSizeModal(true)}
                            // onClick={openModalFindSize}
                          >
                            <img src="/images/products/scale.svg" alt="" />
                            Size Chart
                          </Link>
                        </div>
                        <div className="variant-picker-values">
                          <input
                            type="radio"
                            name="size1"
                            id="values-s"
                            checked
                          />
                          <label
                            className="style-text size-btn"
                            for="values-s"
                            data-value="S"
                          >
                            <span>S</span>
                          </label>
                          <input type="radio" name="size1" id="values-m" />
                          <label
                            className="style-text size-btn"
                            data-price="9"
                            for="values-m"
                            data-value="M"
                          >
                            <span>M</span>
                          </label>
                          <input type="radio" name="size1" id="values-l" />
                          <label
                            className="style-text size-btn"
                            data-price="10"
                            for="values-l"
                            data-value="L"
                          >
                            <span>L</span>
                          </label>
                          <input type="radio" name="size1" id="values-xl" />
                          <label
                            className="style-text size-btn"
                            data-price="12"
                            for="values-xl"
                            data-value="XL"
                          >
                            <span>XL</span>
                          </label>
                        </div>
                      </div>
                    </div> */}

                    {/* Size MODAL */}
                    {/* <ModalFindSize
                      isOpen={openSizeModal}
                      onClose={() => setOpenSizeModal(false)}
                    /> */}

                    <div className="product-options-bottom">
                      <div className="product-info-quantity">
                        <div className="quantity-title">Quantity :</div>
                        <div className="wg-quantity">
                          <span
                            className="btn-quantity btn-decrease"
                            onClick={handleDecrement}
                          >
                            -
                          </span>

                          <input
                            type="text"
                            className="quantity-product"
                            value={quantity}
                            onChange={handleInputChange}
                          />

                          <span
                            className="btn-quantity btn-increase"
                            onClick={handleIncrement}
                          >
                            +
                          </span>
                        </div>
                      </div>
                      <div className="product-info-buy-button">
                        <form className="">
                          <Link
                            to="#"
                            style={{
                              pointerEvents:
                                product.p_purchase_stock > 0 ? "auto" : "none",
                              opacity: product.p_purchase_stock > 0 ? 1 : 0.5,
                            }}
                            className="ss-btn justify-content-center fs-16 flex-grow-1 btn-add-to-cart"
                            onClick={() => {
                              // toggleCart();
                              addToCart(
                                product.id,
                                quantity,
                                null,
                                null,
                                product,
                              );
                            }}
                          >
                            <FaShoppingCart
                              size={20}
                              style={{ marginRight: "6px" }}
                            />
                            <span>Add to cart -&nbsp;</span>
                            <span className="ss-qty-price total-price">
                              ৳&nbsp;{product?.p_payable_price}
                            </span>
                          </Link>
                          <Link
                            to="#"
                            className="product-btn-wishlist box-icon border-black d-flex align-items-center justify-content-center"
                            onClick={(e) => {
                              e.preventDefault();
                              if (!isInWishlist(product.id)) {
                                addToWishlist(product.id, product);
                              } else {
                                removeWishlistItem(product.id);
                              }
                            }}
                          >
                            {isInWishlist(product.id) ? (
                              <FaHeart size={16} color="red" />
                            ) : (
                              <AiOutlineHeart size={16} color="black" />
                            )}

                            <span className="tooltip">
                              {isInWishlist(product.id)
                                ? "Already in Wishlist"
                                : "Add to Wishlist"}
                            </span>
                          </Link>
                        </form>
                      </div>
                    </div>

                    <div className="product-info-extra-link">
                      <Link
                        className="tf-product-extra-icon"
                        onClick={() => setOpenDeliveryReturnModal(true)}
                      >
                        <div className="icon">
                          <FaTruck size={22} />
                        </div>
                        <div className="text fw-6">Delivery & Return</div>
                      </Link>

                      <Link
                        className="tf-product-extra-icon"
                        onClick={() => setOpenShareModal(true)}
                      >
                        <div className="icon">
                          <i className="icon-share"></i>
                        </div>
                        <div className="text fw-6">Share</div>
                      </Link>
                    </div>

                    {/* Delivery & Return MODAL */}
                    <ModalDeliveryReturn
                      isOpen={openDeliveryReturnModal}
                      onClose={() => setOpenDeliveryReturnModal(false)}
                    />

                    {/* Share MODAL */}
                    <ModalShareSocial
                      isOpen={openShareModal}
                      onClose={() => setOpenShareModal(false)}
                    />

                    <div className="product_estimated_delivery">
                      <div className="estimated_delivery" data-number_day="5">
                        <div className="inner mb_10">
                          <strong>DELIVERY: </strong>
                          <span className="day_to">May 25</span> -
                          <span className="day_from">May 28</span>
                        </div>
                        <div className="free-ship">
                          Free Shipping and Returns on all orders over $99.00
                        </div>
                      </div>
                    </div>

                    <div className="product-info-trust-seal">
                      <label>Guaranteed safe checkout:</label>
                      <div className="ss-payment">
                        <img src="/images/payments/img-1.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======= POPUP OVERLAY ======= */}
      {popupOpen && (
        <div className="popup-overlay" onClick={closePopup}>
          <div
            className="popup-content"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <button className="close-btn" onClick={closePopup}>
              &times;
            </button>
            <Swiper
              modules={[Navigation]}
              navigation
              slidesPerView={1}
              spaceBetween={10}
              initialSlide={activeIndex}
              className="popup-swiper"
            >
              {productImages.map((item, index) => (
                <SwiperSlide key={index}>
                  <img src={item.src} alt={`popup-${index}`} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .button-style-arrow::before,
  .button-style-arrow::after {
    display: none !important;
  }

  /* ===== POPUP OVERLAY ===== */
  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .popup-content {
    position: relative;
    max-width: 900px;
    width: 90%;
    background: #fff;
    padding: 20px;
    border-radius: 10px;
  }

  /* ===== POPUP IMAGE ===== */
  .popup-content img {
    width: 100%;
    height: auto;
  }

  /* ===== CLOSE BUTTON ===== */
  .close-btn {
    position: absolute;
    top: 5px;
    right: 10px;
    font-size: 28px;
    background: none;
    border: none;
    cursor: pointer;
    z-index: 10;
  }

  .swiper-button-prev:after,
  .swiper-rtl .swiper-button-next:after {
    content: "" !important;
  }

  .swiper-button-next:after,
  .swiper-rtl .swiper-button-prev:after {
    content: "" !important;
  }

  /* ======= POPUP SWIPER NAVIGATION ======= */
  .popup-content .swiper-button-prev,
  .popup-content .swiper-button-next {
    color: #1a1a2c !important;
    width: 36px !important;
    height: 36px !important;
  }

  /* icon size */
  .popup-content .swiper-button-prev::after,
  .popup-content .swiper-button-next::after {
    font-size: 15px !important;
    font-weight: 600;
  }

  /* optional: better visibility on dark overlay */
  .popup-content .swiper-button-prev,
  .popup-content .swiper-button-next {
    background: rgba(255, 255, 255, 0.9);
    border-radius: 50%;
    transition: background 0.3s ease;
  }

  /* hover effect (optional but recommended) */
  .popup-content .swiper-button-prev:hover,
  .popup-content .swiper-button-next:hover {
    background: #1a1a2c;
    color: #ffffff !important;
  }

  /* ======= CENTER MAIN SLIDER IMAGE ======= */
  .tf-product-media-main .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .tf-product-media-main,
  .tf-product-media-main .swiper-wrapper,
  .tf-product-media-main .swiper-slide {
    height: auto !important;
  }

  /* Tablet */
  @media (max-width: 991px) {
    .tf-product-media-main {
      max-width: 500px;
      margin: 0 auto;
    }
  }

  /* Mobile */
  @media (max-width: 767px) {
    .tf-product-media-main {
      max-width: 100%;
    }

    .tf-product-media-main img {
      max-height: 380px;
    }
  }

  /* ======= POPUP RESPONSIVE ======= */
  @media only screen and (max-width: 1440px) {
    .popup-content {
      max-width: 800px;
      padding: 16px;
    }

    .popup-content img {
      max-height: 600px;
      object-fit: contain;
    }
  }

  @media only screen and (max-width: 1024px) {
    .popup-content {
      max-width: 90%;
      padding: 14px;
    }

    .popup-content img {
      max-height: 500px;
    }

    .popup-content .swiper-button-prev,
    .popup-content .swiper-button-next {
      width: 32px !important;
      height: 32px !important;
    }
  }

  .product-btn-wishlist {
    position: relative;
    display: inline-block;
  }

  .product-btn-wishlist .tooltip {
    visibility: hidden;
    width: max-content;
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 3px 8px;
    border-radius: 4px;
    font-size: 12px;
    position: absolute;
    z-index: 10;
    bottom: 125%; /* above the icon */
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: opacity 0.3s;
    white-space: nowrap;
  }

  .product-btn-wishlist:hover .tooltip {
    visibility: visible;
    opacity: 1;
  }
`;

export default ProductDetailsInfo;
