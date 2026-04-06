import React from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <div className="container">
          <div className="breadcrumbtitle">
            <h2>Check Out</h2>
          </div>
          <div className="breadcrumb-wrap d-flex justify-content-center flex-wrap align-items-center">
            <div className="breadcrumb-list">
              <Link to="/" className="text">
                Home
              </Link>
              <i className="icon icon-arrow-right"></i>
              <Link to="#" className="text">
                Check Out
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Section */}
      <section className="flat-spacing-8">
        <div className="container">
          <div className="ss-page-cart-wrap layout-2">
            {/* Billing Details */}
            <div className="ss-page-cart-item">
              <h5 className="fw-5 mb_20">Billing details</h5>
              <form className="form-checkout">
                <div className="box grid-2">
                  <fieldset className="fieldset">
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name" placeholder="" />
                  </fieldset>
                  <fieldset className="fieldset">
                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" />
                  </fieldset>
                </div>

                <fieldset className="box fieldset">
                  <label htmlFor="country">Country/Region</label>
                  <div className="select-custom">
                    <select
                      className="ss-select w-100"
                      id="country"
                      name="address[country]"
                      data-default=""
                    >
                      <option value="---">---</option>
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
                      <option value="Netherlands">Netherlands</option>
                      <option value="New Zealand">New Zealand</option>
                      <option value="Norway">Norway</option>
                      <option value="Poland">Poland</option>
                      <option value="Portugal">Portugal</option>
                      <option value="Singapore">Singapore</option>
                    </select>
                  </div>
                </fieldset>

                <fieldset className="box fieldset">
                  <label htmlFor="city">Town/City</label>
                  <input type="text" id="city" />
                </fieldset>

                <fieldset className="box fieldset">
                  <label htmlFor="address">Address</label>
                  <input type="text" id="address" />
                </fieldset>

                <fieldset className="box fieldset">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="number" id="phone" />
                </fieldset>

                <fieldset className="box fieldset">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" />
                </fieldset>

                <fieldset className="box fieldset">
                  <label htmlFor="note">Order notes (optional)</label>
                  <textarea name="note" id="note"></textarea>
                </fieldset>
              </form>
            </div>

            {/* Order Summary */}
            <div className="ss-page-cart-footer">
              <div className="ss-cart-footer-inner">
                <h5 className="fw-5 mb_20">Your order</h5>
                <form className="ss-page-cart-checkout widget-wrap-checkout">
                  <ul className="wrap-checkout-product">
                    {/* Product Item */}
                    <li className="checkout-product-item">
                      <figure className="img-product">
                        <img src="images/products/brown.jpg" alt="product" />
                        <span className="quantity">1</span>
                      </figure>
                      <div className="content">
                        <div className="info">
                          <p className="name">Ribbed modal T-shirt</p>
                          <span className="variant">Brown / M</span>
                        </div>
                        <span className="price">$25.00</span>
                      </div>
                    </li>

                    <li className="checkout-product-item">
                      <figure className="img-product">
                        <img src="images/products/kid-12.jpg" alt="product" />
                        <span className="quantity">1</span>
                      </figure>
                      <div className="content">
                        <div className="info">
                          <p className="name">Vanilla White</p>
                        </div>
                        <span className="price">$35.00</span>
                      </div>
                    </li>

                    <li className="checkout-product-item">
                      <figure className="img-product">
                        <img src="images/products/beige-2.jpg" alt="product" />
                        <span className="quantity">1</span>
                      </figure>
                      <div className="content">
                        <div className="info">
                          <p className="name">Cotton jersey top</p>
                          <span className="variant">Beige / S</span>
                        </div>
                        <span className="price">$8.00</span>
                      </div>
                    </li>

                    <li className="checkout-product-item">
                      <figure className="img-product">
                        <img src="images/products/orange-1.jpg" alt="product" />
                        <span className="quantity">3</span>
                      </figure>
                      <div className="content">
                        <div className="info">
                          <p className="name">Ribbed Tank Top</p>
                          <span className="variant">Orange / S</span>
                        </div>
                        <span className="price">$54.00</span>
                      </div>
                    </li>
                  </ul>

                  {/* Coupon */}
                  <div className="coupon-box">
                    <input type="text" placeholder="Discount code" />
                    <Link
                      to="#"
                      className="ss-btn btn-sm radius-3 btn-fill btn-icon"
                    >
                      Apply
                    </Link>
                  </div>

                  {/* Total */}
                  <div className="d-flex justify-content-between pb_20">
                    <h6 className="fw-5">Total</h6>
                    <h6 className="total fw-5">$122.00</h6>
                  </div>

                  {/* Place Order Button */}
                  <button className="ss-btn radius-3 btn-fill btn-icon justify-content-center">
                    Place order
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
