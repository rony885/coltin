import React from "react";
import {
  FaCheck,
  FaEye,
  FaFire,
  FaShoppingCart,
  FaTruck,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductDetailsInfo = () => {
  return (
    <section className="flat-spacing-4 pt_0">
      <div className="tf-main-product section-image-zoom">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="ss-product-media-wrap thumbs-bottom sticky-top">
                <div className="thumbs-slider">
                  <div
                    dir="ltr"
                    className="swiper tf-product-media-main"
                    id="gallery-swiper-started"
                  >
                    <div className="swiper-wrapper">
                      {/* <!-- brown --> */}
                      <div className="swiper-slide" data-color="brown">
                        <Link
                          to="images/products/brown-2.jpg"
                          target="_blank"
                          className="item"
                          data-pswp-width="770px"
                          data-pswp-height="1075px"
                        >
                          <img
                            className="tf-image-zoom lazyload"
                            data-zoom="images/products/brown-2.jpg"
                            data-src="images/products/brown-2.jpg"
                            src="images/products/brown-2.jpg"
                            alt="img-product"
                          />
                        </Link>
                      </div>
                      <div className="swiper-slide" data-color="brown">
                        <Link
                          to="images/products/brown-3.jpg"
                          target="_blank"
                          className="item"
                          data-pswp-width="770px"
                          data-pswp-height="1075px"
                        >
                          <img
                            className="tf-image-zoom lazyload"
                            data-zoom="images/products/brown-3.jpg"
                            data-src="images/products/brown-3.jpg"
                            src="images/products/brown-3.jpg"
                            alt="img-product"
                          />
                        </Link>
                      </div>
                      {/* <!-- white --> */}
                      <div className="swiper-slide" data-color="white">
                        <Link
                          to="images/products/white-5.jpg"
                          target="_blank"
                          className="item"
                          data-pswp-width="770px"
                          data-pswp-height="1075px"
                        >
                          <img
                            className="tf-image-zoom lazyload"
                            data-zoom="images/products/white-5.jpg"
                            data-src="images/products/white-5.jpg"
                            src="images/products/white-5.jpg"
                            alt="img-product"
                          />
                        </Link>
                      </div>
                      <div className="swiper-slide" data-color="white">
                        <Link
                          to="images/products/white-4.jpg"
                          target="_blank"
                          className="item"
                          data-pswp-width="770px"
                          data-pswp-height="1075px"
                        >
                          <img
                            className="tf-image-zoom lazyload"
                            data-zoom="images/products/white-4.jpg"
                            data-src="images/products/white-4.jpg"
                            src="images/products/white-4.jpg"
                            alt="img-product"
                          />
                        </Link>
                      </div>
                      <div className="swiper-slide" data-color="white">
                        <Link
                          to="images/products/white-3.jpg"
                          target="_blank"
                          className="item"
                          data-pswp-width="770px"
                          data-pswp-height="1075px"
                        >
                          <img
                            className="tf-image-zoom lazyload"
                            data-zoom="images/products/white-3.jpg"
                            data-src="images/products/white-3.jpg"
                            src="images/products/white-3.jpg"
                            alt="img-product"
                          />
                        </Link>
                      </div>
                      {/* <!-- black --> */}
                      <div className="swiper-slide" data-color="black">
                        <Link
                          to="images/products/black-5.jpg"
                          target="_blank"
                          className="item"
                          data-pswp-width="770px"
                          data-pswp-height="1075px"
                        >
                          <img
                            className="tf-image-zoom lazyload"
                            data-zoom="images/products/black-5.jpg"
                            data-src="images/products/black-5.jpg"
                            src="images/products/black-5.jpg"
                            alt="img-product"
                          />
                        </Link>
                      </div>
                      <div className="swiper-slide" data-color="black">
                        <Link
                          to="images/products/black-3.jpg"
                          target="_blank"
                          className="item"
                          data-pswp-width="770px"
                          data-pswp-height="1075px"
                        >
                          <img
                            className="tf-image-zoom lazyload"
                            data-zoom="images/products/black-3.jpg"
                            data-src="images/products/black-3.jpg"
                            src="images/products/black-3.jpg"
                            alt="img-product"
                          />
                        </Link>
                      </div>
                      <div className="swiper-slide" data-color="black">
                        <Link
                          to="images/products/black-4.jpg"
                          target="_blank"
                          className="item"
                          data-pswp-width="770px"
                          data-pswp-height="1075px"
                        >
                          <img
                            className="tf-image-zoom lazyload"
                            data-zoom="images/products/black-4.jpg"
                            data-src="images/products/black-4.jpg"
                            src="images/products/black-4.jpg"
                            alt="img-product"
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="swiper-button-next button-style-arrow thumbs-next"></div>
                    <div className="swiper-button-prev button-style-arrow thumbs-prev"></div>
                  </div>
                  <div
                    dir="ltr"
                    className="swiper ss-product-media-thumbs other-image-zoom"
                    data-direction="horizontal"
                  >
                    <div className="swiper-wrapper stagger-wrap">
                      {/* <!-- brown --> */}
                      <div
                        className="swiper-slide stagger-item"
                        data-color="brown"
                      >
                        <div className="item">
                          <img
                            className="lazyload"
                            data-src="images/products/brown-2.jpg"
                            src="images/products/brown-2.jpg"
                            alt="img-product"
                          />
                        </div>
                      </div>
                      <div
                        className="swiper-slide stagger-item"
                        data-color="brown"
                      >
                        <div className="item">
                          <img
                            className="lazyload"
                            data-src="images/products/brown-3.jpg"
                            src="images/products/brown-3.jpg"
                            alt="img-product"
                          />
                        </div>
                      </div>
                      {/* <!-- white --> */}
                      <div
                        className="swiper-slide stagger-item"
                        data-color="white"
                      >
                        <div className="item">
                          <img
                            className="lazyload"
                            data-src="images/products/white-5.jpg"
                            src="images/products/white-5.jpg"
                            alt="img-product"
                          />
                        </div>
                      </div>
                      <div
                        className="swiper-slide stagger-item"
                        data-color="white"
                      >
                        <div className="item">
                          <img
                            className="lazyload"
                            data-src="images/products/white-4.jpg"
                            src="images/products/white-4.jpg"
                            alt="img-product"
                          />
                        </div>
                      </div>
                      <div
                        className="swiper-slide stagger-item"
                        data-color="white"
                      >
                        <div className="item">
                          <img
                            className="lazyload"
                            data-src="images/products/white-3.jpg"
                            src="images/products/white-3.jpg"
                            alt="img-product"
                          />
                        </div>
                      </div>
                      {/* <!-- black --> */}
                      <div
                        className="swiper-slide stagger-item"
                        data-color="black"
                      >
                        <div className="item">
                          <img
                            className="lazyload"
                            data-src="images/products/black-5.jpg"
                            src="images/products/black-5.jpg"
                            alt="img-product"
                          />
                        </div>
                      </div>
                      <div
                        className="swiper-slide stagger-item"
                        data-color="black"
                      >
                        <div className="item">
                          <img
                            className="lazyload"
                            data-src="images/products/black-3.jpg"
                            src="images/products/black-3.jpg"
                            alt="img-product"
                          />
                        </div>
                      </div>
                      <div
                        className="swiper-slide stagger-item"
                        data-color="black"
                      >
                        <div className="item">
                          <img
                            className="lazyload"
                            data-src="images/products/black-4.jpg"
                            src="images/products/black-4.jpg"
                            alt="img-product"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="tf-product-info-wrap position-relative">
                <div className="ss-zoom-main"></div>
                <div className="product-info-list other-image-zoom">
                  <div className="product-info-title">
                    <h5>Cotton jersey top</h5>
                  </div>
                  <div className="product_real-time">
                    <div className="product-status-content">
                      <FaEye size={18} color="#1D1D1B" />
                      <span>27</span>people are viewing this right now
                    </div>
                  </div>

                  <div
                    className="product_count-sales"
                    data-min="20"
                    data-max="30"
                    data-time_min="20"
                    data-time_max="30"
                    data-id_product="7783956938845"
                  >
                    <FaFire
                      size={24}
                      color="#ff001e"
                      style={{ marginRight: "6px" }}
                    />
                    <span className="count">22</span> sold in last
                    <span className="time">27</span> hours
                  </div>
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
                  <div className="product-single_attribure">
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
                  </div>
                  <div className="product-countdown">
                    <div className="label-deal">
                      <i className="icon-time ss-ani-tada"></i> Hurry Up! Offer
                      ends in:
                    </div>
                    <div className="ss-countdown style-1">
                      <div
                        className="js-countdown"
                        data-timer="1007500"
                        data-labels="d :,h :,m :,s"
                      ></div>
                    </div>
                  </div>
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
                        Color:
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
                          to="#find_size"
                          data-bs-toggle="modal"
                          className="find-size gap-10 d-flex"
                        >
                          <img src="images/products/scale.svg" alt="" />
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
                    <Link
                      to="#compare_color"
                      data-bs-toggle="modal"
                      className="tf-product-extra-icon"
                    >
                      <div className="icon">
                        <img src="images/item/compare.svg" alt="" />
                      </div>
                      <div className="text fw-6">Compare color</div>
                    </Link>
                    <Link
                      to="#ask_question"
                      data-bs-toggle="modal"
                      className="tf-product-extra-icon"
                    >
                      <div className="icon">
                        <i className="icon-question"></i>
                      </div>
                      <div className="text fw-6">Ask Link question</div>
                    </Link>
                    <Link
                      // to="#delivery_return"
                      // data-bs-toggle="modal"
                      className="tf-product-extra-icon"
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
                    >
                      <div className="icon">
                        <i className="icon-share"></i>
                      </div>
                      <div className="text fw-6">Share</div>
                    </Link>
                  </div>
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

                  <div className="ss-pickup-availability">
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
                  </div>

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

      <div className="ss-sticky-btn-atc">
        <div className="container">
          <div className="ss-height-observer w-100 d-flex align-items-center">
            <div className="ss-sticky-atc-product d-flex align-items-center">
              <div className="ss-sticky-atc-img">
                <img
                  className="lazyloaded"
                  data-src="images/shop/products/p-d1.png"
                  alt=""
                  src="images/shop/products/p-d1.png"
                />
              </div>
              <div className="ss-sticky-atc-title fw-5 d-xl-block d-none">
                Cotton jersey top
              </div>
            </div>
            <div className="ss-sticky-atc-infos">
              <form className="">
                <div className="tf-sticky-atc-variant-price text-center">
                  <select className="ss-select">
                    <option selected="selected">Beige / S - $8.00</option>
                    <option>Beige / M - $8.00</option>
                    <option>Beige / L - $8.00</option>
                    <option>Beige / XL - $8.00</option>
                    <option>Black / S - $8.00</option>
                    <option>Black / M - $8.00</option>
                    <option>Black / L - $8.00</option>
                    <option>Black / XL - $8.00</option>
                    <option>Blue / S - $8.00</option>
                    <option>Blue / M - $8.00</option>
                    <option>Blue / L - $8.00</option>
                    <option>Blue / XL - $8.00</option>
                    <option>White / S - $8.00</option>
                    <option>White / M - $8.00</option>
                    <option>White / L - $8.00</option>
                    <option>White / XL - $8.00</option>
                  </select>
                </div>
                <div className="ss-sticky-atc-btns">
                  <div className="tf-product-info-quantity">
                    <div className="wg-quantity">
                      <span className="btn-quantity minus-btn">-</span>
                      <input type="text" name="number" value="1" />
                      <span className="btn-quantity plus-btn">+</span>
                    </div>
                  </div>
                  <Link
                    to="#"
                    className="ss-btn btn-fill radius-3 justify-content-center fs-14 flex-grow-1 btn-add-to-cart"
                  >
                    <span>Add to cart</span>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsInfo;
