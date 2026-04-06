// import React from "react";
// import { Link } from "react-router-dom";

// const ModalQuickView = () => {
//   return (
//     <div class="modal fade modalDemo" id="quick_view">
//       <div class="modal-dialog modal-dialog-centered">
//         <div class="modal-content">
//           <div class="header">
//             <span
//               class="icon-close icon-close-popup"
//               data-bs-dismiss="modal"
//             ></span>
//           </div>
//           <div class="wrap">
//             <div class="product-media-wrap">
//               <div
//                 class="featured-slider yt-content-slider owl-carousel owl-loaded owl-drag"
//                 data-autoplay="yes"
//                 data-delay="1"
//                 data-speed="0.6"
//                 data-margin="10"
//                 data-items_column00="1"
//                 data-items_column0="1"
//                 data-items_column1="1"
//                 data-items_column2="1"
//                 data-items_column3="1"
//                 data-items_column4="1"
//                 data-arrows="no"
//                 data-pagination="no"
//                 data-lazyload="no"
//                 data-loop="no"
//                 data-hoverpause="yes"
//               >
//                 <div class="item">
//                   <img src="images/products/orange-1.jpg" alt="" />
//                 </div>
//                 <div class="item">
//                   <img src="images/products/pink-1.jpg" alt="" />
//                 </div>
//               </div>
//             </div>
//             <div class="product-info-wrap position-relative">
//               <div class="product-info-list">
//                 <div class="product-info-title">
//                   <h5>
//                     <Link class="link" to="product-detail.html">
//                       Ribbed Tank Top
//                     </Link>
//                   </h5>
//                 </div>
//                 <div class="ss-product-info-badges">
//                   <div class="product-status-content">
//                     <svg
//                       width="19px"
//                       height="19px"
//                       viewBox="0 0 12 12"
//                       enable-background="new 0 0 12 12"
//                       id="Слой_1"
//                       version="1.1"
//                       xml:space="preserve"
//                       xmlns="http://www.w3.org/2000/svg"
//                       xmlns:xlink="http://www.w3.org/1999/xlink"
//                     >
//                       <g>
//                         <circle cx="6" cy="6" fill="#1D1D1B" r="1.5"></circle>
//                         <path
//                           d="M6,2C4,2,2,3,0,6c2,3,4,4,6,4s4-1,6-4C10,3,8,2,6,2z M6,8.5C4.621582,8.5,3.5,7.3789063,3.5,6   S4.621582,3.5,6,3.5S8.5,4.6210938,8.5,6S7.378418,8.5,6,8.5z"
//                           fill="#1D1D1B"
//                         ></path>
//                       </g>
//                     </svg>
//                     <span>27</span>people are viewing this right now
//                   </div>
//                 </div>
//                 <div class="product-info-price">
//                   <div class="price">$18.00</div>
//                 </div>
//                 <div class="product-description">
//                   <p>
//                     Nunc arcu faucibus Link et lorem eu Link mauris adipiscing
//                     conubia ac aptent ligula facilisis Link auctor habitant
//                     parturient Link Link.Interdum fermentum.
//                   </p>
//                 </div>
//                 <div class="product-info-variant-picker">
//                   <div class="variant-picker-item">
//                     <div class="variant-picker-label">
//                       Color:
//                       <span class="fw-6 variant-picker-label-value">
//                         Orange
//                       </span>
//                     </div>
//                     <div class="variant-picker-values">
//                       <input
//                         id="values-orange-1"
//                         type="radio"
//                         name="color-1"
//                         checked
//                       />
//                       <label
//                         class="hover-tooltip radius-60"
//                         for="values-orange-1"
//                         data-value="Orange"
//                       >
//                         <span class="btn-checkbox bg-color-orange"></span>
//                         <span class="tooltip">Orange</span>
//                       </label>
//                       <input id="values-black-1" type="radio" name="color-1" />
//                       <label
//                         class="hover-tooltip radius-60"
//                         for="values-black-1"
//                         data-value="Black"
//                       >
//                         <span class="btn-checkbox bg-color-black"></span>
//                         <span class="tooltip">Black</span>
//                       </label>
//                       <input id="values-white-1" type="radio" name="color-1" />
//                       <label
//                         class="hover-tooltip radius-60"
//                         for="values-white-1"
//                         data-value="White"
//                       >
//                         <span class="btn-checkbox bg-color-white"></span>
//                         <span class="tooltip">White</span>
//                       </label>
//                     </div>
//                   </div>
//                   <div class="variant-picker-item">
//                     <div class="d-flex justify-content-between align-items-center">
//                       <div class="variant-picker-label">
//                         Size:
//                         <span class="fw-6 variant-picker-label-value">S</span>
//                       </div>
//                       <div class="find-size btn-choose-size fw-6">
//                         <Link
//                           to="#find_size"
//                           data-bs-toggle="modal"
//                           class="find-size gap-10 d-flex"
//                         >
//                           <img src="images/products/scale.svg" alt="" />
//                           Size Chart
//                         </Link>
//                       </div>
//                     </div>
//                     <div class="variant-picker-values">
//                       <input
//                         type="radio"
//                         name="size-1"
//                         id="values-s-1"
//                         checked
//                       />
//                       <label class="style-text" for="values-s-1" data-value="S">
//                         <span>S</span>
//                       </label>
//                       <input type="radio" name="size-1" id="values-m-1" />
//                       <label class="style-text" for="values-m-1" data-value="M">
//                         <span>M</span>
//                       </label>
//                       <input type="radio" name="size-1" id="values-l-1" />
//                       <label class="style-text" for="values-l-1" data-value="L">
//                         <span>L</span>
//                       </label>
//                       <input type="radio" name="size-1" id="values-xl-1" />
//                       <label
//                         class="style-text"
//                         for="values-xl-1"
//                         data-value="XL"
//                       >
//                         <span>XL</span>
//                       </label>
//                     </div>
//                   </div>
//                 </div>
//                 <div class="product-info-quantity">
//                   <div class="quantity-title">Quantity</div>
//                   <div class="wg-quantity">
//                     <span class="btn-quantity minus-btn">-</span>
//                     <input type="text" name="number" value="1" />
//                     <span class="btn-quantity plus-btn">+</span>
//                   </div>
//                 </div>
//                 <div class="product-info-buy-button">
//                   <form class="">
//                     <Link
//                       to="#"
//                       class="ss-btn btn-fill justify-content-center fw-6 fs-16 flex-grow-1 btn-add-to-cart"
//                     >
//                       <span>Add to cart -&nbsp;</span>
//                       <span class="ss-qty-price">$8.00</span>
//                     </Link>
//                     <Link
//                       to="#"
//                       class="product-btn-wishlist hover-tooltip box-icon bg_white wishlist btn-icon-action"
//                     >
//                       <span class="icon icon-heart"></span>
//                       <span class="tooltip">Add to Wishlist</span>
//                       <span class="icon icon-delete"></span>
//                     </Link>
//                     <Link
//                       to="#compare"
//                       data-bs-toggle="offcanvas"
//                       class="product-btn-wishlist hover-tooltip box-icon bg_white compare btn-icon-action"
//                     >
//                       <span class="icon icon-compare"></span>
//                       <span class="tooltip">Add to Compare</span>
//                       <span class="icon icon-check"></span>
//                     </Link>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ModalQuickView;

