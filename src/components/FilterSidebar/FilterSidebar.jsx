import React, { useEffect } from "react";
import styled from "styled-components";

const FilterSidebar = ({ filterSidebarOpen, closeFilterSidebar }) => {
  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    if (filterSidebarOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [filterSidebarOpen]);

  return (
    <Wrapper>
      {/* <div className="offcanvas offcanvas-start canvas-filter" id="filterShop"> */}

      {filterSidebarOpen && (
        <div
          className="modal-backdrop fade show"
          onClick={closeFilterSidebar}
        ></div>
      )}
      <div
        // id="filterShop"
        className={`offcanvas offcanvas-start canvas-filter ${
          filterSidebarOpen ? "show" : ""
        }`}
        style={{ display: filterSidebarOpen ? "block" : "none" }}
      >
        <div className="canvas-wrapper">
          <header className="canvas-header">
            <div className="filter-icon">
              <span>Sidebar</span>
            </div>
            <span
              className="icon-close icon-close-popup"
              onClick={closeFilterSidebar}
              role="button"
              aria-label="Close cart"
            ></span>
          </header>
          <div className="canvas-body">
            <div className="widget-facet wd-categories">
              <div
                className="facet-title"
                data-bs-target="#categories"
                data-bs-toggle="collapse"
                aria-expanded="true"
                aria-controls="categories"
                role="button"
              >
                <span>Categories</span>
                <span className="icon icon-arrow-up"></span>
              </div>
              <div id="categories2" className="collapse show">
                <ul className="list-categoris current-scrollbar mb_36">
                  <li className="cate-item current">
                    <a href="shop-default.html">
                      <span>Fashion</span>
                    </a>
                  </li>
                  <li className="cate-item">
                    <a href="shop-default.html">
                      <span>Men</span>
                    </a>
                  </li>
                  <li className="cate-item">
                    <a href="shop-default.html">
                      <span>Women</span>
                    </a>
                  </li>
                  <li className="cate-item">
                    <a href="shop-default.html">
                      <span>Denim</span>
                    </a>
                  </li>
                  <li className="cate-item">
                    <a href="shop-default.html">
                      <span>Dress</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <form
              action="#"
              id="facet-filter-form"
              className="facet-filter-form"
            >
              <div className="widget-facet">
                <div
                  className="facet-title"
                  data-bs-target="#availability"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="availability"
                  role="button"
                >
                  <span>Availability</span>
                  <span className="icon icon-arrow-up"></span>
                </div>
                <div id="availability" className="collapse show">
                  <ul className="tf-filter-group current-scrollbar mb_36">
                    <li className="list-item d-flex gap-12 align-items-center">
                      <input
                        type="radio"
                        name="availability"
                        className="tf-check"
                        id="availability-1"
                      />
                      <label htmlFor="availability-1" className="label">
                        <span>In stock</span>&nbsp;<span>(14)</span>
                      </label>
                    </li>
                    <li className="list-item d-flex gap-12 align-items-center">
                      <input
                        type="radio"
                        name="availability"
                        className="tf-check"
                        id="availability-2"
                      />
                      <label htmlFor="availability-2" className="label">
                        <span>Out of stock</span>&nbsp;<span>(2)</span>
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="widget-facet">
                <div
                  className="facet-title"
                  data-bs-target="#price"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="price"
                  role="button"
                >
                  <span>Price</span>
                  <span className="icon icon-arrow-up"></span>
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
                        defaultValue="0"
                      />
                      <input
                        className="range-max"
                        type="range"
                        min="0"
                        max="300"
                        defaultValue="300"
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
              <div className="widget-facet">
                <div
                  className="facet-title"
                  data-bs-target="#brand"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="brand"
                  role="button"
                >
                  <span>Brand</span>
                  <span className="icon icon-arrow-up"></span>
                </div>
                <div id="brand" className="collapse show">
                  <ul className="tf-filter-group current-scrollbar mb_36">
                    <li className="list-item d-flex gap-12 align-items-center">
                      <input
                        type="radio"
                        name="brand"
                        className="tf-check"
                        id="brand-1"
                      />
                      <label htmlFor="brand-1" className="label">
                        <span>Entry</span>&nbsp;<span>(8)</span>
                      </label>
                    </li>
                    <li className="list-item d-flex gap-12 align-items-center">
                      <input
                        type="radio"
                        name="brand"
                        className="tf-check"
                        id="brand-2"
                      />
                      <label htmlFor="brand-2" className="label">
                        <span>M&amp;H</span>&nbsp;<span>(8)</span>
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="widget-facet">
                <div
                  className="facet-title"
                  data-bs-target="#color"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="color"
                  role="button"
                >
                  <span>Color</span>
                  <span className="icon icon-arrow-up"></span>
                </div>
                <div id="color" className="collapse show">
                  <ul className="tf-filter-group filter-color current-scrollbar mb_36">
                    <li className="list-item d-flex gap-12 align-items-center">
                      <input
                        type="checkbox"
                        name="color"
                        className="ss-check-color bg_beige"
                        id="beige"
                        defaultValue="beige"
                      />
                      <label htmlFor="beige" className="label">
                        <span>Beige</span>&nbsp;<span>(3)</span>
                      </label>
                    </li>
                    <li className="list-item d-flex gap-12 align-items-center">
                      <input
                        type="checkbox"
                        name="color"
                        className="ss-check-color bg_dark"
                        id="black"
                        defaultValue="black"
                      />
                      <label htmlFor="black" className="label">
                        <span>Black</span>&nbsp;<span>(18)</span>
                      </label>
                    </li>
                    <li className="list-item d-flex gap-12 align-items-center">
                      <input
                        type="checkbox"
                        name="color"
                        className="ss-check-color bg_blue-2"
                        id="blue"
                        defaultValue="blue"
                      />
                      <label htmlFor="blue" className="label">
                        <span>Blue</span>&nbsp;<span>(3)</span>
                      </label>
                    </li>
                    <li className="list-item d-flex gap-12 align-items-center">
                      <input
                        type="checkbox"
                        name="color"
                        className="ss-check-color bg_brown"
                        id="brown"
                        defaultValue="brown"
                      />
                      <label htmlFor="brown" className="label">
                        <span>Brown</span>&nbsp;<span>(3)</span>
                      </label>
                    </li>
                    <li className="list-item d-flex gap-12 align-items-center">
                      <input
                        type="checkbox"
                        name="color"
                        className="ss-check-color bg_cream"
                        id="cream"
                        defaultValue="cream"
                      />
                      <label htmlFor="cream" className="label">
                        <span>Cream</span>&nbsp;<span>(1)</span>
                      </label>
                    </li>
                    <li className="list-item d-flex gap-12 align-items-center">
                      <input
                        type="checkbox"
                        name="color"
                        className="ss-check-color bg_dark-beige"
                        id="dark-beige"
                        defaultValue="dark-beige"
                      />
                      <label htmlFor="dark-beige" className="label">
                        <span>Dark Beige</span>&nbsp;<span>(1)</span>
                      </label>
                    </li>
                    <li className="list-item d-flex gap-12 align-items-center">
                      <input
                        type="checkbox"
                        name="color"
                        className="ss-check-color bg_dark-blue"
                        id="dark-blue"
                        defaultValue="dark-blue"
                      />
                      <label htmlFor="dark-blue" className="label">
                        <span>Dark Blue</span>&nbsp;<span>(3)</span>
                      </label>
                    </li>
                    <li className="list-item d-flex gap-12 align-items-center">
                      <input
                        type="checkbox"
                        name="color"
                        className="ss-check-color bg_dark-green"
                        id="dark-green"
                        defaultValue="dark-green"
                      />
                      <label htmlFor="dark-green" className="label">
                        <span>Dark Green</span>&nbsp;<span>(1)</span>
                      </label>
                    </li>
                    <li className="list-item d-flex gap-12 align-items-center">
                      <input
                        type="checkbox"
                        name="color"
                        className="ss-check-color bg_dark-grey"
                        id="dark-grey"
                        defaultValue="dark-grey"
                      />
                      <label htmlFor="dark-grey" className="label">
                        <span>Dark Grey</span>&nbsp;<span>(1)</span>
                      </label>
                    </li>
                    <li className="list-item d-flex gap-12 align-items-center">
                      <input
                        type="checkbox"
                        name="color"
                        className="ss-check-color bg_grey"
                        id="grey"
                        defaultValue="grey"
                      />
                      <label htmlFor="grey" className="label">
                        <span>Grey</span>&nbsp;<span>(2)</span>
                      </label>
                    </li>
                    <li className="list-item d-flex gap-12 align-items-center">
                      <input
                        type="checkbox"
                        name="color"
                        className="ss-check-color bg_light-blue"
                        id="light-blue"
                        defaultValue="light-blue"
                      />
                      <label htmlFor="light-blue" className="label">
                        <span>Light Blue</span>&nbsp;<span>(5)</span>
                      </label>
                    </li>
                    <li className="list-item d-flex gap-12 align-items-center">
                      <input
                        type="checkbox"
                        name="color"
                        className="ss-check-color bg_light-green"
                        id="light-green"
                        defaultValue="light-green"
                      />
                      <label htmlFor="light-green" className="label">
                        <span>Light Green</span>&nbsp;<span>(3)</span>
                      </label>
                    </li>
                    <li className="list-item d-flex gap-12 align-items-center">
                      <input
                        type="checkbox"
                        name="color"
                        className="ss-check-color bg_light-grey"
                        id="light-grey"
                        defaultValue="light-grey"
                      />
                      <label htmlFor="light-grey" className="label">
                        <span>Light Grey</span>&nbsp;<span>(1)</span>
                      </label>
                    </li>
                    <li className="list-item d-flex gap-12 align-items-center">
                      <input
                        type="checkbox"
                        name="color"
                        className="ss-check-color bg_light-pink"
                        id="light-pink"
                        defaultValue="light-pink"
                      />
                      <label htmlFor="light-pink" className="label">
                        <span>Light Pink</span>&nbsp;<span>(2)</span>
                      </label>
                    </li>
                    <li className="list-item d-flex gap-12 align-items-center">
                      <input
                        type="checkbox"
                        name="color"
                        className="ss-check-color bg_purple"
                        id="light-purple"
                        defaultValue="light-purple"
                      />
                      <label htmlFor="light-purple" className="label">
                        <span>Light Purple</span>&nbsp;<span>(2)</span>
                      </label>
                    </li>
                    <li className="list-item d-flex gap-12 align-items-center">
                      <input
                        type="checkbox"
                        name="color"
                        className="ss-check-color bg_light-yellow"
                        id="light-yellow"
                        defaultValue="light-yellow"
                      />
                      <label htmlFor="light-yellow" className="label">
                        <span>Light Yellow</span>&nbsp;<span>(1)</span>
                      </label>
                    </li>
                    <li className="list-item d-flex gap-12 align-items-center">
                      <input
                        type="checkbox"
                        name="color"
                        className="ss-check-color bg_orange"
                        id="orange"
                        defaultValue="orange"
                      />
                      <label htmlFor="orange" className="label">
                        <span>Orange</span>&nbsp;<span>(1)</span>
                      </label>
                    </li>
                    <li className="list-item d-flex gap-12 align-items-center">
                      <input
                        type="checkbox"
                        name="color"
                        className="ss-check-color bg_pink"
                        id="pink"
                        defaultValue="pink"
                      />
                      <label htmlFor="pink" className="label">
                        <span>Pink</span>&nbsp;<span>(2)</span>
                      </label>
                    </li>
                    <li className="list-item d-flex gap-12 align-items-center">
                      <input
                        type="checkbox"
                        name="color"
                        className="ss-check-color bg_taupe"
                        id="taupe"
                        defaultValue="taupe"
                      />
                      <label htmlFor="taupe" className="label">
                        <span>Taupe</span>&nbsp;<span>(1)</span>
                      </label>
                    </li>
                    <li className="list-item d-flex gap-12 align-items-center">
                      <input
                        type="checkbox"
                        name="color"
                        className="ss-check-color bg_white"
                        id="white"
                        defaultValue="white"
                      />
                      <label htmlFor="white" className="label">
                        <span>White</span>&nbsp;<span>(14)</span>
                      </label>
                    </li>
                    <li className="list-item d-flex gap-12 align-items-center">
                      <input
                        type="checkbox"
                        name="color"
                        className="ss-check-color bg_yellow"
                        id="yellow"
                        defaultValue="yellow"
                      />
                      <label htmlFor="yellow" className="label">
                        <span>Yellow</span>&nbsp;<span>(1)</span>
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="widget-facet">
                <div
                  className="facet-title"
                  data-bs-target="#size"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="size"
                  role="button"
                >
                  <span>Size</span>
                  <span className="icon icon-arrow-up"></span>
                </div>
                <div id="size" className="collapse show">
                  <ul className="tf-filter-group current-scrollbar">
                    <li className="list-item d-flex gap-12 align-items-center">
                      <input
                        type="radio"
                        name="size"
                        className="ss-check tf-check-size"
                        defaultValue="s"
                        id="s"
                      />
                      <label htmlFor="s" className="label">
                        <span>S</span>&nbsp;<span>(7)</span>
                      </label>
                    </li>
                    <li className="list-item d-flex gap-12 align-items-center">
                      <input
                        type="radio"
                        name="size"
                        className="ss-check tf-check-size"
                        defaultValue="m"
                        id="m"
                      />
                      <label htmlFor="m" className="label">
                        <span>M</span>&nbsp;<span>(8)</span>
                      </label>
                    </li>
                    <li className="list-item d-flex gap-12 align-items-center">
                      <input
                        type="radio"
                        name="size"
                        className="ss-check tf-check-size"
                        defaultValue="l"
                        id="l"
                      />
                      <label htmlFor="l" className="label">
                        <span>L</span>&nbsp;<span>(8)</span>
                      </label>
                    </li>
                    <li className="list-item d-flex gap-12 align-items-center">
                      <input
                        type="radio"
                        name="size"
                        className="ss-check tf-check-size"
                        defaultValue="xl"
                        id="xl"
                      />
                      <label htmlFor="xl" className="label">
                        <span>XL</span>&nbsp;<span>(6)</span>
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1040;
  }

  .modal-shopping-cart {
    z-index: 1050;
  }
`;

export default FilterSidebar;
