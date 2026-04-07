import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import { BsCart, BsTruck } from "react-icons/bs";
import { FiClock, FiFilter, FiPhone, FiRepeat } from "react-icons/fi";
import { Link } from "react-router-dom";
import products from "../../DataJs/product?.js";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { PiCaretLineLeftBold, PiCaretLineRightBold } from "react-icons/pi";
import axios from "axios";
import Loader from "../../components/Loader/Loader.jsx";

const Product = ({ toggleFilterSidebar, openQuickView }) => {
  const [productsData, setProductsData] = useState(products);

  useEffect(() => {
    setProductsData(products);
  }, []);

  const [grid, setGrid] = useState(4); // default grid-4
  const [open, setOpen] = useState(false);
  const [openWidget, setOpenWidget] = useState({
    categories: true,
    subCategories: true,
    brand: true,
  });

  const toggleDropdown = () => setOpen(!open);

  const toggleWidget = (name) => {
    setOpenWidget((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const [data, setData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [loading, setLoading] = useState(false);

  const BASE_URL = `https://apps.fusiontradebd.com/server/product_api/product/`; // :white_check_mark: your DRF API endpoint

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        // Construct the params dynamically by adding only the fields that have values
        const params = {
          p: currentPage,
          items_per_page: itemsPerPage,
          search: searchTerm.trim() || null,
        };

        // Make the API call with the dynamically constructed params
        const response = await axios.get(BASE_URL, { params });

        // Handle the response data
        setData(response.data);
      } catch (error) {
        console.error("Error fetching expense categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [BASE_URL, currentPage, itemsPerPage, searchTerm]);

  // destructuring backend data safely
  const { results: arr = [], total_pages: totalPages = 1, count = 0 } = data;

  // Pagination Handlers
  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
  };

  const handleItemsPerPageChange = (e) => {
    const newItemsPerPage = Number(e.target.value);
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  };

  // Search Handler
  const handleSearchChange = (e) => {
    const newSearch = e.target.value;
    setSearchTerm(newSearch);
    setCurrentPage(1);
  };

  // Index for numbering
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  return (
    <Wrapper>
      {/* <div className="breadcrumb">
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
      </div> */}

      <section className="flat-spacing-0 mt-4">
        <div className="container">
          <div className="ss-shop-control grid-3 align-items-center">
            <ul className="ss-control-layout d-flex justify-content-start align-items-center">
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

            <div className="header__search">
              <form className="mini-search-from">
                <fieldset className="text">
                  <input
                    type="text"
                    placeholder="Search"
                    className=""
                    name="text"
                    aria-required="true"
                    required=""
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                </fieldset>
                <button className="" type="submit">
                  <i className="icon-search"></i>
                </button>
              </form>
            </div>

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
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="ss-row-flex">
            <aside className="ss-shop-sidebar wrap-sidebar-mobile">
              <div className="ss-control-filter mb-4">
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

              <div className="ss-control-filter">
                <Link
                  // to="#filterShop"
                  className="btn-filter"
                  // onClick={toggleFilterSidebar}
                >
                  <FiFilter size={20} />
                  <span className="text">Clear Filter</span>
                </Link>
              </div>

              {/* Categories */}
              <div className="widget-facet wd-categories">
                <div
                  className="facet-title"
                  onClick={() => toggleWidget("categories")}
                  role="button"
                >
                  <span> Categories</span>
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

              {/* Sub Categories */}
              <div className="widget-facet wd-categories">
                <div
                  className="facet-title"
                  onClick={() => toggleWidget("subCategories")}
                  role="button"
                >
                  <span>Sub Categories</span>
                  <span
                    className={`icon ${
                      openWidget.subCategories
                        ? "icon-arrow-up"
                        : "icon-arrow-down"
                    }`}
                  ></span>
                </div>
                {openWidget.subCategories && (
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

              {/* Brand */}
              <div className="widget-facet wd-categories">
                <div
                  className="facet-title"
                  onClick={() => toggleWidget("brand")}
                  role="button"
                >
                  <span>Brand</span>
                  <span
                    className={`icon ${
                      openWidget.brand ? "icon-arrow-up" : "icon-arrow-down"
                    }`}
                  ></span>
                </div>
                {openWidget.brand && (
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

              <div className="widget-facet">
                <div
                  className="facet-title"
                  // data-bs-target="#price"
                  // data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="price"
                  role="button"
                >
                  <span>Price</span>
                  {/* <span className="icon icon-arrow-up"></span> */}
                </div>
                <div id="price" className="collapse show">
                  <div className="widget-price filter-price">
                    <div className="tow-bar-block">
                      <div className="progress-price"></div>
                    </div>
                    <div className="range-input">
                      <input
                        className="range-min"
                        type="range"
                        min="0"
                        max="300"
                        value="0"
                      />
                      <input
                        className="range-max"
                        type="range"
                        min="0"
                        max="300"
                        value="300"
                      />
                    </div>
                    <div className="box-title-price">
                      <span className="title-price">Price :</span>
                      <div className="caption-price">
                        <div>
                          <span>$</span>
                          <span className="min-price">0</span>
                        </div>
                        <span>-</span>
                        <div>
                          <span>$</span>
                          <span className="max-price">300</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="ss-control-filter">
                <Link
                  // to="#filterShop"
                  className="btn-filter"
                  // onClick={toggleFilterSidebar}
                >
                  <FiFilter size={20} />
                  <span className="text">Clear Filter</span>
                </Link>
              </div>
            </aside>

            <div className="products-listing wrapper-control-shop ss-shop-content">
              {loading ? (
                <div
                  style={{ height: "500px" }}
                  className="d-flex justify-content-center align-items-center"
                >
                  <span>Loading</span>
                </div>
              ) : (
                <div
                  className={`product-layout grid__item grid-layout wrapper-shop grid-${grid}`}
                  data-grid={`grid-${grid}`}
                >
                  {arr.map((product) => {
                    return (
                      <div key={product?.id} className="item mb-4">
                        <div className="product-item card-product">
                          <div className="product-item-container">
                            <div className="left-block">
                              <Link
                                to="/product-details"
                                className="product-img"
                              >
                                <span
                                  className="media media--transparent media-- media--hover-effect"
                                  style={{ paddingBottom: "100%" }}
                                >
                                  <img
                                    className="lazyload img-product"
                                    src={
                                      product?.p_image ||
                                      "/default-produt-image.jpg"
                                    }
                                    style={{
                                      height:
                                        grid === 2
                                          ? "441px"
                                          : grid === 3
                                            ? "278px"
                                            : "196px",
                                      width:
                                        grid === 2
                                          ? "441px"
                                          : grid === 3
                                            ? "278px"
                                            : "196px",
                                    }}
                                    alt="image-product"
                                  />

                                  <img
                                    className="lazyload img-hover"
                                    src={"/user image-png.png"}
                                    style={{
                                      height:
                                        grid === 2
                                          ? "441px"
                                          : grid === 3
                                            ? "278px"
                                            : "196px",
                                      width:
                                        grid === 2
                                          ? "441px"
                                          : grid === 3
                                            ? "278px"
                                            : "196px",
                                    }}
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
                                  <span className="tooltip">
                                    Add to Wishlist
                                  </span>
                                  <span className="icon icon-delete"></span>
                                </Link>
                                <Link
                                  to="#compare"
                                  data-bs-toggle="offcanvas"
                                  className="box-icon bg_white compare btn-icon-action"
                                >
                                  <FiRepeat size={16} />
                                  <span className="tooltip">
                                    Add to Compare
                                  </span>
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
                                    {product?.vendor}
                                  </Link>
                                </div>

                                {/* ===== Stock Status ===== */}
                                {product?.p_purchase_stock > 0 ? (
                                  <div
                                    className="stock-status text-success"
                                    style={{
                                      fontSize: "13px",
                                      marginTop: "4px",
                                    }}
                                  >
                                    {/* In Stock ({product?.p_purchase_stock}) */}
                                    In Stock
                                  </div>
                                ) : (
                                  <div
                                    className="stock-status text-danger"
                                    style={{
                                      fontSize: "13px",
                                      marginTop: "4px",
                                    }}
                                  >
                                    Out of Stock
                                  </div>
                                )}
                                <h4 className="title-product">
                                  <Link
                                    to="/product-details"
                                    className="title link"
                                    style={{
                                      fontSize: "12px",
                                      fontWeight: "700",
                                    }}
                                  >
                                    {product?.p_name} ({product?.p_brand?.name})
                                  </Link>
                                </h4>

                                <div className="price">
                                  {product?.p_payable_price !==
                                  product?.p_price ? (
                                    <>
                                      <div className="product-price--regular">
                                        ${product?.p_payable_price}
                                      </div>
                                      <div className="price-item--sale">
                                        ${product?.p_price}
                                      </div>
                                    </>
                                  ) : (
                                    <div className="product-price">
                                      ${product?.p_price}
                                    </div>
                                  )}
                                </div>
                              </div>
                              {product?.p_purchase_stock > 0 && (
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
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              <div className="pagination d-flex justify-content-between align-items-center mt-4 mb-2">
                <div className="d-flex align-items-center">
                  <span className="pagination_text">Rows per page :</span>

                  <div className="ms-2">
                    <select
                      aria-label="Rows per page :"
                      className="form-select fs-6"
                      style={{ width: "80px" }}
                      value={itemsPerPage}
                      onChange={handleItemsPerPageChange}
                    >
                      <option value="12">12</option>
                      <option value="16">16</option>
                      <option value="20">20</option>
                    </select>
                  </div>
                </div>
                <span className="pagination-info">
                  {!isNaN(indexOfFirstItem) &&
                  !isNaN(indexOfLastItem) &&
                  !isNaN(count)
                    ? `${indexOfFirstItem + 1}-${Math.min(
                        indexOfLastItem,
                        count,
                      )} of ${count}`
                    : ""}
                  &nbsp;
                  {!isNaN(totalPages) &&
                    ` (Total Page${totalPages > 1 ? "s" : ""} : ${totalPages})`}
                </span>
                <div className="pagination-buttons d-flex">
                  <button
                    type="button"
                    aria-label="First Page"
                    className="btn btn-link"
                    onClick={() => handlePageChange(1)}
                    disabled={currentPage === 1}
                  >
                    <PiCaretLineLeftBold />
                  </button>

                  <button
                    type="button"
                    aria-label="Previous Page"
                    className="btn btn-link"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    <FaChevronLeft />
                  </button>

                  <button
                    type="button"
                    aria-label="Next Page"
                    className="btn btn-link"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    <FaChevronRight />
                  </button>

                  <button
                    type="button"
                    aria-label="Last Page"
                    className="btn btn-link"
                    onClick={() => handlePageChange(totalPages)}
                    disabled={currentPage === totalPages}
                  >
                    <PiCaretLineRightBold />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="btn-sidebar-style2">
        <button data-bs-toggle="offcanvas" data-bs-target="#sidebarmobile">
          <i className="icon icon-sidebar-2"></i>
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default Product;
