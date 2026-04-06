import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="breadcrumb">
        <div className="container">
          <div className="breadcrumbtitle">
            <h2>Account</h2>
          </div>
          <div className="breadcrumb-wrap d-flex justify-content-center flex-wrap align-items-center">
            <div className="breadcrumb-list">
              <Link to="/" className="text">
                Home
              </Link>
              <i className="icon icon-arrow-right"></i>
              <Link to="#" className="text">
                Account
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section className="flat-spacing-8">
        <div className="container">
          <div className="ss-grid-layout lg-col-2 ss-login-wrap">
            <div className="ss-login-form">
              <div id="recover">
                <h5 className="mb_24">Reset your password</h5>
                <p className="mb_30">
                  We will send you an email to reset your password
                </p>
                <div>
                  <form
                    className=""
                    id="login-form"
                    accept-charset="utf-8"
                    data-mailchimp="true"
                  >
                    <div className="ss-field style-1 mb_15">
                      <input
                        className="ss-field-input ss-input"
                        placeholder="Email *"
                        type="email"
                        id="property3"
                        name="email"
                      />
                    </div>
                    <div className="mb_20">
                      <Link to="#login" className="ss-btn btn-line">
                        Cancel
                      </Link>
                    </div>
                    <div className="">
                      <button
                        type="submit"
                        className="ss-btn w-100 radius-5 btn-fill justify-content-center"
                      >
                        Reset password
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div id="login">
                <div>
                  <form className="" id="login-form" accept-charset="utf-8">
                    <div className="ss-field style-1 mb_15">
                      <input
                        className="ss-field-input ss-input"
                        placeholder="Email *"
                        type="email"
                        id="property3"
                        name="email"
                      />
                    </div>
                    <div className="ss-field style-1 mb_30">
                      <input
                        className="ss-field-input ss-input"
                        placeholder="Password *"
                        type="password"
                        id="property4"
                        name="password"
                      />
                    </div>
                    <div className="mb_20">
                      <Link to="#recover" className="ss-btn btn-line">
                        Forgot your password?
                      </Link>
                    </div>
                    <div className="d-flex gap-10">
                      <button
                        type="submit"
                        className="ss-btn w-100 radius-5 btn-fill justify-content-center"
                      >
                        Log in
                      </button>
                      <Link
                        className="button w-100 radius-5 justify-content-center"
                        to="/register"
                      >
                        Create an account
                      </Link>
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

export default Login;
