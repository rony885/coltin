// import React from "react";
// import { Link } from "react-router-dom";

// const MobileMenu = () => {
//   return (
//     <div className="offcanvas offcanvas-start canvas-mb" id="mobileMenu">
//       <span
//         className="icon-close icon-close-popup"
//         data-bs-dismiss="offcanvas"
//       ></span>
//       <div className="mb-canvas-content">
//         <div className="mb-body">
//           <ul className="nav-ul-mb" id="wrapper-menu-navigation">
//             <li className="nav-mb-item">
//               <Link to="/" className="collapsed mb-menu-link current">
//                 <span>Home</span>
//               </Link>
//             </li>
//             <li className="nav-mb-item">
//               <Link to="/about" className="collapsed mb-menu-link current">
//                 <span>About</span>
//               </Link>
//             </li>
//             <li className="nav-mb-item">
//               <Link to="/product" className="collapsed mb-menu-link current">
//                 <span>Products</span>
//               </Link>
//             </li>
//             <li className="nav-mb-item">
//               <Link to="/gallery" className="collapsed mb-menu-link current">
//                 <span>Gallery</span>
//               </Link>
//             </li>
//             <li className="nav-mb-item">
//               <Link to="/blog" className="collapsed mb-menu-link current">
//                 <span>Blog</span>
//               </Link>
//             </li>
//             <li className="nav-mb-item">
//               <Link to="/contact" className="mb-menu-link">
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MobileMenu;

// import React from "react";
// import styled from "styled-components";
// import { NavLink } from "react-router-dom";

// const MobileMenu = () => {
//   return (
//     <Wrapper>
//       <div className="offcanvas offcanvas-start canvas-mb" id="mobileMenu">
//         <span
//           className="icon-close icon-close-popup"
//           data-bs-dismiss="offcanvas"
//         ></span>
//         <div className="mb-canvas-content">
//           <div className="mb-body">
//             <ul className="nav-ul-mb" id="wrapper-menu-navigation">
//               <li className="nav-mb-item">
//                 <NavLink
//                   to="/"
//                   end
//                   className={({ isActive }) =>
//                     isActive ? "mb-menu-link current active" : "mb-menu-link"
//                   }
//                   data-bs-dismiss="offcanvas"
//                 >
//                   <span>Home</span>
//                 </NavLink>
//               </li>

//               <li className="nav-mb-item">
//                 <NavLink
//                   to="/about"
//                   className={({ isActive }) =>
//                     isActive ? "mb-menu-link current active" : "mb-menu-link"
//                   }
//                   data-bs-dismiss="offcanvas"
//                 >
//                   <span>About</span>
//                 </NavLink>
//               </li>

//               <li className="nav-mb-item">
//                 <NavLink
//                   to="/product"
//                   className={({ isActive }) =>
//                     isActive ? "mb-menu-link current active" : "mb-menu-link"
//                   }
//                   data-bs-dismiss="offcanvas"
//                 >
//                   <span>Products</span>
//                 </NavLink>
//               </li>

//               <li className="nav-mb-item">
//                 <NavLink
//                   to="/gallery"
//                   className={({ isActive }) =>
//                     isActive ? "mb-menu-link current active" : "mb-menu-link"
//                   }
//                   data-bs-dismiss="offcanvas"
//                 >
//                   <span>Gallery</span>
//                 </NavLink>
//               </li>

//               <li className="nav-mb-item">
//                 <NavLink
//                   to="/blog"
//                   className={({ isActive }) =>
//                     isActive ? "mb-menu-link current active" : "mb-menu-link"
//                   }
//                   data-bs-dismiss="offcanvas"
//                 >
//                   <span>Blog</span>
//                 </NavLink>
//               </li>

//               <li className="nav-mb-item">
//                 <NavLink
//                   to="/contact"
//                   className={({ isActive }) =>
//                     isActive ? "mb-menu-link current active" : "mb-menu-link"
//                   }
//                   data-bs-dismiss="offcanvas"
//                 >
//                   <span>Contact</span>
//                 </NavLink>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   /* Mobile menu active link */
//   .mb-menu-link.active {
//     color: var(--primary) !important;
//   }

// `;

// export default MobileMenu;

import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const MobileMenu = () => {
  return (
    <Wrapper>
      <div className="offcanvas offcanvas-start canvas-mb" id="mobileMenu">
        <span
          className="icon-close icon-close-popup"
          data-bs-dismiss="offcanvas"
        ></span>
        <div className="mb-canvas-content">
          <div className="mb-body">
            <ul className="nav-ul-mb" id="wrapper-menu-navigation">
              <li className="nav-mb-item">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    isActive ? "mb-menu-link current active" : "mb-menu-link"
                  }
                >
                  <span data-bs-dismiss="offcanvas">Home</span>
                </NavLink>
              </li>

              <li className="nav-mb-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "mb-menu-link current active" : "mb-menu-link"
                  }
                >
                  <span data-bs-dismiss="offcanvas">About</span>
                </NavLink>
              </li>

              <li className="nav-mb-item">
                <NavLink
                  to="/product"
                  className={({ isActive }) =>
                    isActive ? "mb-menu-link current active" : "mb-menu-link"
                  }
                >
                  <span data-bs-dismiss="offcanvas">Products</span>
                </NavLink>
              </li>

              <li className="nav-mb-item">
                <NavLink
                  to="/gallery"
                  className={({ isActive }) =>
                    isActive ? "mb-menu-link current active" : "mb-menu-link"
                  }
                >
                  <span data-bs-dismiss="offcanvas">Gallery</span>
                </NavLink>
              </li>

              <li className="nav-mb-item">
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive ? "mb-menu-link current active" : "mb-menu-link"
                  }
                >
                  <span data-bs-dismiss="offcanvas">Blog</span>
                </NavLink>
              </li>

              <li className="nav-mb-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "mb-menu-link current active" : "mb-menu-link"
                  }
                >
                  <span data-bs-dismiss="offcanvas">Contact</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* Mobile menu active link */
  .mb-menu-link.active {
    color: var(--primary) !important;
  }
`;

export default MobileMenu;
