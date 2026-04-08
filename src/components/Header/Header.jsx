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
import { Link, NavLink, useLocation } from "react-router-dom";

// Array of icon paths (you can add more if needed)
const iconPaths = [
  "/images/menu/Vertical_icon_1.png",
  "/images/menu/Vertical_icon_2.png",
  "/images/menu/Vertical_icon_3.png",
  "/images/menu/Vertical_icon_4.png",
  "/images/menu/Vertical_icon_5.png",
  "/images/menu/Vertical_icon_6.png",
  "/images/menu/Vertical_icon_7.png",
  "/images/menu/Vertical_icon_8.png",
  "/images/menu/Vertical_icon_9.png",
  "/images/menu/Vertical_icon_10.png",
];

const Header = ({ toggleCart, categories }) => {
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
                          {categories.map((category, index) => {
                            // Cycle through icons if more categories than icons
                            const icon = iconPaths[index % iconPaths.length];

                            return (
                              <li
                                key={category.id}
                                className="vertical-item level1 toggle-menu"
                              >
                                <Link className="menu-link" to="/product">
                                  <span className="icon_items">
                                    <img
                                      className="lazyload"
                                      data-src={icon}
                                      src={icon}
                                      alt={category.name}
                                    />
                                  </span>
                                  <span className="menu-title">
                                    {category.name}
                                  </span>
                                  <span className="caret">
                                    <FiChevronDown size={12} />
                                  </span>
                                </Link>
                              </li>
                            );
                          })}
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
                  <li className="menu-item">
                    <NavLink
                      to="/"
                      end
                      className={({ isActive }) =>
                        isActive ? "item-link active" : "item-link"
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink
                      to="/about"
                      className={({ isActive }) =>
                        isActive ? "item-link active" : "item-link"
                      }
                    >
                      About
                    </NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink
                      to="/product"
                      className={({ isActive }) =>
                        isActive ? "item-link active" : "item-link"
                      }
                    >
                      Products
                    </NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink
                      to="/gallery"
                      className={({ isActive }) =>
                        isActive ? "item-link active" : "item-link"
                      }
                    >
                      Gallery
                    </NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink
                      to="/blog"
                      className={({ isActive }) =>
                        isActive ? "item-link active" : "item-link"
                      }
                    >
                      Blog
                    </NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink
                      to="/contact"
                      className={({ isActive }) =>
                        isActive ? "item-link active" : "item-link"
                      }
                    >
                      Contact
                    </NavLink>
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

  .item-link.active {
    color: var(--primary) !important;
  }

  /* Active menu underline */
  #header .box-nav-ul li .item-link.active::before {
    width: 100%;
    left: 0;
    right: auto;
    background: var(--primary);
  }
`;

export default Header;
