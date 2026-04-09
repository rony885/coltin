import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const ShoppingCart = ({ cartOpen, closeCart }) => {
  const {
    cart,
    removeItem,
    setDecrement,
    setIncrement,
    clearCart,
    total_special_price,
  } = useCartContext();

  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    if (cartOpen) {
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
  }, [cartOpen]);

  return (
    // <div className="modal fullRight fade modal-shopping-cart show" id="shoppingCart">
    <Wrapper>
      {cartOpen && (
        <div className="modal-backdrop fade show" onClick={closeCart}></div>
      )}
      <div
        // id="shoppingCart"
        className={`modal fullRight fade modal-shopping-cart ${
          cartOpen ? "show" : ""
        }`}
        style={{ display: cartOpen ? "block" : "none" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="header">
              <div className="title fw-5">Shopping Cart ({cart.length})</div>

              <span
                className="icon-close icon-close-popup"
                onClick={closeCart}
                role="button"
                aria-label="Close cart"
              ></span>
            </div>
            <div className="wrap">
              <div className="ss-mini-cart-wrap">
                <div className="ss-mini-cart-main">
                  <div className="ss-mini-cart-sroll">
                    <div className="ss-mini-cart-items">
                      {cart.map((item) => {
                        return (
                          <div className="ss-mini-cart-item" key={item.id}>
                            <div className="ss-mini-cart-image">
                              <Link to={`/product-details/${item.id}`}>
                                <img
                                  src={
                                    item.image || "/default-produt-image.jpg"
                                  }
                                  alt=""
                                  style={{ width: "80px", height: "80px" }}
                                />
                              </Link>
                            </div>
                            <div className="ss-mini-cart-info">
                              <Link
                                className="title link"
                                to={`/product-details/${item.id}`}
                              >
                                {item.name}
                              </Link>
                              <div className="meta-variant">
                                {" "}
                                {item.category}
                              </div>
                              <div className="meta-variant"> {item.code}</div>
                              <div className="price fw-6">৳ {item?.price}</div>
                              <div className="ss-mini-cart-btns">
                                <div className="wg-quantity small">
                                  <span
                                    className="btn-quantity minus-btn"
                                    onClick={() => setDecrement(item.id)}
                                  >
                                    -
                                  </span>
                                  <input
                                    type="text"
                                    name="number"
                                    value={item.amount}
                                  />
                                  <span
                                    className="btn-quantity plus-btn"
                                    onClick={() => setIncrement(item.id)}
                                  >
                                    +
                                  </span>
                                </div>
                                <div
                                  className="ss-mini-cart-remove"
                                  onClick={() => removeItem(item.id)}
                                >
                                  Remove
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="ss-mini-cart-bottom">
                  <div className="ss-mini-cart-tool">
                    <Link
                      className="ss-btn btn-fill radius-3 w-100 justify-content-center"
                      onClick={clearCart}
                    >
                      <span>Clear Cart</span>
                    </Link>
                  </div>

                  <div className="ss-mini-cart-bottom-wrap">
                    <div className="ss-cart-totals-discounts">
                      <div className="ss-cart-total">Subtotal</div>
                      <div className="ss-totals-total-value fw-6">
                        ৳ {total_special_price}
                      </div>
                    </div>

                    <div className="ss-mini-cart-line"></div>

                    <div className="ss-mini-cart-view-checkout">
                      <Link
                        to="/view-cart"
                        className="ss-btn btn-outline radius-3 link w-100 justify-content-center"
                        onClick={closeCart}
                      >
                        View cart
                      </Link>

                      <Link
                        to="/checkout"
                        className="ss-btn btn-fill radius-3 w-100 justify-content-center"
                        onClick={closeCart}
                      >
                        <span>Check out</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
  /* .modal-shopping-cart {
    z-index: 1085 !important;
  } */
  /* .modal-backdrop {
    z-index: 1070 !important;
  } */
`;

export default ShoppingCart;