// import React from "react";
// import { Link } from "react-router-dom";

// const ModalQuickView = () => {
//   return (
//     <div className="modal fade modalDemo" id="quick_view" tabIndex="-1">
//       <div className="modal-dialog modal-dialog-centered">
//         <div className="modal-content">
//           <div className="header">
//             <span
//               className="icon-close icon-close-popup"
//               data-bs-dismiss="modal"
//             ></span>
//           </div>

//           <div className="wrap">
//             {/* Product Images */}
//             <div className="product-media-wrap">
//               <div className="featured-slider owl-carousel">
//                 <div className="item">
//                   <img src="/images/products/orange-1.jpg" alt="Orange" />
//                 </div>
//                 <div className="item">
//                   <img src="/images/products/pink-1.jpg" alt="Pink" />
//                 </div>
//               </div>
//             </div>

//             {/* Product Info */}
//             <div className="product-info-wrap position-relative">
//               <div className="product-info-list">
//                 <div className="product-info-title">
//                   <h5>
//                     <Link className="link" to="/product-detail">
//                       Ribbed Tank Top
//                     </Link>
//                   </h5>
//                 </div>

//                 {/* Viewing Badge */}
//                 <div className="ss-product-info-badges">
//                   <div className="product-status-content">
//                     <svg width="19" height="19" viewBox="0 0 12 12">
//                       <circle cx="6" cy="6" r="1.5" fill="#1D1D1B" />
//                       <path
//                         d="M6,2C4,2,2,3,0,6c2,3,4,4,6,4s4-1,6-4C10,3,8,2,6,2z"
//                         fill="#1D1D1B"
//                       />
//                     </svg>
//                     <span>27</span> people are viewing this right now
//                   </div>
//                 </div>

//                 {/* Price */}
//                 <div className="product-info-price">
//                   <div className="price">$18.00</div>
//                 </div>

//                 {/* Description */}
//                 <div className="product-description">
//                   <p>
//                     Nunc arcu faucibus et lorem eu mauris adipiscing conubia ac
//                     aptent ligula facilisis auctor habitant parturient.
//                   </p>
//                 </div>

