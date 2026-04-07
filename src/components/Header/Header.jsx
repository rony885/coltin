import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  FiChevronDown,
  FiGrid,
  FiHeart,
  FiMenu,
  FiSettings,
  FiShoppingCart,
  FiUser,
  FiX,
} from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const Header = ({ toggleCart }) => {
  // const location = useLocation();
  // const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  // // Auto control based on route
  // useEffect(() => {
  //   if (location.pathname === "/") {
  //     setIsCategoryOpen(true); // Home → open
  //   } else {
  //     setIsCategoryOpen(false); // Other pages → closed
  //   }
  // }, [location.pathname]);

  const location = useLocation();
  const isHome = location.pathname === "/";
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  useEffect(() => {
    if (isHome) {
      setIsCategoryOpen(true); // Home → always open
    } else {
      setIsCategoryOpen(false); // Other pages → closed
    }
  }, [isHome]);

  return (
    <Wrapper>
      <div className="header-middle">
        <div className="container">
          <div className="header-middle__inner">
            <div className="header-logo">
              <Link to="/" className="logo-header">
                <img src="/images/logo/logo.png" alt="logo" className="logo" />
              </Link>
            </div>
            <div className="header__search d-none">
              <form className="mini-search-from">
                <fieldset className="text">
                  <input
                    type="text"
                    placeholder="Search"
                    className=""
                    name="text"
                    tabIndex="0"
                    defaultValue=""
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
                    to="/login"
                    // data-bs-toggle="modal"
                    className="nav-icon-item"
                  >
                    <FiUser size={20} />
                    Account
                  </Link>
                </li>
                <li className="nav-wishlist">
                  <Link to="/wishlist" className="nav-icon-item">
                    <FiHeart size={20} />
                    <span className="count">0</span>Wishlist
                  </Link>
                </li>
                <li className="nav-cart">
                  <Link
                    // to="#shoppingCart"
                    // data-bs-toggle="modal"
                    className="nav-icon-item"
                    onClick={toggleCart}
                  >
                    <FiShoppingCart size={20} />
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
                <FiMenu size={24} />
              </Link>
              <Link
                to="#mobileVertical"
                className="mobileVertical"
                data-bs-toggle="offcanvas"
              >
                <FiGrid size={22} />
              </Link>
            </div>

            <div className="col-xl-3 d-none d-xl-block">
              <div className="menu-left vertical_menu">
                <div id="ss-vertical-menu" className="ss-section">
                  <div className="widget-verticalmenu">
                    <div className="vertical-content">
                      <div className="navbar-vertical">
                        {/* <button
                          style={{ background: "#ffffff", color: "#000000" }}
                          type="button"
                          id="show-verticalmenu"
                          className="navbar-toggles"
                        >
                          <span className="icon-before-title">
                            <FiGrid size={20} />
                          </span>
                          <span className="title-nav">All Categories</span>
                          <span className="icon-after-title">
                            <FiChevronDown size={20} />
                          </span>
                        </button> */}
                        {/* <button
                          type="button"
                          id="show-verticalmenu"
                          className="navbar-toggles"
                          onClick={() => setIsCategoryOpen((prev) => !prev)}
                        >
                          <span className="icon-before-title">
                            <FiGrid size={20} />
                          </span>
                          <span className="title-nav">All Categories</span>
                          <span className="icon-after-title">
                            <FiChevronDown
                              size={20}
                              style={{
                                transform: isCategoryOpen
                                  ? "rotate(180deg)"
                                  : "rotate(0deg)",
                                transition: "0.3s",
                              }}
                            />
                          </span>
                        </button> */}

                        <button
                          type="button"
                          id="show-verticalmenu"
                          className="navbar-toggles"
                          onClick={() => {
                            if (!isHome) {
                              setIsCategoryOpen((prev) => !prev);
                            }
                          }}
                        >
                          <span className="icon-before-title">
                            <FiGrid size={20} />
                          </span>

                          <span className="title-nav">All Categories</span>

                          <span className="icon-after-title">
                            <FiChevronDown
                              size={20}
                              style={{
                                transform: isCategoryOpen
                                  ? "rotate(180deg)"
                                  : "rotate(0deg)",
                                transition: "0.3s",
                              }}
                            />
                          </span>
                        </button>
                      </div>
                      {/* <div className="vertical-wrapper"> */}
                      <div
                        className={`vertical-wrapper ${
                          isCategoryOpen ? "open" : "closed"
                        }`}
                      >
                        <div className="menu-remove d-block d-lg-none">
                          <div className="close-vertical">
                            <FiX size={20} />
                          </div>
                        </div>
                        <ul className="vertical-group">
                          <li className="vertical-item level1 toggle-menu vertical_drop mega_parent">
                            <Link className="menu-link" to="/shop">
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
                                <FiChevronDown size={12} />
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
                                      src="/images/menu/menu-image.png"
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
                                  src="/images/menu/Vertical_icon_2.png"
                                  alt=""
                                />
                              </span>
                              <span className="menu-title">Electronics</span>
                              <span className="caret">
                                <FiChevronDown size={12} />
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
                                    <FiChevronDown size={12} />
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
                                    <FiChevronDown size={12} />
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
                                  data-src="/images/menu/Vertical_icon_3.png"
                                  src="/images/menu/Vertical_icon_3.png"
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
                                  data-src="/images/menu/Vertical_icon_4.png"
                                  src="/images/menu/Vertical_icon_4.png"
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
                                  data-src="/images/menu/Vertical_icon_5.png"
                                  src="/images/menu/Vertical_icon_5.png"
                                  alt=""
                                />
                              </span>
                              <span className="menu-title">
                                Jewelry &amp; Accessories
                              </span>
                              <span className="caret">
                                <FiChevronDown size={12} />
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
                                      data-src="/images/menu/menu-image2.png"
                                      src="/images/menu/menu-image2.png"
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
                                  data-src="/images/menu/Vertical_icon_6.png"
                                  src="/images/menu/Vertical_icon_6.png"
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
                                  data-src="/images/menu/Vertical_icon_7.png"
                                  src="/images/menu/Vertical_icon_7.png"
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
                                  data-src="/images/menu/Vertical_icon_8.png"
                                  src="/images/menu/Vertical_icon_8.png"
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
                                  data-src="/images/menu/Vertical_icon_9.png"
                                  src="/images/menu/Vertical_icon_9.png"
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
                                  data-src="/images/menu/Vertical_icon_10.png"
                                  src="/images/menu/Vertical_icon_10.png"
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
                    <Link to="/" className="item-link">
                      Home
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/about" className="item-link">
                      About
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/product" className="item-link">
                      Products
                    </Link>
                  </li>
                  <li className="menu-item position-relative">
                    <Link to="/gallery" className="item-link">
                      Gallery
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/blog" className="item-link">
                      Blog
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/contact" className="item-link">
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* <!--link deal--> */}
            <div className="col-xl-3 col-md-8 col-8">
              <div className="deal-header">
                <Link to="#" title="Shop today’s deal">
                  <FiSettings size={20} style={{ marginRight: "5px" }} />
                  <span>Shop today’s deal</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .vertical-wrapper {
    overflow: hidden;
    transition: max-height 0.4s ease;
  }

  .vertical-wrapper.open {
    max-height: 2000px;
  }

  .vertical-wrapper.closed {
    max-height: 0;
  }

  /* Optional: disable cursor on home */
  .navbar-toggles {
    cursor: pointer;
  }

  body.home-page .navbar-toggles {
    cursor: default;
  }
`;

export default Header;
