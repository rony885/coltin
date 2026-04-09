import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      {/* 404 Content */}
      <div className="page-contact py-5 my-4">
        <div className="container text-center">
          <h1
            style={{
              fontSize: "120px",
              fontWeight: "700",
              color: "#000",
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
