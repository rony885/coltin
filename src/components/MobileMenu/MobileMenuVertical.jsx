import React from "react";
import { FiGrid } from "react-icons/fi";
import { Link } from "react-router-dom";
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

const MobileMenuVertical = ({ categories }) => {
  return (
    <div className="offcanvas offcanvas-start canvas-mb" id="mobileVertical">
      <div className="vertical-content">
        <div className="navbar-vertical">
          <button
            type="button"
            id="show-verticalmenu"
            className="navbar-toggles"
          >
            <span className="icon-before-title">
              <FiGrid size={20} />
            </span>

            <span className="title-nav">All Categories</span>
          </button>
        </div>
      </div>

      <span
        className="icon-close icon-close-popup"
        data-bs-dismiss="offcanvas"
      ></span>
      <div className="mb-canvas-content">
        <div className="mb-body">
          <ul className="nav-ul-mb" id="wrapper-menu-navigation2">
            {categories.map((category, index) => {
              // Cycle through icons if more categories than icons
              const icon = iconPaths[index % iconPaths.length];

              return (
                <li
                  key={category.id}
                  className="nav-mb-item"
                  data-bs-dismiss="offcanvas"
                >
                  <Link
                    to="/product"
                    className="collapsed mb-menu-link current"
                    onClick={() => {
                      localStorage.setItem("selectedCategory", category.id);

                      window.dispatchEvent(
                        new CustomEvent("localStorageChange", {
                          detail: {
                            key: "selectedCategory",
                            value: category.id,
                          },
                        }),
                      );
                    }}
                  >
                    <span className="menu-title">
                      <span className="icon_items">
                        <img
                          className="lazyloaded"
                          data-src={icon}
                          src={icon}
                          alt={category.name}
                        />
                      </span>
                      {category.name}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileMenuVertical;
