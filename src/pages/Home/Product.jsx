// import React from "react";
// import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
// import { FiRepeat } from "react-icons/fi";
// import { BsCart } from "react-icons/bs";
// import { Link } from "react-router-dom";

// const Product = () => {
//   return (
//     <div className="widget-product-carousel owl-style1 mb_40">
//       <div className="container">
//         <div className="box-title">
//           <h3>Customer Most Loved</h3>
//           <div className="view-all">
//             <Link to="shop-default.html">View all product</Link>
//           </div>
//         </div>
//         <div className="products-listing">
//           <div className="block-content product-layout grid__item">
//             <div
//               className="featured-slider yt-content-slider owl-carousel"
//               data-autoplay="no"
//               data-delay="4"
//               data-speed="0.6"
//               data-margin="10"
//               data-items_column00="5"
//               data-items_column0="5"
//               data-items_column1="4"
//               data-items_column2="3"
//               data-items_column3="2"
//               data-items_column4="2"
//               data-arrows="yes"
//               data-pagination="no"
//               data-lazyload="no"
//               data-loop="no"
//               data-hoverpause="yes"
//             >
//               <div className="item">
//                 <div className="product-item card-product">
//                   <div className="product-item-container">
//                     <div className="left-block">
//                       <Link to="product-detail.html" className="product-img">
//                         <span
//                           className="media media--transparent media-- media--hover-effect"
//                           style="padding-bottom: 100%"
//                         >
//                           <img
//                             className="lazyload img-product"
//                             data-src="images/products/Fa_11a.jpg"
//                             src="images/products/Fa_11a.jpg"
//                             alt="image-product"
//                           />
//                           <img
//                             className="lazyload img-hover"
//                             data-src="images/products/Fa_10a.jpg"
//                             src="images/products/Fa_10a.jpg"
//                             alt="image-product"
//                           />
//                         </span>
//                       </Link>
//                       <div className="list-product-btn column-right">
//                         <Link
//                           to="javascript:void(0);"
//                           className="box-icon bg_white wishlist btn-icon-action"
//                         >
//                           <AiOutlineHeart size={16} className="ss-wishlist-v" />

