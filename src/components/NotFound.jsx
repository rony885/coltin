// import React from "react";
// import { Link } from "react-router-dom";

// const NotFound = () => {
//   return (
//     <>
//       <div className="breadcrumb">
//         <div className="container">
//           <div className="breadcrumbtitle">
//             <h2>Contact</h2>
//           </div>
//           <div className="breadcrumb-wrap d-flex justify-content-center flex-wrap align-items-center">
//             <div className="breadcrumb-list">
//               <Link to="/" className="text">
//                 Home
//               </Link>
//               <i className="icon icon-arrow-right"></i>
//               <Link to="#" className="text">
//                 Contact
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="page-contact">
//         <div className="container">
//           <h1 className="page-title">404 - Page Not Found</h1>
//         </div>
//       </div>
//     </>
//   );
// };

// export default NotFound;

import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <div className="container text-center">
          <div className="breadcrumbtitle">
            <h2>Page Not Found</h2>
          </div>

          <div className="breadcrumb-wrap d-flex justify-content-center align-items-center">
            <div className="breadcrumb-list">
              <Link to="/" className="text">
                Home
              </Link>
              <i className="icon icon-arrow-right mx-2"></i>
              <span className="text">404 Error</span>
            </div>
          </div>
        </div>
      </div>

      {/* 404 Content */}
      <div className="page-contact py-5">
        <div className="container text-center">
          <h1
            style={{
              fontSize: "120px",
              fontWeight: "700",
              color: "#e5e5e5",
              lineHeight: "1",
            }}
          >
            404
          </h1>

          <h2 className="mt-3">Oops! Page not found</h2>

          <p
            className="mt-3 text-muted"
            style={{ maxWidth: "500px", margin: "0 auto" }}
          >
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>

          <div className="mt-4 d-flex justify-content-center gap-3">
            <Link to="/" className="btn btn-dark">
              Back to Home
            </Link>

            <Link to="/contact" className="btn btn-outline-secondary">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
