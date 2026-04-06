import React from "react";
import { Link } from "react-router-dom";

const ModalCompare = () => {
  return (
    <div className="offcanvas offcanvas-bottom canvas-compare" id="compare">
      <div className="canvas-wrapper">
        <header className="canvas-header">
          <div className="close-popup">
            <span
              className="icon-close icon-close-popup"
              data-bs-dismiss="offcanvas"
            ></span>
          </div>
        </header>
        <div className="canvas-body">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="ss-compare-list">
                  <div className="ss-compare-head">
                    <div className="title">Compare Products</div>
                  </div>
                  <div className="ss-compare-offcanvas">
                    <div className="ss-compare-item">
                      <div className="position-relative">
                        <div className="icon">
                          <i className="icon-close"></i>
                        </div>
                        <Link to="/product-detail">
                          <img
                            className="radius-3"
                            src="images/products/orange-1.jpg"
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="ss-compare-item">
                      <div className="position-relative">
                        <div className="icon">
                          <i className="icon-close"></i>
                        </div>
                        <Link to="/product-detail">
                          <img
                            className="radius-3"
                            src="images/products/pink-1.jpg"
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="ss-compare-buttons">
                    <div className="ss-compare-buttons-wrap">
                      <Link
                        to="#"
                        className="ss-btn radius-3 btn-fill justify-content-center fw-6 fs-14 flex-grow-1"
                      >
                        Compare
                      </Link>
                      <div className="ss-compapre-button-clear-all link">
                        Clear All
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCompare;
