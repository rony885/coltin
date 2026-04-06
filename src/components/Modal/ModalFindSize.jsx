import React, { useEffect } from "react";
import styled from "styled-components";

const ModalFindSize = ({ isOpen, onClose }) => {
  // prevent body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <Wrapper>
      {/* BACKDROP */}
      <div className="modal-backdrop fade show"></div>

      <div
        className="modal fade modalDemo product-modal show d-block"
        // className="modal fade modalDemo product-modal"
        id="find_size"
        // style="display: block;"
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="header">
              <div className="demo-title">Size chart</div>
              <span
                className="icon-close icon-close-popup"
                // data-bs-dismiss="modal"
                onClick={onClose}
              ></span>
            </div>
            <img
              className="sizechart ls-is-cached lazyloaded"
              data-src="/images/shop/products/size_chart.jpg"
              src="/images/shop/products/size_chart.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .modal-open {
    overflow: hidden;
  }
`;

export default ModalFindSize;
