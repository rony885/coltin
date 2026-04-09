import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useCartContext } from "../../context/CartContext";

const ViewCart = () => {
  const {
    cart,
    removeItem,
    setDecrement,
    setIncrement,
    clearCart,
    total_special_price,
  } = useCartContext();

  return (
    <>
      <div className="breadcrumb">
        <div className="container">
          <div className="breadcrumbtitle">
            <h2>Shopping Cart</h2>
          </div>
          <div className="breadcrumb-wrap d-flex justify-content-center flex-wrap align-items-center">
            <div className="breadcrumb-list">
              <Link to="/" className="text">
                Home
              </Link>
              <i className="icon icon-arrow-right"></i>
              <Link to="#" className="text">
                Shopping Cart
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section className="flat-spacing-8">
        <div className="container">
          <div className="ss-page-cart-wrap">
            <div className="cart__items">
              <div className="ss-page-cart-item">
                <form>
                  <table className="ss-table-page-cart">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th style={{ width: "10%" }}>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/** Cart items start **/}
                      {cart.map((item) => (
                        <tr className="ss-cart-item file-delete" key={item.id}>
                          <td className="ss-cart-item_product">
                            <Link
                              to={`/product-details/${item.id}`}
                              className="img-box"
                            >
                              <img
                                src={item.image || "/default-produt-image.jpg"}
                                alt="img-product"
                                style={{ width: "100px", height: "100px" }}
                              />
                            </Link>
                            <div className="cart-info">
                              <Link
                                to={`/product-details/${item.id}`}
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
                                onClick={() => removeItem(item.id)}
                              >
                                Remove
                              </span>
                            </div>
                          </td>
                          <td className="ss-cart-item_price">
                            <div className="cart-price">৳ {item?.price}</div>
                          </td>
                          <td className="ss-cart-item_quantity">
                            <div className="cart-quantity">
                              <div className="wg-quantity">
                                <span className="btn-quantity minus-btn">
                                  <AiOutlineMinus
                                    className="d-inline-block"
                                    size={12}
                                    onClick={() => setDecrement(item.id)}
                                  />
                                </span>
                                <input
                                  type="text"
                                  name="number"
                                  value={item.amount}
                                  readOnly
                                />
                                <span className="btn-quantity plus-btn">
                                  <AiOutlinePlus
                                    className="d-inline-block"
                                    size={12}
                                    onClick={() => setIncrement(item.id)}
                                  />
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="ss-cart-item_total">
                            <div className="cart-total">
                              ${item.price * item.amount}.00
                            </div>
                          </td>
                        </tr>
                      ))}
                      {/** Cart items end **/}
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
                      onClick={clearCart}
                    >
                      Clear Cart
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="ss-page-cart-footer">
              <div className="ss-cart-footer-inner">
                <div className="ss-page-cart-checkout">
                  <div className="shipping-calculator">
                    <summary className="accordion-shipping-header d-flex justify-content-between align-items-center collapsed">
                      <h3 className="shipping-calculator-title">
                        Estimate Shipping
                      </h3>
                    </summary>
                    <div className="content-shipping" id="shipping">
                      <div className="accordion-shipping-content">
                        <fieldset className="field">
                          <select
                            className="ss-select w-100"
                            id="ShippingCountry_CartDrawer-Form"
                            name="address[country]"
                            data-default=""
                          >
                            <option value="---">Country</option>
                            <option value="Australia">Australia</option>
                            <option value="Austria">Austria</option>
                            <option value="Canada">Canada</option>
                            <option value="Denmark">Denmark</option>
                            <option value="Finland">Finland</option>
                            <option value="France">France</option>
                            <option value="Germany">Germany</option>
                            <option value="Italy">Italy</option>
                            <option value="Japan">Japan</option>
                            <option value="Malaysia">Malaysia</option>
                          </select>
                        </fieldset>
                        <fieldset className="field">
                          <input
                            type="text"
                            name="text"
                            placeholder="Zip Code"
                          />
                        </fieldset>
                        <button className="ss-btn btn-fill justify-content-center">
                          <span>Calculate shipping</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="discount_code">
                    <div className="title">Coupon</div>
                    <label>
                      * Discount will be calculated and applied at checkout
                    </label>
                    <input
                      className="discount_code_input"
                      autoComplete="off"
                      type="text"
                      placeholder="Coupon code"
                      name="discount"
                      value=""
                      readOnly
                    />
                  </div>

                  <div className="ss-cart-totals-discounts">
                    <h3>Subtotal</h3>
                    <span className="total-value">$18.00 USD</span>
                  </div>

                  <p className="ss-cart-tax">
                    Taxes and <Link to="/shipping-delivery">shipping</Link>{" "}
                    calculated at checkout
                  </p>

                  <div className="cart-checkbox">
                    <input
                      type="checkbox"
                      className="ss-check"
                      id="check-agree"
                    />
                    <label htmlFor="check-agree" className="fw-4">
                      I agree with the <Link to="#">terms and conditions</Link>
                    </label>
                  </div>

                  <div className="cart-checkout-btn">
                    <Link to="/checkout" className="ss-btn">
                      <span>Check out</span>
                    </Link>
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

export default ViewCart;
