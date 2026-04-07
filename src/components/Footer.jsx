import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import generalArray from "../DataJs/general.js";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [generals, setGenerals] = useState([]);

  useEffect(() => {
    setGenerals(generalArray);
  }, []);

  return (
    <footer id="footer" className="footer md-pb-70">
      <div className="footer-wrap">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              {/* Footer Logo & Info */}
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
                <div className="footer-infor">
                  <div className="footer-logo">
                    <Link to="/">
                      {/* <img src="/images/logo/logo.png" alt="Logo" /> */}
                      <img src={generals.logo} alt="Logo" />
                    </Link>
                  </div>
                  <ul>
                    <li>
                      <p>{generals.address}</p>
                    </li>
                    <li className="phone">
                      <p>
                        <Link to="#">{generals.phone}</Link>
                      </p>
                    </li>
                    <li>
                      <p>
                        <Link to="mailto:entry@support.com">
                          {generals.phone}
                        </Link>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Information Links */}
              <div className="col-xl-2 col-lg-2 col-md-4 col-sm-12 col-xs-12 footer-col-block">
                <div className="footer-heading footer-heading-desktop">
                  <h6>Information</h6>
                </div>
                <div className="footer-heading footer-heading-moblie">
                  <h6>Information</h6>
                </div>
                <ul className="footer-menu-list ss-collapse-content">
                  <li>
                    <Link to="/privacy-policy" className="footer-menu_item">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/delivery-return" className="footer-menu_item">
                      Returns + Exchanges
                    </Link>
                  </li>
                  <li>
                    <Link to="/shipping-delivery" className="footer-menu_item">
                      Shipping
                    </Link>
                  </li>
                  <li>
                    <Link to="/terms-conditions" className="footer-menu_item">
                      Terms &amp; Conditions
                    </Link>
                  </li>
                  <li>
                    <Link to="/faq-1" className="footer-menu_item">
                      FAQ’s
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Customer Services */}
              <div className="col-xl-2 col-lg-2 col-md-4 col-sm-12 col-xs-12 footer-col-block">
                <div className="footer-heading footer-heading-desktop">
                  <h6>Customer Services</h6>
                </div>
                <div className="footer-heading footer-heading-moblie">
                  <h6>Customer Services</h6>
                </div>
                <ul className="footer-menu-list ss-collapse-content">
                  <li>
                    <Link to="/about" className="footer-menu_item">
                      Our Story
                    </Link>
                  </li>
                  <li>
                    <Link to="/our-store" className="footer-menu_item">
                      Visit Our Store
                    </Link>
                  </li>
                  <li>
                    <Link to="/login" className="footer-menu_item">
                      Account
                    </Link>
                  </li>
                  <li>
                    <Link to="/compare" className="footer-menu_item">
                      Compare
                    </Link>
                  </li>
                  <li>
                    <Link to="/wishlist" className="footer-menu_item">
                      My Wishlist
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div className="col-xl-2 col-lg-2 col-md-4 col-sm-12 col-xs-12 footer-col-block">
                <div className="footer-heading footer-heading-desktop">
                  <h6>Contact us</h6>
                </div>
                <div className="footer-heading footer-heading-moblie">
                  <h6>Contact us</h6>
                </div>
                <ul className="footer-menu-list ss-collapse-content">
                  <li>
                    <Link to="/contact" className="footer-menu_item">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="footer-menu_item">
                      Faqs
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="footer-menu_item">
                      Store Location
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="footer-menu_item">
                      Support 24/7
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Newsletter */}
              <div className="col-xl-3 col-lg-3 col-md-8 col-sm-12 col-12">
                <div className="footer-newsletter footer-col-block">
                  <div className="footer-heading footer-heading-desktop">
                    <h6>
                      Join our newsletter and get $50 discount for your first
                      order
                    </h6>
                  </div>
                  <div className="footer-heading footer-heading-moblie">
                    <h6>
                      Join our newsletter and get $50 discount for your first
                      order
                    </h6>
                  </div>
                  <div className="ss-collapse-content">
                    <form
                      className="form-newsletter subscribe-form"
                      id="form-newsletter"
                      acceptCharset="utf-8"
                      data-mailchimp="true"
                    >
                      <div className="subscribe-content">
                        <fieldset className="email">
                          <input
                            type="email"
                            name="email-form"
                            className="subscribe-email"
                            placeholder="Enter your email...."
                            tabIndex="0"
                            aria-required="true"
                          />
                        </fieldset>
                        <div className="button-submit">
                          <button
                            id="button-newsletter"
                            className="subscribe-button btn-icon"
                            type="button"
                          >
                            <i className="icon icon-arrow1-top-left"></i>
                          </button>
                        </div>
                      </div>
                      <div className="subscribe-msg"></div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="footer__copyright col-xl-12 col-lg-12 col-md-12 col-12 text-center">
                <small className="copyright__content">
                  <Link to="https://magento2.magentech.com/">Entry</Link> ©
                  {currentYear}&nbsp;
                </small>

                <small className="copyright__content">
                  Demo Store. All Rights Reserved. Designed by&nbsp;
                  <Link
                    to="https://www.ekattorit.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <small className="small">
                      <span style={{ color: "red" }}>EKATTOR</span>
                      <span style={{ color: "green" }}> iT</span>
                    </small>
                  </Link>
                </small>
              </div>
              <div className="footer__payment col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="ss-payment">
                  <img src="images/payments/img-1.png" alt="Payments" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
