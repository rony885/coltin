// import React from "react";
// import {
//   FaCheck,
//   FaEye,
//   FaFire,
//   FaShoppingCart,
//   FaTruck,
// } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const ProductDetailsInfo = () => {
//   return (
//     <section className="flat-spacing-4 pt_0">
//       <div className="tf-main-product section-image-zoom">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-6">
//               <div className="ss-product-media-wrap thumbs-bottom sticky-top">
//                 <div className="thumbs-slider">
//                   <div
//                     dir="ltr"
//                     className="swiper tf-product-media-main"
//                     id="gallery-swiper-started"
//                   >
//                     <div className="swiper-wrapper">
//                       {/* <!-- brown --> */}
//                       <div className="swiper-slide" data-color="brown">
//                         <Link
//                           to="images/products/brown-2.jpg"
//                           target="_blank"
//                           className="item"
//                           data-pswp-width="770px"
//                           data-pswp-height="1075px"
//                         >
//                           <img
//                             className="tf-image-zoom lazyload"
//                             data-zoom="images/products/brown-2.jpg"
//                             data-src="images/products/brown-2.jpg"
//                             src="images/products/brown-2.jpg"
//                             alt="img-product"
//                           />
//                         </Link>
//                       </div>
//                       <div className="swiper-slide" data-color="brown">
//                         <Link
//                           to="images/products/brown-3.jpg"
//                           target="_blank"
//                           className="item"
//                           data-pswp-width="770px"
//                           data-pswp-height="1075px"
//                         >
//                           <img
//                             className="tf-image-zoom lazyload"
//                             data-zoom="images/products/brown-3.jpg"
//                             data-src="images/products/brown-3.jpg"
//                             src="images/products/brown-3.jpg"
//                             alt="img-product"
//                           />
//                         </Link>
//                       </div>
//                       {/* <!-- white --> */}
//                       <div className="swiper-slide" data-color="white">
//                         <Link
//                           to="images/products/white-5.jpg"
//                           target="_blank"
//                           className="item"
//                           data-pswp-width="770px"
//                           data-pswp-height="1075px"
//                         >
//                           <img
//                             className="tf-image-zoom lazyload"
//                             data-zoom="images/products/white-5.jpg"
//                             data-src="images/products/white-5.jpg"
//                             src="images/products/white-5.jpg"
//                             alt="img-product"
//                           />
//                         </Link>
//                       </div>
//                       <div className="swiper-slide" data-color="white">
//                         <Link
//                           to="images/products/white-4.jpg"
//                           target="_blank"
//                           className="item"
//                           data-pswp-width="770px"
//                           data-pswp-height="1075px"
//                         >
//                           <img
//                             className="tf-image-zoom lazyload"
//                             data-zoom="images/products/white-4.jpg"
//                             data-src="images/products/white-4.jpg"
//                             src="images/products/white-4.jpg"
//                             alt="img-product"
//                           />
//                         </Link>
//                       </div>
//                       <div className="swiper-slide" data-color="white">
//                         <Link
//                           to="images/products/white-3.jpg"
//                           target="_blank"
//                           className="item"
//                           data-pswp-width="770px"
//                           data-pswp-height="1075px"
//                         >
//                           <img
//                             className="tf-image-zoom lazyload"
//                             data-zoom="images/products/white-3.jpg"
//                             data-src="images/products/white-3.jpg"
//                             src="images/products/white-3.jpg"
//                             alt="img-product"
//                           />
//                         </Link>
//                       </div>
//                       {/* <!-- black --> */}
//                       <div className="swiper-slide" data-color="black">
//                         <Link
//                           to="images/products/black-5.jpg"
//                           target="_blank"
//                           className="item"
//                           data-pswp-width="770px"
//                           data-pswp-height="1075px"
//                         >
//                           <img
//                             className="tf-image-zoom lazyload"
//                             data-zoom="images/products/black-5.jpg"
//                             data-src="images/products/black-5.jpg"
//                             src="images/products/black-5.jpg"
//                             alt="img-product"
//                           />
//                         </Link>
//                       </div>
//                       <div className="swiper-slide" data-color="black">
//                         <Link
//                           to="images/products/black-3.jpg"
//                           target="_blank"
//                           className="item"
//                           data-pswp-width="770px"
//                           data-pswp-height="1075px"
//                         >
//                           <img
//                             className="tf-image-zoom lazyload"
//                             data-zoom="images/products/black-3.jpg"
//                             data-src="images/products/black-3.jpg"
//                             src="images/products/black-3.jpg"
//                             alt="img-product"
//                           />
//                         </Link>
//                       </div>
//                       <div className="swiper-slide" data-color="black">
//                         <Link
//                           to="images/products/black-4.jpg"
//                           target="_blank"
//                           className="item"
//                           data-pswp-width="770px"
//                           data-pswp-height="1075px"
//                         >
//                           <img
//                             className="tf-image-zoom lazyload"
//                             data-zoom="images/products/black-4.jpg"
//                             data-src="images/products/black-4.jpg"
//                             src="images/products/black-4.jpg"
//                             alt="img-product"
//                           />
//                         </Link>
//                       </div>
//                     </div>
//                     <div className="swiper-button-next button-style-arrow thumbs-next"></div>
//                     <div className="swiper-button-prev button-style-arrow thumbs-prev"></div>
//                   </div>
//                   <div
//                     dir="ltr"
//                     className="swiper ss-product-media-thumbs other-image-zoom"
//                     data-direction="horizontal"
//                   >
//                     <div className="swiper-wrapper stagger-wrap">
//                       {/* <!-- brown --> */}
//                       <div
//                         className="swiper-slide stagger-item"
//                         data-color="brown"
//                       >
//                         <div className="item">
//                           <img
//                             className="lazyload"
//                             data-src="images/products/brown-2.jpg"
//                             src="images/products/brown-2.jpg"
//                             alt="img-product"
//                           />
//                         </div>
//                       </div>
//                       <div
//                         className="swiper-slide stagger-item"
//                         data-color="brown"
//                       >
//                         <div className="item">
//                           <img
//                             className="lazyload"
//                             data-src="images/products/brown-3.jpg"
//                             src="images/products/brown-3.jpg"
//                             alt="img-product"
//                           />
//                         </div>
//                       </div>
//                       {/* <!-- white --> */}
//                       <div
//                         className="swiper-slide stagger-item"
//                         data-color="white"
//                       >
//                         <div className="item">
//                           <img
//                             className="lazyload"
//                             data-src="images/products/white-5.jpg"
//                             src="images/products/white-5.jpg"
//                             alt="img-product"
//                           />
//                         </div>
//                       </div>
//                       <div
//                         className="swiper-slide stagger-item"
//                         data-color="white"
//                       >
//                         <div className="item">
//                           <img
//                             className="lazyload"
//                             data-src="images/products/white-4.jpg"
//                             src="images/products/white-4.jpg"
//                             alt="img-product"
//                           />
//                         </div>
//                       </div>
//                       <div
//                         className="swiper-slide stagger-item"
//                         data-color="white"
//                       >
//                         <div className="item">
//                           <img
//                             className="lazyload"
//                             data-src="images/products/white-3.jpg"
//                             src="images/products/white-3.jpg"
//                             alt="img-product"
//                           />
//                         </div>
//                       </div>
//                       {/* <!-- black --> */}
//                       <div
//                         className="swiper-slide stagger-item"
//                         data-color="black"
//                       >
//                         <div className="item">
//                           <img
//                             className="lazyload"
//                             data-src="images/products/black-5.jpg"
//                             src="images/products/black-5.jpg"
//                             alt="img-product"
//                           />
//                         </div>
//                       </div>
//                       <div
//                         className="swiper-slide stagger-item"
//                         data-color="black"
//                       >
//                         <div className="item">
//                           <img
//                             className="lazyload"
//                             data-src="images/products/black-3.jpg"
//                             src="images/products/black-3.jpg"
//                             alt="img-product"
//                           />
//                         </div>
//                       </div>
//                       <div
//                         className="swiper-slide stagger-item"
//                         data-color="black"
//                       >
//                         <div className="item">
//                           <img
//                             className="lazyload"
//                             data-src="images/products/black-4.jpg"
//                             src="images/products/black-4.jpg"
//                             alt="img-product"
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="col-md-6">
//               <div className="tf-product-info-wrap position-relative">
//                 <div className="ss-zoom-main"></div>
//                 <div className="product-info-list other-image-zoom">
//                   <div className="product-info-title">
//                     <h5>Cotton jersey top</h5>
//                   </div>
//                   <div className="product_real-time">
//                     <div className="product-status-content">
//                       <FaEye size={18} color="#1D1D1B" />
//                       <span>27</span>people are viewing this right now
//                     </div>
//                   </div>

