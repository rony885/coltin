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
