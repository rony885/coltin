import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ModalDeliveryReturn = ({ isOpen, onClose }) => {
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
        className="modal modalCentered fade modalDemo ss-product-modal modal-part-content show d-block"
        id="delivery_return"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="header">
              <div className="demo-title">Shipping & Delivery</div>
              <span
                className="icon-close icon-close-popup"
                // data-bs-dismiss="modal"
                onClick={onClose}
              ></span>
            </div>
            <div className="overflow-y-auto">
              <div className="tf-product-popup-delivery">
                <div className="title">Shipping & Delivery</div>
                <p className="text-paragraph">
                  Items returned within 14 days of their original shipment date
                  in same as new condition will be eligible for Link full refund
                  or store credit.
                </p>
                <p className="text-paragraph">
                  Refunds will be charged back to the original form of payment
                  used for purchase.
                </p>
                <p className="text-paragraph">
                  Customer is responsible for shipping charges when making
                  returns and shipping/handling fees of original purchase is
                  non-refundable.
                </p>
                <p className="text-paragraph">
                  All sale items are final purchases.
                </p>
              </div>
              <div className="tf-product-popup-delivery">
                <div className="title">Help</div>
                <p className="text-paragraph">
                  Give us a shout if you have any other questions and/or
                  concerns.
                </p>
                <p className="text-paragraph">
                  Email:
                  <Link to="mailto:contact@domain.com">
                    <span className="__cf_email__">contact@domain.com</span>
                  </Link>
                </p>
                <p className="text-paragraph mb-0">Phone: +1 (23) 456 789</p>
              </div>
            </div>
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

export default ModalDeliveryReturn;