//                   <div
//                     className="product_count-sales"
//                     data-min="20"
//                     data-max="30"
//                     data-time_min="20"
//                     data-time_max="30"
//                     data-id_product="7783956938845"
//                   >
//                     <FaFire
//                       size={24}
//                       color="#ff001e"
//                       style={{ marginRight: "6px" }}
//                     />
//                     <span className="count">22</span> sold in last
//                     <span className="time">27</span> hours
//                   </div>
//                   <div className="product-single_attribure instock">
//                     <label>Availability: </label>
//                     In Stock
//                   </div>
//                   <div className="product-single_attribure">
//                     <label>Product Code:</label>
//                     <span className="product-single__type_sku"> GHTHJ </span>
//                   </div>
//                   <div className="product-single_attribure">
//                     <label>Category:</label>
//                     <span> Top</span>
//                   </div>
//                   <div className="product-single_attribure">
//                     <label>Tag:</label>
//                     <ul id="details" className="hlist">
//                       <li>
//                         <Link to="#" title="Show products matching tag Black">
//                           Black
//                         </Link>
//                         ,
//                       </li>

//                       <li>
//                         <Link
//                           to="#"
//                           title="Show products matching tag deal 2024/12/12"
//                         >
//                           deal 2024/12/12
//                         </Link>
//                         ,
//                       </li>

