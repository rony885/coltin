import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const ViewCart = () => {
  const cartItems = [
    {
      id: 1,
      name: "Oversized Printed T-shirt",
      variant: "White / M",
      img: "images/products/white-2.jpg",
      price: 18,
      qty: 1,
    },
    {
      id: 2,
      name: "Ribbed Tank Top",
      variant: "Orange / S",
      img: "images/products/orange-1.jpg",
      price: 18,
      qty: 1,
    },
    {
      id: 3,
      name: "Regular Fit Oxford Shirt",
      variant: "Black / L",
      img: "images/products/black-4.jpg",
      price: 18,
      qty: 1,
    },
  ];

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
          <div
            className="shipping-bar-cart full"
            data-price_shipping_bar="50000"
          >
            <div className="title-shipping-bar">
              <div className="title-spend hide">
                Spend
                <span className="spend">
                  <span
                    className="money"
                    data-currency-usd="$-50.00"
                    data-currency="USD"
                  >
                    $-50.00
                  </span>
                </span>{" "}
                more and get <b>Free Shipping!</b>
              </div>
              <div className="title-freeship">
                Free Shipping on orders
                <span
                  className="money"
                  data-currency-usd="$500.00"
                  data-currency="USD"
                >
                  $500.00
                </span>
              </div>
            </div>
            <div className="title-shipping">
              Congratulations , you've got free shipping!
            </div>
            <div className="shipping-progress_bar">
              <div
                className="shipping-progress fire-done"
                style={{ width: "100%" }}
              >
                <div className="truck-svgrepo">
                  <svg width="30" height="30" fill="none" className="absolute">
                    <circle
                      cx="15"
                      cy="15"
                      r="14.5"
                      fill="#fff"
                      stroke="currentColor"
                    ></circle>
                    <path
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth=".3"
                      d="M23.802 14.611L22.71 13.6a.643.643 0 0 1-.166-.25l-.857-2.325a1.722 1.722 0 0 0-1.607-1.12h-1.298v-.363a.59.59 0 0 0-.59-.59h-7.841a.448.448 0 0 0-.453.43.439.439 0 0 0 .438.447h7.57v3.805a.59.59 0 0 0 .59.59h3.564l1.059.953v3.554h-.96a1.894 1.894 0 0 0-3.693 0h-2.953a1.894 1.894 0 0 0-3.693 0h-1.47a.448.448 0 0 0-.452.43.438.438 0 0 0 .438.447h1.491a1.895 1.895 0 0 0 3.678 0h2.968a1.894 1.894 0 0 0 3.678 0h1.255a.59.59 0 0 0 .59-.59V15.05a.589.589 0 0 0-.195-.439Zm-5.019-1.263v-2.565h1.298a.84.84 0 0 1 .785.546l.747 2.019h-2.83Zm-5.116 6.823a1.017 1.017 0 1 1 0-2.035 1.017 1.017 0 0 1 0 2.035Zm6.646 0a1.017 1.017 0 1 1 0-2.035 1.017 1.017 0 0 1 0 2.035Z"
                    ></path>
                    <path
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth=".3"
                      d="M8.47 12.283h4.974a.438.438 0 0 0 0-.878H8.47a.439.439 0 1 0 0 .878ZM13.876 14.28a.438.438 0 0 0-.439-.439H6.435a.44.44 0 1 0 0 .878h7.002a.439.439 0 0 0 .439-.44ZM11.101 16.716a.44.44 0 0 0-.438-.438H7.614a.439.439 0 0 0 0 .877h3.049a.438.438 0 0 0 .438-.439Z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="ss-page-cart-wrap">
            <div className="cart__items">
              <div className="ss-page-cart-item">
                <form>
                  <table className="ss-table-page-cart">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/** Cart items start **/}
                      {cartItems.map((item) => (
                        <tr className="ss-cart-item file-delete" key={item.id}>
                          <td className="ss-cart-item_product">
                            <Link to="/product-details" className="img-box">
                              <img src={item.img} alt="img-product" />
                            </Link>
                            <div className="cart-info">
                              <Link
                                to="/product-details"
                                className="cart-title link"
                              >
                                {item.name}
                              </Link>
                              <div className="cart-meta-variant">
                                {item.variant}
                              </div>
                              <span className="remove-cart link remove">
                                Remove
                              </span>
                            </div>
                          </td>
                          <td className="ss-cart-item_price">
                            <div className="cart-price">${item.price}.00</div>
                          </td>
                          <td className="ss-cart-item_quantity">
                            <div className="cart-quantity">
                              <div className="wg-quantity">
                                <span className="btn-quantity minus-btn">
                                  <AiOutlineMinus
                                    className="d-inline-block"
                                    size={12}
                                  />
                                </span>
                                <input
                                  type="text"
                                  name="number"
                                  value={item.qty}
                                  readOnly
                                />
                                <span className="btn-quantity plus-btn">
                                  <AiOutlinePlus
                                    className="d-inline-block"
                                    size={12}
                                  />
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="ss-cart-item_total">
                            <div className="cart-total">
                              ${item.price * item.qty}.00
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
                  <div className="gift-wrap-title">
                    Add gift wrap?
                    <div
                      className="button-gift-cart"
                      data-gift_card="gift-wrap"
                    >
                      Add A Gift Wrap
                    </div>
                  </div>
                </div>
                <label>Special order instructions</label>
                <textarea
                  name="note"
                  id="cart-note"
                  placeholder="Special order instructions"
                ></textarea>
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
