import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

const MobileMenu = () => {
  return (
    <Wrapper>
      <div className="offcanvas offcanvas-start canvas-mb" id="mobileMenu">
        <span
          className="icon-close icon-close-popup"
          data-bs-dismiss="offcanvas"
        ></span>

        <div className="header-logo bg-dark mt-4">
          <Link to="/" className="logo-header">
            <img src="/images/logo/logo.png" alt="logo" className="logo" />
          </Link>
        </div>

        <div className="mb-canvas-content">
          <div className="mb-body">
            <ul className="nav-ul-mb" id="wrapper-menu-navigation">
              <li className="nav-mb-item">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    isActive ? "mb-menu-link current active" : "mb-menu-link"
                  }
                >
                  <span data-bs-dismiss="offcanvas">Home</span>
                </NavLink>
              </li>

              <li className="nav-mb-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "mb-menu-link current active" : "mb-menu-link"
                  }
                >
                  <span data-bs-dismiss="offcanvas">About</span>
                </NavLink>
              </li>

              <li className="nav-mb-item">
                <NavLink
                  to="/product"
                  className={({ isActive }) =>
                    isActive ? "mb-menu-link current active" : "mb-menu-link"
                  }
                  onClick={() =>
                    localStorage.setItem("selectedCategory", "all")
                  }
                >
                  <span data-bs-dismiss="offcanvas">Products</span>
                </NavLink>
              </li>

              <li className="nav-mb-item">
                <NavLink
                  to="/gallery"
                  className={({ isActive }) =>
                    isActive ? "mb-menu-link current active" : "mb-menu-link"
                  }
                >
                  <span data-bs-dismiss="offcanvas">Gallery</span>
                </NavLink>
              </li>

              <li className="nav-mb-item">
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive ? "mb-menu-link current active" : "mb-menu-link"
                  }
                >
                  <span data-bs-dismiss="offcanvas">Blog</span>
                </NavLink>
              </li>

              <li className="nav-mb-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "mb-menu-link current active" : "mb-menu-link"
                  }
                >
                  <span data-bs-dismiss="offcanvas">Contact</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* Mobile menu active link */
  .mb-menu-link.active {
    color: var(--primary) !important;
  }
`;

export default MobileMenu;
