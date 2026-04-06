import React, { useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import { BsCart, BsTruck } from "react-icons/bs";
import { FiClock, FiFilter, FiPhone, FiRepeat } from "react-icons/fi";
import { Link } from "react-router-dom";
import products from "../../product.js";

const Product = ({ toggleFilterSidebar, openQuickView }) => {
  const [productsData, setProductsData] = useState(products);
  const [grid, setGrid] = useState(4); // default grid-4
  const [open, setOpen] = useState(false);
  const [openWidget, setOpenWidget] = useState({
    categories: true,
    sale: true,
    shipping: true,
    follow: true,
    banner: true, // optional if you want toggle
  });

  useEffect(() => {
    setProductsData(products);
  }, []);

  const toggleDropdown = () => setOpen(!open);

  const toggleWidget = (name) => {
    setOpenWidget((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <>
      <div className="breadcrumb">
        <div className="container">
          <div className="breadcrumbtitle">
            <h2>Top</h2>
          </div>
          <div className="breadcrumb-wrap d-flex justify-content-center flex-wrap align-items-center">
            <div className="breadcrumb-list">
              <Link to="/" className="text">
                Home
              </Link>
              <i className="icon icon-arrow-right"></i>
              <Link to="#" className="text">
                Top
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section className="flat-spacing-0">
        <div className="container">
          <div className="ss-shop-control grid-3 align-items-center">
            <div className="ss-control-filter">
              <Link
                // to="#filterShop"
                // data-bs-toggle="offcanvas"
                className="btn-filter"
                onClick={toggleFilterSidebar}
              >
                <FiFilter size={20} />
                <span className="text">Filter by</span>
              </Link>
            </div>

            <ul className="ss-control-layout d-flex justify-content-center">
              {[2, 3, 4].map((num) => (
                <li
                  key={num}
                  className={`ss-view-layout-switch sw-layout-${num} ${
                    grid === num ? "active" : ""
                  }`}
                  onClick={() => setGrid(num)}
                >
                  <div className="item">
                    <span className={`icon icon-grid-${num}`}></span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="control-sorting d-flex justify-content-end">
              <div className="dropdown-sort" style={{ position: "relative" }}>
                <div
                  className="btn-select"
                  onClick={toggleDropdown}
                  style={{ cursor: "pointer" }}
                >
                  <span className="text-sort-value">Featured</span>
                  <span
                    className={`icon icon-arrow-down ${open ? "open" : ""}`}
                    style={{
                      display: "inline-block",
                      marginLeft: "5px",
                      transform: open ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "0.3s",
                    }}
                  ></span>
                </div>

                {open && (
                  <div
                    className="dropdown-menu"
                    style={{
                      display: "block",
                      position: "absolute",
                      top: "100%",
                      right: 0,
                      zIndex: 999,
                      background: "#fff",
                      boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
                      width: "200px",
                    }}
                  >
                    <div className="select-item active">
                      <span className="text-value-item">Featured</span>
                    </div>
                    <div className="select-item">
                      <span className="text-value-item">Best selling</span>
                    </div>
                    <div className="select-item">
                      <span className="text-value-item">
                        Alphabetically, A-Z
                      </span>
                    </div>
                    <div className="select-item">
                      <span className="text-value-item">
                        Alphabetically, Z-A
                      </span>
                    </div>
                    <div className="select-item">
                      <span className="text-value-item">
                        Price, low to high
                      </span>
                    </div>
                    <div className="select-item">
                      <span className="text-value-item">
                        Price, high to low
                      </span>
                    </div>
                    <div className="select-item">
                      <span className="text-value-item">Date, old to new</span>
                    </div>
                    <div className="select-item">
                      <span className="text-value-item">Date, new to old</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="ss-row-flex">
            <aside className="ss-shop-sidebar wrap-sidebar-mobile">
              {/* Categories */}
              <div className="widget-facet wd-categories">
                <div
                  className="facet-title"
                  onClick={() => toggleWidget("categories")}
                  role="button"
                >
                  <span>Product categories</span>
                  <span
                    className={`icon ${
                      openWidget.categories
                        ? "icon-arrow-up"
                        : "icon-arrow-down"
                    }`}
                  ></span>
                </div>
                {openWidget.categories && (
                  <ul className="list-categoris current-scrollbar mb_36">
                    <li className="cate-item current">
                      <Link to="#">
                        <span>Fashion</span>&nbsp;<span>(31)</span>
                      </Link>
                    </li>
                    <li className="cate-item">
                      <Link to="#">
                        <span>Men</span>&nbsp;<span>(9)</span>
                      </Link>
                    </li>
                    <li className="cate-item">
                      <Link to="#">
                        <span>Women</span>&nbsp;<span>(23)</span>
                      </Link>
                    </li>
                    <li className="cate-item">
                      <Link to="#">
                        <span>Denim</span>&nbsp;<span>(20)</span>
                      </Link>
                    </li>
                    <li className="cate-item">
                      <Link to="#">
                        <span>Dress</span>&nbsp;<span>(23)</span>
                      </Link>
                    </li>
                  </ul>
                )}
              </div>

              {/* Sale Products */}
              <div className="widget-facet">
                <div
                  className="facet-title"
                  onClick={() => toggleWidget("sale")}
                  role="button"
                >
                  <span>Sale products</span>
                  <span
                    className={`icon ${
                      openWidget.sale ? "icon-arrow-up" : "icon-arrow-down"
                    }`}
                  ></span>
                </div>
                {openWidget.sale && (
                  <div className="widget-featured-products mb_36">
                    <div className="featured-product-item">
                      <Link
                        to="/product-details"
                        className="card-product-wrapper"
                      >
                        <img
                          className="lazyload img-product"
                          src="images/products/img-feature-1.png"
                          alt="image-feature"
                        />
                      </Link>
                      <div className="card-product-info">
                        <Link to="#" className="title link">
                          Jersey thong body
                        </Link>
                        <span className="price">$105.95</span>
                      </div>
                    </div>
                    <div className="featured-product-item">
                      <Link
                        to="/product-details"
                        className="card-product-wrapper"
                      >
                        <img
                          className="lazyload img-product"
                          src="images/products/img-feature-2.png"
                          alt="image-feature"
                        />
                      </Link>
                      <div className="card-product-info">
                        <Link to="#" className="title link">
                          Lace-trimmed Satin Camisole Top
                        </Link>
                        <span className="price">€24,95</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Shipping */}
              <div className="widget-facet">
                <div
                  className="facet-title"
                  onClick={() => toggleWidget("shipping")}
                  role="button"
                >
                  <span>Shipping & Delivery</span>
                  <span
                    className={`icon ${
                      openWidget.shipping ? "icon-arrow-up" : "icon-arrow-down"
                    }`}
                  ></span>
                </div>
                {openWidget.shipping && (
                  <ul className="widget-iconbox-list mb_36">
                    <li className="iconbox-item">
                      <div className="box-icon w_50 round">
                        <BsTruck size={22} color="black" />
                      </div>
                      <div className="iconbox-content">
                        <h4 className="iconbox-title">Free shipping</h4>
                        <p className="iconbox-desc">
                          Free iconbox for all US order
                        </p>
                      </div>
                    </li>
                    <li className="iconbox-item">
                      <div className="box-icon w_50 round">
                        <FiPhone size={22} color="black" />
                      </div>
                      <div className="iconbox-content">
                        <h4 className="iconbox-title">Premium Support</h4>
                        <p className="iconbox-desc">
                          Support 24 hours Link day
                        </p>
                      </div>
                    </li>
                    <li className="iconbox-item">
                      <div className="box-icon w_50 round">
                        <FiClock size={22} color="black" />
                      </div>
                      <div className="iconbox-content">
                        <h4 className="iconbox-title">30 Days Return</h4>
                        <p className="iconbox-desc">
                          You have 30 days to return
                        </p>
                      </div>
                    </li>
                  </ul>
                )}
              </div>

              {/* Follow Us */}
              <div className="widget-facet">
                <div
                  className="facet-title"
                  onClick={() => toggleWidget("follow")}
                  role="button"
                >
                  <span>Follow us</span>
                  <span
                    className={`icon ${
                      openWidget.follow ? "icon-arrow-up" : "icon-arrow-down"
                    }`}
                  ></span>
                </div>
                {openWidget.follow && (
                  <ul className="tf-social-icon d-flex gap-10 mb_30">
                    <li>
                      <Link
                        to="#"
                        className="box-icon w_34 round bg_line social-facebook"
                      >
                        <i className="icon fs-14 icon-fb"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="box-icon w_34 round bg_line social-twiter"
                      >
                        <i className="icon fs-12 icon-Icon-x"></i>
                      </Link>
                    </li>
                  </ul>
                )}
              </div>

              {/* Banner */}
              <div className="widget-facet effect_4">
                <div
                  className="facet-title"
                  onClick={() => toggleWidget("banner")}
                  role="button"
                >
                  <span>Banner</span>
                  <span
                    className={`icon ${
                      openWidget.banner ? "icon-arrow-up" : "icon-arrow-down"
                    }`}
                  ></span>
                </div>
                {openWidget.banner && (
                  <div className="banners">
                    <Link to="#">
                      <img
                        className="lazyload img-product"
                        src="images/products/image-sidebar.png"
                        alt="image-product"
                      />
                    </Link>
                  </div>
                )}
              </div>
            </aside>

            <div className="products-listing wrapper-control-shop ss-shop-content">
              <div
                className={`product-layout grid__item grid-layout wrapper-shop grid-${grid}`}
                data-grid={`grid-${grid}`}
              >
                {productsData.map((product) => {
                  return (
                    <div key={product.id} className="item">
                      <div className="product-item card-product">
                        <div className="product-item-container">
                          <div className="left-block">
                            <Link to="/product-details" className="product-img">
                              <span
                                className="media media--transparent media-- media--hover-effect"
                                style={{ paddingBottom: "100%" }}
                              >
                                <img
                                  className="lazyload img-product"
                                  src={product.images.main}
                                  alt="image-product"
                                />
                                <img
                                  className="lazyload img-hover"
                                  src={product.images.hover}
                                  alt="image-product"
                                />
                              </span>
                            </Link>
                            <div className="list-product-btn column-right">
                              <Link
                                to="#"
                                className="box-icon bg_white wishlist btn-icon-action"
                              >
                                <AiOutlineHeart size={16} />
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
                                // to="#quick_view"
                                // data-bs-toggle="modal"
                                className="box-icon bg_white quickview ss-btn-loading"
                                onClick={openQuickView}
                              >
                                <AiOutlineEye size={16} />
                                <span className="tooltip">Quick View</span>
                              </Link>
                            </div>
                          </div>
                          <div className="right-block">
                            <div className="caption">
                              <div className="title-vendor">
                                <Link to="/product" title="Entry">
                                  {product.vendor}
                                </Link>
                              </div>
                              <h4 className="title-product">
                                <Link
                                  to="/product-details"
                                  className="title link"
                                >
                                  {product.title}
                                </Link>
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
                                {product.colors.map((color, index) => (
                                  <li
                                    key={index}
                                    className={`list-color-item color-swatch ${
                                      color.active ? "active" : ""
                                    }`}
                                  >
                                    <span className="tooltip">
                                      {color.name}
                                    </span>
                                    <span
                                      className={`swatch-value ${color.class}`}
                                    ></span>
                                    <img src={color.img} alt={color.name} />
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
                  );
                })}
              </div>
              {/* <!-- pagination --> */}
              <ul className="pagination-wrap pagination-list pagination-btn">
                <li className="active">
                  <Link to="#" className="pagination-link">
                    1
                  </Link>
                </li>
                <li>
                  <Link to="#" className="pagination-link">
                    2
                  </Link>
                </li>
                <li>
                  <Link to="#" className="pagination-link">
                    3
                  </Link>
                </li>
                <li>
                  <Link to="#" className="pagination-link">
                    4
                  </Link>
                </li>
                <li>
                  <Link to="#" className="pagination-link">
                    <span className="icon icon-arrow-right"></span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="btn-sidebar-style2">
        <button data-bs-toggle="offcanvas" data-bs-target="#sidebarmobile">
          <i className="icon icon-sidebar-2"></i>
        </button>
      </div>
    </>
  );
};

export default Product;