//                       <li>
//                         <Link
//                           to="#"
//                           title="Show products matching tag featured"
//                         >
//                           featured
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>
//                   <div className="product-countdown">
//                     <div className="label-deal">
//                       <i className="icon-time ss-ani-tada"></i> Hurry Up! Offer
//                       ends in:
//                     </div>
//                     <div className="ss-countdown style-1">
//                       <div
//                         className="js-countdown"
//                         data-timer="1007500"
//                         data-labels="d :,h :,m :,s"
//                       ></div>
//                     </div>
//                   </div>
//                   <div className="product-info-price">
//                     <div className="price-on-sale">$8.00</div>
//                     <div className="compare-at-price">$30.00</div>
//                     <div className="badges-on-sale">
//                       <span>20</span>% OFF
//                     </div>
//                   </div>

//                   <div className="product-info-variant-picker">
//                     <div className="variant-picker-item">
//                       <div className="variant-picker-label">
//                         Color:
//                         <span className="fw-6 variant-picker-label-value value-currentColor">
//                           Beige
//                         </span>
//                       </div>
//                       <div className="variant-picker-values">
//                         <input
//                           id="values-beige"
//                           type="radio"
//                           name="color1"
//                           checked
//                         />
//                         <label
//                           className="hover-tooltip radius-60 color-btn"
//                           for="values-beige"
//                           data-color="beige"
//                           data-value="Beige"
//                         >
//                           <span className="btn-checkbox bg-color-beige"></span>
//                           <span className="tooltip">Beige</span>
//                         </label>
//                         <input id="values-black" type="radio" name="color1" />
//                         <label
//                           className="hover-tooltip radius-60 color-btn"
//                           data-price="9"
//                           for="values-black"
//                           data-color="black"
//                           data-value="Black"
//                         >
//                           <span className="btn-checkbox bg-color-black"></span>
//                           <span className="tooltip">Black</span>
//                         </label>
//                         <input id="values-blue" type="radio" name="color1" />
//                         <label
//                           className="hover-tooltip radius-60 color-btn"
//                           data-price="10"
//                           for="values-blue"
//                           data-color="blue"
//                           data-value="Blue"
//                         >
//                           <span className="btn-checkbox bg-color-blue"></span>
//                           <span className="tooltip">Blue</span>
//                         </label>
//                         <input id="values-white" type="radio" name="color1" />
//                         <label
//                           className="hover-tooltip radius-60 color-btn"
//                           data-price="12"
//                           for="values-white"
//                           data-color="white"
//                           data-value="White"
//                         >
//                           <span className="btn-checkbox bg-color-white"></span>
//                           <span className="tooltip">White</span>
//                         </label>
//                       </div>
//                     </div>
//                     <div className="variant-picker-item">
//                       <div className="d-flex justify-content-between align-items-center">
//                         <div className="variant-picker-label">
//                           Size:
//                           <span className="fw-6 variant-picker-label-value">
//                             S
//                           </span>
//                         </div>
//                         <Link
//                           to="#find_size"
//                           data-bs-toggle="modal"
//                           className="find-size gap-10 d-flex"
//                         >
//                           <img src="images/products/scale.svg" alt="" />
//                           Size Chart
//                         </Link>
//                       </div>
//                       <div className="variant-picker-values">
//                         <input
//                           type="radio"
//                           name="size1"
//                           id="values-s"
//                           checked
//                         />
//                         <label
//                           className="style-text size-btn"
//                           for="values-s"
//                           data-value="S"
//                         >
//                           <span>S</span>
//                         </label>
//                         <input type="radio" name="size1" id="values-m" />
//                         <label
//                           className="style-text size-btn"
//                           data-price="9"
//                           for="values-m"
//                           data-value="M"
//                         >
//                           <span>M</span>
//                         </label>
//                         <input type="radio" name="size1" id="values-l" />
//                         <label
//                           className="style-text size-btn"
//                           data-price="10"
//                           for="values-l"
//                           data-value="L"
//                         >
//                           <span>L</span>
//                         </label>
//                         <input type="radio" name="size1" id="values-xl" />
//                         <label
//                           className="style-text size-btn"
//                           data-price="12"
//                           for="values-xl"
//                           data-value="XL"
//                         >
//                           <span>XL</span>
//                         </label>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="product-options-bottom">
//                     <div className="product-info-quantity">
//                       <div className="quantity-title">Quantity :</div>
//                       <div className="wg-quantity">
//                         <span className="btn-quantity btn-decrease">-</span>
//                         <input
//                           type="text"
//                           className="quantity-product"
//                           name="number"
//                           value="1"
//                         />
//                         <span className="btn-quantity btn-increase">+</span>
//                       </div>
//                     </div>
//                     <div className="product-info-buy-button">
//                       <form className="">
//                         <Link
//                           to="#"
//                           className="ss-btn justify-content-center fs-16 flex-grow-1 btn-add-to-cart"
//                         >
//                           <FaShoppingCart
//                             size={20}
//                             style={{ marginRight: "6px" }}
//                           />
//                           <span>Add to cart -&nbsp;</span>
//                           <span className="ss-qty-price total-price">
//                             $8.00
//                           </span>
//                         </Link>
//                         <Link
//                           to="#"
//                           className="product-btn-wishlist hover-tooltip box-icon bg_white wishlist btn-icon-action"
//                         >
//                           <span className="icon icon-heart"></span>
//                           <span className="tooltip">Add to Wishlist</span>
//                           <span className="icon icon-delete"></span>
//                         </Link>
//                         <Link
//                           to="#compare"
//                           data-bs-toggle="offcanvas"
//                           className="product-btn-wishlist hover-tooltip box-icon bg_white compare btn-icon-action"
//                         >
//                           <span className="icon icon-compare"></span>
//                           <span className="tooltip">Add to Compare</span>
//                           <span className="icon icon-check"></span>
//                         </Link>
//                       </form>
//                     </div>
//                   </div>
//                   <div className="product-info-extra-link">
//                     <Link
//                       to="#compare_color"
//                       data-bs-toggle="modal"
//                       className="tf-product-extra-icon"
//                     >
//                       <div className="icon">
//                         <img src="images/item/compare.svg" alt="" />
//                       </div>
//                       <div className="text fw-6">Compare color</div>
//                     </Link>
//                     <Link
//                       to="#ask_question"
//                       data-bs-toggle="modal"
//                       className="tf-product-extra-icon"
//                     >
//                       <div className="icon">
//                         <i className="icon-question"></i>
//                       </div>
//                       <div className="text fw-6">Ask Link question</div>
//                     </Link>
//                     <Link
//                       // to="#delivery_return"
//                       // data-bs-toggle="modal"
//                       className="tf-product-extra-icon"
//                     >
//                       <div className="icon">
//                         <FaTruck size={22} />
//                       </div>
//                       <div className="text fw-6">Delivery & Return</div>
//                     </Link>
//                     <Link
//                       // to="#share_social"
//                       // data-bs-toggle="modal"
//                       className="tf-product-extra-icon"
//                     >
//                       <div className="icon">
//                         <i className="icon-share"></i>
//                       </div>
//                       <div className="text fw-6">Share</div>
//                     </Link>
//                   </div>
//                   <div className="product_estimated_delivery">
//                     <div className="estimated_delivery" data-number_day="5">
//                       <div className="inner mb_10">
//                         <strong>DELIVERY: </strong>
//                         <span className="day_to">May 25</span> -
//                         <span className="day_from">May 28</span>
//                       </div>
//                       <div className="free-ship">
//                         Free Shipping and Returns on all orders over $99.00
//                       </div>
//                     </div>
//                   </div>

