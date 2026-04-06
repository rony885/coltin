// import React from "react";

// const ModalFindSize = () => {
//   return (
//     <div className="modal fade modalDemo" id="find_size">
//       <div className="modal-dialog modal-dialog-centered">
//         <div className="modal-content">
//           <div className="header">
//             <div className="demo-title">Size chart</div>
//             <span
//               className="icon-close icon-close-popup"
//               data-bs-dismiss="modal"
//             ></span>
//           </div>
//           <img
//             className="sizechart ls-is-cached lazyloaded"
//             data-src="images/shop/products/size_chart.jpg"
//             src="/images/shop/products/size_chart.jpg"
//             alt=""
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ModalFindSize;

// import React from "react";
// import styled from "styled-components";

// const ModalFindSize = ({ isOpen, onClose }) => {
//   return (
//     <Wrapper>
//       {/* Backdrop */}
//       {isOpen && (
//         <div className="modal-backdrop fade show" onClick={onClose}></div>
//       )}

//       {/* Modal */}
//       <div
//         className={`modal fade modalDemo product-modal ${isOpen ? "show" : ""}`}
//         style={{ display: isOpen ? "block" : "none" }}
//       >
//         <div className="modal-dialog modal-dialog-centered">
//           <div className="modal-content">
//             <div className="header">
//               <div className="demo-title">Size chart</div>
//               <span
//                 className="icon-close icon-close-popup"
//                 onClick={onClose}
//               ></span>
//             </div>

//             <img
//               className="sizechart"
//               src="/images/shop/products/size_chart.jpg"
//               alt="Size chart"
//             />
//           </div>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   .modal-backdrop {
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100vw;
//     height: 100vh;
//     background-color: rgba(0, 0, 0, 0.6);
//     z-index: 1040;
//   }

//   .modal {
//     z-index: 1050;
//   }

//   /* DEFAULT (mobile & tablet) */
//   .modalDemo .modal-dialog {
//     max-width: 100%;
//     margin: 1.75rem auto;
//   }

//   .modalDemo .modal-content {
//     padding: 0 30px 40px;
//     background-color: var(--white);
//     width: 100%;
//     border-radius: 5px;
//     margin: 0 15px;
//     max-height: calc(90vh - 50px);
//     border: 0;
//     cursor: default;
//     overflow: hidden;
//   }

//   /* ✅ LARGE SCREENS (desktop & up) */
//   @media (min-width: 992px) {
//     .modalDemo .modal-dialog {
//       max-width: 900px; /* change as needed */
//     }

//     .modalDemo .modal-content {
//       margin: 0;
//       padding: 0 40px 50px;
//       max-height: 90vh;
//       border-radius: 8px;
//     }
//   }

//   /* ✅ EXTRA LARGE SCREENS */
//   @media (min-width: 1200px) {
//     .modalDemo .modal-dialog {
//       max-width: 1100px;
//     }
//   }
// `;

// export default ModalFindSize;

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
