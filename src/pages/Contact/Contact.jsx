import React, { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { SiX } from "react-icons/si";
import { Link } from "react-router-dom";

import contactInfoArray from "../../DataJs/contactInfo.js";
import general from "../../DataJs/general.js";

const Contact = () => {
  const [contactInfo, setContactInfo] = useState([]);
  const [socialLinks, setSocialLinks] = useState([]);

  useEffect(() => {
    setContactInfo(contactInfoArray);
    setSocialLinks(general?.socialLinks);
  }, []);

  return (
    <>
    
      <div className="page-contact my-4">
        <div className="container">
          <h1 className="page-title">Contact</h1>
          <div className="contact-wrap">
            <div className="form-contact">
              <div className="contact-title">
                <h4>Ask Us Anything</h4>
                <div className="contact-sub">
                  Have Link question or comment? Use the form below to send us
                  Link message or contact us by mail at:
                </div>
              </div>
              <div className="contact-form form-vertical">
                <form
                  id="contact_form"
                  accept-charset="UTF-8"
                  className="contact-form"
                >
                  <input
                    type="hidden"
                    name="form_type"
                    defaultValue="contact"
                  />
                  <input type="hidden" name="utf8" defaultValue="✓" />
                  <div className="field">
                    <label for="ContactFormName">Your Name *</label>
                    <input
                      type="text"
                      id="ContactFormName"
                      name="contact[name]"
                      placeholder="Your Name *"
                      defaultValue=""
                      required=""
                    />
                  </div>
                  <div className="field">
                    <label for="ContactFormEmail" className="">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="ContactFormEmail"
                      name="contact[email]"
                      placeholder="Your Email *"
                      defaultValue=""
                      className=" "
                      required=""
                    />
                  </div>
                  <div className="field">
                    <label for="ContactFormPhone">Your Phone Number *</label>
                    <input
                      type="tel"
                      id="ContactFormPhone"
                      name="contact[phone]"
                      placeholder="Your Phone Number *"
                      pattern="[0-9\-]*"
                      defaultValue=""
                      required=""
                    />
                  </div>
                  <div className="field">
                    <label for="ContactFormMessage">Your Message *</label>
                    <textarea
                      rows="10"
                      id="ContactFormMessage"
                      placeholder="Your Message *"
                      name="contact[body]"
                      required=""
                    ></textarea>
                  </div>
                  <input
                    type="submit"
                    className="btn"
                    defaultValue="Submit Now"
                  />
                </form>
              </div>
            </div>
            <div className="contact-info">
              <div className="contact-title">
                <h4>{contactInfo.title}</h4>
                <div className="contact-sub">
                  {/* We'd love to hear from you - please use the form to send us
                  your message or ideas. <br />
                  Or simply pop in for Link cup of fresh tea and Link cookie: */}
                  {contactInfo.description}
                </div>
              </div>
              <div className="contact-info__content">
                <ul className="list-unstyled">
                  <li>
                    <i className="icon-place"></i>
                    <span>{contactInfo.address}</span>
                  </li>
                  <li>
                    <i className="icon-mail"></i>
                    <span>{contactInfo.email}</span>
                  </li>
                  <li>
                    <i className="icon-whatsapp"></i>
                    <span>{contactInfo.phone}</span>
                  </li>
                  <li>
                    <i className="icon-time"></i>
                    <span>{contactInfo.time}</span>
                  </li>
                </ul>
              </div>
              <div className="contact-info__social">
                {/* <ul className="list-unstyled list-social">
                  <li className="list-social__item">
                    <Link
                      to="#"
                      className="link list-social__link"
                      target="_blank"
                    >
                      <FaFacebookF size={24} />
                      <span>Facebook</span>
                    </Link>
                  </li>
                  <li className="list-social__item">
                    <Link
                      to="https://instagram.com/shopify"
                      className="link list-social__link"
                      target="_blank"
                    >
                      <FaInstagram size={24} />
                      <span>Instagram</span>
                    </Link>
                  </li>
                  <li className="list-social__item">
                    <Link
                      to="https://twitter.com/shopify"
                      className="link list-social__link"
                      target="_blank"
                    >
                      <SiX size={24} />
                      <span>Twitter</span>
                    </Link>
                  </li>
                  <li className="list-social__item">
                    <Link
                      to="#"
                      className="link list-social__link"
                      target="_blank"
                    >
                      <FaTiktok size={24} />
                      <span>TikTok</span>
                    </Link>
                  </li>
                  <li className="list-social__item">
                    <Link
                      to="https://www.youtube.com/shopify"
                      className="link list-social__link"
                      target="_blank"
                    >
                      <FaYoutube size={24} />
                      <span>YouTube</span>
                    </Link>
                  </li>
                </ul> */}
                <ul className="list-unstyled list-social">
                  {socialLinks.map((item) => (
                    <li key={item.id} className="list-social__item">
                      <Link
                        to={item.url}
                        className="link list-social__link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.icon}
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-map mt_80">
          <iframe
            title="Shopify New York Office Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6787.11846816203!2d-74.00106388051138!3d40.73303806053912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2zVGjDoG5oIHBo4buRIE5ldyBZb3JrLCBUaeG7g3UgYmFuZyBOZXcgWW9yaw!5e0!3m2!1svi!2s!4v1498454043100"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
