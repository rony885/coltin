import React from "react";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import { FiRepeat } from "react-icons/fi";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="widget-product-carousel owl-style1 mb_40">
      <div className="container">
        <div className="box-title">
          <h3>Customer Most Loved</h3>
          <div className="view-all">
            <Link to="shop-default.html">View all product</Link>
          </div>
        </div>
        <div className="products-listing">
          <div className="block-content product-layout grid__item">
            <div
              className="featured-slider yt-content-slider owl-carousel"
              data-autoplay="no"
              data-delay="4"
              data-speed="0.6"
              data-margin="10"
              data-items_column00="5"
              data-items_column0="5"
              data-items_column1="4"
              data-items_column2="3"
              data-items_column3="2"
              data-items_column4="2"
              data-arrows="yes"
              data-pagination="no"
              data-lazyload="no"
              data-loop="no"
              data-hoverpause="yes"
            >
              <div className="item">
                <div className="product-item card-product">
                  <div className="product-item-container">
                    <div className="left-block">
                      <Link to="product-detail.html" className="product-img">
                        <span
                          className="media media--transparent media-- media--hover-effect"
                          style="padding-bottom: 100%"
                        >
                          <img
                            className="lazyload img-product"
                            data-src="images/products/Fa_11a.jpg"
                            src="images/products/Fa_11a.jpg"
                            alt="image-product"
                          />
                          <img
                            className="lazyload img-hover"
                            data-src="images/products/Fa_10a.jpg"
                            src="images/products/Fa_10a.jpg"
                            alt="image-product"
                          />
                        </span>
                      </Link>
                      <div className="list-product-btn column-right">
                        <Link
                          to="javascript:void(0);"
                          className="box-icon bg_white wishlist btn-icon-action"
                        >
                          <AiOutlineHeart size={16} className="ss-wishlist-v" />

                          <span className="tooltip">Add to Wishlist</span>
                          <span className="icon icon-delete"></span>
                        </Link>
                        <Link
                          to="#compare"
                          data-bs-toggle="offcanvas"
                          className="box-icon bg_white compare btn-icon-action"
                        >
                          <FiRepeat size={16} />
                          <span className="tooltip">Add to Compare</span>
                          <span className="icon icon-check"></span>
                        </Link>
                        <Link
                          to="#quick_view"
                          data-bs-toggle="modal"
                          className="box-icon bg_white quickview ss-btn-loading"
                        >
                          <AiOutlineEye size={16} />
                          <span className="tooltip">Quick View</span>
                        </Link>
                      </div>
                    </div>
                    <div className="right-block">
                      <div className="caption">
                        <div className="title-vendor">
                          <Link to="shop-default.html" title="Entry">
                            Entry
                          </Link>
                        </div>
                        <h4 className="title-product">
                          <Link to="product-detail.html" className="title link">
                            Cleveland Pochette
                          </Link>
                        </h4>
                        <div className="price">
                          <div className="product-price--regular">$20.00</div>
                          <div className="price-item--sale">$10.00</div>
                        </div>
                        <ul className="list-color-product">
                          <li className="list-color-item color-swatch active">
                            <span className="tooltip">Pastel Brown</span>
                            <span className="swatch-value bg_pastel-brown"></span>
                            <img
                              className="lazyload"
                              data-src="images/products/stroller-baby-brown.jpg"
                              src="images/products/stroller-baby-brown.jpg"
                              alt="image-product"
                            />
                          </li>
                          <li className="list-color-item color-swatch">
                            <span className="tooltip">Black</span>
                            <span className="swatch-value bg_dark"></span>
                            <img
                              className="lazyload"
                              data-src="images/products/stroller-baby-black.jpg"
                              src="images/products/stroller-baby-black.jpg"
                              alt="image-product"
                            />
                          </li>
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
              <div className="item">
                <div className="product-item card-product">
                  <div className="product-item-container">
                    <div className="left-block">
                      <Link to="product-detail.html" className="product-img">
                        <span
                          className="media media--transparent media-- media--hover-effect"
                          style="padding-bottom: 100%"
                        >
                          <img
                            className="lazyload img-product"
                            data-src="images/products/Fa_29a.jpg"
                            src="images/products/Fa_29a.jpg"
                            alt="image-product"
                          />
                          <img
                            className="lazyload img-hover"
                            data-src="images/products/Fa_30a.jpg"
                            src="images/products/Fa_30a.jpg"
                            alt="image-product"
                          />
                        </span>
                      </Link>
                      <div className="list-product-btn column-right">
                        <Link
                          to="javascript:void(0);"
                          className="box-icon bg_white wishlist btn-icon-action"
                        >
                          <AiOutlineHeart size={16} className="ss-wishlist-v" />
                          <span className="tooltip">Add to Wishlist</span>
                          <span className="icon icon-delete"></span>
                        </Link>
                        <Link
                          to="#compare"
                          data-bs-toggle="offcanvas"
                          className="box-icon bg_white compare btn-icon-action"
                        >
                          <FiRepeat size={16} />
                          <span className="tooltip">Add to Compare</span>
                          <span className="icon icon-check"></span>
                        </Link>
                        <Link
                          to="#quick_view"
                          data-bs-toggle="modal"
                          className="box-icon bg_white quickview ss-btn-loading"
                        >
                          <AiOutlineEye size={16} />
                          <span className="tooltip">Quick View</span>
                        </Link>
                      </div>
                    </div>
                    <div className="right-block">
                      <div className="caption">
                        <div className="title-vendor">
                          <Link to="shop-default.html" title="Entry">
                            Entry
                          </Link>
                        </div>
                        <h4>
                          <Link to="product-detail.html" className="title link">
                            Yekaty Women Cardigan 3/4 Sleeves
                          </Link>
                        </h4>
                        <div className="price">
                          <div className="product-price">$17.30</div>
                        </div>
                        <ul className="list-color-product">
                          <li className="list-color-item color-swatch active">
                            <span className="tooltip">Black</span>
                            <span className="swatch-value bg_dark"></span>
                            <img
                              className="lazyload"
                              data-src="images/products/stroller-baby-black3.jpg"
                              src="images/products/stroller-baby-black3.jpg"
                              alt="image-product"
                            />
                          </li>
                          <li className="list-color-item color-swatch">
                            <span className="tooltip">Pastel Brown</span>
                            <span className="swatch-value bg_pastel-brown"></span>
                            <img
                              className="lazyload"
                              data-src="images/products/stroller-baby-brown.jpg"
                              src="images/products/stroller-baby-brown.jpg"
                              alt="image-product"
                            />
                          </li>
                          <li className="list-color-item color-swatch">
                            <span className="tooltip">Pink</span>
                            <span className="swatch-value bg_pink"></span>
                            <img
                              className="lazyload"
                              data-src="images/products/stroller-baby-pink.jpg"
                              src="images/products/stroller-baby-pink.jpg"
                              alt="image-product"
                            />
                          </li>
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
              <div className="item">
                <div className="product-item card-product">
                  <div className="product-item-container">
                    <div className="left-block">
                      <Link to="product-detail.html" className="product-img">
                        <span
                          className="media media--transparent media-- media--hover-effect"
                          style={{ paddingBottom: "100%" }}
                        >
                          <img
                            className="lazyload img-product"
                            data-src="images/products/Fa_31a.jpg"
                            src="images/products/Fa_31a.jpg"
                            alt="image-product"
                          />
                          <img
                            className="lazyload img-hover"
                            data-src="images/products/Fa_32a.jpg"
                            src="images/products/Fa_32a.jpg"
                            alt="image-product"
                          />
                        </span>
                      </Link>
                      <div className="list-product-btn column-right">
                        <Link
                          to="javascript:void(0);"
                          className="box-icon bg_white wishlist btn-icon-action"
                        >
                          <AiOutlineHeart size={16} className="ss-wishlist-v" />
                          <span className="tooltip">Add to Wishlist</span>
                          <span className="icon icon-delete"></span>
                        </Link>
                        <Link
                          to="#compare"
                          data-bs-toggle="offcanvas"
                          className="box-icon bg_white compare btn-icon-action"
                        >
                          <FiRepeat size={16} />
                          <span className="tooltip">Add to Compare</span>
                          <span className="icon icon-check"></span>
                        </Link>
                        <Link
                          to="#quick_view"
                          data-bs-toggle="modal"
                          className="box-icon bg_white quickview ss-btn-loading"
                        >
                          <AiOutlineEye size={16} />
                          <span className="tooltip">Quick View</span>
                        </Link>
                      </div>
                    </div>
                    <div className="right-block">
                      <div className="caption">
                        <div className="title-vendor">
                          <Link to="shop-default.html" title="Entry">
                            Entry
                          </Link>
                        </div>
                        <h4>
                          <Link to="product-detail.html" className="title link">
                            Mens Leather Shoulder Small Bag
                          </Link>
                        </h4>
                        <div className="price">
                          <div className="product-price">$13.30</div>
                        </div>
                        <ul className="list-color-product">
                          <li className="list-color-item color-swatch active">
                            <span className="tooltip">Black</span>
                            <span className="swatch-value bg_dark"></span>
                            <img
                              className="lazyload"
                              data-src="images/products/stroller-baby-black3.jpg"
                              src="images/products/stroller-baby-black3.jpg"
                              alt="image-product"
                            />
                          </li>
                          <li className="list-color-item color-swatch">
                            <span className="tooltip">Pastel Brown</span>
                            <span className="swatch-value bg_pastel-brown"></span>
                            <img
                              className="lazyload"
                              data-src="images/products/stroller-baby-brown.jpg"
                              src="images/products/stroller-baby-brown.jpg"
                              alt="image-product"
                            />
                          </li>
                          <li className="list-color-item color-swatch">
                            <span className="tooltip">Pink</span>
                            <span className="swatch-value bg_pink"></span>
                            <img
                              className="lazyload"
                              data-src="images/products/stroller-baby-pink.jpg"
                              src="images/products/stroller-baby-pink.jpg"
                              alt="image-product"
                            />
                          </li>
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
              <div className="item">
                <div className="product-item card-product">
                  <div className="product-item-container">
                    <div className="left-block">
                      <Link to="product-detail.html" className="product-img">
                        <span
                          className="media media--transparent media-- media--hover-effect"
                          style={{ paddingBottom: "100%" }}
                        >
                          <img
                            className="lazyload img-product"
                            data-src="images/products/Fa_19a.jpg"
                            src="images/products/Fa_19a.jpg"
                            alt="image-product"
                          />
                          <img
                            className="lazyload img-hover"
                            data-src="images/products/Fa_20a.jpg"
                            src="images/products/Fa_20a.jpg"
                            alt="image-product"
                          />
                        </span>
                      </Link>
                      <div className="list-product-btn column-right">
                        <Link
                          to="javascript:void(0);"
                          className="box-icon bg_white wishlist btn-icon-action"
                        >
                          <AiOutlineHeart size={16} className="ss-wishlist-v" />
                          <span className="tooltip">Add to Wishlist</span>
                          <span className="icon icon-delete"></span>
                        </Link>
                        <Link
                          to="#compare"
                          data-bs-toggle="offcanvas"
                          className="box-icon bg_white compare btn-icon-action"
                        >
                          <FiRepeat size={16} />
                          <span className="tooltip">Add to Compare</span>
                          <span className="icon icon-check"></span>
                        </Link>
                        <Link
                          to="#quick_view"
                          data-bs-toggle="modal"
                          className="box-icon bg_white quickview ss-btn-loading"
                        >
                          <AiOutlineEye size={16} />
                          <span className="tooltip">Quick View</span>
                        </Link>
                      </div>
                    </div>
                    <div className="right-block">
                      <div className="caption">
                        <div className="title-vendor">
                          <Link to="shop-default.html" title="Entry">
                            Entry
                          </Link>
                        </div>
                        <h4>
                          <Link to="product-detail.html" className="title link">
                            Women's 3/4 Length Sleeve VNeck
                          </Link>
                        </h4>
                        <div className="price">
                          <div className="product-price--regular">$85.00</div>
                          <div className="price-item--sale">$70.00</div>
                        </div>
                        <ul className="list-color-product">
                          <li className="list-color-item color-swatch active">
                            <span className="tooltip">Yellow</span>
                            <span className="swatch-value bg_yellow-4"></span>
                            <img
                              className="lazyload"
                              data-src="images/products/stroller-baby-yellow.jpg"
                              src="images/products/stroller-baby-yellow.jpg"
                              alt="image-product"
                            />
                          </li>
                          <li className="list-color-item color-swatch">
                            <span className="tooltip">Black</span>
                            <span className="swatch-value bg_dark"></span>
                            <img
                              className="lazyload"
                              data-src="images/products/stroller-baby-black4.jpg"
                              src="images/products/stroller-baby-black4.jpg"
                              alt="image-product"
                            />
                          </li>
                          <li className="list-color-item color-swatch">
                            <span className="tooltip">Grey</span>
                            <span className="swatch-value bg_grey"></span>
                            <img
                              className="lazyload"
                              data-src="images/products/stroller-baby-grey.jpg"
                              src="images/products/stroller-baby-grey.jpg"
                              alt="image-product"
                            />
                          </li>
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
              <div className="item">
                <div className="product-item card-product">
                  <div className="product-item-container">
                    <div className="left-block">
                      <Link to="product-detail.html" className="product-img">
                        <span
                          className="media media--transparent media-- media--hover-effect"
                          style={{ paddingBottom: "100%" }}
                        >
                          <img
                            className="lazyload img-product"
                            data-src="images/products/Fa_12a.jpg"
                            src="images/products/Fa_12a.jpg"
                            alt="image-product"
                          />
                          <img
                            className="lazyload img-hover"
                            data-src="images/products/Fa_13a.jpg"
                            src="images/products/Fa_13a.jpg"
                            alt="image-product"
                          />
                        </span>
                      </Link>
                      <div className="list-product-btn column-right">
                        <Link
                          to="javascript:void(0);"
                          className="box-icon bg_white wishlist btn-icon-action"
                        >
                          <AiOutlineHeart size={16} className="ss-wishlist-v" />
                          <span className="tooltip">Add to Wishlist</span>
                          <span className="icon icon-delete"></span>
                        </Link>
                        <Link
                          to="#compare"
                          data-bs-toggle="offcanvas"
                          className="box-icon bg_white compare btn-icon-action"
                        >
                          <FiRepeat size={16} />
                          <span className="tooltip">Add to Compare</span>
                          <span className="icon icon-check"></span>
                        </Link>
                        <Link
                          to="#quick_view"
                          data-bs-toggle="modal"
                          className="box-icon bg_white quickview ss-btn-loading"
                        >
                          <AiOutlineEye size={16} />
                          <span className="tooltip">Quick View</span>
                        </Link>
                      </div>
                    </div>
                    <div className="right-block">
                      <div className="caption">
                        <div className="title-vendor">
                          <Link to="shop-default.html" title="Entry">
                            Entry
                          </Link>
                        </div>
                        <h4>
                          <Link to="product-detail.html" className="title link">
                            Mens Oversized T Shirts Business
                          </Link>
                        </h4>
                        <div className="price">
                          <div className="product-price">$12.3</div>
                        </div>
                        <ul className="list-color-product">
                          <li className="list-color-item color-swatch active">
                            <span className="tooltip">Yellow</span>
                            <span className="swatch-value bg_yellow-4"></span>
                            <img
                              className="lazyload"
                              data-src="images/products/stroller-baby-yellow.jpg"
                              src="images/products/stroller-baby-yellow.jpg"
                              alt="image-product"
                            />
                          </li>

                          <li className="list-color-item color-swatch">
                            <span className="tooltip">Grey</span>
                            <span className="swatch-value bg_grey"></span>
                            <img
                              className="lazyload"
                              data-src="images/products/stroller-baby-grey.jpg"
                              src="images/products/stroller-baby-grey.jpg"
                              alt="image-product"
                            />
                          </li>
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
              <div className="item">
                <div className="product-item card-product">
                  <div className="product-item-container">
                    <div className="left-block">
                      <Link to="product-detail.html" className="product-img">
                        <span
                          className="media media--transparent media-- media--hover-effect"
                          style="padding-bottom: 100%"
                        >
                          <img
                            className="lazyload img-product"
                            data-src="images/products/Fa_23a.jpg"
                            src="images/products/Fa_23a.jpg"
                            alt="image-product"
                          />
                          <img
                            className="lazyload img-hover"
                            data-src="images/products/Fa_24a.jpg"
                            src="images/products/Fa_24a.jpg"
                            alt="image-product"
                          />
                        </span>
                      </Link>
                      <div className="list-product-btn column-right">
                        <Link
                          to="javascript:void(0);"
                          className="box-icon bg_white wishlist btn-icon-action"
                        >
                          <AiOutlineHeart size={16} className="ss-wishlist-v" />
                          <span className="tooltip">Add to Wishlist</span>
                          <span className="icon icon-delete"></span>
                        </Link>
                        <Link
                          to="#compare"
                          data-bs-toggle="offcanvas"
                          className="box-icon bg_white compare btn-icon-action"
                        >
                          <FiRepeat size={16} />
                          <span className="tooltip">Add to Compare</span>
                          <span className="icon icon-check"></span>
                        </Link>
                        <Link
                          to="#quick_view"
                          data-bs-toggle="modal"
                          className="box-icon bg_white quickview ss-btn-loading"
                        >
                          <AiOutlineEye size={16} />
                          <span className="tooltip">Quick View</span>
                        </Link>
                      </div>
                    </div>
                    <div className="right-block">
                      <div className="caption">
                        <div className="title-vendor">
                          <Link to="shop-default.html" title="Entry">
                            Entry
                          </Link>
                        </div>
                        <h4>
                          <Link to="product-detail.html" className="title link">
                            Womens Sweaters Casual Long
                          </Link>
                        </h4>
                        <div className="price">
                          <div className="product-price">$17.00</div>
                        </div>
                        <ul className="list-color-product">
                          <li className="list-color-item color-swatch active">
                            <span className="tooltip">Black</span>
                            <span className="swatch-value bg_dark"></span>
                            <img
                              className="lazyload"
                              data-src="images/products/stroller-baby-black5.jpg"
                              src="images/products/stroller-baby-black5.jpg"
                              alt="image-product"
                            />
                          </li>
                          <li className="list-color-item color-swatch">
                            <span className="tooltip">Beige</span>
                            <span className="swatch-value bg_beige"></span>
                            <img
                              className="lazyload"
                              data-src="images/products/stroller-baby-beige.jpg"
                              src="images/products/stroller-baby-beige.jpg"
                              alt="image-product"
                            />
                          </li>
                          <li className="list-color-item color-swatch">
                            <span className="tooltip">Dark Blue</span>
                            <span className="swatch-value bg_dark-blue"></span>
                            <img
                              className="lazyload"
                              data-src="images/products/stroller-baby-darkblue.jpg"
                              src="images/products/stroller-baby-darkblue.jpg"
                              alt="image-product"
                            />
                          </li>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
