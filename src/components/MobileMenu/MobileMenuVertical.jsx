/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const MobileMenuVertical = () => {
  return (
    <div className="offcanvas offcanvas-start canvas-mb" id="mobileVertical">
      <span
        className="icon-close icon-close-popup"
        data-bs-dismiss="offcanvas"
      ></span>
      <div className="mb-canvas-content">
        <div className="mb-body">
          <ul className="nav-ul-mb" id="wrapper-menu-navigation2">
            <li className="nav-mb-item">
              <a
                href="#dropdown-menu-1"
                className="collapsed mb-menu-link current"
                data-bs-toggle="collapse"
                aria-expanded="true"
                aria-controls="dropdown-menu-1"
              >
                <span className="menu-title">
                  <span className="icon_items">
                    <img
                      className="lazyloaded"
                      data-src="images/menu/Vertical_icon_1.png"
                      src="images/menu/Vertical_icon_1.png"
                      alt=""
                    />
                  </span>
                  Smartphone &amp; Tablet
                </span>
                <span className="btn-open-sub"></span>
              </a>
              <div id="dropdown-menu-1" className="collapse">
                <ul className="sub-nav-menu">
                  <li>
                    <a href="#" className="sub-nav-link">
                      Cell phones
                    </a>
                  </li>
                  <li>
                    <a href="#" className="sub-nav-link">
                      Camera &amp; Photo
                    </a>
                  </li>
                  <li>
                    <a href="#" className="sub-nav-link">
                      Living Room
                    </a>
                  </li>
                  <li>
                    <a href="#" className="sub-nav-link">
                      Computers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="sub-nav-link">
                      Watches
                    </a>
                  </li>
                  <li>
                    <a href="#" className="sub-nav-link">
                      Fashion
                    </a>
                  </li>
                  <li>
                    <a href="#" className="sub-nav-link">
                      Cars &amp; Motorbikes
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-mb-item">
              <a
                href="#dropdown-menu-2"
                className="collapsed mb-menu-link current"
                data-bs-toggle="collapse"
                aria-expanded="true"
                aria-controls="dropdown-menu-2"
              >
                <span className="menu-title">
                  <span className="icon_items">
                    <img
                      className="lazyloaded"
                      data-src="images/menu/Vertical_icon_2.png"
                      src="images/menu/Vertical_icon_2.png"
                      alt=""
                    />
                  </span>
                  Electronics
                </span>
                <span className="btn-open-sub"></span>
              </a>
              <div id="dropdown-menu-2" className="collapse">
                <ul className="sub-nav-menu" id="sub-menu-navigation2">
                  <li>
                    <a
                      href="#sub-shop-1"
                      className="sub-nav-link collapsed"
                      data-bs-toggle="collapse"
                      aria-expanded="true"
                      aria-controls="sub-shop-1"
                    >
                      <span>Accessories</span>
                      <span className="btn-open-sub"></span>
                    </a>
                    <div id="sub-shop-1" className="collapse">
                      <ul className="sub-nav-menu sub-menu-level-2">
                        <li>
                          <a href="#" className="sub-nav-link">
                            Cameras &amp; Photos
                          </a>
                        </li>
                        <li>
                          <a href="#" className="sub-nav-link">
                            Fashion Clothing
                          </a>
                        </li>
                        <li>
                          <a href="#" className="sub-nav-link">
                            Headphone
                          </a>
                        </li>
                        <li>
                          <a href="#" className="sub-nav-link">
                            Fullwidth
                          </a>
                        </li>
                        <li>
                          <a href="#" className="sub-nav-link">
                            Sub collection
                          </a>
                        </li>
                        <li>
                          <a href="#" className="sub-nav-link">
                            Collections list
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a
                      href="#sub-shop-2"
                      className="sub-nav-link collapsed"
                      data-bs-toggle="collapse"
                      aria-expanded="true"
                      aria-controls="sub-shop-2"
                    >
                      <span>Women collections</span>
                      <span className="btn-open-sub"></span>
                    </a>
                    <div id="sub-shop-2" className="collapse">
                      <ul className="sub-nav-menu sub-menu-level-2">
                        <li>
                          <a href="#" className="sub-nav-link">
                            Electric Kitchen
                          </a>
                        </li>
                        <li>
                          <a href="#" className="sub-nav-link">
                            Fashion Clothing
                          </a>
                        </li>
                        <li>
                          <a href="#" className="sub-nav-link">
                            Games &amp; Consoles
                          </a>
                        </li>
                        <li>
                          <a href="#" className="sub-nav-link">
                            Headphone
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-mb-item">
              <a
                href="#dropdown-menu-5"
                className="collapsed mb-menu-link current"
                data-bs-toggle="collapse"
                aria-expanded="true"
              >
                <span className="menu-title">
                  <span className="icon_items">
                    <img
                      className="lazyloaded"
                      data-src="images/menu/Vertical_icon_3.png"
                      src="images/menu/Vertical_icon_3.png"
                      alt=""
                    />
                  </span>
                  Fashion
                </span>
              </a>
            </li>
            <li className="nav-mb-item">
              <a href="#" className="mb-menu-link">
                <span className="menu-title">
                  <span className="icon_items">
                    <img
                      className="lazyloaded"
                      data-src="images/menu/Vertical_icon_4.png"
                      src="images/menu/Vertical_icon_4.png"
                      alt=""
                    />
                  </span>
                  Furniture &amp; Decor
                </span>
              </a>
            </li>
            <li className="nav-mb-item">
              <a
                href="#dropdown-menu-4"
                className="collapsed mb-menu-link current"
                data-bs-toggle="collapse"
                aria-expanded="true"
                aria-controls="dropdown-menu-4"
              >
                <span>
                  <span className="icon_items">
                    <img
                      className="lazyloaded"
                      data-src="images/menu/Vertical_icon_5.png"
                      src="images/menu/Vertical_icon_5.png"
                      alt=""
                    />
                  </span>
                  Jewelry & Accessories
                </span>
                <span className="btn-open-sub"></span>
              </a>
              <div id="dropdown-menu-4" className="collapse">
                <ul className="sub-nav-menu">
                  <li>
                    <a href="#" className="sub-nav-link">
                      <span>Accessories</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="sub-nav-link">
                      <span>Hat</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="sub-nav-link">
                      <span>Sunglasses</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="sub-nav-link">
                      <span>Shoes</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="nav-mb-item">
              <a href="#" className="mb-menu-link">
                <span className="menu-title">
                  <span className="icon_items">
                    <img
                      className="lazyloaded"
                      data-src="images/menu/Vertical_icon_6.png"
                      src="images/menu/Vertical_icon_6.png"
                      alt=""
                    />
                  </span>
                  Health & Beauty
                </span>
              </a>
            </li>
            <li className="nav-mb-item">
              <a href="#" className="mb-menu-link">
                <span className="menu-title">
                  <span className="icon_items">
                    <img
                      className="lazyloaded"
                      data-src="images/menu/Vertical_icon_7.png"
                      src="images/menu/Vertical_icon_7.png"
                      alt=""
                    />
                  </span>
                  Mom & Baby
                </span>
              </a>
            </li>
            <li className="nav-mb-item">
              <a href="#" className="mb-menu-link">
                <span className="menu-title">
                  <span className="icon_items">
                    <img
                      className="lazyloaded"
                      data-src="images/menu/Vertical_icon_8.png"
                      src="images/menu/Vertical_icon_8.png"
                      alt=""
                    />
                  </span>
                  Game & Console
                </span>
              </a>
            </li>
            <li className="nav-mb-item">
              <a href="#" className="mb-menu-link">
                <span className="menu-title">
                  <span className="icon_items">
                    <img
                      className="lazyloaded"
                      data-src="images/menu/Vertical_icon_9.png"
                      src="images/menu/Vertical_icon_9.png"
                      alt=""
                    />
                  </span>
                  Cars & Motorbikes
                </span>
              </a>
            </li>
            <li className="nav-mb-item">
              <a href="#" className="mb-menu-link">
                <span className="menu-title">
                  <span className="icon_items">
                    <img
                      className="lazyloaded"
                      data-src="images/menu/Vertical_icon_10.png"
                      src="images/menu/Vertical_icon_10.png"
                      alt=""
                    />
                  </span>
                  Sport & Outdoor
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileMenuVertical;