//                           <span className="tooltip">Add to Wishlist</span>
//                           <span className="icon icon-delete"></span>
//                         </Link>
//                         <Link
//                           to="#compare"
//                           data-bs-toggle="offcanvas"
//                           className="box-icon bg_white compare btn-icon-action"
//                         >
//                           <FiRepeat size={16} />
//                           <span className="tooltip">Add to Compare</span>
//                           <span className="icon icon-check"></span>
//                         </Link>
//                         <Link
//                           to="#quick_view"
//                           data-bs-toggle="modal"
//                           className="box-icon bg_white quickview ss-btn-loading"
//                         >
//                           <AiOutlineEye size={16} />
//                           <span className="tooltip">Quick View</span>
//                         </Link>
//                       </div>
//                     </div>
//                     <div className="right-block">
//                       <div className="caption">
//                         <div className="title-vendor">
//                           <Link to="shop-default.html" title="Entry">
//                             Entry
//                           </Link>
//                         </div>
//                         <h4 className="title-product">
//                           <Link to="product-detail.html" className="title link">
//                             Cleveland Pochette
//                           </Link>
//                         </h4>
//                         <div className="price">
//                           <div className="product-price--regular">$20.00</div>
//                           <div className="price-item--sale">$10.00</div>
//                         </div>
//                         <ul className="list-color-product">
//                           <li className="list-color-item color-swatch active">
//                             <span className="tooltip">Pastel Brown</span>
//                             <span className="swatch-value bg_pastel-brown"></span>
//                             <img
//                               className="lazyload"
//                               data-src="images/products/stroller-baby-brown.jpg"
//                               src="images/products/stroller-baby-brown.jpg"
//                               alt="image-product"
//                             />
//                           </li>
//                           <li className="list-color-item color-swatch">
//                             <span className="tooltip">Black</span>
//                             <span className="swatch-value bg_dark"></span>
//                             <img
//                               className="lazyload"
//                               data-src="images/products/stroller-baby-black.jpg"
//                               src="images/products/stroller-baby-black.jpg"
//                               alt="image-product"
//                             />
//                           </li>
//                         </ul>
//                       </div>
//                       <div className="button-link">
//                         <Link
//                           to="#quick_add"
//                           data-bs-toggle="modal"
//                           className="btn-addToCart grl btn_df"
//                         >
//                           <BsCart size={20} />
//                           <span>Add to cart</span>
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="item">
//                 <div className="product-item card-product">
//                   <div className="product-item-container">
//                     <div className="left-block">
//                       <Link to="product-detail.html" className="product-img">
//                         <span
//                           className="media media--transparent media-- media--hover-effect"
//                           style="padding-bottom: 100%"
//                         >
//                           <img
//                             className="lazyload img-product"
//                             data-src="images/products/Fa_29a.jpg"
//                             src="images/products/Fa_29a.jpg"
//                             alt="image-product"
//                           />
//                           <img
//                             className="lazyload img-hover"
//                             data-src="images/products/Fa_30a.jpg"
//                             src="images/products/Fa_30a.jpg"
//                             alt="image-product"
//                           />
//                         </span>
//                       </Link>
//                       <div className="list-product-btn column-right">
//                         <Link
//                           to="javascript:void(0);"
//                           className="box-icon bg_white wishlist btn-icon-action"
//                         >
//                           <AiOutlineHeart size={16} className="ss-wishlist-v" />
//                           <span className="tooltip">Add to Wishlist</span>
//                           <span className="icon icon-delete"></span>
//                         </Link>
//                         <Link
//                           to="#compare"
//                           data-bs-toggle="offcanvas"
//                           className="box-icon bg_white compare btn-icon-action"
//                         >
//                           <FiRepeat size={16} />
//                           <span className="tooltip">Add to Compare</span>
//                           <span className="icon icon-check"></span>
//                         </Link>
//                         <Link
//                           to="#quick_view"
//                           data-bs-toggle="modal"
//                           className="box-icon bg_white quickview ss-btn-loading"
//                         >
//                           <AiOutlineEye size={16} />
//                           <span className="tooltip">Quick View</span>
//                         </Link>
//                       </div>
//                     </div>
//                     <div className="right-block">
//                       <div className="caption">
//                         <div className="title-vendor">
//                           <Link to="shop-default.html" title="Entry">
//                             Entry
//                           </Link>
//                         </div>
//                         <h4>
//                           <Link to="product-detail.html" className="title link">
//                             Yekaty Women Cardigan 3/4 Sleeves
//                           </Link>
//                         </h4>
//                         <div className="price">
//                           <div className="product-price">$17.30</div>
//                         </div>
//                         <ul className="list-color-product">
//                           <li className="list-color-item color-swatch active">
//                             <span className="tooltip">Black</span>
//                             <span className="swatch-value bg_dark"></span>
//                             <img
//                               className="lazyload"
//                               data-src="images/products/stroller-baby-black3.jpg"
//                               src="images/products/stroller-baby-black3.jpg"
//                               alt="image-product"
//                             />
//                           </li>
//                           <li className="list-color-item color-swatch">
//                             <span className="tooltip">Pastel Brown</span>
//                             <span className="swatch-value bg_pastel-brown"></span>
//                             <img
//                               className="lazyload"
//                               data-src="images/products/stroller-baby-brown.jpg"
//                               src="images/products/stroller-baby-brown.jpg"
//                               alt="image-product"
//                             />
//                           </li>
//                           <li className="list-color-item color-swatch">
//                             <span className="tooltip">Pink</span>
//                             <span className="swatch-value bg_pink"></span>
//                             <img
//                               className="lazyload"
//                               data-src="images/products/stroller-baby-pink.jpg"
//                               src="images/products/stroller-baby-pink.jpg"
//                               alt="image-product"
//                             />
//                           </li>
//                         </ul>
//                       </div>
//                       <div className="button-link">
//                         <Link
//                           to="#quick_add"
//                           data-bs-toggle="modal"
//                           className="btn-addToCart grl btn_df"
//                         >
//                           <BsCart size={20} />
//                           <span>Add to cart</span>
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="item">
//                 <div className="product-item card-product">
//                   <div className="product-item-container">
//                     <div className="left-block">
//                       <Link to="product-detail.html" className="product-img">
//                         <span
//                           className="media media--transparent media-- media--hover-effect"
//                           style={{ paddingBottom: "100%" }}
//                         >
//                           <img
//                             className="lazyload img-product"
//                             data-src="images/products/Fa_31a.jpg"
//                             src="images/products/Fa_31a.jpg"
//                             alt="image-product"
//                           />
//                           <img
//                             className="lazyload img-hover"
//                             data-src="images/products/Fa_32a.jpg"
//                             src="images/products/Fa_32a.jpg"
//                             alt="image-product"
//                           />
//                         </span>
//                       </Link>
//                       <div className="list-product-btn column-right">
//                         <Link
//                           to="javascript:void(0);"
//                           className="box-icon bg_white wishlist btn-icon-action"
//                         >
//                           <AiOutlineHeart size={16} className="ss-wishlist-v" />
//                           <span className="tooltip">Add to Wishlist</span>
//                           <span className="icon icon-delete"></span>
//                         </Link>
//                         <Link
//                           to="#compare"
//                           data-bs-toggle="offcanvas"
//                           className="box-icon bg_white compare btn-icon-action"
//                         >
//                           <FiRepeat size={16} />
//                           <span className="tooltip">Add to Compare</span>
//                           <span className="icon icon-check"></span>
//                         </Link>
//                         <Link
//                           to="#quick_view"
//                           data-bs-toggle="modal"
//                           className="box-icon bg_white quickview ss-btn-loading"
//                         >
//                           <AiOutlineEye size={16} />
//                           <span className="tooltip">Quick View</span>
//                         </Link>
//                       </div>
//                     </div>
//                     <div className="right-block">
//                       <div className="caption">
//                         <div className="title-vendor">
//                           <Link to="shop-default.html" title="Entry">
//                             Entry
//                           </Link>
//                         </div>
//                         <h4>
//                           <Link to="product-detail.html" className="title link">
//                             Mens Leather Shoulder Small Bag
//                           </Link>
//                         </h4>
//                         <div className="price">
//                           <div className="product-price">$13.30</div>
//                         </div>
//                         <ul className="list-color-product">
//                           <li className="list-color-item color-swatch active">
//                             <span className="tooltip">Black</span>
//                             <span className="swatch-value bg_dark"></span>
//                             <img
//                               className="lazyload"
//                               data-src="images/products/stroller-baby-black3.jpg"
//                               src="images/products/stroller-baby-black3.jpg"
//                               alt="image-product"
//                             />
//                           </li>
//                           <li className="list-color-item color-swatch">
//                             <span className="tooltip">Pastel Brown</span>
//                             <span className="swatch-value bg_pastel-brown"></span>
//                             <img
//                               className="lazyload"
//                               data-src="images/products/stroller-baby-brown.jpg"
//                               src="images/products/stroller-baby-brown.jpg"
//                               alt="image-product"
//                             />
//                           </li>
//                           <li className="list-color-item color-swatch">
//                             <span className="tooltip">Pink</span>
//                             <span className="swatch-value bg_pink"></span>
//                             <img
//                               className="lazyload"
//                               data-src="images/products/stroller-baby-pink.jpg"
//                               src="images/products/stroller-baby-pink.jpg"
//                               alt="image-product"
//                             />
//                           </li>
//                         </ul>
//                       </div>
//                       <div className="button-link">
//                         <Link
//                           to="#quick_add"
//                           data-bs-toggle="modal"
//                           className="btn-addToCart grl btn_df"
//                         >
//                           <BsCart size={20} />
//                           <span>Add to cart</span>
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="item">
//                 <div className="product-item card-product">
//                   <div className="product-item-container">
//                     <div className="left-block">
//                       <Link to="product-detail.html" className="product-img">
//                         <span
//                           className="media media--transparent media-- media--hover-effect"
//                           style={{ paddingBottom: "100%" }}
//                         >
//                           <img
//                             className="lazyload img-product"
//                             data-src="images/products/Fa_19a.jpg"
//                             src="images/products/Fa_19a.jpg"
//                             alt="image-product"
//                           />
//                           <img
//                             className="lazyload img-hover"
//                             data-src="images/products/Fa_20a.jpg"
//                             src="images/products/Fa_20a.jpg"
//                             alt="image-product"
//                           />
//                         </span>
//                       </Link>
//                       <div className="list-product-btn column-right">
//                         <Link
//                           to="javascript:void(0);"
//                           className="box-icon bg_white wishlist btn-icon-action"
//                         >
//                           <AiOutlineHeart size={16} className="ss-wishlist-v" />
//                           <span className="tooltip">Add to Wishlist</span>
//                           <span className="icon icon-delete"></span>
//                         </Link>
//                         <Link
//                           to="#compare"
//                           data-bs-toggle="offcanvas"
//                           className="box-icon bg_white compare btn-icon-action"
//                         >
//                           <FiRepeat size={16} />
//                           <span className="tooltip">Add to Compare</span>
//                           <span className="icon icon-check"></span>
//                         </Link>
//                         <Link
//                           to="#quick_view"
//                           data-bs-toggle="modal"
//                           className="box-icon bg_white quickview ss-btn-loading"
//                         >
//                           <AiOutlineEye size={16} />
//                           <span className="tooltip">Quick View</span>
//                         </Link>
//                       </div>
//                     </div>
//                     <div className="right-block">
//                       <div className="caption">
//                         <div className="title-vendor">
//                           <Link to="shop-default.html" title="Entry">
//                             Entry
//                           </Link>
//                         </div>
//                         <h4>
//                           <Link to="product-detail.html" className="title link">
//                             Women's 3/4 Length Sleeve VNeck
//                           </Link>
//                         </h4>
//                         <div className="price">
//                           <div className="product-price--regular">$85.00</div>
//                           <div className="price-item--sale">$70.00</div>
//                         </div>
//                         <ul className="list-color-product">
//                           <li className="list-color-item color-swatch active">
//                             <span className="tooltip">Yellow</span>
//                             <span className="swatch-value bg_yellow-4"></span>
//                             <img
//                               className="lazyload"
//                               data-src="images/products/stroller-baby-yellow.jpg"
//                               src="images/products/stroller-baby-yellow.jpg"
//                               alt="image-product"
//                             />
//                           </li>
//                           <li className="list-color-item color-swatch">
//                             <span className="tooltip">Black</span>
//                             <span className="swatch-value bg_dark"></span>
//                             <img
//                               className="lazyload"
//                               data-src="images/products/stroller-baby-black4.jpg"
//                               src="images/products/stroller-baby-black4.jpg"
//                               alt="image-product"
//                             />
//                           </li>
//                           <li className="list-color-item color-swatch">
//                             <span className="tooltip">Grey</span>
//                             <span className="swatch-value bg_grey"></span>
//                             <img
//                               className="lazyload"
//                               data-src="images/products/stroller-baby-grey.jpg"
//                               src="images/products/stroller-baby-grey.jpg"
//                               alt="image-product"
//                             />
//                           </li>
//                         </ul>
//                       </div>
//                       <div className="button-link">
//                         <Link
//                           to="#quick_add"
//                           data-bs-toggle="modal"
//                           className="btn-addToCart grl btn_df"
//                         >
//                           <BsCart size={20} />
//                           <span>Add to cart</span>
//                         </Link>
//                       </div>
//                     </div>
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

