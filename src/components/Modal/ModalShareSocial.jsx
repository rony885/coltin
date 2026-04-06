// import React from "react";
// import { Link } from "react-router-dom";

// const ModalShareSocial = () => {
//   return (
//     <div
//       className="modal modalCentered fade modalDemo ss-product-modal modal-part-content"
//       id="share_social"
//     >
//       <div className="modal-dialog modal-dialog-centered">
//         <div className="modal-content">
//           <div className="header">
//             <div className="demo-title">Share</div>
//             <span
//               className="icon-close icon-close-popup"
//               data-bs-dismiss="modal"
//             ></span>
//           </div>
//           <div className="overflow-y-auto">
//             <ul className="ss-social-icon d-flex gap-10">
//               <li>
//                 <Link to="#" className="box-icon social-facebook bg_line">
//                   <i className="icon icon-fb"></i>
//                 </Link>
//               </li>
//               <li>
//                 <Link to="#" className="box-icon social-twiter bg_line">
//                   <i className="icon icon-Icon-x"></i>
//                 </Link>
//               </li>
//               <li>
//                 <Link to="#" className="box-icon social-instagram bg_line">
//                   <i className="icon icon-instagram"></i>
//                 </Link>
//               </li>
//               <li>
//                 <Link to="#" className="box-icon social-tiktok bg_line">
//                   <i className="icon icon-tiktok"></i>
//                 </Link>
//               </li>
//               <li>
//                 <Link to="#" className="box-icon social-pinterest bg_line">
//                   <i className="icon icon-pinterest-1"></i>
//                 </Link>
//               </li>
//             </ul>
//             <form className="form-share" method="post" accept-charset="utf-8">
//               <fieldset>
//                 <input
//                   type="text"
//                   value="https://ss-entry.myshopify.com/"
//                   tabindex="0"
//                   aria-required="true"
//                 />
//               </fieldset>
//               <div className="button-submit">
//                 <button
//                   className="ss-btn btn-sm radius-3 btn-fill btn-icon"
//                   type="button"
//                 >
//                   Copy
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ModalShareSocial;

import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ModalShareSocial = ({ isOpen, onClose }) => {
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
        id="share_social"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="header">
              <div className="demo-title">Share</div>
              <span
                className="icon-close icon-close-popup"
                // data-bs-dismiss="modal"
                onClick={onClose}
              ></span>
            </div>

            <div className="overflow-y-auto">
              <ul className="ss-social-icon d-flex gap-10">
                <li>
                  <Link to="#" className="box-icon social-facebook bg_line">
                    <i className="icon icon-fb"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="box-icon social-twiter bg_line">
                    <i className="icon icon-Icon-x"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="box-icon social-instagram bg_line">
                    <i className="icon icon-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="box-icon social-tiktok bg_line">
                    <i className="icon icon-tiktok"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="box-icon social-pinterest bg_line">
                    <i className="icon icon-pinterest-1"></i>
                  </Link>
                </li>
              </ul>

              <form className="form-share" acceptCharset="utf-8">
                <fieldset>
                  <input
                    type="text"
                    value="https://ss-entry.myshopify.com/"
                    tabIndex={0}
                    aria-required="true"
                    readOnly
                  />
                </fieldset>

                <div className="button-submit">
                  <button
                    className="ss-btn btn-sm radius-3 btn-fill btn-icon"
                    type="button"
                  >
                    Copy
                  </button>
                </div>
              </form>
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

export default ModalShareSocial;
