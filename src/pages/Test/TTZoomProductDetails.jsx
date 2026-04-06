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
//   const [popupOpen, setPopupOpen] = useState(false);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const openPopup = (index) => {
//     setActiveIndex(index);
//     setPopupOpen(true);
//   };

//   const closePopup = () => setPopupOpen(false);

//   const handleMouseMove = (e) => {
//     const container = e.currentTarget;
//     const img = container.querySelector(".zoom-image");

//     const rect = container.getBoundingClientRect();
//     const x = ((e.clientX - rect.left) / rect.width) * 100;
//     const y = ((e.clientY - rect.top) / rect.height) * 100;

//     container.style.setProperty("--x", `${x}%`);
//     container.style.setProperty("--y", `${y}%`);
//   };

//   const handleMouseLeave = (e) => {
//     const container = e.currentTarget;
//     container.style.setProperty("--x", `50%`);
//     container.style.setProperty("--y", `50%`);
//   };

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
//                           <div
//                             className="item zoom-container"
//                             onMouseMove={handleMouseMove}
//                             onMouseLeave={handleMouseLeave}
//                             onClick={() => openPopup(index)}
//                           >
//                             <img
//                               src={item.src}
//                               alt="product"
//                               className="zoom-image"
//                             />
//                           </div>
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

//               {/* ================= RIGHT: PRODUCT INFO ================= */}
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

//       {/* ================= POPUP OVERLAY ================= */}
//       {popupOpen && (
//         <div className="popup-overlay" onClick={closePopup}>
//           <div
//             className="popup-content"
//             onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
//           >
//             <button className="close-btn" onClick={closePopup}>
//               &times;
//             </button>
//             <Swiper
//               modules={[Navigation]}
//               navigation
//               slidesPerView={1}
//               spaceBetween={10}
//               initialSlide={activeIndex}
//               className="popup-swiper"
//             >
//               {productImages.map((item, index) => (
//                 <SwiperSlide key={index}>
//                   <img src={item.src} alt={`popup-${index}`} />
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </div>
//       )}
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   /* ===== REMOVE DOUBLE SWIPER ICON IN MAIN SLIDER ===== */
//   .button-style-arrow::before,
//   .button-style-arrow::after {
//     display: none !important;
//   }

//   /* ================= SMOOTH MOUSE MOVE ZOOM ================= */
//   .zoom-container {
//     position: relative;
//     overflow: hidden;
//     cursor: zoom-in;
//   }

//   .zoom-image {
//     width: 100%;
//     height: auto;
//     transition: transform 0.2s ease-out;
//     transform-origin: center;
//     will-change: transform;
//   }

//   /* zoom level */
//   .zoom-container:hover .zoom-image {
//     transform: scale(2);
//   }

//   /* smooth tracking */
//   .zoom-container {
//     --x: 50%;
//     --y: 50%;
//   }

//   .zoom-container .zoom-image {
//     transform-origin: var(--x) var(--y);
//   }

//   /* ===== KEEP THUMBNAILS NORMAL ===== */
//   .ss-product-media-thumbs img {
//     transform: none !important;
//   }

//   /* ===== POPUP OVERLAY ===== */
//   .popup-overlay {
//     position: fixed;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background: rgba(0, 0, 0, 0.8);
//     z-index: 9999;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

//   .popup-content {
//     position: relative;
//     max-width: 900px;
//     width: 90%;
//     background: #fff;
//     padding: 20px;
//     border-radius: 10px;
//   }

//   /* ===== POPUP IMAGE ===== */
//   .popup-content img {
//     width: 100%;
//     height: auto;
//   }

//   /* ===== CLOSE BUTTON ===== */
//   .close-btn {
//     position: absolute;
//     top: 5px;
//     right: 10px;
//     font-size: 28px;
//     background: none;
//     border: none;
//     cursor: pointer;
//     z-index: 10;
//   }

//   .swiper-button-prev:after,
//   .swiper-rtl .swiper-button-next:after {
//     content: "" !important;
//   }

//   .swiper-button-next:after,
//   .swiper-rtl .swiper-button-prev:after {
//     content: "" !important;
//   }

//   /* ================= POPUP SWIPER NAVIGATION ================= */
//   .popup-content .swiper-button-prev,
//   .popup-content .swiper-button-next {
//     color: #1a1a2c !important;
//     width: 36px !important;
//     height: 36px !important;
//   }

//   /* icon size */
//   .popup-content .swiper-button-prev::after,
//   .popup-content .swiper-button-next::after {
//     font-size: 15px !important;
//     font-weight: 600;
//   }

//   /* optional: better visibility on dark overlay */
//   .popup-content .swiper-button-prev,
//   .popup-content .swiper-button-next {
//     background: rgba(255, 255, 255, 0.9);
//     border-radius: 50%;
//     transition: background 0.3s ease;
//   }

