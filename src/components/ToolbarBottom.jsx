import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const ToolbarBottom = () => {
  const { wishlist: cartItems, cart } = useCartContext();

  return (
    <div className="ss-toolbar-bottom type-1150">
      <div className="toolbar-item">
        <Link to="/product">
          <div className="toolbar-icon">
            <i className="icon-shop"></i>
          </div>
          <div className="toolbar-label">Shop</div>
        </Link>
      </div>

      <div className="toolbar-item">
        <Link to="/account">
          <div className="toolbar-icon">
            <i className="icon-account"></i>
          </div>
          <div className="toolbar-label">Account</div>
        </Link>
      </div>
      <div className="toolbar-item">
        <Link to="/wishlist">
          <div className="toolbar-icon">
            <i className="icon-heart"></i>
            <div className="toolbar-count">{cartItems.length}</div>
          </div>
          <div className="toolbar-label">Wishlist</div>
        </Link>
      </div>
      <div className="toolbar-item">
        <Link to="/view-cart">
          <div className="toolbar-icon">
            <i className="icon-bag"></i>
            <div className="toolbar-count">{cart.length}</div>
          </div>
          <div className="toolbar-label">Cart</div>
        </Link>
      </div>
    </div>
  );
};

export default ToolbarBottom;
