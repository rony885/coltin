import React from "react";
import { Link } from "react-router-dom";

const ModalQuickAdd = ({ toggleCart, onClose }) => {
  return (
    <div className="modal fade modalDemo" id="quick_add">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="header">
            <span
              className="icon-close icon-close-popup"
              data-bs-dismiss="modal"
            ></span>
          </div>
          <div className="wrap">
            <div className="product-info-item">
              <div className="image">
                <img src="/images/products/orange-1.jpg" alt="" />
              </div>
              <div className="content">
                <Link to="/product-details">Ribbed Tank Top</Link>
                <div className="ss-product-info-price">
                  {/* <div className="price-on-sale">$8.00</div>
                  <div className="compare-at-price">$10.00</div>
                  <div className="badges-on-sale">
                    <span>20</span>% OFF
                  </div> */}
                  <div className="price">$18.00</div>
                </div>
              </div>
            </div>
            <div className="product-info-variant-picker mb_15">
              <div className="variant-picker-item">
                <div className="variant-picker-label">
                  Color:
                  <span className="fw-6 variant-picker-label-value">
                    Orange
                  </span>
                </div>
                <div className="variant-picker-values">
                  <input id="values-orange" type="radio" name="color" defaultChecked />
                  <label
                    className="hover-tooltip radius-60"
                    htmlFor="values-orange"
                    data-value="Orange"
                  >
                    <span className="btn-checkbox bg-color-orange"></span>
                    <span className="tooltip">Orange</span>
                  </label>
                  <input id="values-black" type="radio" name="color" />
                  <label
                    className="hover-tooltip radius-60"
                    htmlFor="values-black"
                    data-value="Black"
                  >
                    <span className="btn-checkbox bg-color-black"></span>
                    <span className="tooltip">Black</span>
                  </label>
                  <input id="values-white" type="radio" name="color" />
                  <label
                    className="hover-tooltip radius-60"
                    htmlFor="values-white"
                    data-value="White"
                  >
                    <span className="btn-checkbox bg-color-white"></span>
                    <span className="tooltip">White</span>
                  </label>
                </div>
              </div>
              <div className="variant-picker-item">
                <div className="variant-picker-label">
                  Size:{" "}
                  <span className="fw-6 variant-picker-label-value">S</span>
                </div>
                <div className="variant-picker-values">
                  <input type="radio" name="size" id="values-s" defaultChecked />
                  <label className="style-text" htmlFor="values-s" data-value="S">
                    <span>S</span>
                  </label>
                  <input type="radio" name="size" id="values-m" />
                  <label className="style-text" htmlFor="values-m" data-value="M">
                    <span>M</span>
                  </label>
                  <input type="radio" name="size" id="values-l" />
                  <label className="style-text" htmlFor="values-l" data-value="L">
                    <span>L</span>
                  </label>
                  <input type="radio" name="size" id="values-xl" />
                  <label className="style-text" htmlFor="values-xl" data-value="XL">
                    <span>XL</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="product-info-quantity mb_15">
              <div className="quantity-title">Quantity</div>
              <div className="wg-quantity">
                <span className="btn-quantity minus-btn">-</span>
                <input type="text" name="number" value="1" />
                <span className="btn-quantity plus-btn">+</span>
              </div>
            </div>
            <div className="product-info-buy-button">
              <form>
                <Link
                  data-bs-dismiss="modal"
                  className="ss-btn btn-fill justify-content-center fw-6 fs-16 flex-grow-1 btn-add-to-cart"
                  onClick={() => {
                    toggleCart(); // open/add to cart
                    // onClose(); // close the quick view modal
                  }}
                >
                  <span>Add to cart -&nbsp;</span>
                  <span className="ss-qty-price">$18.00</span>
                </Link>
                <div className="product-btn-wishlist btn-icon-action">
                  <i className="icon-heart"></i>
                  <i className="icon-delete"></i>
                </div>
                <Link
                  to="#compare"
                  data-bs-toggle="offcanvas"
                  className="product-btn-wishlist box-icon bg_white compare btn-icon-action"
                >
                  <span className="icon icon-compare"></span>
                  <span className="icon icon-check"></span>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalQuickAdd;
