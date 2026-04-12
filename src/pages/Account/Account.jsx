import React from "react";
import { Link } from "react-router-dom";

const Account = () => {
  return (
    <>
      <div className="breadcrumb">
        <div className="container">
          <div className="breadcrumbtitle">
            <h2>My Account</h2>
          </div>
        </div>
      </div>

      <section className="flat-spacing-8">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="wrap-sidebar-account">
                <ul className="my-account-nav">
                  <li>
                    <span className="my-account-nav-item active">
                      Dashboard
                    </span>
                  </li>
                  <li>
                    <Link to="/account-orders" className="my-account-nav-item">
                      Orders
                    </Link>
                  </li>
                  <li>
                    <Link to="/account-address" className="my-account-nav-item">
                      Address
                    </Link>
                  </li>
                  <li>
                    <Link to="/account-edit" className="my-account-nav-item">
                      Account Details
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/account-wishlist"
                      className="my-account-nav-item"
                    >
                      Wishlist
                    </Link>
                  </li>
                  <li>
                    <Link to="/login" className="my-account-nav-item">
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="my-account-content account-dashboard">
                <div className="mb_60">
                  <h5 className="fw-5 mb_20">Hello Customer</h5>
                  <p>
                    From your account dashboard you can view your
                    <Link className="text_primary" to="my-account-orders.html">
                      recent orders
                    </Link>
                    , manage your
                    <Link className="text_primary" to="my-account-address.html">
                      shipping and billing address
                    </Link>
                    , and
                    <Link className="text_primary" to="my-account-edit.html">
                      edit your password and account details
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Account;