//                   <div className="ss-pickup-availability">
//                     <div>
//                       <FaCheck size={18} color="#5bb954" />
//                     </div>
//                     <div>
//                       <p>
//                         Pickup available at
//                         <span className="fw-6">Toronto - Spadina Avenue</span>
//                         <br />
//                         Usually ready in 24 hours
//                       </p>
//                       <Link
//                         to="#pickup_available"
//                         data-bs-toggle="modal"
//                         className=""
//                       >
//                         Check availability at other stores
//                       </Link>
//                     </div>
//                   </div>

//                   <div className="product-info-trust-seal">
//                     <label>Guaranteed safe checkout:</label>
//                     <div className="ss-payment">
//                       <img src="images/payments/img-1.png" alt="" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductDetailsInfo;

// import React, { useState } from "react";
// import styled from "styled-components";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Thumbs } from "swiper/modules";
// import {
//   FaCheck,
//   FaEye,
//   FaFire,
//   FaShoppingCart,
//   FaTruck,
// } from "react-icons/fa";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";

// /* ================= IMAGE ARRAY ================= */
// const productImages = [
//   { src: "images/products/brown-2.jpg", color: "brown" },
//   { src: "images/products/brown-3.jpg", color: "brown" },
//   { src: "images/products/white-5.jpg", color: "white" },
//   { src: "images/products/white-4.jpg", color: "white" },
//   { src: "images/products/white-3.jpg", color: "white" },
//   { src: "images/products/black-5.jpg", color: "black" },
//   { src: "images/products/black-3.jpg", color: "black" },
//   { src: "images/products/black-4.jpg", color: "black" },
// ];