//   /* hover effect (optional but recommended) */
//   .popup-content .swiper-button-prev:hover,
//   .popup-content .swiper-button-next:hover {
//     background: #1a1a2c;
//     color: #ffffff !important;
//   }
// `;

// export default ProductDetailsInfo;

import React, { useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import Zoom from "react-medium-image-zoom";
import {
  FaCheck,
  FaEye,
  FaFire,
  FaShoppingCart,
  FaTruck,
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "react-medium-image-zoom/dist/styles.css";
import HoverZoom from "../../components/HoverZoom";

/* ================= IMAGE ARRAY ================= */
const productImages = [
  { src: "images/products/brown-2.jpg", color: "brown" },
  { src: "images/products/brown-3.jpg", color: "brown" },
  { src: "images/products/white-5.jpg", color: "white" },
  { src: "images/products/white-4.jpg", color: "white" },
  { src: "images/products/white-3.jpg", color: "white" },
  { src: "images/products/black-5.jpg", color: "black" },
  { src: "images/products/black-3.jpg", color: "black" },
  { src: "images/products/black-4.jpg", color: "black" },
];

const ProductDetailsInfo = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [zoomData, setZoomData] = useState(null);

  return (
    <Wrapper>
      <section className="flat-spacing-4 pt_0">
        <div className="tf-main-product">
          <div className="container">
            <div className="row">
              {/* ================= LEFT: IMAGE SLIDER ================= */}
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
                      className="tf-product-media-main"
                    >
                      {productImages.map((item, index) => (
                        <SwiperSlide key={index}>
                          <div className="zoom-wrapper">
                            {/* <Zoom scrollLock={false}>
                              <img
                                src={item.src}
                                alt="Product"
                                className="main-image"
                              />
                            </Zoom> */}
                            <HoverZoom
                              onZoomMove={setZoomData} // <-- send position to parent
                              imageUrl={item.src}
                              width={630}
                              height={630}
                              zoomScale={2.5}
                              lensSize={120}
                              zoomWidth={500} // separate zoom box width
                              zoomHeight={500} // separate zoom box height
                            />
                          </div>
                        </SwiperSlide>
                      ))}

                      <div className="swiper-button-next button-style-arrow thumbs-next" />
                      <div className="swiper-button-prev button-style-arrow thumbs-prev" />
                    </Swiper>

                    {/* Thumbnails */}
                    <Swiper
                      modules={[Thumbs]}
                      onSwiper={setThumbsSwiper}
                      slidesPerView={5}
                      spaceBetween={10}
                      watchSlidesProgress
                      className="ss-product-media-thumbs"
                    >
                      {productImages.map((item, index) => (
                        <SwiperSlide key={index}>
                          <img src={item.src} alt="thumb" />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>

              {/* Zoom Box */}
              {zoomData && zoomData.visible && (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: 500,
                    height: 500,
                    border: "2px solid #ff0000",
                    backgroundImage: `url(${zoomData.imageUrl})`,
                    backgroundSize: `${
                      zoomData.imgWidth * zoomData.zoomScale
                    }px ${zoomData.imgHeight * zoomData.zoomScale}px`,
                    backgroundPosition: `-${
                      zoomData.x * zoomData.zoomScale - 250
                    }px -${zoomData.y * zoomData.zoomScale - 250}px`,
                    pointerEvents: "none",
                    zIndex: 9999,
                  }}
                />
              )}

              {/* ================= RIGHT: PRODUCT INFO ================= */}
              <div className="col-md-6">
                <h5>Cotton Jersey Top</h5>

                <div className="product_real-time">
                  <FaEye /> <span>27</span> people are viewing this right now
                </div>

                <div className="product_count-sales">
                  <FaFire color="#ff001e" />
                  <span>22</span> sold in last <span>27</span> hours
                </div>

                <div className="product-info-price">
                  <span className="price-on-sale">$8.00</span>
                  <span className="compare-at-price">$30.00</span>
                </div>

                <button className="ss-btn">
                  <FaShoppingCart /> Add to cart
                </button>

                <div className="ss-pickup-availability">
                  <FaCheck color="#5bb954" />
                  <p>
                    Pickup available at <strong>Toronto</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* Remove Swiper arrow duplicate icons */
  .button-style-arrow::before,
  .button-style-arrow::after {
    display: none !important;
  }

  .zoom-wrapper {
    width: 100%;
    cursor: zoom-in;
  }

  .main-image {
    width: 100%;
    height: auto;
    border-radius: 6px;
  }

  .ss-product-media-thumbs img {
    width: 100%;
    cursor: pointer;
  }
`;

export default ProductDetailsInfo;
