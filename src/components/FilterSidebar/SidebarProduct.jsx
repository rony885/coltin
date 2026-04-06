import React from "react";

const SidebarProduct = () => {
  return (
    <div
      id="sidebarmobile"
      className="offcanvas offcanvas-start canvas-filter canvas-sidebar"
    >
      <div className="canvas-wrapper">
        <header className="canvas-header">
          <span className="title">SIDEBAR PRODUCT</span>
          <span
            className="icon-close icon-close-popup"
            data-bs-dismiss="offcanvas"
          ></span>
        </header>
        <div className="canvas-body sidebar-mobile-append"></div>
      </div>
    </div>
  );
};

export default SidebarProduct;