// const ProductDetailsInfo = () => {
//   const [thumbsSwiper, setThumbsSwiper] = useState(null);

//   return (
//     <Wrapper>
//       <section className="flat-spacing-4 pt_0">
//         <div className="tf-main-product section-image-zoom zoom-active">
//           <div className="container">
//             <div className="row">
//               {/* ================= LEFT: SLIDER ================= */}
//               <div className="col-md-6">
//                 <div className="ss-product-media-wrap thumbs-bottom sticky-top">
//                   <div className="thumbs-slider">
//                     {/* Main Slider */}
//                     <Swiper
//                       modules={[Navigation, Thumbs]}
//                       thumbs={{
//                         swiper:
//                           thumbsSwiper && !thumbsSwiper.destroyed
//                             ? thumbsSwiper
//                             : null,
//                       }}
//                       navigation={{
//                         nextEl: ".thumbs-next",
//                         prevEl: ".thumbs-prev",
//                       }}
//                       slidesPerView={1}
//                       spaceBetween={10}
//                       className="swiper tf-product-media-main"
//                     >
//                       {productImages.map((item, index) => (
//                         <SwiperSlide key={index} data-color={item.color}>
//                           <a
//                             href={item.src}
//                             target="_blank"
//                             rel="noreferrer"
//                             className="item"
//                           >
//                             <img src={item.src} alt="product" />
//                           </a>
//                         </SwiperSlide>
//                       ))}

//                       <div className="swiper-button-next button-style-arrow thumbs-next"></div>
//                       <div className="swiper-button-prev button-style-arrow thumbs-prev"></div>
//                     </Swiper>

//                     {/* Thumbnail Slider */}
//                     <Swiper
//                       modules={[Thumbs]}
//                       onSwiper={setThumbsSwiper}
//                       slidesPerView={5}
//                       spaceBetween={10}
//                       watchSlidesProgress
//                       className="swiper ss-product-media-thumbs"
//                     >
//                       {productImages.map((item, index) => (
//                         <SwiperSlide key={index} data-color={item.color}>
//                           <div className="item">
//                             <img src={item.src} alt="thumbnail" />
//                           </div>
//                         </SwiperSlide>
//                       ))}
//                     </Swiper>
//                   </div>
//                 </div>
//               </div>

//               {/* ================= RIGHT: PRODUCT INFO (STATIC) ================= */}
//               <div className="col-md-6">
//                 <div className="tf-product-info-wrap">
//                   <div className="product-info-list">
//                     <h5>Cotton Jersey Top</h5>

