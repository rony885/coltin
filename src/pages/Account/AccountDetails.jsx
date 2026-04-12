import React from "react";
import { Link } from "react-router-dom";

const AccountDetails = () => {
  return (
    <>
      <div className="breadcrumb">
        <div className="container">
          <div className="breadcrumbtitle">
            <h2>Account Details</h2>
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
                    <Link to="/account" className="my-account-nav-item">
                      Dashboard
                    </Link>
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
                    <span className="my-account-nav-item active">
                      Account Details
                    </span>
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
              <div className="my-account-content account-edit">
                <div className="">
                  <form className="" id="form-password-change" action="#">
                    <div className="ss-field style-1 mb_15">
                      <input
                        className="ss-field-input ss-input"
                        placeholder="First name "
                        type="text"
                        id="property1"
                        name="first name"
                      />
                    </div>
                    <div className="ss-field style-1 mb_15">
                      <input
                        className="ss-field-input ss-input"
                        placeholder="Last name "
                        type="text"
                        id="property2"
                        name="last name"
                      />
                    </div>
                    <div className="ss-field style-1 mb_15">
                      <input
                        className="ss-field-input ss-input"
                        placeholder="Email "
                        type="email"
                        id="property3"
                        name="email"
                      />
                    </div>
                    <h6 className="mb_20">Password Change</h6>
                    <div className="ss-field style-1 mb_30">
                      <input
                        className="ss-field-input ss-input"
                        placeholder="Current password "
                        type="password"
                        id="property4"
                        name="password"
                      />
                    </div>
                    <div className="ss-field style-1 mb_30">
                      <input
                        className="ss-field-input ss-input"
                        placeholder="New password "
                        type="password"
                        id="property5"
                        name="password"
                      />
                    </div>
                    <div className="ss-field style-1 mb_30">
                      <input
                        className="ss-field-input ss-input"
                        placeholder="Confirm password "
                        type="password"
                        id="property6"
                        name="password"
                      />
                    </div>
                    <div className="mb_20">
                      <button
                        type="submit"
                        className="ss-btn w-100 radius-3 btn-fill justify-content-center"
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AccountDetails;