// export default Product;

// import React from "react";
// import styled from "styled-components";
// import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
// import { FiRepeat } from "react-icons/fi";
// import { BsCart } from "react-icons/bs";
// import { Link } from "react-router-dom";

// // Swiper
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";

// // Product data array
// const products = [
//   {
//     id: 1,
//     vendor: "Entry",
//     name: "Cleveland Pochette",
//     priceRegular: "$20.00",
//     priceSale: "$10.00",
//     images: ["images/products/Fa_11a.jpg", "images/products/Fa_10a.jpg"],
//     colors: [
//       {
//         name: "Pastel Brown",
//         class: "bg_pastel-brown",
//         image: "images/products/stroller-baby-brown.jpg",
//       },
//       {
//         name: "Black",
//         class: "bg_dark",
//         image: "images/products/stroller-baby-black.jpg",
//       },
//     ],
//   },
//   {
//     id: 2,
//     vendor: "Entry",
//     name: "Yekaty Women Cardigan 3/4 Sleeves",
//     priceRegular: "$17.30",
//     images: ["images/products/Fa_29a.jpg", "images/products/Fa_30a.jpg"],
//     colors: [
//       {
//         name: "Black",
//         class: "bg_dark",
//         image: "images/products/stroller-baby-black3.jpg",
//       },
//       {
//         name: "Pastel Brown",
//         class: "bg_pastel-brown",
//         image: "images/products/stroller-baby-brown.jpg",
//       },
//       {
//         name: "Pink",
//         class: "bg_pink",
//         image: "images/products/stroller-baby-pink.jpg",
//       },
//     ],
//   },
//   {
//     id: 3,
//     vendor: "Entry",
//     name: "Mens Leather Shoulder Small Bag",
//     priceRegular: "$13.30",
//     images: ["images/products/Fa_31a.jpg", "images/products/Fa_32a.jpg"],
//     colors: [
//       {
//         name: "Black",
//         class: "bg_dark",
//         image: "images/products/stroller-baby-black3.jpg",
//       },
//       {
//         name: "Pastel Brown",
//         class: "bg_pastel-brown",
//         image: "images/products/stroller-baby-brown.jpg",
//       },
//       {
//         name: "Pink",
//         class: "bg_pink",
//         image: "images/products/stroller-baby-pink.jpg",
//       },
//     ],
//   },
//   {
//     id: 4,
//     vendor: "Entry",
//     name: "Women's 3/4 Length Sleeve VNeck",
//     priceRegular: "$85.00",
//     priceSale: "$70.00",
//     images: ["images/products/Fa_19a.jpg", "images/products/Fa_20a.jpg"],
//     colors: [
//       {
//         name: "Yellow",
//         class: "bg_yellow-4",
//         image: "images/products/stroller-baby-yellow.jpg",
//       },
//       {
//         name: "Black",
//         class: "bg_dark",
//         image: "images/products/stroller-baby-black4.jpg",
//       },
//       {
//         name: "Grey",
//         class: "bg_grey",
//         image: "images/products/stroller-baby-grey.jpg",
//       },
//     ],
//   },
//   {
//     id: 5,
//     vendor: "Entry",
//     name: "Cleveland Pochette",
//     priceRegular: "$20.00",
//     priceSale: "$10.00",
//     images: ["images/products/Fa_11a.jpg", "images/products/Fa_10a.jpg"],
//     colors: [
//       {
//         name: "Pastel Brown",
//         class: "bg_pastel-brown",
//         image: "images/products/stroller-baby-brown.jpg",
//       },
//       {
//         name: "Black",
//         class: "bg_dark",
//         image: "images/products/stroller-baby-black.jpg",
//       },
//     ],
//   },
//   {
//     id: 6,
//     vendor: "Entry",
//     name: "Yekaty Women Cardigan 3/4 Sleeves",
//     priceRegular: "$17.30",
//     images: ["images/products/Fa_29a.jpg", "images/products/Fa_30a.jpg"],
//     colors: [
//       {
//         name: "Black",
//         class: "bg_dark",
//         image: "images/products/stroller-baby-black3.jpg",
//       },
//       {
//         name: "Pastel Brown",
//         class: "bg_pastel-brown",
//         image: "images/products/stroller-baby-brown.jpg",
//       },
//       {
//         name: "Pink",
//         class: "bg_pink",
//         image: "images/products/stroller-baby-pink.jpg",
//       },
//     ],
//   },
// ];

