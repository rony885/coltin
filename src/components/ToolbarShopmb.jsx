import React from "react";

const ToolbarShopmb = () => {
  return (
    <div
      className="offcanvas offcanvas-start canvas-mb toolbar-shop-mobile"
      id="toolbarShopmb"
    >
      <span
        className="icon-close icon-close-popup"
        data-bs-dismiss="offcanvas"
      ></span>
      <div className="mb-canvas-content">
        <div className="mb-body">
          <ul className="nav-ul-mb" id="wrapper-menu-navigation3">
            <li className="nav-mb-item">
              <a
                href="shop-default.html"
                className="ss-category-link mb-menu-link"
              >
                <span>Accessories</span>
              </a>
            </li>
            <li className="nav-mb-item">
              <a
                href="shop-default.html"
                className="ss-category-link mb-menu-link"
              >
                <span>Dog</span>
              </a>
            </li>
            <li className="nav-mb-item">
              <a
                href="shop-default.html"
                className="ss-category-link mb-menu-link"
              >
                <span>Grocery</span>
              </a>
            </li>
            <li className="nav-mb-item">
              <a
                href="shop-default.html"
                className="ss-category-link mb-menu-link"
              >
                <span>Handbag</span>
              </a>
            </li>
            <li className="nav-mb-item">
              <a
                href="#cate-menu-one"
                className="ss-category-link has-children collapsed mb-menu-link"
                data-bs-toggle="collapse"
                aria-expanded="true"
                aria-controls="cate-menu-one"
              >
                <span>Fashion</span>
                <span className="btn-open-sub"></span>
              </a>
              <div id="cate-menu-one" className="collapse list-cate">
                <ul className="sub-nav-menu" id="cate-menu-navigation">
                  <li>
                    <a
                      href="#cate-shop-one"
                      className="ss-category-link has-children sub-nav-link collapsed"
                      data-bs-toggle="collapse"
                      aria-expanded="true"
                      aria-controls="cate-shop-one"
                    >
                      <span>Mens</span>
                      <span className="btn-open-sub"></span>
                    </a>
                    <div id="cate-shop-one" className="collapse">
                      <ul className="sub-nav-menu sub-menu-level-2">
                        <li>
                          <a
                            href="shop-default.html"
                            className="ss-category-link sub-nav-link"
                          >
                            <span>Accessories</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="shop-default.html"
                            className="ss-category-link sub-nav-link"
                          >
                            <span>Shoes</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a
                      href="#cate-shop-two"
                      className="ss-category-link has-children sub-nav-link collapsed"
                      data-bs-toggle="collapse"
                      aria-expanded="true"
                      aria-controls="cate-shop-two"
                    >
                      <span>Womens</span>
                      <span className="btn-open-sub"></span>
                    </a>
                    <div id="cate-shop-two" className="collapse">
                      <ul className="sub-nav-menu sub-menu-level-2">
                        <li>
                          <a
                            href="shop-default.html"
                            className="ss-category-link sub-nav-link"
                          >
                            <span>Handbag</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="shop-default.html"
                            className="ss-category-link sub-nav-link"
                          >
                            <span>Tee</span>
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
                href="#cate-menu-two"
                className="ss-category-link has-children collapsed mb-menu-link"
                data-bs-toggle="collapse"
                aria-expanded="true"
                aria-controls="cate-menu-two"
              >
                <span>Men</span>
                <span className="btn-open-sub"></span>
              </a>
              <div id="cate-menu-two" className="collapse list-cate">
                <ul className="sub-nav-menu" id="cate-menu-navigation1">
                  <li>
                    <a
                      href="shop-default.html"
                      className="ss-category-link sub-nav-link"
                    >
                      <span>Accessories</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="shop-default.html"
                      className="ss-category-link sub-nav-link"
                    >
                      <span>Shoes</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-mb-item">
              <a
                href="shop-default.html"
                className="ss-category-link mb-menu-link"
              >
                <span>Tee</span>
              </a>
            </li>
            <li className="nav-mb-item">
              <a
                href="shop-default.html"
                className="ss-category-link mb-menu-link"
              >
                <span>Shoes</span>
              </a>
            </li>
            <li className="nav-mb-item">
              <a
                href="#cate-menu-three"
                className="ss-category-link has-children collapsed mb-menu-link"
                data-bs-toggle="collapse"
                aria-expanded="true"
                aria-controls="cate-menu-three"
              >
                <span>Women</span>
                <span className="btn-open-sub"></span>
              </a>
              <div id="cate-menu-three" className="collapse list-cate">
                <ul className="sub-nav-menu" id="cate-menu-navigation2">
                  <li>
                    <a
                      href="shop-default.html"
                      className="ss-category-link sub-nav-link"
                    >
                      <span>Handbag</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="shop-default.html"
                      className="ss-category-link sub-nav-link"
                    >
                      <span>Tee</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="mb-bottom">
          <a href="shop-default.html" className="ss-btn fw-5 btn-line">
            View all collection<i className="icon icon-arrow1-top-left"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ToolbarShopmb;
