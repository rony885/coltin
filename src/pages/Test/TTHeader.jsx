import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header-middle">
        <div className="container">
          <div className="header-middle__inner">
            <div className="header-logo">
              <Link to="/" className="logo-header">
                <img src="/images/logo/logo.png" alt="logo" className="logo" />
              </Link>
            </div>
            <div className="header__search">
              <form className="mini-search-from">
                <fieldset className="text">
                  <input
                    type="text"
                    placeholder="Search"
                    className=""
                    name="text"
                    tabIndex="0"
                    value=""
                    aria-required="true"
                    required=""
                  />
                </fieldset>
                <button className="" type="submit">
                  <i className="icon-search"></i>
                </button>
              </form>
            </div>
            <div className="header-links">
              <ul className="nav-icon d-flex justify-content-end align-items-center gap-30">
                <li className="nav-account">
                  <Link
                    to="#login"
                    data-bs-toggle="modal"
                    className="nav-icon-item"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                        stroke="currentcolor"
                        strokeWidth="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    Account
                  </Link>
                </li>
                <li className="nav-wishlist">
                  <Link to="wishlist.html" className="nav-icon-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="18"
                      viewBox="0 0 20 18"
                      fill="currentColor"
                    >
                      <path d="M9.90736 15.2534L9.80926 15.3515L9.70136 15.2534C5.04196 11.0256 1.96185 8.22997 1.96185 5.3951C1.96185 3.43324 3.43324 1.96185 5.3951 1.96185C6.90572 1.96185 8.37711 2.94278 8.897 4.27684H10.7215C11.2414 2.94278 12.7128 1.96185 14.2234 1.96185C16.1853 1.96185 17.6567 3.43324 17.6567 5.3951C17.6567 8.22997 14.5766 11.0256 9.90736 15.2534ZM14.2234 0C12.5166 0 10.8785 0.79455 9.80926 2.04033C8.74005 0.79455 7.10191 0 5.3951 0C2.37384 0 0 2.36403 0 5.3951C0 9.09319 3.33515 12.1243 8.38692 16.7052L9.80926 18L11.2316 16.7052C16.2834 12.1243 19.6185 9.09319 19.6185 5.3951C19.6185 2.36403 17.2447 0 14.2234 0Z"></path>
                    </svg>
                    <span className="count">0</span>Wishlist
                  </Link>
                </li>
                <li className="nav-cart">
                  <Link
                    to="#shoppingCart"
                    data-bs-toggle="modal"
                    className="nav-icon-item"
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
                    Cart <span className="count">0</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="header" className="header-bottom">
        <div className="container">
          <div className="row wrapper-header align-items-center">
            <div className="col-md-4 col-4 ss-lg-hidden">
              <Link
                to="#mobileMenu"
                className="mobileMenu"
                data-bs-toggle="offcanvas"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="16"
                  viewBox="0 0 24 16"
                  fill="none"
                >
                  <path
                    d="M2.00056 2.28571H16.8577C17.1608 2.28571 17.4515 2.16531 17.6658 1.95098C17.8802 1.73665 18.0006 1.44596 18.0006 1.14286C18.0006 0.839753 17.8802 0.549063 17.6658 0.334735C17.4515 0.120408 17.1608 0 16.8577 0H2.00056C1.69745 0 1.40676 0.120408 1.19244 0.334735C0.978109 0.549063 0.857702 0.839753 0.857702 1.14286C0.857702 1.44596 0.978109 1.73665 1.19244 1.95098C1.40676 2.16531 1.69745 2.28571 2.00056 2.28571ZM0.857702 8C0.857702 7.6969 0.978109 7.40621 1.19244 7.19188C1.40676 6.97755 1.69745 6.85714 2.00056 6.85714H22.572C22.8751 6.85714 23.1658 6.97755 23.3801 7.19188C23.5944 7.40621 23.7148 7.6969 23.7148 8C23.7148 8.30311 23.5944 8.59379 23.3801 8.80812C23.1658 9.02245 22.8751 9.14286 22.572 9.14286H2.00056C1.69745 9.14286 1.40676 9.02245 1.19244 8.80812C0.978109 8.59379 0.857702 8.30311 0.857702 8ZM0.857702 14.8571C0.857702 14.554 0.978109 14.2633 1.19244 14.049C1.40676 13.8347 1.69745 13.7143 2.00056 13.7143H12.2863C12.5894 13.7143 12.8801 13.8347 13.0944 14.049C13.3087 14.2633 13.4291 14.554 13.4291 14.8571C13.4291 15.1602 13.3087 15.4509 13.0944 15.6653C12.8801 15.8796 12.5894 16 12.2863 16H2.00056C1.69745 16 1.40676 15.8796 1.19244 15.6653C0.978109 15.4509 0.857702 15.1602 0.857702 14.8571Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </Link>
              <Link
                to="#mobileVertical"
                className="mobileVertical"
                data-bs-toggle="offcanvas"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22px"
                  height="22px"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.5,22 C4.01471863,22 2,19.9852814 2,17.5 C2,15.0147186 4.01471863,13 6.5,13 C8.98528137,13 11,15.0147186 11,17.5 C11,19.9852814 8.98528137,22 6.5,22 Z M17.5,22 C15.0147186,22 13,19.9852814 13,17.5 C13,15.0147186 15.0147186,13 17.5,13 C19.9852814,13 22,15.0147186 22,17.5 C22,19.9852814 19.9852814,22 17.5,22 Z M6.5,11 C4.01471863,11 2,8.98528137 2,6.5 C2,4.01471863 4.01471863,2 6.5,2 C8.98528137,2 11,4.01471863 11,6.5 C11,8.98528137 8.98528137,11 6.5,11 Z M17.5,11 C15.0147186,11 13,8.98528137 13,6.5 C13,4.01471863 15.0147186,2 17.5,2 C19.9852814,2 22,4.01471863 22,6.5 C22,8.98528137 19.9852814,11 17.5,11 Z M17.5,9 C18.8807119,9 20,7.88071187 20,6.5 C20,5.11928813 18.8807119,4 17.5,4 C16.1192881,4 15,5.11928813 15,6.5 C15,7.88071187 16.1192881,9 17.5,9 Z M6.5,9 C7.88071187,9 9,7.88071187 9,6.5 C9,5.11928813 7.88071187,4 6.5,4 C5.11928813,4 4,5.11928813 4,6.5 C4,7.88071187 5.11928813,9 6.5,9 Z M17.5,20 C18.8807119,20 20,18.8807119 20,17.5 C20,16.1192881 18.8807119,15 17.5,15 C16.1192881,15 15,16.1192881 15,17.5 C15,18.8807119 16.1192881,20 17.5,20 Z M6.5,20 C7.88071187,20 9,18.8807119 9,17.5 C9,16.1192881 7.88071187,15 6.5,15 C5.11928813,15 4,16.1192881 4,17.5 C4,18.8807119 5.11928813,20 6.5,20 Z"></path>
                </svg>
              </Link>
            </div>
            <div className="col-xl-3 d-none d-xl-block">
              <div className="menu-left vertical_menu">
                <div id="ss-vertical-menu" className="ss-section">
                  <div className="widget-verticalmenu">
                    <div className="vertical-content">
                      <div className="navbar-vertical">
                        <button
                          style={{ background: "#ffffff", color: "#000000" }}
                          type="button"
                          id="show-verticalmenu"
                          className="navbar-toggles"
                        >
                          <span className="icon-before-title">
                            {/* <!--?xml version="1.0" encoding="utf-8"?--> */}
                            {/* <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --> */}
                            <svg
                              fill="currentcolor"
                              width="20px"
                              height="20px"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M6.5,22 C4.01471863,22 2,19.9852814 2,17.5 C2,15.0147186 4.01471863,13 6.5,13 C8.98528137,13 11,15.0147186 11,17.5 C11,19.9852814 8.98528137,22 6.5,22 Z M17.5,22 C15.0147186,22 13,19.9852814 13,17.5 C13,15.0147186 15.0147186,13 17.5,13 C19.9852814,13 22,15.0147186 22,17.5 C22,19.9852814 19.9852814,22 17.5,22 Z M6.5,11 C4.01471863,11 2,8.98528137 2,6.5 C2,4.01471863 4.01471863,2 6.5,2 C8.98528137,2 11,4.01471863 11,6.5 C11,8.98528137 8.98528137,11 6.5,11 Z M17.5,11 C15.0147186,11 13,8.98528137 13,6.5 C13,4.01471863 15.0147186,2 17.5,2 C19.9852814,2 22,4.01471863 22,6.5 C22,8.98528137 19.9852814,11 17.5,11 Z M17.5,9 C18.8807119,9 20,7.88071187 20,6.5 C20,5.11928813 18.8807119,4 17.5,4 C16.1192881,4 15,5.11928813 15,6.5 C15,7.88071187 16.1192881,9 17.5,9 Z M6.5,9 C7.88071187,9 9,7.88071187 9,6.5 C9,5.11928813 7.88071187,4 6.5,4 C5.11928813,4 4,5.11928813 4,6.5 C4,7.88071187 5.11928813,9 6.5,9 Z M17.5,20 C18.8807119,20 20,18.8807119 20,17.5 C20,16.1192881 18.8807119,15 17.5,15 C16.1192881,15 15,16.1192881 15,17.5 C15,18.8807119 16.1192881,20 17.5,20 Z M6.5,20 C7.88071187,20 9,18.8807119 9,17.5 C9,16.1192881 7.88071187,15 6.5,15 C5.11928813,15 4,16.1192881 4,17.5 C4,18.8807119 5.11928813,20 6.5,20 Z"></path>
                            </svg>
                          </span>
                          <span className="title-nav">All Categories</span>
                          <span className="icon-after-title">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="80px"
                              height="80px"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M6 9L12 15L18 9"
                                stroke="currentcolor"
                                strokeWidth="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </div>
                      <div className="vertical-wrapper">
                        <div className="menu-remove d-block d-lg-none">
                          <div className="close-vertical">
                            <svg
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                            >
                              <path d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
                            </svg>
                          </div>
                        </div>
                        <ul className="vertical-group">
                          <li className="vertical-item level1 toggle-menu vertical_drop mega_parent">
                            <Link className="menu-link" to="/shop-default">
                              <span className="icon_items">
                                <img
                                  className="lazyload"
                                  data-src="images/menu/Vertical_icon_1.png"
                                  src="images/menu/Vertical_icon_1.png"
                                  alt=""
                                />
                              </span>
                              <span className="menu-title">
                                Smartphone &amp; Tablet
                              </span>
                              <span className="caret">
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  role="presentation"
                                  className="icon icon-caret"
                                  viewBox="0 0 10 6"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </span>
                            </Link>
                            <div
                              className="vertical-drop drop-mega drop-lv1 sub-menu"
                              style={{ width: "500px" }}
                            >
                              <div className="row">
                                <div className="ss_megamenu_col col_menu col-lg-6">
                                  <div className="row">
                                    <div className="ss_megamenu_col col-lg-12">
                                      <ul className="content-links">
                                        <li className="ss_megamenu_lv2 menuTitle">
                                          <Link
                                            className="Categories"
                                            to="https://magento2.magentech.com/collections"
                                            title=""
                                          >
                                            Categories
                                          </Link>
                                        </li>
                                        <li className="ss_megamenu_lv3">
                                          <Link to="/shop-default" title="">
                                            Cell phones
                                          </Link>
                                        </li>
                                        <li className="ss_megamenu_lv3">
                                          <Link to="/shop-default" title="">
                                            Camera &amp; Photo
                                          </Link>
                                        </li>
                                        <li className="ss_megamenu_lv3">
                                          <Link to="/shop-default" title="">
                                            Living Room
                                          </Link>
                                        </li>
                                        <li className="ss_megamenu_lv3">
                                          <Link to="/shop-default" title="">
                                            Computers
                                          </Link>
                                        </li>
                                        <li className="ss_megamenu_lv3">
                                          <Link to="/shop-default" title="">
                                            Watches
                                          </Link>
                                        </li>
                                        <li className="ss_megamenu_lv3">
                                          <Link to="/shop-default" title="">
                                            Fashion
                                          </Link>
                                        </li>
                                        <li className="ss_megamenu_lv3">
                                          <Link
                                            to="https://magento2.magentech.com/collections/collection"
                                            title=""
                                          >
                                            Cars &amp; Motorbikes
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="ss_megamenu_col banner_first col-lg-6 space_vetical">
                                  <div className="first vertical-banner">
                                    <img
                                      className="lazyload"
                                      data-src="images/menu/menu-image.png"
                                      src="images/menu/menu-image.png"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="vertical-item level1 toggle-menu vertical_drop css_parent">
                            <Link className="menu-link" to="/shop-default">
                              <span className="icon_items">
                                <img
                                  className="lazyload"
                                  data-src="images/menu/Vertical_icon_2.png"
                                  src="images/menu/Vertical_icon_2.png"
                                  alt=""
                                />
                              </span>
                              <span className="menu-title">Electronics</span>
                              <span className="caret">
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  role="presentation"
                                  className="icon icon-caret"
                                  viewBox="0 0 10 6"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </span>
                            </Link>
                            <ul className="vertical-drop drop-css drop-lv1 sub-menu">
                              <li className="vertical-item sub-dropdown toggle-menu">
                                <Link
                                  className="menu-link"
                                  to="/shop-default"
                                  title=""
                                >
                                  Accessories
                                  <span className="caret">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      role="presentation"
                                      className="icon icon-caret"
                                      viewBox="0 0 10 6"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z"
                                        fill="currentColor"
                                      ></path>
                                    </svg>
                                  </span>
                                </Link>
                                <ul className="vertical-drop drop-lv2 dropdown-content sub-menu">
                                  <li className="vertical-item level2">
                                    <Link to="/shop-default" title="">
                                      Cameras &amp; Photos
                                    </Link>
                                  </li>
                                  <li className="vertical-item level2">
                                    <Link to="/shop-default" title="">
                                      Fashion Clothing
                                    </Link>
                                  </li>
                                  <li className="vertical-item level2">
                                    <Link
                                      to="https://magento2.magentech.com/collections/headphone"
                                      title=""
                                    >
                                      Headphone
                                    </Link>
                                  </li>
                                  <li className="vertical-item level2">
                                    <Link to="/shop-default" title="">
                                      Games &amp; Consoles
                                    </Link>
                                  </li>
                                  <li className="vertical-item level2">
                                    <Link
                                      to="https://magento2.magentech.com/collections/headphone"
                                      title=""
                                    >
                                      Toys, Games &amp; Kids
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li className="vertical-item sub-dropdown toggle-menu">
                                <Link
                                  className="menu-link"
                                  to="/shop-default"
                                  title=""
                                >
                                  Women collections
                                  <span className="caret">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      role="presentation"
                                      className="icon icon-caret"
                                      viewBox="0 0 10 6"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z"
                                        fill="currentColor"
                                      ></path>
                                    </svg>
                                  </span>
                                </Link>
                                <ul className="vertical-drop drop-lv2 dropdown-content sub-menu">
                                  <li className="vertical-item level2">
                                    <Link to="/shop-default" title="">
                                      Electric Kitchen
                                    </Link>
                                  </li>
                                  <li className="vertical-item level2">
                                    <Link to="/shop-default" title="">
                                      Fashion Clothing
                                    </Link>
                                  </li>
                                  <li className="vertical-item level2">
                                    <Link
                                      to="https://magento2.magentech.com/collections/handbags-1"
                                      title=""
                                    >
                                      Games &amp; Consoles
                                    </Link>
                                  </li>
                                  <li className="vertical-item level2">
                                    <Link
                                      to="https://magento2.magentech.com/collections/headphone"
                                      title=""
                                    >
                                      Headphone
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li className="vertical-item level1 toggle-menu">
                            <Link className="menu-link" to="/shop-default">
                              <span className="icon_items">
                                <img
                                  className="lazyload"
                                  data-src="images/menu/Vertical_icon_3.png"
                                  src="images/menu/Vertical_icon_3.png"
                                  alt=""
                                />
                              </span>
                              <span className="menu-title">Fashion</span>
                            </Link>
                          </li>
                          <li className="vertical-item level1 toggle-menu">
                            <Link className="menu-link" to="/shop-default">
                              <span className="icon_items">
                                <img
                                  className="lazyload"
                                  data-src="images/menu/Vertical_icon_4.png"
                                  src="images/menu/Vertical_icon_4.png"
                                  alt=""
                                />
                              </span>
                              <span className="menu-title">
                                Furniture &amp; Decor
                              </span>
                            </Link>
                          </li>
                          <li className="vertical-item level1 toggle-menu vertical_drop mega_parent">
                            <Link className="menu-link" to="/shop-default">
                              <span className="icon_items">
                                <img
                                  className="lazyload"
                                  data-src="images/menu/Vertical_icon_5.png"
                                  src="images/menu/Vertical_icon_5.png"
                                  alt=""
                                />
                              </span>
                              <span className="menu-title">
                                Jewelry &amp; Accessories
                              </span>
                              <span className="caret">
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  role="presentation"
                                  className="icon icon-caret"
                                  viewBox="0 0 10 6"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </span>
                            </Link>
                            <div
                              className="vertical-drop drop-mega drop-lv1 sub-menu"
                              style={{ width: "500px" }}
                            >
                              <div className="row">
                                <div className="ss_megamenu_col col_menu col-lg-6">
                                  <div className="row">
                                    <div className="ss_megamenu_col col-lg-12">
                                      <ul className="content-links">
                                        <li className="ss_megamenu_lv2 menuTitle">
                                          <Link
                                            className="Categories"
                                            to="/shop-default"
                                            title=""
                                          >
                                            Categories
                                          </Link>
                                        </li>
                                        <li className="ss_megamenu_lv3">
                                          <Link to="/shop-default" title="">
                                            Accessories
                                          </Link>
                                        </li>
                                        <li className="ss_megamenu_lv3">
                                          <Link
                                            to="https://magento2.magentech.com/collections/handbags"
                                            title=""
                                          >
                                            Handbags
                                          </Link>
                                        </li>
                                        <li className="ss_megamenu_lv3">
                                          <Link
                                            to="https://magento2.magentech.com/collections/frontpage"
                                            title=""
                                          >
                                            Hat
                                          </Link>
                                        </li>
                                        <li className="ss_megamenu_lv3">
                                          <Link
                                            to="https://magento2.magentech.com/collections/blazers"
                                            title=""
                                          >
                                            Sunglasses
                                          </Link>
                                        </li>
                                        <li className="ss_megamenu_lv3">
                                          <Link
                                            to="https://magento2.magentech.com/collections/shoes-1"
                                            title=""
                                          >
                                            Shoes
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="ss_megamenu_col banner_first col-lg-6 space_vetical">
                                  <div className="first vertical-banner">
                                    <img
                                      className="lazyload"
                                      data-src="images/menu/menu-image2.png"
                                      src="images/menu/menu-image2.png"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="vertical-item level1 toggle-menu">
                            <Link className="menu-link" to="/shop-default">
                              <span className="icon_items">
                                <img
                                  className="lazyload"
                                  data-src="images/menu/Vertical_icon_6.png"
                                  src="images/menu/Vertical_icon_6.png"
                                  alt=""
                                />
                              </span>
                              <span className="menu-title">
                                Health &amp; Beauty
                              </span>
                            </Link>
                          </li>
                          <li className="vertical-item level1 toggle-menu">
                            <Link className="menu-link" to="/shop-default">
                              <span className="icon_items">
                                <img
                                  className="lazyload"
                                  data-src="images/menu/Vertical_icon_7.png"
                                  src="images/menu/Vertical_icon_7.png"
                                  alt=""
                                />
                              </span>
                              <span className="menu-title">Mom &amp; Baby</span>
                            </Link>
                          </li>
                          <li className="vertical-item level1 toggle-menu">
                            <Link className="menu-link" to="/shop-default">
                              <span className="icon_items">
                                <img
                                  className="lazyload"
                                  data-src="images/menu/Vertical_icon_8.png"
                                  src="images/menu/Vertical_icon_8.png"
                                  alt=""
                                />
                              </span>
                              <span className="menu-title">
                                Game &amp; Console
                              </span>
                            </Link>
                          </li>
                          <li className="vertical-item level1 toggle-menu">
                            <Link className="menu-link" to="/shop-default">
                              <span className="icon_items">
                                <img
                                  className="lazyload"
                                  data-src="images/menu/Vertical_icon_9.png"
                                  src="images/menu/Vertical_icon_9.png"
                                  alt=""
                                />
                              </span>
                              <span className="menu-title">
                                Cars &amp; Motorbikes
                              </span>
                            </Link>
                          </li>
                          <li className="vertical-item level1 toggle-menu">
                            <Link className="menu-link" to="/shop-default">
                              <span className="icon_items">
                                <img
                                  className="lazyload"
                                  data-src="images/menu/Vertical_icon_10.png"
                                  src="images/menu/Vertical_icon_10.png"
                                  alt=""
                                />
                              </span>
                              <span className="menu-title">
                                Sport &amp; Outdoor
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="vertical-screen d-block d-lg-none">
                    &nbsp;
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 d-none d-xl-block">
              <nav className="box-navigation text-center">
                <ul className="box-nav-ul d-flex align-items-center justify-content-left gap-30">
                  <li className="menu-item item-home">
                    <Link to="#" className="item-link">
                      Home
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/shop-left-sidebar" className="item-link">
                      Shop<i className="icon icon-arrow-down"></i>
                    </Link>
                    <div className="sub-menu mega-menu">
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-2">
                            <div className="mega-menu-item">
                              <div className="menu-heading">Shop layouts</div>
                              <ul className="menu-list">
                                <li>
                                  <Link
                                    to="/shop-default"
                                    className="menu-link-text link"
                                  >
                                    Default
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/shop-left-sidebar"
                                    className="menu-link-text link"
                                  >
                                    Left sidebar
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#" className="menu-link-text link">
                                    Right sidebar
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#" className="menu-link-text link">
                                    Fullwidth
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#" className="menu-link-text link">
                                    Sub collection
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#" className="menu-link-text link">
                                    Collections list
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-2">
                            <div className="mega-menu-item">
                              <div className="menu-heading">Features</div>
                              <ul className="menu-list">
                                <li>
                                  <Link to="#" className="menu-link-text link">
                                    Pagination links
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#" className="menu-link-text link">
                                    Pagination loadmore
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#" className="menu-link-text link">
                                    Pagination infinite scrolling
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#" className="menu-link-text link">
                                    Filter sidebar
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#" className="menu-link-text link">
                                    Filter hidden
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-2">
                            <div className="mega-menu-item">
                              <div className="menu-heading">Product styles</div>
                              <ul className="menu-list">
                                <li>
                                  <Link to="#" className="menu-link-text link">
                                    Product style list
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#" className="menu-link-text link">
                                    Product style 01
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#" className="menu-link-text link">
                                    Product style 02
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#" className="menu-link-text link">
                                    Product style 03
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#" className="menu-link-text link">
                                    Product style 04
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#" className="menu-link-text link">
                                    Product style 05
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#" className="menu-link-text link">
                                    Product style 06
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#" className="menu-link-text link">
                                    Product style 07
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div className="collection-item hover-img">
                              <div className="collection-inner">
                                <Link
                                  to="#"
                                  className="collection-image img-style"
                                >
                                  <img
                                    className="lazyload"
                                    data-src="images/collections/collection-1.jpg"
                                    src="images/collections/collection-1.jpg"
                                    alt="collection-demo-1"
                                  />
                                </Link>
                                <div className="collection-content">
                                  <Link
                                    to="#"
                                    className="ss-btn hover-icon btn-xl collection-title fs-16"
                                  >
                                    <span>Furniture</span>
                                    <i className="icon icon-arrow1-top-left"></i>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div className="collection-item hover-img">
                              <div className="collection-inner">
                                <Link
                                  to="#"
                                  className="collection-image img-style"
                                >
                                  <img
                                    className="lazyload"
                                    data-src="images/collections/collection-2.jpg"
                                    src="images/collections/collection-2.jpg"
                                    alt="collection-demo-1"
                                  />
                                </Link>
                                <div className="collection-content">
                                  <Link
                                    to="#"
                                    className="ss-btn btn-xl collection-title fs-16 hover-icon"
                                  >
                                    <span>cosmetic</span>
                                    <i className="icon icon-arrow1-top-left"></i>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="menu-item">
                    <Link to="product-detail.html" className="item-link">
                      Products
                    </Link>
                  </li>
                  <li className="menu-item position-relative">
                    <Link to="#" className="item-link">
                      Pages <i className="icon icon-arrow-down"></i>
                    </Link>

                    <div className="sub-menu submenu-default">
                      <ul className="menu-list">
                        <li>
                          <Link
                            to="about-us.html"
                            className="menu-link-text link text_black-2"
                          >
                            About us
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="contact.html"
                            className="menu-link-text link text_black-2"
                          >
                            Contact us
                          </Link>
                        </li>
                        <li className="menu-item-2">
                          <Link
                            to="#"
                            className="menu-link-text link text_black-2"
                          >
                            My account
                          </Link>
                          <div className="sub-menu submenu-default">
                            <ul className="menu-list">
                              <li>
                                <Link
                                  to="my-account.html"
                                  className="menu-link-text link text_black-2"
                                >
                                  My account
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="my-account-orders.html"
                                  className="menu-link-text link text_black-2"
                                >
                                  My order
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="my-account-address.html"
                                  className="menu-link-text link text_black-2"
                                >
                                  My address
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="my-account-edit.html"
                                  className="menu-link-text link text_black-2"
                                >
                                  My account details
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="my-account-wishlist.html"
                                  className="menu-link-text link text_black-2"
                                >
                                  My wishlist
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <Link
                            to="gallery.html"
                            className="menu-link-text link text_black-2"
                          >
                            Gallery
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="portfolio1.html"
                            className="menu-link-text link text_black-2"
                          >
                            Portfolio 1
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="portfolio2.html"
                            className="menu-link-text link text_black-2"
                          >
                            Portfolio 2
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="faqs.html"
                            className="menu-link-text link text_black-2"
                          >
                            Faqs
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="checkout.html"
                            className="menu-link-text link text_black-2"
                          >
                            Checkout
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="view-cart.html"
                            className="menu-link-text link text_black-2"
                          >
                            View Cart
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="menu-item position-relative">
                    <Link to="#" className="item-link">
                      Blog <i className="icon icon-arrow-down"></i>
                    </Link>
                    <div className="sub-menu submenu-default">
                      <ul className="menu-list">
                        <li>
                          <Link
                            to="blog-sidebar-left.html"
                            className="menu-link-text link text_black-2"
                          >
                            Blog Sidebar Left
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="blog-sidebar-right.html"
                            className="menu-link-text link text_black-2"
                          >
                            Blog Sidebar Right
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="blog-detail.html"
                            className="menu-link-text link text_black-2"
                          >
                            Blog Detail
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="menu-item">
                    <Link to="#" className="item-link">
                      Buy now
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            {/* <!--link deal--> */}
            <div className="col-xl-3 col-md-8 col-8">
              <div className="deal-header">
                <Link to="#" title="Shop today’s deal">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M15.5 8.5L8.5 15.5M9.5 9.5H9.51M14.5 14.5H14.51M10 9.5C10 9.77614 9.77614 10 9.5 10C9.22386 10 9 9.77614 9 9.5C9 9.22386 9.22386 9 9.5 9C9.77614 9 10 9.22386 10 9.5ZM15 14.5C15 14.7761 14.7761 15 14.5 15C14.2239 15 14 14.7761 14 14.5C14 14.2239 14.2239 14 14.5 14C14.7761 14 15 14.2239 15 14.5ZM16.3287 4.75855C17.0676 4.77963 17.8001 5.07212 18.364 5.636C18.9278 6.19989 19.2203 6.9324 19.2414 7.67121C19.2623 8.40232 19.2727 8.76787 19.2942 8.85296C19.3401 9.0351 19.2867 8.90625 19.383 9.06752C19.428 9.14286 19.6792 9.40876 20.1814 9.94045C20.6889 10.4778 21 11.2026 21 12C21 12.7974 20.6889 13.5222 20.1814 14.0595C19.6792 14.5912 19.428 14.8571 19.383 14.9325C19.2867 15.0937 19.3401 14.9649 19.2942 15.147C19.2727 15.2321 19.2623 15.5977 19.2414 16.3288C19.2203 17.0676 18.9278 17.8001 18.364 18.364C17.8001 18.9279 17.0676 19.2204 16.3287 19.2414C15.5976 19.2623 15.2321 19.2727 15.147 19.2942C14.9649 19.3401 15.0937 19.2868 14.9325 19.3831C14.8571 19.4281 14.5912 19.6792 14.0595 20.1814C13.5222 20.6889 12.7974 21 12 21C11.2026 21 10.4778 20.6889 9.94047 20.1814C9.40874 19.6792 9.14287 19.4281 9.06753 19.3831C8.90626 19.2868 9.0351 19.3401 8.85296 19.2942C8.76788 19.2727 8.40225 19.2623 7.67121 19.2414C6.93238 19.2204 6.19986 18.9279 5.63597 18.364C5.07207 17.8001 4.77959 17.0676 4.75852 16.3287C4.73766 15.5976 4.72724 15.2321 4.70578 15.147C4.65985 14.9649 4.71322 15.0937 4.61691 14.9324C4.57192 14.8571 4.32082 14.5912 3.81862 14.0595C3.31113 13.5222 3 12.7974 3 12C3 11.2026 3.31113 10.4778 3.81862 9.94048C4.32082 9.40876 4.57192 9.14289 4.61691 9.06755C4.71322 8.90628 4.65985 9.03512 4.70578 8.85299C4.72724 8.7679 4.73766 8.40235 4.75852 7.67126C4.77959 6.93243 5.07207 6.1999 5.63597 5.636C6.19986 5.07211 6.93238 4.77963 7.67121 4.75855C8.40232 4.73769 8.76788 4.72727 8.85296 4.70581C9.0351 4.65988 8.90626 4.71325 9.06753 4.61694C9.14287 4.57195 9.40876 4.32082 9.94047 3.81863C10.4778 3.31113 11.2026 3 12 3C12.7974 3 13.5222 3.31114 14.0595 3.81864C14.5913 4.32084 14.8571 4.57194 14.9325 4.61693C15.0937 4.71324 14.9649 4.65988 15.147 4.70581C15.2321 4.72726 15.5976 4.73769 16.3287 4.75855Z"
                      stroke="currentcolor"
                      strokeWidth="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span>Shop today’s deal</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