//                 {/* Variants */}
//                 <div className="product-info-variant-picker">
//                   {/* Color */}
//                   <div className="variant-picker-item">
//                     <div className="variant-picker-label">
//                       Color:
//                       <span className="fw-6 variant-picker-label-value">
//                         Orange
//                       </span>
//                     </div>
//                     <div className="variant-picker-values">
//                       <input
//                         id="color-orange"
//                         type="radio"
//                         name="color"
//                         defaultChecked
//                       />
//                       <label
//                         className="hover-tooltip radius-60"
//                         htmlFor="color-orange"
//                       >
//                         <span className="btn-checkbox bg-color-orange"></span>
//                         <span className="tooltip">Orange</span>
//                       </label>

//                       <input id="color-black" type="radio" name="color" />
//                       <label
//                         className="hover-tooltip radius-60"
//                         htmlFor="color-black"
//                       >
//                         <span className="btn-checkbox bg-color-black"></span>
//                         <span className="tooltip">Black</span>
//                       </label>

//                       <input id="color-white" type="radio" name="color" />
//                       <label
//                         className="hover-tooltip radius-60"
//                         htmlFor="color-white"
//                       >
//                         <span className="btn-checkbox bg-color-white"></span>
//                         <span className="tooltip">White</span>
//                       </label>
//                     </div>
//                   </div>

//                   {/* Size */}
//                   <div className="variant-picker-item">
//                     <div className="d-flex justify-content-between align-items-center">
//                       <div className="variant-picker-label">
//                         Size:
//                         <span className="fw-6 variant-picker-label-value">
//                           S
//                         </span>
//                       </div>

//                       <Link
//                         to="#find_size"
//                         data-bs-toggle="modal"
//                         className="find-size d-flex gap-10 fw-6"
//                       >
//                         <img src="/images/products/scale.svg" alt="" />
//                         Size Chart
//                       </Link>
//                     </div>

//                     <div className="variant-picker-values">
//                       <input
//                         type="radio"
//                         name="size"
//                         id="size-s"
//                         defaultChecked
//                       />
//                       <label className="style-text" htmlFor="size-s">
//                         <span>S</span>
//                       </label>

//                       <input type="radio" name="size" id="size-m" />
//                       <label className="style-text" htmlFor="size-m">
//                         <span>M</span>
//                       </label>

//                       <input type="radio" name="size" id="size-l" />
//                       <label className="style-text" htmlFor="size-l">
//                         <span>L</span>
//                       </label>

//                       <input type="radio" name="size" id="size-xl" />
//                       <label className="style-text" htmlFor="size-xl">
//                         <span>XL</span>
//                       </label>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Quantity */}
//                 <div className="product-info-quantity">
//                   <div className="quantity-title">Quantity</div>
//                   <div className="wg-quantity">
//                     <span className="btn-quantity minus-btn">-</span>
//                     <input type="text" defaultValue="1" />
//                     <span className="btn-quantity plus-btn">+</span>
//                   </div>
//                 </div>

//                 {/* Buttons */}
//                 <div className="product-info-buy-button">
//                   <div className="d-flex gap-10">
//                     <Link to="#" className="ss-btn btn-fill flex-grow-1 fw-6">
//                       Add to cart – $18.00
//                     </Link>

//                     <Link to="#" className="box-icon bg_white hover-tooltip">
//                       <span className="icon icon-heart"></span>
//                       <span className="tooltip">Wishlist</span>
//                     </Link>

//                     <Link
//                       to="#compare"
//                       data-bs-toggle="offcanvas"
//                       className="box-icon bg_white hover-tooltip"
//                     >
//                       <span className="icon icon-compare"></span>
//                       <span className="tooltip">Compare</span>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ModalQuickView;

// import React from "react";
// import { Link } from "react-router-dom";

// const ModalQuickView = ({ isOpen, onClose }) => {
//   if (!isOpen) return null;

//   return (
//     <>
//       {/* BACKDROP */}
//       <div
//         className="modal-backdrop fade show"
//         style={{ zIndex: 1055 }}
//         onClick={onClose}
//       />

//       {/* MODAL */}
//       <div
//         className="modal fade modalDemo show"
//         id="quick_view"
//         role="dialog"
//         aria-modal="true"
//         style={{
//           display: "block",
//           zIndex: 1060,
//         }}
//       >
//         <div className="modal-dialog modal-dialog-centered">
//           <div className="modal-content">
//             <div className="header">
//               <span
//                 className="icon-close icon-close-popup"
//                 onClick={onClose}
//               ></span>
//             </div>

//             <div className="wrap">
//               {/* Product Images */}
//               <div className="product-media-wrap">
//                 <div className="featured-slider owl-carousel">
//                   <div className="item">
//                     <img src="/images/products/orange-1.jpg" alt="Orange" />
//                   </div>
//                   <div className="item">
//                     <img src="/images/products/pink-1.jpg" alt="Pink" />
//                   </div>
//                 </div>
//               </div>

