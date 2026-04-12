// import React from "react";
// import { Link } from "react-router-dom";

// const Faq = () => {
//   return (
//     <>
//       <div className="breadcrumb">
//         <div className="container">
//           <div className="breadcrumbtitle">
//             <h2>Faqs</h2>
//           </div>
//           <div className="breadcrumb-wrap d-flex justify-content-center flex-wrap align-items-center">
//             <div className="breadcrumb-list">
//               <Link to="/" className="text">
//                 Home
//               </Link>
//               <i className="icon icon-arrow-right"></i>
//               <Link to="#" className="text">
//                 Faqs
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="page-content container">
//         <div className="faq-desc">
//           Below FAQ are some common concerns of our clients before purchasing
//           the theme. <br />
//           If you have other questions, please just send it to
//           example@domain.com.
//         </div>

//         <div className="faq-message-questions">
//           <div className="row">
//             <div className="col-lg-6">
//               {" "}
//               <div className="faq-message">
//                 <h3 className="faq-title fs-3">
//                   <span>Need Help?</span>
//                 </h3>
//                 <div className="faq-text">
//                   If you have an issue or question that requires immediate
//                   assistance, you can click the button below to chat live with
//                   Link Customer Service representative. <br />
//                   <br />
//                   If we aren’t available, drop us an email and we will get back
//                   to you within 20-36 hours!
//                 </div>
//                 <div className="faq-icons d-flex justify-content-between align-items-center mt-4">
//                   <Link to="#" className="message-icon">
//                     <span className="message-icon-text">Message Us</span>
//                   </Link>
//                   <Link to="#" className="message-icon">

//                     <span className="message-icon-text">Contact Us</span>
//                   </Link>
//                 </div>
//               </div>
//             </div>

//             <div className="col-lg-6">
//               <div className="faq-questions">
//                 <h3 className="faq-title fs-3">
//                   <span>Frequently Asked Questions</span>
//                 </h3>
//                 <div className="flat-accordion style-default has-btns-arrow mb_60">
//                   <div className="flat-toggle active">
//                     <div className="toggle-title active">
//                       Will your template be fully compatible with Template?
//                     </div>
//                     <div className="toggle-content">
//                       <p>Yes it will be.</p>
//                     </div>
//                   </div>
//                   <div className="flat-toggle">
//                     <div className="toggle-title">
//                       What is included in the theme package?
//                     </div>
//                     <div className="toggle-content">
//                       <p>
//                         Please make sure that you follow below steps: <br />
//                         <br />
//                         1/ Download the package from themeforest.net (The file
//                         is in zip format) <br />
//                         <br />
//                         2/ Extract the file you've just downloaded (Don't forget
//                         this step). <br />
//                         <br />
//                         3/ Find this file: ss-entry-xxx.zip in the folder
//                         Themes, then you just need to upload ss-entry-xxx.zip
//                         file to your <br />
//                         Template store.
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flat-toggle">
//                     <div className="toggle-title">
//                       When do I receive my order?
//                     </div>
//                     <div className="toggle-content">
//                       <p>
//                         When placing the order, Link day of shipment is
//                         indicated. After the order has been placed, the same
//                         delivery time will also be stated on the order
//                         confirmation. It is therefore never possible that during
//                         the order, the shipping day on the website, is different
//                         than on the order confirmation.
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flat-toggle">
//                     <div className="toggle-title">
//                       When will I receive the invoice for my order?
//                     </div>
//                     <div className="toggle-content">
//                       <p>
//                         The perfect way to enjoy brewing tea on low hanging
//                         fruit to identify. Duis autem vel eum iriure dolor in
//                         hendrerit vulputate velit esse molestie consequat, vel
//                         illum dolore eu feugiat nulla facilisis. For me, the
//                         most important part of improving at photography has been
//                         sharing it. Lorem ipsum dolor sit amet, consectetur
//                         adipisicing elit, sed do eiusmod tempor incididunt ut
//                         labore et dolore magna aliqua. Ut enim ad minim veniam,
//                         quis nostrud exercitation ullamco laboris nisi ut
//                         aliquip ex ea commodo consequat.
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flat-toggle">
//                     <div className="toggle-title">
//                       How long will it take to get my package?
//                     </div>
//                     <div className="toggle-content">
//                       <p>
//                         When placing the order, Link day of shipment is
//                         indicated. After the order has been placed, the same
//                         delivery time will also be stated on the order
//                         confirmation. It is therefore never possible that during
//                         the order, the shipping day on the website, is different
//                         than on the order confirmation.
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flat-toggle">
//                     <div className="toggle-title">
//                       How much does shipping cost?
//                     </div>
//                     <div className="toggle-content">
//                       <p>
//                         When your order is confirmed with your Shadowspec
//                         consultant, it will move through our order system and to
//                         the warehouse dispatch to be processed and pick your
//                         order. Once our warehouse team has picked your order and
//                         organised the dispatch you'll receive an automatic email
//                         from the freight provider your umbrella is booked with.
//                         This email will contain your tracking link and tracking
//                         number.
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flat-toggle">
//                     <div className="toggle-title">
//                       What shipping carriers do you use?
//                     </div>
//                     <div className="toggle-content">
//                       <p>
//                         For orders going overnight with our freight providers –
//                         who are NZ Couriers and Post Haste, once your order has
//                         been dispatched, you will receive your tracking details
//                         in an email from our Customer Service team.
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flat-toggle">
//                     <div className="toggle-title">
//                       Can I change my delivery address?
//                     </div>
//                     <div className="toggle-content">
//                       <p>
//                         When your order is paid for, you will receive an email
//                         from our accounts team with your invoice and packing
//                         slip. This packing slip will show you all the items you
//                         are to receive. When the package/s are delivered, ensure
//                         you check the contents and tick off the items on your
//                         packing slip. You will have 48 hours to check your items
//                         once all packages have been delivered. After this time,
//                         you may incur replacement fees. If you have made payment
//                         and have not received Link packing slip within two
//                         business days, please contact us so we can arrange for
//                         this to be sent.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="faq-support mb_90">
//           <span className="support-text">
//             Unable to find satisfactory answers ?
//           </span>
//           <Link to="contact.html" className="button btn-reverse">
//             Contact Support
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Faq;

