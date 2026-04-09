import React from "react";
import { Link } from "react-router-dom";
import { GrView } from "react-icons/gr";

import { useCartContext } from "../../context/CartContext";

const Wishlist = () => {
  const {
    wishlist: cartItems,
    removeWishlistItem,
    clearWishlist,
  } = useCartContext();

  return (
    <>
      <div className="breadcrumb">
        <div className="container">
          <div className="breadcrumbtitle">
            <h2>Wishlist</h2>
          </div>
          <div className="breadcrumb-wrap d-flex justify-content-center flex-wrap align-items-center">
            <div className="breadcrumb-list">
              <Link to="/" className="text">
                Home
              </Link>
              <i className="icon icon-arrow-right"></i>
              <Link to="#" className="text">
                Wishlist
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section className="flat-spacing-2 products-listing">
        <div className="container">
          <div className="ss-page-cart-wrapp w-100">
            <div className="cart__itemss w-100">
              <div className="ss-page-cart-item">
                <form>
                  <table className="ss-table-page-cart">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Price</th>

                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.length === 0 ? (
                        <tr>
                          <td colSpan="3">
                            <div className="text-center py-5">
                              <h4 className="text-danger fs-4 fw-bold">
                                No Wishlist Found
                              </h4>
                              <Link
                                to="/product"
                                className="btn-filter mt-3"
                                style={{
                                  backgroundColor: "#F93355",
                                  color: "#fff",
                                }}
                              >
                                Continue Shopping
                              </Link>
                            </div>
                          </td>
                        </tr>
                      ) : (
                        cartItems.map((item) => (
                          <tr
                            className="ss-cart-item file-delete"
                            key={item.id}
                          >
                            <td className="ss-cart-item_product">
                              <Link to="/product-details" className="img-box">
                                <img
                                  src={
                                    item.image || "/default-produt-image.jpg"
                                  }
                                  alt="img-product"
                                  style={{ width: "100px", height: "100px" }}
                                />
                              </Link>
                              <div className="cart-info">
                                <Link
                                  to="/product-details"
                                  className="cart-title link"
                                >
                                  {item.name}
                                </Link>
                                <div className="cart-meta-variant">
                                  {item.category}
                                </div>
                                <div className="cart-meta-variant">
                                  {item.code}
                                </div>
                                <span
                                  className="remove-cart link remove"
                                  onClick={() => removeWishlistItem(item.id)}
                                >
                                  Remove
                                </span>
                              </div>
                            </td>

                            <td className="ss-cart-item_price">
                              <div className="cart-price">৳ {item?.price}</div>
                            </td>

                            <td className="ss-cart-item_total">
                              <div className="cart-total">
                                <Link
                                  to={`/product-details/${item.id}`}
                                  className="box-icon bg_white quickview ss-btn-loading"
                                >
                                  {<GrView size={20} />}
                                  <span className="tooltip">View</span>
                                </Link>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </form>
              </div>

              <div className="ss-page-cart-note">
                <div className="gift-wrap">
                  <div className="gift-wrap-title justify-content-end">
                    <div
                      className="button-gift-cart"
                      data-gift_card="gift-wrap"
                      onClick={clearWishlist}
                    >
                      Clear Wishlist
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Wishlist;