//                     <div className="product_real-time">
//                       <FaEye /> <span>27</span> people are viewing this right
//                       now
//                     </div>

//                     <div className="product_count-sales">
//                       <FaFire color="#ff001e" />
//                       <span>22</span> sold in last <span>27</span> hours
//                     </div>

//                     <div className="product-single_attribure">
//                       <label>Availability:</label> In Stock
//                     </div>

//                     <div className="product-single_attribure">
//                       <label>Product Code:</label> GHTHJ
//                     </div>

//                     <div className="product-single_attribure">
//                       <label>Category:</label> Top
//                     </div>

//                     <div className="product-info-price">
//                       <div className="price-on-sale">$8.00</div>
//                       <div className="compare-at-price">$30.00</div>
//                       <div className="badges-on-sale">
//                         <span>20</span>% OFF
//                       </div>
//                     </div>

//                     <div className="product-info-buy-button">
//                       <button className="ss-btn">
//                         <FaShoppingCart /> Add to cart
//                       </button>
//                     </div>

//                     <div className="product-info-extra-link">
//                       <div className="tf-product-extra-icon">
//                         <FaTruck />
//                         <span>Delivery & Return</span>
//                       </div>
//                     </div>

//                     <div className="ss-pickup-availability">
//                       <FaCheck color="#5bb954" />
//                       <p>
//                         Pickup available at
//                         <strong> Toronto - Spadina Avenue</strong>
//                         <br />
//                         Usually ready in 24 hours
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   /* ===== REMOVE DOUBLE SWIPER ICON ===== */
//   .button-style-arrow::before,
//   .button-style-arrow::after {
//     display: none !important;
//   }

//   /* ===== IMAGE ZOOM EFFECT ===== */
//   .section-image-zoom .tf-product-media-main .swiper-slide .item {
//     overflow: hidden;
//     cursor: zoom-in;
//   }

//   .section-image-zoom .tf-product-media-main .swiper-slide img {
//     width: 100%;
//     height: auto;
//     transition: transform 0.5s ease;
//     transform-origin: center;
//   }

//   .section-image-zoom .tf-product-media-main .swiper-slide .item:hover img {
//     transform: scale(1.8);
//   }

//   /* ===== KEEP THUMBNAILS NORMAL ===== */
//   .ss-product-media-thumbs img {
//     transform: none !important;
//   }
// `;

// export default ProductDetailsInfo;

import React, { useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import HoverZoom from "../../components/HoverZoom";
import { FaShoppingCart, FaTruck } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Link } from "react-router-dom";
import ModalFindSize from "../../components/Modal/ModalFindSize";
import ModalShareSocial from "../../components/Modal/ModalShareSocial";
import ModalDeliveryReturn from "../../components/Modal/ModalDeliveryReturn";

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

