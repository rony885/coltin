import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div class="breadcrumb">
        <div class="container">
          <div class="breadcrumbtitle">
            <h2>Create Account</h2>
          </div>
          <div class="breadcrumb-wrap d-flex justify-content-center flex-wrap align-items-center">
            <div class="breadcrumb-list">
              <Link to="/" class="text">
                Home
              </Link>
              <i class="icon icon-arrow-right"></i>
              <Link to="#" class="text">
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section class="flat-spacing-8">
        <div class="container">
          <div class="form-register-wrap">
            <form
              class=""
              id="register-form"
              accept-charset="utf-8"
              data-mailchimp="true"
            >
              <div class="ss-field style-1 mb_15">
                <input
                  class="ss-field-input ss-input"
                  placeholder="First name"
                  type="text"
                  id="property1"
                  name="first name"
                />
              </div>
              <div class="ss-field style-1 mb_15">
                <input
                  class="ss-field-input ss-input"
                  placeholder="Last name"
                  type="text"
                  id="property2"
                  name="last name"
                />
              </div>
              <div class="ss-field style-1 mb_15">
                <input
                  class="ss-field-input ss-input"
                  placeholder="Email *"
                  type="email"
                  id="property3"
                  name="email"
                />
              </div>
              <div class="ss-field style-1 mb_30">
                <input
                  class="ss-field-input ss-input"
                  placeholder="Password *"
                  type="password"
                  id="property4"
                  name="password"
                />
              </div>
              <div class="d-flex gap-10">
                <button
                  type="submit"
                  class="ss-btn w-100 radius-5 btn-fill justify-content-center"
                >
                  Create Account
                </button>
                <Link
                  to="/login"
                  class="button w-100 radius-5 justify-content-center"
                >
                  Sign in
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