// const Product = () => {
//   return (
//     <Wrapper>
//       <div className="widget-product-carousel owl-style1 mb_40">
//         <div className="container">
//           <div className="box-title">
//             <h3>Customer Most Loved</h3>
//             <div className="view-all">
//               <Link to="/shop-default">View all product</Link>
//             </div>
//           </div>

//           <div className="products-listing">
//             <div className="block-content product-layout grid__item">
//               <Swiper
//                 modules={[Navigation]}
//                 navigation={{
//                   nextEl: ".custom-swiper-next",
//                   prevEl: ".custom-swiper-prev",
//                 }}
//                 spaceBetween={10}
//                 loop={false}
//                 slidesPerView={5}
//                 breakpoints={{
//                   0: { slidesPerView: 2 },
//                   576: { slidesPerView: 2 },
//                   768: { slidesPerView: 3 },
//                   992: { slidesPerView: 4 },
//                   1200: { slidesPerView: 5 },
//                 }}
//                 onSwiper={(swiper) => {
//                   swiper.params.navigation.prevEl = ".custom-swiper-prev";
//                   swiper.params.navigation.nextEl = ".custom-swiper-next";
//                   swiper.navigation.init();
//                   swiper.navigation.update();
//                 }}
//                 className="featured-slider"
//               >
//                 {products.map((product) => (
//                   <SwiperSlide key={product.id} className="item">
//                     <div className="product-item card-product">
//                       <div className="product-item-container">
//                         {/* Left block */}
//                         <div className="left-block">
//                           <Link to="/product-detail" className="product-img">
//                             <span
//                               className="media media--transparent media--hover-effect"
//                               style={{ paddingBottom: "100%" }}
//                             >
//                               <img
//                                 className="lazyload img-product"
//                                 src={product.images[0]}
//                                 alt={product.name}
//                               />
//                               <img
//                                 className="lazyload img-hover"
//                                 src={product.images[1]}
//                                 alt={product.name}
//                               />
//                             </span>
//                           </Link>
//                           <div className="list-product-btn column-right">
//                             <Link
//                               to="#"
//                               className="box-icon bg_white wishlist btn-icon-action"
//                             >
//                               <AiOutlineHeart size={16} />
//                               <span className="tooltip">Add to Wishlist</span>
//                             </Link>
//                             <Link
//                               to="#compare"
//                               data-bs-toggle="offcanvas"
//                               className="box-icon bg_white compare btn-icon-action"
//                             >
//                               <FiRepeat size={16} />
//                               <span className="tooltip">Add to Compare</span>
//                             </Link>
//                             <Link
//                               to="#quick_view"
//                               data-bs-toggle="modal"
//                               className="box-icon bg_white quickview ss-btn-loading"
//                             >
//                               <AiOutlineEye size={16} />
//                               <span className="tooltip">Quick View</span>
//                             </Link>
//                           </div>
//                         </div>

