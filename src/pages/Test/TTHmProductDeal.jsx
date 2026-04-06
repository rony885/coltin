import React from 'react'

const ProductDeal = () => {
  return (
    <div class="widget-deals-carousel owl-style1 mb_90">
        <div class="container">
          <div class="widget-wrap">
            <div class="widget-left">
              <div class="box-title">
                <h3>Today’s <br />Best Deals</h3>
              </div>
              <div class="countdown_time">
                <div
                  class="js-countdown"
                  data-timer="8007500"
                  data-labels="Days,Hours,Mins,Secs"
                ></div>
              </div>
              <div class="deal__btn">
                <a href="#" class="deal__btn-link button">Shop All</a>
              </div>
            </div>
            <div class="block-content products-listing">
              <div class="product-layout grid__item">
                <div
                  class="featured-slider yt-content-slider owl-carousel"
                  data-autoplay="no"
                  data-delay="4"
                  data-speed="0.6"
                  data-margin="10"
                  data-items_column00="4"
                  data-items_column0="4"
                  data-items_column1="3"
                  data-items_column2="1"
                  data-items_column3="2"
                  data-items_column4="2"
                  data-arrows="no"
                  data-pagination="no"
                  data-lazyload="no"
                  data-loop="no"
                  data-hoverpause="yes"
                >
                  <div class="item">
                    <div class="product-item card-product">
                      <div class="product-item-container">
                        <div class="left-block">
                          <a href="product-detail.html" class="product-img">
                            <span
                              class="media media--transparent media-- media--hover-effect"
                              style="padding-bottom: 100%"
                            >
                              <img
                                class="lazyload img-product"
                                data-src="images/products/Fa_11a.jpg"
                                src="images/products/Fa_11a.jpg"
                                alt="image-product"
                              />
                              <img
                                class="lazyload img-hover"
                                data-src="images/products/Fa_10a.jpg"
                                src="images/products/Fa_10a.jpg"
                                alt="image-product"
                              />
                            </span>
                          </a>
                          <div class="list-product-btn column-right">
                            <a
                              href="javascript:void(0);"
                              class="box-icon bg_white wishlist btn-icon-action"
                            >
                              <svg
                                class="ss-wishlist-v"
                                fill="currentColor"
                                width="16"
                                height="16"
                                viewBox="0 0 32 32"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.999 3.567c0.98 0 2.753 0.469 5.628 3.301l1.425 1.403 1.404-1.426c1.996-2.028 4.12-3.288 5.543-3.288 1.919 0 3.432 0.656 4.907 2.128 1.39 1.386 2.156 3.23 2.156 5.191 0.001 1.962-0.764 3.807-2.169 5.209-0.114 0.116-6.156 6.634-11.218 12.097-0.238 0.227-0.511 0.26-0.656 0.26-0.143 0-0.412-0.032-0.65-0.253-1.233-1.372-10.174-11.313-11.213-12.351-1.391-1.388-2.157-3.233-2.157-5.194s0.766-3.804 2.158-5.192c1.353-1.352 2.937-1.885 4.842-1.885zM8.999 1.567c-2.392 0-4.5 0.715-6.255 2.469-3.659 3.649-3.659 9.566 0 13.217 1.045 1.045 11.183 12.323 11.183 12.323 0.578 0.578 1.336 0.865 2.093 0.865s1.512-0.287 2.091-0.865c0 0 11.090-11.97 11.208-12.089 3.657-3.652 3.657-9.57 0-13.219-1.816-1.813-3.845-2.712-6.319-2.712-2.364 0-5 1.885-6.969 3.885-2.031-2-4.585-3.874-7.031-3.874v0z"
                                ></path>
                              </svg>
                              <span class="tooltip">Add to Wishlist</span>
                              <span class="icon icon-delete"></span>
                            </a>
                            <a
                              href="#compare"
                              data-bs-toggle="offcanvas"
                              class="box-icon bg_white compare btn-icon-action"
                            >
                              <svg
                                fill="currentColor"
                                width="16"
                                height="16"
                                viewBox="0 0 32 32"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0.682 9.431l14.847 8.085c0.149 0.081 0.313 0.122 0.479 0.122 0.163 0 0.326-0.040 0.474-0.12l15.003-8.085c0.327-0.176 0.53-0.52 0.525-0.892s-0.216-0.711-0.547-0.88l-14.848-7.54c-0.283-0.143-0.617-0.144-0.902-0.002l-15.002 7.54c-0.332 0.167-0.545 0.505-0.551 0.877s0.196 0.717 0.521 0.895zM16.161 2.134l12.692 6.446-12.843 6.921-12.693-6.912zM31.292 15.010l-2.968-1.507-2.142 1.155 2.5 1.27-12.842 6.921-12.694-6.912 2.666-1.34-2.136-1.164-3.135 1.575c-0.332 0.167-0.545 0.505-0.551 0.877s0.196 0.717 0.521 0.895l14.847 8.085c0.149 0.081 0.313 0.122 0.479 0.122 0.163 0 0.326-0.040 0.474-0.12l15.003-8.085c0.327-0.176 0.53-0.52 0.525-0.892s-0.215-0.711-0.546-0.88zM31.292 22.010l-2.811-1.382-2.142 1.155 2.344 1.145-12.843 6.921-12.694-6.912 2.478-1.121-2.136-1.164-2.947 1.357c-0.332 0.167-0.545 0.505-0.551 0.877s0.196 0.717 0.521 0.895l14.847 8.085c0.149 0.081 0.313 0.122 0.479 0.122 0.163 0 0.326-0.040 0.475-0.12l15.003-8.085c0.327-0.176 0.53-0.52 0.525-0.892-0.005-0.373-0.215-0.712-0.546-0.88z"
                                ></path>
                              </svg>
                              <span class="tooltip">Add to Compare</span>
                              <span class="icon icon-check"></span>
                            </a>
                            <a
                              href="#quick_view"
                              data-bs-toggle="modal"
                              class="box-icon bg_white quickview ss-btn-loading"
                            >
                              <svg
                                fill="currentcolor"
                                width="16"
                                height="16"
                                viewBox="0 0 32 32"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M16.108 10.044c-3.313 0-6 2.687-6 6s2.687 6 6 6 6-2.686 6-6-2.686-6-6-6zM16.108 20.044c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.206 0 4 1.794 4 4s-1.748 4.044-3.954 4.044zM31.99 15.768c-0.012-0.050-0.006-0.104-0.021-0.153-0.006-0.021-0.020-0.033-0.027-0.051-0.011-0.028-0.008-0.062-0.023-0.089-2.909-6.66-9.177-10.492-15.857-10.492s-13.074 3.826-15.984 10.486c-0.012 0.028-0.010 0.057-0.021 0.089-0.007 0.020-0.021 0.030-0.028 0.049-0.015 0.050-0.009 0.103-0.019 0.154-0.018 0.090-0.035 0.178-0.035 0.269s0.017 0.177 0.035 0.268c0.010 0.050 0.003 0.105 0.019 0.152 0.006 0.023 0.021 0.032 0.028 0.052 0.010 0.027 0.008 0.061 0.021 0.089 2.91 6.658 9.242 10.428 15.922 10.428s13.011-3.762 15.92-10.422c0.015-0.029 0.012-0.058 0.023-0.090 0.007-0.017 0.020-0.030 0.026-0.050 0.015-0.049 0.011-0.102 0.021-0.154 0.018-0.090 0.034-0.177 0.034-0.27 0-0.088-0.017-0.175-0.035-0.266zM16 25.019c-5.665 0-11.242-2.986-13.982-8.99 2.714-5.983 8.365-9.047 14.044-9.047 5.678 0 11.203 3.067 13.918 9.053-2.713 5.982-8.301 8.984-13.981 8.984z"
                                ></path>
                              </svg>
                              <span class="tooltip">Quick View</span>
                            </a>
                          </div>
                        </div>
                        <div class="right-block">
                          <div class="caption">
                            <div class="title-vendor">
                              <a href="shop-default.html" title="Entry"
                                >Entry</a
                              >
                            </div>
                            <h4 class="title-product">
                              <a href="product-detail.html" class="title link"
                                >Cleveland Pochette</a
                              >
                            </h4>
                            <div class="price">
                              <div class="product-price--regular">$16.95</div>
                              <div class="price-item--sale">$10.00</div>
                            </div>
                            <ul class="list-color-product">
                              <li class="list-color-item color-swatch active">
                                <span class="tooltip">Pastel Brown</span>
                                <span
                                  class="swatch-value bg_pastel-brown"
                                ></span>
                                <img
                                  class="lazyload"
                                  data-src="images/products/stroller-baby-brown.jpg"
                                  src="images/products/stroller-baby-brown.jpg"
                                  alt="image-product"
                                />
                              </li>
                              <li class="list-color-item color-swatch">
                                <span class="tooltip">Black</span>
                                <span class="swatch-value bg_dark"></span>
                                <img
                                  class="lazyload"
                                  data-src="images/products/stroller-baby-black.jpg"
                                  src="images/products/stroller-baby-black.jpg"
                                  alt="image-product"
                                />
                              </li>
                            </ul>
                          </div>
                          <div class="button-link">
                            <a
                              href="#quick_add"
                              data-bs-toggle="modal"
                              class="btn-addToCart grl btn_df"
                            >
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 22 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                                  stroke="currentcolor"
                                  strokeWidth="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </svg>
                              <span>Add to cart</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="product-item card-product">
                      <div class="product-item-container">
                        <div class="left-block">
                          <a href="product-detail.html" class="product-img">
                            <span
                              class="media media--transparent media-- media--hover-effect"
                              style="padding-bottom: 100%"
                            >
                              <img
                                class="lazyload img-product"
                                data-src="images/products/Fa_29a.jpg"
                                src="images/products/Fa_29a.jpg"
                                alt="image-product"
                              />
                              <img
                                class="lazyload img-hover"
                                data-src="images/products/Fa_30a.jpg"
                                src="images/products/Fa_30a.jpg"
                                alt="image-product"
                              />
                            </span>
                          </a>
                          <div class="list-product-btn column-right">
                            <a
                              href="javascript:void(0);"
                              class="box-icon bg_white wishlist btn-icon-action"
                            >
                              <svg
                                class="ss-wishlist-v"
                                fill="currentColor"
                                width="16"
                                height="16"
                                viewBox="0 0 32 32"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.999 3.567c0.98 0 2.753 0.469 5.628 3.301l1.425 1.403 1.404-1.426c1.996-2.028 4.12-3.288 5.543-3.288 1.919 0 3.432 0.656 4.907 2.128 1.39 1.386 2.156 3.23 2.156 5.191 0.001 1.962-0.764 3.807-2.169 5.209-0.114 0.116-6.156 6.634-11.218 12.097-0.238 0.227-0.511 0.26-0.656 0.26-0.143 0-0.412-0.032-0.65-0.253-1.233-1.372-10.174-11.313-11.213-12.351-1.391-1.388-2.157-3.233-2.157-5.194s0.766-3.804 2.158-5.192c1.353-1.352 2.937-1.885 4.842-1.885zM8.999 1.567c-2.392 0-4.5 0.715-6.255 2.469-3.659 3.649-3.659 9.566 0 13.217 1.045 1.045 11.183 12.323 11.183 12.323 0.578 0.578 1.336 0.865 2.093 0.865s1.512-0.287 2.091-0.865c0 0 11.090-11.97 11.208-12.089 3.657-3.652 3.657-9.57 0-13.219-1.816-1.813-3.845-2.712-6.319-2.712-2.364 0-5 1.885-6.969 3.885-2.031-2-4.585-3.874-7.031-3.874v0z"
                                ></path>
                              </svg>
                              <span class="tooltip">Add to Wishlist</span>
                              <span class="icon icon-delete"></span>
                            </a>
                            <a
                              href="#compare"
                              data-bs-toggle="offcanvas"
                              class="box-icon bg_white compare btn-icon-action"
                            >
                              <svg
                                fill="currentColor"
                                width="16"
                                height="16"
                                viewBox="0 0 32 32"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0.682 9.431l14.847 8.085c0.149 0.081 0.313 0.122 0.479 0.122 0.163 0 0.326-0.040 0.474-0.12l15.003-8.085c0.327-0.176 0.53-0.52 0.525-0.892s-0.216-0.711-0.547-0.88l-14.848-7.54c-0.283-0.143-0.617-0.144-0.902-0.002l-15.002 7.54c-0.332 0.167-0.545 0.505-0.551 0.877s0.196 0.717 0.521 0.895zM16.161 2.134l12.692 6.446-12.843 6.921-12.693-6.912zM31.292 15.010l-2.968-1.507-2.142 1.155 2.5 1.27-12.842 6.921-12.694-6.912 2.666-1.34-2.136-1.164-3.135 1.575c-0.332 0.167-0.545 0.505-0.551 0.877s0.196 0.717 0.521 0.895l14.847 8.085c0.149 0.081 0.313 0.122 0.479 0.122 0.163 0 0.326-0.040 0.474-0.12l15.003-8.085c0.327-0.176 0.53-0.52 0.525-0.892s-0.215-0.711-0.546-0.88zM31.292 22.010l-2.811-1.382-2.142 1.155 2.344 1.145-12.843 6.921-12.694-6.912 2.478-1.121-2.136-1.164-2.947 1.357c-0.332 0.167-0.545 0.505-0.551 0.877s0.196 0.717 0.521 0.895l14.847 8.085c0.149 0.081 0.313 0.122 0.479 0.122 0.163 0 0.326-0.040 0.475-0.12l15.003-8.085c0.327-0.176 0.53-0.52 0.525-0.892-0.005-0.373-0.215-0.712-0.546-0.88z"
                                ></path>
                              </svg>
                              <span class="tooltip">Add to Compare</span>
                              <span class="icon icon-check"></span>
                            </a>
                            <a
                              href="#quick_view"
                              data-bs-toggle="modal"
                              class="box-icon bg_white quickview ss-btn-loading"
                            >
                              <svg
                                fill="currentcolor"
                                width="16"
                                height="16"
                                viewBox="0 0 32 32"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M16.108 10.044c-3.313 0-6 2.687-6 6s2.687 6 6 6 6-2.686 6-6-2.686-6-6-6zM16.108 20.044c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.206 0 4 1.794 4 4s-1.748 4.044-3.954 4.044zM31.99 15.768c-0.012-0.050-0.006-0.104-0.021-0.153-0.006-0.021-0.020-0.033-0.027-0.051-0.011-0.028-0.008-0.062-0.023-0.089-2.909-6.66-9.177-10.492-15.857-10.492s-13.074 3.826-15.984 10.486c-0.012 0.028-0.010 0.057-0.021 0.089-0.007 0.020-0.021 0.030-0.028 0.049-0.015 0.050-0.009 0.103-0.019 0.154-0.018 0.090-0.035 0.178-0.035 0.269s0.017 0.177 0.035 0.268c0.010 0.050 0.003 0.105 0.019 0.152 0.006 0.023 0.021 0.032 0.028 0.052 0.010 0.027 0.008 0.061 0.021 0.089 2.91 6.658 9.242 10.428 15.922 10.428s13.011-3.762 15.92-10.422c0.015-0.029 0.012-0.058 0.023-0.090 0.007-0.017 0.020-0.030 0.026-0.050 0.015-0.049 0.011-0.102 0.021-0.154 0.018-0.090 0.034-0.177 0.034-0.27 0-0.088-0.017-0.175-0.035-0.266zM16 25.019c-5.665 0-11.242-2.986-13.982-8.99 2.714-5.983 8.365-9.047 14.044-9.047 5.678 0 11.203 3.067 13.918 9.053-2.713 5.982-8.301 8.984-13.981 8.984z"
                                ></path>
                              </svg>
                              <span class="tooltip">Quick View</span>
                            </a>
                          </div>
                        </div>
                        <div class="right-block">
                          <div class="caption">
                            <div class="title-vendor">
                              <a href="shop-default.html" title="Entry"
                                >Entry</a
                              >
                            </div>
                            <h4>
                              <a href="product-detail.html" class="title link"
                                >Yekaty Women Cardigan 3/4 Sleeves</a
                              >
                            </h4>
                            <div class="price">
                              <div class="product-price--regular">$21.95</div>
                              <div class="price-item--sale">$15.00</div>
                            </div>
                            <ul class="list-color-product">
                              <li class="list-color-item color-swatch active">
                                <span class="tooltip">Black</span>
                                <span class="swatch-value bg_dark"></span>
                                <img
                                  class="lazyload"
                                  data-src="images/products/stroller-baby-black3.jpg"
                                  src="images/products/stroller-baby-black3.jpg"
                                  alt="image-product"
                                />
                              </li>
                              <li class="list-color-item color-swatch">
                                <span class="tooltip">Pastel Brown</span>
                                <span
                                  class="swatch-value bg_pastel-brown"
                                ></span>
                                <img
                                  class="lazyload"
                                  data-src="images/products/stroller-baby-brown.jpg"
                                  src="images/products/stroller-baby-brown.jpg"
                                  alt="image-product"
                                />
                              </li>
                              <li class="list-color-item color-swatch">
                                <span class="tooltip">Pink</span>
                                <span class="swatch-value bg_pink"></span>
                                <img
                                  class="lazyload"
                                  data-src="images/products/stroller-baby-pink.jpg"
                                  src="images/products/stroller-baby-pink.jpg"
                                  alt="image-product"
                                />
                              </li>
                            </ul>
                          </div>
                          <div class="button-link">
                            <a
                              href="#quick_add"
                              data-bs-toggle="modal"
                              class="btn-addToCart grl btn_df"
                            >
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 22 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                                  stroke="currentcolor"
                                  strokeWidth="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </svg>
                              <span>Add to cart</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="product-item card-product">
                      <div class="product-item-container">
                        <div class="left-block">
                          <a href="product-detail.html" class="product-img">
                            <span
                              class="media media--transparent media-- media--hover-effect"
                              style="padding-bottom: 100%"
                            >
                              <img
                                class="lazyload img-product"
                                data-src="images/products/Fa_31a.jpg"
                                src="images/products/Fa_31a.jpg"
                                alt="image-product"
                              />
                              <img
                                class="lazyload img-hover"
                                data-src="images/products/Fa_32a.jpg"
                                src="images/products/Fa_32a.jpg"
                                alt="image-product"
                              />
                            </span>
                          </a>
                          <div class="list-product-btn column-right">
                            <a
                              href="javascript:void(0);"
                              class="box-icon bg_white wishlist btn-icon-action"
                            >
                              <svg
                                class="ss-wishlist-v"
                                fill="currentColor"
                                width="16"
                                height="16"
                                viewBox="0 0 32 32"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.999 3.567c0.98 0 2.753 0.469 5.628 3.301l1.425 1.403 1.404-1.426c1.996-2.028 4.12-3.288 5.543-3.288 1.919 0 3.432 0.656 4.907 2.128 1.39 1.386 2.156 3.23 2.156 5.191 0.001 1.962-0.764 3.807-2.169 5.209-0.114 0.116-6.156 6.634-11.218 12.097-0.238 0.227-0.511 0.26-0.656 0.26-0.143 0-0.412-0.032-0.65-0.253-1.233-1.372-10.174-11.313-11.213-12.351-1.391-1.388-2.157-3.233-2.157-5.194s0.766-3.804 2.158-5.192c1.353-1.352 2.937-1.885 4.842-1.885zM8.999 1.567c-2.392 0-4.5 0.715-6.255 2.469-3.659 3.649-3.659 9.566 0 13.217 1.045 1.045 11.183 12.323 11.183 12.323 0.578 0.578 1.336 0.865 2.093 0.865s1.512-0.287 2.091-0.865c0 0 11.090-11.97 11.208-12.089 3.657-3.652 3.657-9.57 0-13.219-1.816-1.813-3.845-2.712-6.319-2.712-2.364 0-5 1.885-6.969 3.885-2.031-2-4.585-3.874-7.031-3.874v0z"
                                ></path>
                              </svg>
                              <span class="tooltip">Add to Wishlist</span>
                              <span class="icon icon-delete"></span>
                            </a>
                            <a
                              href="#compare"
                              data-bs-toggle="offcanvas"
                              class="box-icon bg_white compare btn-icon-action"
                            >
                              <svg
                                fill="currentColor"
                                width="16"
                                height="16"
                                viewBox="0 0 32 32"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0.682 9.431l14.847 8.085c0.149 0.081 0.313 0.122 0.479 0.122 0.163 0 0.326-0.040 0.474-0.12l15.003-8.085c0.327-0.176 0.53-0.52 0.525-0.892s-0.216-0.711-0.547-0.88l-14.848-7.54c-0.283-0.143-0.617-0.144-0.902-0.002l-15.002 7.54c-0.332 0.167-0.545 0.505-0.551 0.877s0.196 0.717 0.521 0.895zM16.161 2.134l12.692 6.446-12.843 6.921-12.693-6.912zM31.292 15.010l-2.968-1.507-2.142 1.155 2.5 1.27-12.842 6.921-12.694-6.912 2.666-1.34-2.136-1.164-3.135 1.575c-0.332 0.167-0.545 0.505-0.551 0.877s0.196 0.717 0.521 0.895l14.847 8.085c0.149 0.081 0.313 0.122 0.479 0.122 0.163 0 0.326-0.040 0.474-0.12l15.003-8.085c0.327-0.176 0.53-0.52 0.525-0.892s-0.215-0.711-0.546-0.88zM31.292 22.010l-2.811-1.382-2.142 1.155 2.344 1.145-12.843 6.921-12.694-6.912 2.478-1.121-2.136-1.164-2.947 1.357c-0.332 0.167-0.545 0.505-0.551 0.877s0.196 0.717 0.521 0.895l14.847 8.085c0.149 0.081 0.313 0.122 0.479 0.122 0.163 0 0.326-0.040 0.475-0.12l15.003-8.085c0.327-0.176 0.53-0.52 0.525-0.892-0.005-0.373-0.215-0.712-0.546-0.88z"
                                ></path>
                              </svg>
                              <span class="tooltip">Add to Compare</span>
                              <span class="icon icon-check"></span>
                            </a>
                            <a
                              href="#quick_view"
                              data-bs-toggle="modal"
                              class="box-icon bg_white quickview ss-btn-loading"
                            >
                              <svg
                                fill="currentcolor"
                                width="16"
                                height="16"
                                viewBox="0 0 32 32"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M16.108 10.044c-3.313 0-6 2.687-6 6s2.687 6 6 6 6-2.686 6-6-2.686-6-6-6zM16.108 20.044c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.206 0 4 1.794 4 4s-1.748 4.044-3.954 4.044zM31.99 15.768c-0.012-0.050-0.006-0.104-0.021-0.153-0.006-0.021-0.020-0.033-0.027-0.051-0.011-0.028-0.008-0.062-0.023-0.089-2.909-6.66-9.177-10.492-15.857-10.492s-13.074 3.826-15.984 10.486c-0.012 0.028-0.010 0.057-0.021 0.089-0.007 0.020-0.021 0.030-0.028 0.049-0.015 0.050-0.009 0.103-0.019 0.154-0.018 0.090-0.035 0.178-0.035 0.269s0.017 0.177 0.035 0.268c0.010 0.050 0.003 0.105 0.019 0.152 0.006 0.023 0.021 0.032 0.028 0.052 0.010 0.027 0.008 0.061 0.021 0.089 2.91 6.658 9.242 10.428 15.922 10.428s13.011-3.762 15.92-10.422c0.015-0.029 0.012-0.058 0.023-0.090 0.007-0.017 0.020-0.030 0.026-0.050 0.015-0.049 0.011-0.102 0.021-0.154 0.018-0.090 0.034-0.177 0.034-0.27 0-0.088-0.017-0.175-0.035-0.266zM16 25.019c-5.665 0-11.242-2.986-13.982-8.99 2.714-5.983 8.365-9.047 14.044-9.047 5.678 0 11.203 3.067 13.918 9.053-2.713 5.982-8.301 8.984-13.981 8.984z"
                                ></path>
                              </svg>
                              <span class="tooltip">Quick View</span>
                            </a>
                          </div>
                        </div>
                        <div class="right-block">
                          <div class="caption">
                            <div class="title-vendor">
                              <a href="shop-default.html" title="Entry"
                                >Entry</a
                              >
                            </div>
                            <h4>
                              <a href="product-detail.html" class="title link"
                                >Mens Leather Shoulder Small Bag</a
                              >
                            </h4>
                            <div class="price">
                              <div class="product-price--regular">$95.00</div>
                              <div class="price-item--sale">$17.00</div>
                            </div>
                            <ul class="list-color-product">
                              <li class="list-color-item color-swatch active">
                                <span class="tooltip">Black</span>
                                <span class="swatch-value bg_dark"></span>
                                <img
                                  class="lazyload"
                                  data-src="images/products/stroller-baby-black3.jpg"
                                  src="images/products/stroller-baby-black3.jpg"
                                  alt="image-product"
                                />
                              </li>
                              <li class="list-color-item color-swatch">
                                <span class="tooltip">Pastel Brown</span>
                                <span
                                  class="swatch-value bg_pastel-brown"
                                ></span>
                                <img
                                  class="lazyload"
                                  data-src="images/products/stroller-baby-brown.jpg"
                                  src="images/products/stroller-baby-brown.jpg"
                                  alt="image-product"
                                />
                              </li>
                              <li class="list-color-item color-swatch">
                                <span class="tooltip">Pink</span>
                                <span class="swatch-value bg_pink"></span>
                                <img
                                  class="lazyload"
                                  data-src="images/products/stroller-baby-pink.jpg"
                                  src="images/products/stroller-baby-pink.jpg"
                                  alt="image-product"
                                />
                              </li>
                            </ul>
                          </div>
                          <div class="button-link">
                            <a
                              href="#quick_add"
                              data-bs-toggle="modal"
                              class="btn-addToCart grl btn_df"
                            >
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 22 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                                  stroke="currentcolor"
                                  strokeWidth="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </svg>
                              <span>Add to cart</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="product-item card-product">
                      <div class="product-item-container">
                        <div class="left-block">
                          <a href="product-detail.html" class="product-img">
                            <span
                              class="media media--transparent media-- media--hover-effect"
                              style="padding-bottom: 100%"
                            >
                              <img
                                class="lazyload img-product"
                                data-src="images/products/Fa_19a.jpg"
                                src="images/products/Fa_19a.jpg"
                                alt="image-product"
                              />
                              <img
                                class="lazyload img-hover"
                                data-src="images/products/Fa_20a.jpg"
                                src="images/products/Fa_20a.jpg"
                                alt="image-product"
                              />
                            </span>
                          </a>
                          <div class="list-product-btn column-right">
                            <a
                              href="javascript:void(0);"
                              class="box-icon bg_white wishlist btn-icon-action"
                            >
                              <svg
                                class="ss-wishlist-v"
                                fill="currentColor"
                                width="16"
                                height="16"
                                viewBox="0 0 32 32"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.999 3.567c0.98 0 2.753 0.469 5.628 3.301l1.425 1.403 1.404-1.426c1.996-2.028 4.12-3.288 5.543-3.288 1.919 0 3.432 0.656 4.907 2.128 1.39 1.386 2.156 3.23 2.156 5.191 0.001 1.962-0.764 3.807-2.169 5.209-0.114 0.116-6.156 6.634-11.218 12.097-0.238 0.227-0.511 0.26-0.656 0.26-0.143 0-0.412-0.032-0.65-0.253-1.233-1.372-10.174-11.313-11.213-12.351-1.391-1.388-2.157-3.233-2.157-5.194s0.766-3.804 2.158-5.192c1.353-1.352 2.937-1.885 4.842-1.885zM8.999 1.567c-2.392 0-4.5 0.715-6.255 2.469-3.659 3.649-3.659 9.566 0 13.217 1.045 1.045 11.183 12.323 11.183 12.323 0.578 0.578 1.336 0.865 2.093 0.865s1.512-0.287 2.091-0.865c0 0 11.090-11.97 11.208-12.089 3.657-3.652 3.657-9.57 0-13.219-1.816-1.813-3.845-2.712-6.319-2.712-2.364 0-5 1.885-6.969 3.885-2.031-2-4.585-3.874-7.031-3.874v0z"
                                ></path>
                              </svg>
                              <span class="tooltip">Add to Wishlist</span>
                              <span class="icon icon-delete"></span>
                            </a>
                            <a
                              href="#compare"
                              data-bs-toggle="offcanvas"
                              class="box-icon bg_white compare btn-icon-action"
                            >
                              <svg
                                fill="currentColor"
                                width="16"
                                height="16"
                                viewBox="0 0 32 32"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0.682 9.431l14.847 8.085c0.149 0.081 0.313 0.122 0.479 0.122 0.163 0 0.326-0.040 0.474-0.12l15.003-8.085c0.327-0.176 0.53-0.52 0.525-0.892s-0.216-0.711-0.547-0.88l-14.848-7.54c-0.283-0.143-0.617-0.144-0.902-0.002l-15.002 7.54c-0.332 0.167-0.545 0.505-0.551 0.877s0.196 0.717 0.521 0.895zM16.161 2.134l12.692 6.446-12.843 6.921-12.693-6.912zM31.292 15.010l-2.968-1.507-2.142 1.155 2.5 1.27-12.842 6.921-12.694-6.912 2.666-1.34-2.136-1.164-3.135 1.575c-0.332 0.167-0.545 0.505-0.551 0.877s0.196 0.717 0.521 0.895l14.847 8.085c0.149 0.081 0.313 0.122 0.479 0.122 0.163 0 0.326-0.040 0.474-0.12l15.003-8.085c0.327-0.176 0.53-0.52 0.525-0.892s-0.215-0.711-0.546-0.88zM31.292 22.010l-2.811-1.382-2.142 1.155 2.344 1.145-12.843 6.921-12.694-6.912 2.478-1.121-2.136-1.164-2.947 1.357c-0.332 0.167-0.545 0.505-0.551 0.877s0.196 0.717 0.521 0.895l14.847 8.085c0.149 0.081 0.313 0.122 0.479 0.122 0.163 0 0.326-0.040 0.475-0.12l15.003-8.085c0.327-0.176 0.53-0.52 0.525-0.892-0.005-0.373-0.215-0.712-0.546-0.88z"
                                ></path>
                              </svg>
                              <span class="tooltip">Add to Compare</span>
                              <span class="icon icon-check"></span>
                            </a>
                            <a
                              href="#quick_view"
                              data-bs-toggle="modal"
                              class="box-icon bg_white quickview ss-btn-loading"
                            >
                              <svg
                                fill="currentcolor"
                                width="16"
                                height="16"
                                viewBox="0 0 32 32"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M16.108 10.044c-3.313 0-6 2.687-6 6s2.687 6 6 6 6-2.686 6-6-2.686-6-6-6zM16.108 20.044c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.206 0 4 1.794 4 4s-1.748 4.044-3.954 4.044zM31.99 15.768c-0.012-0.050-0.006-0.104-0.021-0.153-0.006-0.021-0.020-0.033-0.027-0.051-0.011-0.028-0.008-0.062-0.023-0.089-2.909-6.66-9.177-10.492-15.857-10.492s-13.074 3.826-15.984 10.486c-0.012 0.028-0.010 0.057-0.021 0.089-0.007 0.020-0.021 0.030-0.028 0.049-0.015 0.050-0.009 0.103-0.019 0.154-0.018 0.090-0.035 0.178-0.035 0.269s0.017 0.177 0.035 0.268c0.010 0.050 0.003 0.105 0.019 0.152 0.006 0.023 0.021 0.032 0.028 0.052 0.010 0.027 0.008 0.061 0.021 0.089 2.91 6.658 9.242 10.428 15.922 10.428s13.011-3.762 15.92-10.422c0.015-0.029 0.012-0.058 0.023-0.090 0.007-0.017 0.020-0.030 0.026-0.050 0.015-0.049 0.011-0.102 0.021-0.154 0.018-0.090 0.034-0.177 0.034-0.27 0-0.088-0.017-0.175-0.035-0.266zM16 25.019c-5.665 0-11.242-2.986-13.982-8.99 2.714-5.983 8.365-9.047 14.044-9.047 5.678 0 11.203 3.067 13.918 9.053-2.713 5.982-8.301 8.984-13.981 8.984z"
                                ></path>
                              </svg>
                              <span class="tooltip">Quick View</span>
                            </a>
                          </div>
                        </div>
                        <div class="right-block">
                          <div class="caption">
                            <div class="title-vendor">
                              <a href="shop-default.html" title="Entry"
                                >Entry</a
                              >
                            </div>
                            <h4>
                              <a href="product-detail.html" class="title link"
                                >Women's 3/4 Length Sleeve VNeck</a
                              >
                            </h4>
                            <div class="price">
                              <div class="product-price--regular">$16.95</div>
                              <div class="price-item--sale">$10.00</div>
                            </div>
                            <ul class="list-color-product">
                              <li class="list-color-item color-swatch active">
                                <span class="tooltip">Yellow</span>
                                <span class="swatch-value bg_yellow-4"></span>
                                <img
                                  class="lazyload"
                                  data-src="images/products/stroller-baby-yellow.jpg"
                                  src="images/products/stroller-baby-yellow.jpg"
                                  alt="image-product"
                                />
                              </li>
                              <li class="list-color-item color-swatch">
                                <span class="tooltip">Black</span>
                                <span class="swatch-value bg_dark"></span>
                                <img
                                  class="lazyload"
                                  data-src="images/products/stroller-baby-black4.jpg"
                                  src="images/products/stroller-baby-black4.jpg"
                                  alt="image-product"
                                />
                              </li>
                              <li class="list-color-item color-swatch">
                                <span class="tooltip">Grey</span>
                                <span class="swatch-value bg_grey"></span>
                                <img
                                  class="lazyload"
                                  data-src="images/products/stroller-baby-grey.jpg"
                                  src="images/products/stroller-baby-grey.jpg"
                                  alt="image-product"
                                />
                              </li>
                            </ul>
                          </div>
                          <div class="button-link">
                            <a
                              href="#quick_add"
                              data-bs-toggle="modal"
                              class="btn-addToCart grl btn_df"
                            >
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 22 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                                  stroke="currentcolor"
                                  strokeWidth="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </svg>
                              <span>Add to cart</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="product-item card-product">
                      <div class="product-item-container">
                        <div class="left-block">
                          <a href="product-detail.html" class="product-img">
                            <span
                              class="media media--transparent media-- media--hover-effect"
                              style="padding-bottom: 100%"
                            >
                              <img
                                class="lazyload img-product"
                                data-src="images/products/Fa_12a.jpg"
                                src="images/products/Fa_12a.jpg"
                                alt="image-product"
                              />
                              <img
                                class="lazyload img-hover"
                                data-src="images/products/Fa_13a.jpg"
                                src="images/products/Fa_13a.jpg"
                                alt="image-product"
                              />
                            </span>
                          </a>
                          <div class="list-product-btn column-right">
                            <a
                              href="javascript:void(0);"
                              class="box-icon bg_white wishlist btn-icon-action"
                            >
                              <svg
                                class="ss-wishlist-v"
                                fill="currentColor"
                                width="16"
                                height="16"
                                viewBox="0 0 32 32"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.999 3.567c0.98 0 2.753 0.469 5.628 3.301l1.425 1.403 1.404-1.426c1.996-2.028 4.12-3.288 5.543-3.288 1.919 0 3.432 0.656 4.907 2.128 1.39 1.386 2.156 3.23 2.156 5.191 0.001 1.962-0.764 3.807-2.169 5.209-0.114 0.116-6.156 6.634-11.218 12.097-0.238 0.227-0.511 0.26-0.656 0.26-0.143 0-0.412-0.032-0.65-0.253-1.233-1.372-10.174-11.313-11.213-12.351-1.391-1.388-2.157-3.233-2.157-5.194s0.766-3.804 2.158-5.192c1.353-1.352 2.937-1.885 4.842-1.885zM8.999 1.567c-2.392 0-4.5 0.715-6.255 2.469-3.659 3.649-3.659 9.566 0 13.217 1.045 1.045 11.183 12.323 11.183 12.323 0.578 0.578 1.336 0.865 2.093 0.865s1.512-0.287 2.091-0.865c0 0 11.090-11.97 11.208-12.089 3.657-3.652 3.657-9.57 0-13.219-1.816-1.813-3.845-2.712-6.319-2.712-2.364 0-5 1.885-6.969 3.885-2.031-2-4.585-3.874-7.031-3.874v0z"
                                ></path>
                              </svg>
                              <span class="tooltip">Add to Wishlist</span>
                              <span class="icon icon-delete"></span>
                            </a>
                            <a
                              href="#compare"
                              data-bs-toggle="offcanvas"
                              class="box-icon bg_white compare btn-icon-action"
                            >
                              <svg
                                fill="currentColor"
                                width="16"
                                height="16"
                                viewBox="0 0 32 32"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0.682 9.431l14.847 8.085c0.149 0.081 0.313 0.122 0.479 0.122 0.163 0 0.326-0.040 0.474-0.12l15.003-8.085c0.327-0.176 0.53-0.52 0.525-0.892s-0.216-0.711-0.547-0.88l-14.848-7.54c-0.283-0.143-0.617-0.144-0.902-0.002l-15.002 7.54c-0.332 0.167-0.545 0.505-0.551 0.877s0.196 0.717 0.521 0.895zM16.161 2.134l12.692 6.446-12.843 6.921-12.693-6.912zM31.292 15.010l-2.968-1.507-2.142 1.155 2.5 1.27-12.842 6.921-12.694-6.912 2.666-1.34-2.136-1.164-3.135 1.575c-0.332 0.167-0.545 0.505-0.551 0.877s0.196 0.717 0.521 0.895l14.847 8.085c0.149 0.081 0.313 0.122 0.479 0.122 0.163 0 0.326-0.040 0.474-0.12l15.003-8.085c0.327-0.176 0.53-0.52 0.525-0.892s-0.215-0.711-0.546-0.88zM31.292 22.010l-2.811-1.382-2.142 1.155 2.344 1.145-12.843 6.921-12.694-6.912 2.478-1.121-2.136-1.164-2.947 1.357c-0.332 0.167-0.545 0.505-0.551 0.877s0.196 0.717 0.521 0.895l14.847 8.085c0.149 0.081 0.313 0.122 0.479 0.122 0.163 0 0.326-0.040 0.475-0.12l15.003-8.085c0.327-0.176 0.53-0.52 0.525-0.892-0.005-0.373-0.215-0.712-0.546-0.88z"
                                ></path>
                              </svg>
                              <span class="tooltip">Add to Compare</span>
                              <span class="icon icon-check"></span>
                            </a>
                            <a
                              href="#quick_view"
                              data-bs-toggle="modal"
                              class="box-icon bg_white quickview ss-btn-loading"
                            >
                              <svg
                                fill="currentcolor"
                                width="16"
                                height="16"
                                viewBox="0 0 32 32"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M16.108 10.044c-3.313 0-6 2.687-6 6s2.687 6 6 6 6-2.686 6-6-2.686-6-6-6zM16.108 20.044c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.206 0 4 1.794 4 4s-1.748 4.044-3.954 4.044zM31.99 15.768c-0.012-0.050-0.006-0.104-0.021-0.153-0.006-0.021-0.020-0.033-0.027-0.051-0.011-0.028-0.008-0.062-0.023-0.089-2.909-6.66-9.177-10.492-15.857-10.492s-13.074 3.826-15.984 10.486c-0.012 0.028-0.010 0.057-0.021 0.089-0.007 0.020-0.021 0.030-0.028 0.049-0.015 0.050-0.009 0.103-0.019 0.154-0.018 0.090-0.035 0.178-0.035 0.269s0.017 0.177 0.035 0.268c0.010 0.050 0.003 0.105 0.019 0.152 0.006 0.023 0.021 0.032 0.028 0.052 0.010 0.027 0.008 0.061 0.021 0.089 2.91 6.658 9.242 10.428 15.922 10.428s13.011-3.762 15.92-10.422c0.015-0.029 0.012-0.058 0.023-0.090 0.007-0.017 0.020-0.030 0.026-0.050 0.015-0.049 0.011-0.102 0.021-0.154 0.018-0.090 0.034-0.177 0.034-0.27 0-0.088-0.017-0.175-0.035-0.266zM16 25.019c-5.665 0-11.242-2.986-13.982-8.99 2.714-5.983 8.365-9.047 14.044-9.047 5.678 0 11.203 3.067 13.918 9.053-2.713 5.982-8.301 8.984-13.981 8.984z"
                                ></path>
                              </svg>
                              <span class="tooltip">Quick View</span>
                            </a>
                          </div>
                        </div>
                        <div class="right-block">
                          <div class="caption">
                            <div class="title-vendor">
                              <a href="shop-default.html" title="Entry"
                                >Entry</a
                              >
                            </div>
                            <h4>
                              <a href="product-detail.html" class="title link"
                                >Mens Oversized T Shirts Business</a
                              >
                            </h4>
                            <div class="price">
                              <div class="product-price">$20.00</div>
                            </div>
                            <ul class="list-color-product">
                              <li class="list-color-item color-swatch active">
                                <span class="tooltip">Yellow</span>
                                <span class="swatch-value bg_yellow-4"></span>
                                <img
                                  class="lazyload"
                                  data-src="images/products/stroller-baby-yellow.jpg"
                                  src="images/products/stroller-baby-yellow.jpg"
                                  alt="image-product"
                                />
                              </li>

                              <li class="list-color-item color-swatch">
                                <span class="tooltip">Grey</span>
                                <span class="swatch-value bg_grey"></span>
                                <img
                                  class="lazyload"
                                  data-src="images/products/stroller-baby-grey.jpg"
                                  src="images/products/stroller-baby-grey.jpg"
                                  alt="image-product"
                                />
                              </li>
                            </ul>
                          </div>
                          <div class="button-link">
                            <a
                              href="#quick_add"
                              data-bs-toggle="modal"
                              class="btn-addToCart grl btn_df"
                            >
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 22 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                                  stroke="currentcolor"
                                  strokeWidth="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </svg>
                              <span>Add to cart</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="product-item card-product">
                      <div class="product-item-container">
                        <div class="left-block">
                          <a href="product-detail.html" class="product-img">
                            <span
                              class="media media--transparent media-- media--hover-effect"
                              style="padding-bottom: 100%"
                            >
                              <img
                                class="lazyload img-product"
                                data-src="images/products/Fa_23a.jpg"
                                src="images/products/Fa_23a.jpg"
                                alt="image-product"
                              />
                              <img
                                class="lazyload img-hover"
                                data-src="images/products/Fa_24a.jpg"
                                src="images/products/Fa_24a.jpg"
                                alt="image-product"
                              />
                            </span>
                          </a>
                          <div class="list-product-btn column-right">
                            <a
                              href="javascript:void(0);"
                              class="box-icon bg_white wishlist btn-icon-action"
                            >
                              <svg
                                class="ss-wishlist-v"
                                fill="currentColor"
                                width="16"
                                height="16"
                                viewBox="0 0 32 32"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.999 3.567c0.98 0 2.753 0.469 5.628 3.301l1.425 1.403 1.404-1.426c1.996-2.028 4.12-3.288 5.543-3.288 1.919 0 3.432 0.656 4.907 2.128 1.39 1.386 2.156 3.23 2.156 5.191 0.001 1.962-0.764 3.807-2.169 5.209-0.114 0.116-6.156 6.634-11.218 12.097-0.238 0.227-0.511 0.26-0.656 0.26-0.143 0-0.412-0.032-0.65-0.253-1.233-1.372-10.174-11.313-11.213-12.351-1.391-1.388-2.157-3.233-2.157-5.194s0.766-3.804 2.158-5.192c1.353-1.352 2.937-1.885 4.842-1.885zM8.999 1.567c-2.392 0-4.5 0.715-6.255 2.469-3.659 3.649-3.659 9.566 0 13.217 1.045 1.045 11.183 12.323 11.183 12.323 0.578 0.578 1.336 0.865 2.093 0.865s1.512-0.287 2.091-0.865c0 0 11.090-11.97 11.208-12.089 3.657-3.652 3.657-9.57 0-13.219-1.816-1.813-3.845-2.712-6.319-2.712-2.364 0-5 1.885-6.969 3.885-2.031-2-4.585-3.874-7.031-3.874v0z"
                                ></path>
                              </svg>
                              <span class="tooltip">Add to Wishlist</span>
                              <span class="icon icon-delete"></span>
                            </a>
                            <a
                              href="#compare"
                              data-bs-toggle="offcanvas"
                              class="box-icon bg_white compare btn-icon-action"
                            >
                              <svg
                                fill="currentColor"
                                width="16"
                                height="16"
                                viewBox="0 0 32 32"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0.682 9.431l14.847 8.085c0.149 0.081 0.313 0.122 0.479 0.122 0.163 0 0.326-0.040 0.474-0.12l15.003-8.085c0.327-0.176 0.53-0.52 0.525-0.892s-0.216-0.711-0.547-0.88l-14.848-7.54c-0.283-0.143-0.617-0.144-0.902-0.002l-15.002 7.54c-0.332 0.167-0.545 0.505-0.551 0.877s0.196 0.717 0.521 0.895zM16.161 2.134l12.692 6.446-12.843 6.921-12.693-6.912zM31.292 15.010l-2.968-1.507-2.142 1.155 2.5 1.27-12.842 6.921-12.694-6.912 2.666-1.34-2.136-1.164-3.135 1.575c-0.332 0.167-0.545 0.505-0.551 0.877s0.196 0.717 0.521 0.895l14.847 8.085c0.149 0.081 0.313 0.122 0.479 0.122 0.163 0 0.326-0.040 0.474-0.12l15.003-8.085c0.327-0.176 0.53-0.52 0.525-0.892s-0.215-0.711-0.546-0.88zM31.292 22.010l-2.811-1.382-2.142 1.155 2.344 1.145-12.843 6.921-12.694-6.912 2.478-1.121-2.136-1.164-2.947 1.357c-0.332 0.167-0.545 0.505-0.551 0.877s0.196 0.717 0.521 0.895l14.847 8.085c0.149 0.081 0.313 0.122 0.479 0.122 0.163 0 0.326-0.040 0.475-0.12l15.003-8.085c0.327-0.176 0.53-0.52 0.525-0.892-0.005-0.373-0.215-0.712-0.546-0.88z"
                                ></path>
                              </svg>
                              <span class="tooltip">Add to Compare</span>
                              <span class="icon icon-check"></span>
                            </a>
                            <a
                              href="#quick_view"
                              data-bs-toggle="modal"
                              class="box-icon bg_white quickview ss-btn-loading"
                            >
                              <svg
                                fill="currentcolor"
                                width="16"
                                height="16"
                                viewBox="0 0 32 32"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M16.108 10.044c-3.313 0-6 2.687-6 6s2.687 6 6 6 6-2.686 6-6-2.686-6-6-6zM16.108 20.044c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.206 0 4 1.794 4 4s-1.748 4.044-3.954 4.044zM31.99 15.768c-0.012-0.050-0.006-0.104-0.021-0.153-0.006-0.021-0.020-0.033-0.027-0.051-0.011-0.028-0.008-0.062-0.023-0.089-2.909-6.66-9.177-10.492-15.857-10.492s-13.074 3.826-15.984 10.486c-0.012 0.028-0.010 0.057-0.021 0.089-0.007 0.020-0.021 0.030-0.028 0.049-0.015 0.050-0.009 0.103-0.019 0.154-0.018 0.090-0.035 0.178-0.035 0.269s0.017 0.177 0.035 0.268c0.010 0.050 0.003 0.105 0.019 0.152 0.006 0.023 0.021 0.032 0.028 0.052 0.010 0.027 0.008 0.061 0.021 0.089 2.91 6.658 9.242 10.428 15.922 10.428s13.011-3.762 15.92-10.422c0.015-0.029 0.012-0.058 0.023-0.090 0.007-0.017 0.020-0.030 0.026-0.050 0.015-0.049 0.011-0.102 0.021-0.154 0.018-0.090 0.034-0.177 0.034-0.27 0-0.088-0.017-0.175-0.035-0.266zM16 25.019c-5.665 0-11.242-2.986-13.982-8.99 2.714-5.983 8.365-9.047 14.044-9.047 5.678 0 11.203 3.067 13.918 9.053-2.713 5.982-8.301 8.984-13.981 8.984z"
                                ></path>
                              </svg>
                              <span class="tooltip">Quick View</span>
                            </a>
                          </div>
                        </div>
                        <div class="right-block">
                          <div class="caption">
                            <div class="title-vendor">
                              <a href="shop-default.html" title="Entry"
                                >Entry</a
                              >
                            </div>
                            <h4>
                              <a href="product-detail.html" class="title link"
                                >Womens Sweaters Casual Long</a
                              >
                            </h4>
                            <div class="price">
                              <div class="product-price">$15.5</div>
                            </div>
                            <ul class="list-color-product">
                              <li class="list-color-item color-swatch active">
                                <span class="tooltip">Black</span>
                                <span class="swatch-value bg_dark"></span>
                                <img
                                  class="lazyload"
                                  data-src="images/products/stroller-baby-black5.jpg"
                                  src="images/products/stroller-baby-black5.jpg"
                                  alt="image-product"
                                />
                              </li>
                              <li class="list-color-item color-swatch">
                                <span class="tooltip">Beige</span>
                                <span class="swatch-value bg_beige"></span>
                                <img
                                  class="lazyload"
                                  data-src="images/products/stroller-baby-beige.jpg"
                                  src="images/products/stroller-baby-beige.jpg"
                                  alt="image-product"
                                />
                              </li>
                              <li class="list-color-item color-swatch">
                                <span class="tooltip">Dark Blue</span>
                                <span class="swatch-value bg_dark-blue"></span>
                                <img
                                  class="lazyload"
                                  data-src="images/products/stroller-baby-darkblue.jpg"
                                  src="images/products/stroller-baby-darkblue.jpg"
                                  alt="image-product"
                                />
                              </li>
                            </ul>
                          </div>
                          <div class="button-link">
                            <a
                              href="#quick_add"
                              data-bs-toggle="modal"
                              class="btn-addToCart grl btn_df"
                            >
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 22 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                                  stroke="currentcolor"
                                  strokeWidth="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </svg>
                              <span>Add to cart</span>
                            </a>
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
      </div>
  )
}

export default ProductDeal