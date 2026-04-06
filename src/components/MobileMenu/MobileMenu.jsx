/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const MobileMenu = () => {
  return (
    <div className="offcanvas offcanvas-start canvas-mb" id="mobileMenu">
      <span
        className="icon-close icon-close-popup"
        data-bs-dismiss="offcanvas"
      ></span>
      <div className="mb-canvas-content">
        <div className="mb-body">
          <ul className="nav-ul-mb" id="wrapper-menu-navigation">
            <li className="nav-mb-item">
              <a
                href="#dropdown-menu-one"
                className="collapsed mb-menu-link current"
                data-bs-toggle="collapse"
                aria-expanded="true"
                aria-controls="dropdown-menu-one"
              >
                <span>Home</span>
                <span className="btn-open-sub"></span>
              </a>
              <div id="dropdown-menu-one" className="collapse">
                <ul className="sub-nav-menu">
                  <li>
                    <a href="index-2.html" className="sub-nav-link">
                      Home Fashion 01
                    </a>
                  </li>
                  <li>
                    <a href="#" className="sub-nav-link">
                      Home Fashion 02
                    </a>
                  </li>
                  <li>
                    <a href="#" className="sub-nav-link">
                      Home Fashion 03
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-mb-item">
              <a
                href="#dropdown-menu-two"
                className="collapsed mb-menu-link current"
                data-bs-toggle="collapse"
                aria-expanded="true"
                aria-controls="dropdown-menu-two"
              >
                <span>Shop</span>
                <span className="btn-open-sub"></span>
              </a>
              <div id="dropdown-menu-two" className="collapse">
                <ul className="sub-nav-menu" id="sub-menu-navigation">
                  <li>
                    <a
                      href="#sub-shop-one"
                      className="sub-nav-link collapsed"
                      data-bs-toggle="collapse"
                      aria-expanded="true"
                      aria-controls="sub-shop-one"
                    >
                      <span>Shop layouts</span>
                      <span className="btn-open-sub"></span>
                    </a>
                    <div id="sub-shop-one" className="collapse">
                      <ul className="sub-nav-menu sub-menu-level-2">
                        <li>
                          <a href="shop-default.html" className="sub-nav-link">
                            Default
                          </a>
                        </li>
                        <li>
                          <a
                            href="shop-left-sidebar.html"
                            className="sub-nav-link"
                          >
                            Left sidebar
                          </a>
                        </li>
                        <li>
                          <a href="#" className="sub-nav-link">
                            Right sidebar
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
                      href="#sub-shop-two"
                      className="sub-nav-link collapsed"
                      data-bs-toggle="collapse"
                      aria-expanded="true"
                      aria-controls="sub-shop-two"
                    >
                      <span>Features</span>
                      <span className="btn-open-sub"></span>
                    </a>
                    <div id="sub-shop-two" className="collapse">
                      <ul className="sub-nav-menu sub-menu-level-2">
                        <li>
                          <a href="#" className="sub-nav-link">
                            Pagination links
                          </a>
                        </li>
                        <li>
                          <a href="#" className="sub-nav-link">
                            Pagination loadmore
                          </a>
                        </li>
                        <li>
                          <a href="#" className="sub-nav-link">
                            Pagination infinite scrolling
                          </a>
                        </li>
                        <li>
                          <a href="#" className="sub-nav-link">
                            Filter sidebar
                          </a>
                        </li>
                        <li>
                          <a href="#" className="sub-nav-link">
                            Filter hidden
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
                href="#dropdown-menu-three"
                className="collapsed mb-menu-link current"
                data-bs-toggle="collapse"
                aria-expanded="true"
              >
                <span>Products</span>
              </a>
            </li>
            <li className="nav-mb-item">
              <a
                href="#dropdown-menu-four"
                className="collapsed mb-menu-link current"
                data-bs-toggle="collapse"
                aria-expanded="true"
                aria-controls="dropdown-menu-four"
              >
                <span>Pages</span>
                <span className="btn-open-sub"></span>
              </a>
              <div id="dropdown-menu-four" className="collapse">
                <ul className="sub-nav-menu">
                  <li>
                    <a href="about-us.html" className="sub-nav-link">
                      <span>About us</span>
                    </a>
                  </li>
                  <li>
                    <a href="contact.html" className="sub-nav-link">
                      <span>Contact us</span>
                    </a>
                  </li>
                  <li className="menu-item-2">
                    <a href="#" className="sub-nav-link">
                      <span>My account</span>
                    </a>
                    <div id="sub-dropdown-menu-four" className="collapse">
                      <ul className="sub-nav-menu">
                        <li>
                          <a href="my-account.html" className="sub-nav-link">
                            <span>My account</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="my-account-orders.html"
                            className="sub-nav-link"
                          >
                            <span>My order</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="my-account-address.html"
                            className="sub-nav-link"
                          >
                            <span>My address</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="my-account-edit.html"
                            className="sub-nav-link"
                          >
                            <span>My account details</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="my-account-wishlist.html"
                            className="sub-nav-link"
                          >
                            <span>My wishlist</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="gallery.html" className="sub-nav-link">
                      <span>Gallery</span>
                    </a>
                  </li>
                  <li>
                    <a href="portfolio1.html" className="sub-nav-link">
                      <span>Portfolio 1</span>
                    </a>
                  </li>
                  <li>
                    <a href="portfolio2.html" className="sub-nav-link">
                      <span>Portfolio 2</span>
                    </a>
                  </li>
                  <li>
                    <a href="faqs.html" className="sub-nav-lin">
                      <span>Faqs</span>
                    </a>
                  </li>
                  <li>
                    <a href="checkout.html" className="sub-nav-link">
                      <span>Checkout</span>
                    </a>
                  </li>
                  <li>
                    <a href="view-cart.html" className="sub-nav-link">
                      <span>View Cart</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-mb-item">
              <a
                href="#dropdown-menu-five"
                className="collapsed mb-menu-link current"
                data-bs-toggle="collapse"
                aria-expanded="true"
                aria-controls="dropdown-menu-five"
              >
                <span>Blog</span>
                <span className="btn-open-sub"></span>
              </a>
              <div id="dropdown-menu-five" className="collapse">
                <ul className="sub-nav-menu">
                  <li>
                    <a href="blog-sidebar-left.html" className="sub-nav-link">
                      <span>Blog Sidebar Left</span>
                    </a>
                  </li>
                  <li>
                    <a href="blog-sidebar-right.html" className="sub-nav-link">
                      <span>Blog Sidebar Right</span>
                    </a>
                  </li>
                  <li>
                    <a href="blog-detail.html" className="sub-nav-link">
                      <span>Blog Detail</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-mb-item">
              <a href="#" className="mb-menu-link">
                Buy now
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