//                         {/* Right block */}
//                         <div className="right-block">
//                           <div className="caption">
//                             <div className="title-vendor">
//                               <Link to="/shop-default">{product.vendor}</Link>
//                             </div>
//                             <h4 className="title-product">
//                               <Link to="/product-detail">{product.name}</Link>
//                             </h4>
//                             <div className="price">
//                               {product.priceSale ? (
//                                 <>
//                                   <div className="product-price--regular">
//                                     {product.priceRegular}
//                                   </div>
//                                   <div className="price-item--sale">
//                                     {product.priceSale}
//                                   </div>
//                                 </>
//                               ) : (
//                                 <div className="product-price">
//                                   {product.priceRegular}
//                                 </div>
//                               )}
//                             </div>
//                             <ul className="list-color-product">
//                               {product.colors.map((color, idx) => (
//                                 <li
//                                   key={idx}
//                                   className={`list-color-item color-swatch ${
//                                     idx === 0 ? "active" : ""
//                                   }`}
//                                 >
//                                   <span className="tooltip">{color.name}</span>
//                                   <span
//                                     className={`swatch-value ${color.class}`}
//                                   ></span>
//                                   <img
//                                     className="lazyload"
//                                     src={color.image}
//                                     alt={color.name}
//                                   />
//                                 </li>
//                               ))}
//                             </ul>
//                           </div>
//                           <div className="button-link">
//                             <Link
//                               to="#quick_add"
//                               data-bs-toggle="modal"
//                               className="btn-addToCart grl btn_df"
//                             >
//                               <BsCart size={20} />
//                               <span>Add to cart</span>
//                             </Link>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </SwiperSlide>
//                 ))}

