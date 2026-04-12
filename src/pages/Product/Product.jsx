import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import { FiFilter, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { PiCaretLineLeftBold, PiCaretLineRightBold } from "react-icons/pi";
import axios from "axios";
import Loader2 from "../../components/Loader/Loader2";
import { useCartContext } from "../../context/CartContext";
import { FaHeart } from "react-icons/fa";

const Product = ({
  toggleFilterSidebar,
  openQuickView,
  categories,
  subCategories,
  brands,
}) => {
  const { addToWishlist, isInWishlist, removeWishlistItem, addToCart } =
    useCartContext();

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

  // === State for selections + searches ===
  const [selectedCategory, setSelectedCategory] = useState(
    localStorage.getItem("selectedCategory") || "all",
  );
  const [selectedSubCategory, setSelectedSubCategory] = useState(
    localStorage.getItem("selectedSubCategory") || "all",
  );
  const [selectedBrand, setSelectedBrand] = useState(
    localStorage.getItem("selectedBrand") || "all",
  );

  // Separate search boxes
  const [categorySearch, setCategorySearch] = useState(
    localStorage.getItem("categorySearch") || "",
  );
  const [subCategorySearch, setSubCategorySearch] = useState(
    localStorage.getItem("subCategorySearch") || "",
  );
  const [brandSearch, setBrandSearch] = useState(
    localStorage.getItem("brandSearch") || "",
  );

  // Save to localStorage
  useEffect(
    () => localStorage.setItem("selectedCategory", selectedCategory),
    [selectedCategory],
  );
  useEffect(
    () => localStorage.setItem("selectedSubCategory", selectedSubCategory),
    [selectedSubCategory],
  );
  useEffect(
    () => localStorage.setItem("selectedBrand", selectedBrand),
    [selectedBrand],
  );
  useEffect(
    () => localStorage.setItem("categorySearch", categorySearch),
    [categorySearch],
  );
  useEffect(
    () => localStorage.setItem("subCategorySearch", subCategorySearch),
    [subCategorySearch],
  );
  useEffect(
    () => localStorage.setItem("brandSearch", brandSearch),
    [brandSearch],
  );

  // Filtered lists for displaying based on search
  const filteredCategories = categories.filter((cat) =>
    cat.name.toLowerCase().includes(categorySearch.toLowerCase()),
  );
  const filteredSubCategories = subCategories
    .filter(
      (sub) =>
        selectedCategory === "all" || sub.category === Number(selectedCategory),
    )
    .filter((sub) =>
      sub.name.toLowerCase().includes(subCategorySearch.toLowerCase()),
    );
  const filteredBrands = brands.filter((b) =>
    b.name.toLowerCase().includes(brandSearch.toLowerCase()),
  );

  // Handlers
  const handleSelectCategory = (id) => {
    setSelectedCategory(id);
    setSelectedSubCategory("all"); // reset subcategory when category changes
  };
  const handleSelectSubCategory = (id) => setSelectedSubCategory(id);
  const handleSelectBrand = (id) => setSelectedBrand(id);

  // Handlers for search input
  const handleCategorySearch = (e) => setCategorySearch(e.target.value);
  const handleSubCategorySearch = (e) => setSubCategorySearch(e.target.value);
  const handleBrandSearch = (e) => setBrandSearch(e.target.value);

  // Sync category from localStorage when it changes
  useEffect(() => {
    const syncFromLocalStorage = (e) => {
      if (e.detail?.key === "selectedCategory") {
        const newCategory = String(e.detail.value);

        setSelectedCategory(newCategory);
        setSelectedSubCategory("all");
        setCurrentPage(1);
      }
    };

    window.addEventListener("localStorageChange", syncFromLocalStorage);

    return () => {
      window.removeEventListener("localStorageChange", syncFromLocalStorage);
    };
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, selectedSubCategory, selectedBrand]);

  // Price Range
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });

  // Sorting
  const [sortBy, setSortBy] = useState("featured"); // featured / a-z / z-a / low-high / high-low

  const handleSortChange = (value) => {
    setSortBy(value);
  };

  const handleClearAll = () => {
    setSelectedCategory("all");
    setSelectedSubCategory("all");
    setSelectedBrand("all");
    setCategorySearch("");
    setSubCategorySearch("");
    setBrandSearch("");
    setPriceRange({ min: 0, max: 1000 });
    setSortBy("featured");
    setSearchTerm("");
    setCurrentPage(1);
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
        const params = {
          p: currentPage,
          items_per_page: itemsPerPage,
          search: searchTerm.trim() || null,
          category: selectedCategory !== "all" ? selectedCategory : null,
          sub_category:
            selectedSubCategory !== "all" ? selectedSubCategory : null,
          brand: selectedBrand !== "all" ? selectedBrand : null,
          price_min: priceRange.min,
          price_max: priceRange.max,
          sort_by: sortBy,
        };

        const response = await axios.get(BASE_URL, { params });
        setData(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [
    currentPage,
    itemsPerPage,
    searchTerm,
    selectedCategory,
    selectedSubCategory,
    selectedBrand,
    priceRange,
    sortBy,
    BASE_URL,
  ]);

  // destructuring backend data safely
  const { results: arr = [], total_pages: totalPages = 1, count = null } = data;

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
      <section className="flat-spacing-0 my-4">
        <div className="container">
          <div className="ss-shop-control d-flex justify-content-between align-items-center wwwxxxyyy">
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
                    <div
                      className="select-item"
                      onClick={() => handleSortChange("a-z")}
                    >
                      Alphabetically, A-Z
                    </div>
                    <div
                      className="select-item"
                      onClick={() => handleSortChange("z-a")}
                    >
                      Alphabetically, Z-A
                    </div>
                    <div
                      className="select-item"
                      onClick={() => handleSortChange("low-high")}
                    >
                      Price, low to high
                    </div>
                    <div
                      className="select-item"
                      onClick={() => handleSortChange("high-low")}
                    >
                      Price, high to low
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="ss-row-flex">
            <aside className="ss-shop-sidebar wrap-sidebar-mobile">
              <div className="d-flex justify-content-start align-items-center gap-2 mb-4">
                <div className="ss-control-filter">
                  <Link
                    className="btn-filter"
                    onClick={toggleFilterSidebar}
                    style={{ border: "1px solid #F93355" }}
                  >
                    <FiFilter size={20} />
                    <span className="text">Filtering</span>
                  </Link>
                </div>

                <div className="ss-control-filter">
                  <Link
                    className="btn-filter"
                    style={{ backgroundColor: "#F93355", color: "#fff" }}
                    onClick={handleClearAll}
                  >
                    <FiX size={20} />
                    <span className="text">Clear All</span>
                  </Link>
                </div>
              </div>

              {/* Price */}
              <div className="widget-facet">
                <div
                  className="facet-title mb-0"
                  aria-expanded="true"
                  aria-controls="price"
                  role="button"
                >
                  <span className="mb-0">Price</span>
                </div>
                <div id="price" className="collapse show mt-0">
                  <div className="widget-price filter-price my-1">
                    <div className="price-inputs d-flex gap-2">
                      <input
                        type="number"
                        min={0}
                        value={priceRange.min}
                        onChange={(e) =>
                          setPriceRange({
                            ...priceRange,
                            min: Number(e.target.value),
                          })
                        }
                        placeholder="Min"
                        className="search-input mb-2 px-3 py-2"
                        style={{ border: "1px solid #000" }}
                      />
                      <input
                        type="number"
                        min={0}
                        value={priceRange.max}
                        onChange={(e) =>
                          setPriceRange({
                            ...priceRange,
                            max: Number(e.target.value),
                          })
                        }
                        placeholder="Max"
                        className="search-input mb-2 px-3 py-2"
                        style={{ border: "1px solid #000" }}
                      />
                    </div>

                    <div className="caption-price mt-2 d-flex justify-content-between">
                      <div>
                        <span>৳</span> {priceRange.min}
                      </div>
                      <div>
                        <span>৳</span> {priceRange.max}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Categories */}
              <div className="widget-facet wd-categories">
                <div
                  className="facet-title mb-1"
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
                <input
                  type="text"
                  placeholder="Search Category..."
                  value={categorySearch}
                  onChange={handleCategorySearch}
                  className="search-input mb-2 px-3 py-2 w-75"
                  style={{ border: "1px solid #000" }}
                />
                {openWidget.categories && (
                  <ul className="list-categoris current-scrollbar mb_36">
                    <li
                      className={`cate-item ${selectedCategory === "all" ? "current" : ""}`}
                      onClick={() => handleSelectCategory("all")}
                    >
                      <Link to="#">All</Link>
                    </li>
                    {filteredCategories.map((cat) => (
                      <li
                        key={cat.id}
                        className={`cate-item ${
                          selectedCategory === String(cat.id) ? "current" : ""
                        }`}
                        onClick={() => handleSelectCategory(String(cat.id))}
                      >
                        <Link to="#">{cat.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Sub Categories */}
              <div className="widget-facet wd-categories">
                <div
                  className="facet-title mb-1"
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
                <input
                  type="text"
                  placeholder="Search SubCategory..."
                  value={subCategorySearch}
                  onChange={handleSubCategorySearch}
                  className="search-input mb-2 px-3 py-2 w-75"
                  style={{ border: "1px solid #000" }}
                />
                {openWidget.subCategories && (
                  <ul className="list-categoris current-scrollbar mb_36">
                    <li
                      className={`cate-item ${
                        selectedSubCategory === "all" ? "current" : ""
                      }`}
                      onClick={() => handleSelectSubCategory("all")}
                    >
                      <Link to="#">All</Link>
                    </li>
                    {filteredSubCategories.map((sub) => (
                      <li
                        key={sub.id}
                        className={`cate-item ${
                          selectedSubCategory === String(sub.id)
                            ? "current"
                            : ""
                        }`}
                        onClick={() => handleSelectSubCategory(String(sub.id))}
                      >
                        <Link to="#">{sub.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Brand */}
              <div className="widget-facet wd-categories">
                <div
                  className="facet-title mb-1"
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
                <input
                  type="text"
                  placeholder="Search Brand..."
                  value={brandSearch}
                  onChange={handleBrandSearch}
                  className="search-input mb-2 px-3 py-2 w-75"
                  style={{ border: "1px solid #000" }}
                />
                {openWidget.brand && (
                  <ul className="list-categoris current-scrollbar mb_36">
                    <li
                      className={`cate-item ${selectedBrand === "all" ? "current" : ""}`}
                      onClick={() => handleSelectBrand("all")}
                    >
                      <Link to="#">All</Link>
                    </li>
                    {filteredBrands.map((b) => (
                      <li
                        key={b.id}
                        className={`cate-item ${
                          selectedBrand === String(b.id) ? "current" : ""
                        }`}
                        onClick={() => handleSelectBrand(String(b.id))}
                      >
                        <Link to="#">{b.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </aside>

            <div className="products-listing wrapper-control-shop ss-shop-content">
              {loading ? (
                <div
                  style={{ height: "500px" }}
                  className="d-flex justify-content-center align-items-center"
                >
                  <Loader2 />
                </div>
              ) : (
                <div className="">
                  {count === 0 ? (
                    <div
                      style={{ height: "500px" }}
                      className="d-flex justify-content-center align-items-center"
                    >
                      <span className="fs-2 text-danger">
                        No Product Found...
                      </span>
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
                                    to={`/product-details/${product.id}`}
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
                                      onClick={(e) => {
                                        e.preventDefault();
                                        if (!isInWishlist(product.id)) {
                                          addToWishlist(product.id, product);
                                        } else {
                                          removeWishlistItem(product.id);
                                        }
                                      }}
                                      className="box-icon bg_white wishlist ss-btn-loading"
                                    >
                                      {isInWishlist(product.id) ? (
                                        <FaHeart size={16} color="red" />
                                      ) : (
                                        <AiOutlineHeart size={16} />
                                      )}

                                      <span className="tooltip">
                                        {isInWishlist(product.id)
                                          ? "Already in Wishlist"
                                          : "Add to Wishlist"}
                                      </span>
                                    </Link>

                                    <Link
                                      className="box-icon bg_white quickview ss-btn-loading"
                                      onClick={openQuickView}
                                    >
                                      <AiOutlineEye size={16} />
                                      <span className="tooltip">
                                        Quick View
                                      </span>
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
                                        to={`/product-details/${product.id}`}
                                        className="title link"
                                        style={{
                                          fontSize: "12px",
                                          fontWeight: "700",
                                        }}
                                      >
                                        {product?.p_name} (
                                        {product?.p_brand?.name})
                                      </Link>
                                    </h4>

                                    <div className="price">
                                      {product?.p_payable_price !==
                                      product?.p_price ? (
                                        <>
                                          <div className="product-price--regular">
                                            ৳&nbsp;{product?.p_payable_price}
                                          </div>
                                          <div className="price-item--sale">
                                            ৳&nbsp;{product?.p_price}
                                          </div>
                                        </>
                                      ) : (
                                        <div className="product-price">
                                          ৳&nbsp;{product?.p_payable_price}
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                  {product?.p_purchase_stock > 0 && (
                                    <div className="button-link">
                                      <Link
                                        // to="#quick_add"
                                        // data-bs-toggle="modal"
                                        className="btn-addToCart grl btn_df"
                                        // onClick={() => {
                                        //   toggleCart();
                                        //   addToCart(
                                        //     product.id,
                                        //     quantity,
                                        //     null,
                                        //     null,
                                        //     product,
                                        //   );
                                        // }}

                                        onClick={() => {
                                          addToCart(
                                            product.id,
                                            1, // ✅ FIXED
                                            null,
                                            null,
                                            product,
                                          );
                                        }}
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

const Wrapper = styled.section`
  @media only screen and (max-width: 767px) {
    .wwwxxxyyy,
    .pagination {
      flex-direction: column !important;
      gap: 2px !important;
    }
  }
`;

export default Product;