//               {/* Product Info */}
//               <div className="product-info-wrap position-relative">
//                 <div className="product-info-list">
//                   <div className="product-info-title">
//                     <h5>
//                       <Link className="link" to="/product-detail">
//                         Ribbed Tank Top
//                       </Link>
//                     </h5>
//                   </div>

//                   {/* Viewing Badge */}
//                   <div className="ss-product-info-badges">
//                     <div className="product-status-content">
//                       <svg width="19" height="19" viewBox="0 0 12 12">
//                         <circle cx="6" cy="6" r="1.5" fill="#1D1D1B" />
//                         <path
//                           d="M6,2C4,2,2,3,0,6c2,3,4,4,6,4s4-1,6-4C10,3,8,2,6,2z"
//                           fill="#1D1D1B"
//                         />
//                       </svg>
//                       <span>27</span> people are viewing this right now
//                     </div>
//                   </div>

//                   {/* Price */}
//                   <div className="product-info-price">
//                     <div className="price">$18.00</div>
//                   </div>

//                   {/* Description */}
//                   <div className="product-description">
//                     <p>
//                       Nunc arcu faucibus et lorem eu mauris adipiscing conubia
//                       ac aptent ligula facilisis auctor habitant parturient.
//                     </p>
//                   </div>

//                   {/* Variants */}
//                   <div className="product-info-variant-picker">
//                     {/* Color */}
//                     <div className="variant-picker-item">
//                       <div className="variant-picker-label">
//                         Color:
//                         <span className="fw-6 variant-picker-label-value">
//                           Orange
//                         </span>
//                       </div>
//                       <div className="variant-picker-values">
//                         <input
//                           id="color-orange"
//                           type="radio"
//                           name="color"
//                           defaultChecked
//                         />
//                         <label
//                           className="hover-tooltip radius-60"
//                           htmlFor="color-orange"
//                         >
//                           <span className="btn-checkbox bg-color-orange"></span>
//                           <span className="tooltip">Orange</span>
//                         </label>

//                         <input id="color-black" type="radio" name="color" />
//                         <label
//                           className="hover-tooltip radius-60"
//                           htmlFor="color-black"
//                         >
//                           <span className="btn-checkbox bg-color-black"></span>
//                           <span className="tooltip">Black</span>
//                         </label>

//                         <input id="color-white" type="radio" name="color" />
//                         <label
//                           className="hover-tooltip radius-60"
//                           htmlFor="color-white"
//                         >
//                           <span className="btn-checkbox bg-color-white"></span>
//                           <span className="tooltip">White</span>
//                         </label>
//                       </div>
//                     </div>

//                     {/* Size */}
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
//                           className="find-size d-flex gap-10 fw-6"
//                         >
//                           <img src="/images/products/scale.svg" alt="" />
//                           Size Chart
//                         </Link>
//                       </div>

//                       <div className="variant-picker-values">
//                         <input
//                           type="radio"
//                           name="size"
//                           id="size-s"
//                           defaultChecked
//                         />
//                         <label className="style-text" htmlFor="size-s">
//                           <span>S</span>
//                         </label>

//                         <input type="radio" name="size" id="size-m" />
//                         <label className="style-text" htmlFor="size-m">
//                           <span>M</span>
//                         </label>

//                         <input type="radio" name="size" id="size-l" />
//                         <label className="style-text" htmlFor="size-l">
//                           <span>L</span>
//                         </label>

//                         <input type="radio" name="size" id="size-xl" />
//                         <label className="style-text" htmlFor="size-xl">
//                           <span>XL</span>
//                         </label>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Quantity */}
//                   <div className="product-info-quantity">
//                     <div className="quantity-title">Quantity</div>
//                     <div className="wg-quantity">
//                       <span className="btn-quantity minus-btn">-</span>
//                       <input type="text" defaultValue="1" />
//                       <span className="btn-quantity plus-btn">+</span>
//                     </div>
//                   </div>

//                   {/* Buttons */}
//                   <div className="product-info-buy-button">
//                     <div className="d-flex gap-10">
//                       <Link to="#" className="ss-btn btn-fill flex-grow-1 fw-6">
//                         Add to cart – $18.00
//                       </Link>

//                       <Link to="#" className="box-icon bg_white hover-tooltip">
//                         <span className="icon icon-heart"></span>
//                         <span className="tooltip">Wishlist</span>
//                       </Link>

//                       <Link
//                         to="#compare"
//                         data-bs-toggle="offcanvas"
//                         className="box-icon bg_white hover-tooltip"
//                       >
//                         <span className="icon icon-compare"></span>
//                         <span className="tooltip">Compare</span>
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ModalQuickView;

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
                      <input type="text" defaultValue="1" />
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