const ProductDetailsInfo = ({ toggleCart }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [zoomData, setZoomData] = useState(null);
  const [popupOpen, setPopupOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [openSizeModal, setOpenSizeModal] = useState(false);
  const [openShareModal, setOpenShareModal] = useState(false);
  const [openDeliveryReturnModal, setOpenDeliveryReturnModal] = useState(false);

  const openPopup = (index) => {
    setActiveIndex(index);
    setPopupOpen(true);
  };

  const closePopup = () => setPopupOpen(false);

  return (
    <Wrapper>
      <div className="breadcrumb">
        <div className="container">
          <div className="breadcrumb-wrap d-flex justify-content-center flex-wrap align-items-center">
            <div className="breadcrumb-list">
              <Link to="/" className="text">
                Home
              </Link>
              <i className="icon icon-arrow-right"></i>
              <Link to="#" className="text">
                Women
              </Link>
              <i className="icon icon-arrow-right"></i>
              <span className="text">Cotton jersey top</span>
            </div>
          </div>
        </div>
      </div>

      <section className="flat-spacing-4 pt_0">
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
                    <h5 className="mb-4">Cotton Jersey Top</h5>

                    <div className="product-single_attribure instock">
                      <label>Availability: </label>
                      In Stock
                    </div>

                    <div className="product-single_attribure">
                      <label>Product Code:</label>
                      <span className="product-single__type_sku"> GHTHJ </span>
                    </div>

                    <div className="product-single_attribure">
                      <label>Category:</label>
                      <span> Top</span>
                    </div>

                    {/* <div className="product-single_attribure">
                      <label>Tag:</label>
                      <ul id="details" className="hlist">
                        <li>
                          <Link to="#" title="Show products matching tag Black">
                            Black
                          </Link>
                          ,
                        </li>

                        <li>
                          <Link
                            to="#"
                            title="Show products matching tag deal 2024/12/12"
                          >
                            deal 2024/12/12
                          </Link>
                          ,
                        </li>

                        <li>
                          <Link
                            to="#"
                            title="Show products matching tag featured"
                          >
                            featured
                          </Link>
                        </li>
                      </ul>
                    </div> */}

                    <div className="product-info-price">
                      <div className="price-on-sale">$8.00</div>
                      <div className="compare-at-price">$30.00</div>
                      <div className="badges-on-sale">
                        <span>20</span>% OFF
                      </div>
                    </div>

                    <div className="product-info-variant-picker">
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
                    </div>

                    {/* Size MODAL */}
                    <ModalFindSize
                      isOpen={openSizeModal}
                      onClose={() => setOpenSizeModal(false)}
                    />

                    <div className="product-options-bottom">
                      <div className="product-info-quantity">
                        <div className="quantity-title">Quantity :</div>
                        <div className="wg-quantity">
                          <span className="btn-quantity btn-decrease">-</span>
                          <input
                            type="text"
                            className="quantity-product"
                            name="number"
                            value="1"
                          />
                          <span className="btn-quantity btn-increase">+</span>
                        </div>
                      </div>
                      <div className="product-info-buy-button">
                        <form className="">
                          <Link
                            to="#"
                            className="ss-btn justify-content-center fs-16 flex-grow-1 btn-add-to-cart"
                            onClick={toggleCart}
                          >
                            <FaShoppingCart
                              size={20}
                              style={{ marginRight: "6px" }}
                            />
                            <span>Add to cart -&nbsp;</span>
                            <span className="ss-qty-price total-price">
                              $8.00
                            </span>
                          </Link>
                          <Link
                            to="#"
                            className="product-btn-wishlist hover-tooltip box-icon bg_white wishlist btn-icon-action"
                          >
                            <span className="icon icon-heart"></span>
                            <span className="tooltip">Add to Wishlist</span>
                            <span className="icon icon-delete"></span>
                          </Link>
                          <Link
                            to="#compare"
                            data-bs-toggle="offcanvas"
                            className="product-btn-wishlist hover-tooltip box-icon bg_white compare btn-icon-action"
                          >
                            <span className="icon icon-compare"></span>
                            <span className="tooltip">Add to Compare</span>
                            <span className="icon icon-check"></span>
                          </Link>
                        </form>
                      </div>
                    </div>

                    <div className="product-info-extra-link">
                      {/* <Link
                        to="#compare_color"
                        data-bs-toggle="modal"
                        className="tf-product-extra-icon"
                      >
                        <div className="icon">
                          <img src="images/item/compare.svg" alt="" />
                        </div>
                        <div className="text fw-6">Compare color</div>
                      </Link> */}

                      {/* <Link
                        to="#ask_question"
                        data-bs-toggle="modal"
                        className="tf-product-extra-icon"
                      >
                        <div className="icon">
                          <i className="icon-question"></i>
                        </div>
                        <div className="text fw-6">Ask Link question</div>
                      </Link> */}

                      <Link
                        // to="#delivery_return"
                        // data-bs-toggle="modal"
                        className="tf-product-extra-icon"
                        onClick={() => setOpenDeliveryReturnModal(true)}
                      >
                        <div className="icon">
                          <FaTruck size={22} />
                        </div>
                        <div className="text fw-6">Delivery & Return</div>
                      </Link>

                      <Link
                        // to="#share_social"
                        // data-bs-toggle="modal"
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

                    {/* <div className="ss-pickup-availability">
                      <div>
                        <FaCheck size={18} color="#5bb954" />
                      </div>
                      <div>
                        <p>
                          Pickup available at
                          <span className="fw-6">Toronto - Spadina Avenue</span>
                          <br />
                          Usually ready in 24 hours
                        </p>
                        <Link
                          to="#pickup_available"
                          data-bs-toggle="modal"
                          className=""
                        >
                          Check availability at other stores
                        </Link>
                      </div>
                    </div> */}

                    <div className="product-info-trust-seal">
                      <label>Guaranteed safe checkout:</label>
                      <div className="ss-payment">
                        <img src="images/payments/img-1.png" alt="" />
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
`;

export default ProductDetailsInfo;