//                 {/* ✅ Custom buttons */}
//                 <div className="custom-swiper-prev">‹</div>
//                 <div className="custom-swiper-next">›</div>
//               </Swiper>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   .featured-slider {
//     position: relative;
//   }

//   .custom-swiper-prev,
//   .custom-swiper-next {
//     position: absolute;
//     top: 50%;
//     width: 40px;
//     height: 40px;
//     border: 1px solid #1f2329;
//     color: #1f2329;
//     border-radius: 50%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     cursor: pointer;
//     transform: translateY(-50%);
//     z-index: 10;
//     font-size: 24px;
//     font-weight: bold;
//     transition: all 0.3s ease;
//   }

//   .custom-swiper-prev:hover,
//   .custom-swiper-next:hover {
//     background-color: #1f2329;
//     color: #fff;
//     transform: translateY(-50%) scale(1.1);
//   }

//   .custom-swiper-prev {
//     left: 6px;
//     z-index: 9999;
//   }

//   .custom-swiper-next {
//     right: 6px;
//     z-index: 9999;
//   }

//   @media (max-width: 768px) {
//     .custom-swiper-prev {
//       left: -20px;
//     }
//     .custom-swiper-next {
//       right: -20px;
//     }
//   }
// `;

// export default Product;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import { FiRepeat } from "react-icons/fi";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import products from "../../product.js";