import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqData = [
    {
      question: "Will your template be fully compatible with Template?",
      answer: "Yes it will be.",
    },
    {
      question: "What is included in the theme package?",
      answer: `Please make sure that you follow below steps:

1/ Download the package from themeforest.net (The file is in zip format)

2/ Extract the file you've just downloaded (Don't forget this step).

3/ Find this file: ss-entry-xxx.zip in the folder Themes, then upload it to your Template store.`,
    },
    {
      question: "When do I receive my order?",
      answer:
        "After placing the order, delivery time will be shown on the confirmation.",
    },
    {
      question: "When will I receive the invoice for my order?",
      answer:
        "You will receive your invoice via email after your order is processed.",
    },
    {
      question: "How long will it take to get my package?",
      answer:
        "Delivery time depends on your location and selected shipping method.",
    },
    {
      question: "How much does shipping cost?",
      answer: "Shipping cost depends on your order and delivery location.",
    },
    {
      question: "What shipping carriers do you use?",
      answer: "We use reliable courier partners to ensure safe delivery.",
    },
    {
      question: "Can I change my delivery address?",
      answer: "Yes, you can change your delivery address before shipment.",
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Wrapper>
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <div className="container">
          <div className="breadcrumbtitle">
            <h2>Faqs</h2>
          </div>
          <div className="breadcrumb-wrap d-flex justify-content-center flex-wrap align-items-center">
            <div className="breadcrumb-list">
              <Link to="/" className="text">
                Home
              </Link>
              <i className="icon icon-arrow-right"></i>
              <Link to="#" className="text">
                Faqs
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="page-content container">
        <div className="faq-desc">
          Below FAQ are some common concerns of our clients before purchasing
          the theme. <br />
          If you have other questions, please send it to example@domain.com.
        </div>

        <div className="faq-message-questions">
          <div className="row">
            {/* Left Side */}
            <div className="col-lg-6">
              <div className="faq-message">
                <h3 className="faq-title fs-3">
                  <span>Need Help?</span>
                </h3>
                <div className="faq-text">
                  If you have an issue or question that requires immediate
                  assistance, you can click below to contact support.
                </div>

                <div className="faq-icons d-flex justify-content-between align-items-center mt-4">
                  <Link
                    to="https://www.facebook.com/SmartAddons.page"
                    className="message-icon"
                  >
                    {/* <img
                      width="50"
                      height="50"
                      alt="Message"
                      src="images/message--icon1.png"
                    /> */}
                    <span className="message-icon-text">Message Us</span>
                  </Link>

                  <Link to="/contact" className="message-icon">
                    {/* <img
                      width="50"
                      height="36"
                      alt="Contact"
                      src="images/message--icon2.png"
                    /> */}
                    <span className="message-icon-text">Contact Us</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Side Accordion */}
            <div className="col-lg-6">
              <div className="faq-questions">
                <h3 className="faq-title fs-3">
                  <span>Frequently Asked Questions</span>
                </h3>

                <div className="flat-accordion style-default has-btns-arrow mb_60">
                  {faqData.map((item, index) => (
                    <div
                      key={index}
                      className={`flat-toggle ${
                        activeIndex === index ? "active" : ""
                      }`}
                    >
                      <div
                        className={`toggle-title ${
                          activeIndex === index ? "active" : ""
                        }`}
                        onClick={() => handleToggle(index)}
                        style={{ cursor: "pointer" }}
                      >
                        {item.question}
                      </div>

                      {activeIndex === index && (
                        <div className="toggle-content">
                          <p style={{ whiteSpace: "pre-line" }}>
                            {item.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Support */}
        <div className="faq-support mb_90">
          <span className="support-text">
            Unable to find satisfactory answers?
          </span>
          <Link to="/contact" className="button btn-reverse">
            Contact Support
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .flat-toggle .toggle-content {
    display: none;
  }

  .flat-toggle.active .toggle-content {
    display: block;
  }

  /* 👉 Default question style */
  .toggle-title {
    transition: all 0.3s ease;
    color: #222;
  }

  /* 👉 ACTIVE question = RED */
  .toggle-title.active {
    color: red;
    font-weight: 600;
  }
`;

export default Faq;
