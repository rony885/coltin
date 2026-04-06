import React from "react";
import { Link } from "react-router-dom";

const ModalQuickView = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* BACKDROP */}
      <div
        className="modal-backdrop fade show"
        style={{ zIndex: 1055 }}
        onClick={onClose}
      />

      {/* MODAL */}
      <div
        className="modal fade modalDemo show"
        id="quick_view"
        role="dialog"
        aria-modal="true"
        style={{
          display: "block",
          zIndex: 1060,
        }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="header">
              <span
                className="icon-close icon-close-popup"
                onClick={onClose}
              ></span>
            </div>

            <div className="wrap">
              <div className="product-media-wrap">
                <img src="/images/products/orange-1.jpg" alt="Product" />
              </div>

              <div className="product-info-wrap">
                <h5>
                  <Link to="/product-details">Ribbed Tank Top</Link>
                </h5>

                <div className="price">$18.00</div>

                <p>
                  Nunc arcu faucibus et lorem eu mauris adipiscing conubia ac
                  aptent ligula facilisis.
                </p>

                <div className="product-info-buy-button">
                  <Link to="#" className="ss-btn btn-fill">
                    Add to cart – $18.00
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalQuickView;