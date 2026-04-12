// import React from "react";
// import { Link } from "react-router-dom";

// const Brand = () => {
//   return (
//     <div class="wrap-carousel-brand mb_90 owl-style1">
//       <div class="container">
//         <div class="box-title">
//           <h3>Shop by Brands</h3>
//           <div class="view-all">
//             <Link to="#">See All Brands</Link>
//           </div>
//         </div>
//         <div class="wrap-carousel">
//           <div
//             class="featured-slider yt-content-slider owl-carousel owl-loaded owl-drag"
//             data-autoplay="yes"
//             data-delay="4"
//             data-speed="0.6"
//             data-margin="10"
//             data-items_column00="7"
//             data-items_column0="7"
//             data-items_column1="5"
//             data-items_column2="4"
//             data-items_column3="3"
//             data-items_column4="2"
//             data-arrows="yes"
//             data-pagination="no"
//             data-lazyload="no"
//             data-loop="no"
//             data-hoverpause="yes"
//           >
//             <div class="brand-item">
//               <img
//                 class="lazyload"
//                 data-src="images/brand/brand-01.png"
//                 src="images/brand/brand-01.png"
//                 alt="image-brand"
//               />
//             </div>
//             <div class="brand-item">
//               <img
//                 class="lazyload"
//                 data-src="images/brand/brand-02.png"
//                 src="images/brand/brand-02.png"
//                 alt="image-brand"
//               />
//             </div>
//             <div class="brand-item">
//               <img
//                 class="lazyload"
//                 data-src="images/brand/brand-03.png"
//                 src="images/brand/brand-03.png"
//                 alt="image-brand"
//               />
//             </div>
//             <div class="brand-item">
//               <img
//                 class="lazyload"
//                 data-src="images/brand/brand-04.png"
//                 src="images/brand/brand-04.png"
//                 alt="image-brand"
//               />
//             </div>
//             <div class="brand-item">
//               <img
//                 class="lazyload"
//                 data-src="images/brand/brand-05.png"
//                 src="images/brand/brand-05.png"
//                 alt="image-brand"
//               />
//             </div>
//             <div class="brand-item">
//               <img
//                 class="lazyload"
//                 data-src="images/brand/brand-06.png"
//                 src="images/brand/brand-06.png"
//                 alt="image-brand"
//               />
//             </div>
//             <div class="brand-item">
//               <img
//                 class="lazyload"
//                 data-src="images/brand/brand-07.png"
//                 src="images/brand/brand-07.png"
//                 alt="image-brand"
//               />
//             </div>
//             <div class="brand-item">
//               <img
//                 class="lazyload"
//                 data-src="images/brand/brand-08.png"
//                 src="images/brand/brand-08.png"
//                 alt="image-brand"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Brand;

// import React from "react";
// import styled from "styled-components";
// import { Link } from "react-router-dom";

// // Swiper
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";

// // Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";

// const brands = [
//   "images/brand/brand-01.png",
//   "images/brand/brand-02.png",
//   "images/brand/brand-03.png",
//   "images/brand/brand-04.png",
//   "images/brand/brand-05.png",
//   "images/brand/brand-06.png",
//   "images/brand/brand-07.png",
//   "images/brand/brand-08.png",
// ];

// const Brand = () => {
//   return (
//     <Wrapper>
//       <div className="wrap-carousel-brand mb_90 owl-style1">
//         <div className="container">
//           <div className="box-title d-flex justify-content-between align-items-center">
//             <h3>Shop by Brands</h3>
//             <div className="view-all">
//               <Link to="#">See All Brands</Link>
//             </div>
//           </div>

//           <div className="wrap-carousel">
//             <Swiper
//               modules={[Navigation, Autoplay]}
//               spaceBetween={10}
//               slidesPerView={7}
//               navigation
//               autoplay={{ delay: 4000, disableOnInteraction: false }}
//               breakpoints={{
//                 1200: { slidesPerView: 7 },
//                 992: { slidesPerView: 5 },
//                 768: { slidesPerView: 4 },
//                 576: { slidesPerView: 3 },
//                 0: { slidesPerView: 2 },
//               }}
//             >
//               {brands.map((img, index) => (
//                 <SwiperSlide key={index}>
//                   <div className="brand-item">
//                     <img src={img} alt="brand" className="img-fluid" />
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section``;

// export default Brand;

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const brands = [
  "images/brand/brand-01.png",
  "images/brand/brand-02.png",
  "images/brand/brand-03.png",
  "images/brand/brand-04.png",
  "images/brand/brand-05.png",
  "images/brand/brand-06.png",
  "images/brand/brand-07.png",
  "images/brand/brand-08.png",
];

const Brand = () => {
  return (
    <Wrapper>
      <div className="wrap-carousel-brand mb_90 owl-style1">
        <div className="container">
          <div className="box-title d-flex justify-content-between align-items-center">
            <h3>Shop by Brands</h3>
            <div className="view-all">
              <Link to="#">See All Brands</Link>
            </div>
          </div>

          <div className="wrap-carousel">
            {/* ✅ Custom Buttons */}
            <div className="custom-swiper-prev">&#10094;</div>
            <div className="custom-swiper-next">&#10095;</div>

            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={10}
              slidesPerView={7}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = ".custom-swiper-prev";
                swiper.params.navigation.nextEl = ".custom-swiper-next";
              }}
              navigation={{
                prevEl: ".custom-swiper-prev",
                nextEl: ".custom-swiper-next",
              }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              breakpoints={{
                1200: { slidesPerView: 7 },
                992: { slidesPerView: 5 },
                768: { slidesPerView: 4 },
                576: { slidesPerView: 3 },
                0: { slidesPerView: 2 },
              }}
            >
              {brands.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="brand-item">
                    <img src={img} alt="brand" className="img-fluid" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .wrap-carousel {
    position: relative;
  }

  .custom-swiper-prev,
  .custom-swiper-next {
    position: absolute;
    top: 50%;
    width: 36px;
    height: 36px;
    border: 1px solid #ddd;
    background: #fff;
    color: #222;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transform: translateY(-50%);
    z-index: 10;
    font-size: 18px;
    transition: all 0.3s ease;
    opacity: 0;
    visibility: hidden;
  }

  /* Show on hover */
  .wrap-carousel:hover .custom-swiper-prev,
  .wrap-carousel:hover .custom-swiper-next {
    opacity: 1;
    visibility: visible;
  }

  .custom-swiper-prev:hover,
  .custom-swiper-next:hover {
    background-color: #000;
    color: #fff;
    border-color: #000;
  }

  .custom-swiper-prev {
    left: -18px;
  }

  .custom-swiper-next {
    right: -18px;
  }

  @media (max-width: 768px) {
    .custom-swiper-prev,
    .custom-swiper-next {
      width: 32px;
      height: 32px;
      font-size: 16px;
    }

    .custom-swiper-prev {
      left: 0;
    }

    .custom-swiper-next {
      right: 0;
    }
  }
`;

export default Brand;