const Product = ({ openQuickView }) => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    setProductsData(products);
  }, []);

  return (
    <Wrapper>
      <div className="widget-product-carousel owl-style1 mb_40">
        <div className="container">
          <div className="box-title">
            <h3>Customer Most Loved</h3>
            <div className="view-all">
              <Link to="/product">View all product</Link>
            </div>
          </div>

          <div className="products-listing">
            <div className="block-content product-layout grid__item">
              {/* NORMAL ITEM CARDS */}
              {productsData.map((product) => (
                <div className="item" key={product.id}>
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
                              src={product.images.main}
                              alt={product.title}
                            />
                            <img
                              className="lazyload img-hover"
                              src={product.images.hover}
                              alt={product.title}
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
                            className="box-icon bg_white quickview"
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
                            <Link to="/product-details">{product.title}</Link>
                          </h4>

                          <div className="price">
                            {product.price.sale ? (
                              <>
                                <div className="product-price--regular">
                                  ${product.price.regular}
                                </div>
                                <div className="price-item--sale">
                                  ${product.price.sale}
                                </div>
                              </>
                            ) : (
                              <div className="product-price">
                                ${product.price.regular}
                              </div>
                            )}
                          </div>

                          <ul className="list-color-product">
                            {product.colors.map((color, idx) => (
                              <li
                                key={idx}
                                className={`list-color-item color-swatch ${
                                  color.active ? "active" : ""
                                }`}
                              >
                                <span className="tooltip">{color.name}</span>
                                <span
                                  className={`swatch-value ${color.class}`}
                                />
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .product-layout {
    display: flex;
    flex-wrap: wrap;
    margin-left: -5px;
    margin-right: -5px;
  }

  .product-layout .item {
    width: 20%;
    padding: 0 5px 10px; /* 10px gap */
    box-sizing: border-box;
  }

  @media (max-width: 1200px) {
    .product-layout .item {
      width: 25%;
    }
  }

  @media (max-width: 992px) {
    .product-layout .item {
      width: 33.3333%;
    }
  }

  @media (max-width: 768px) {
    .product-layout .item {
      width: 50%;
    }
  }
`;

export default Product;
