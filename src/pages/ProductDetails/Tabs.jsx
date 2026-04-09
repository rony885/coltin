import React, { useState } from "react";
import styled from "styled-components";

const Tabs = ({ product }) => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Product Description", "Specification", "Q & A", "Review"];

  const tabsData = [
    {
      title: "Product Description",
      content: product?.p_description?.trim()
        ? product.p_description
        : `<p class="text-center text-danger fs-4">Not Found</p>`,
    },
    {
      title: "Specification",
      content: product?.p_specification?.trim()
        ? product.p_specification
        : `<p class="text-center text-danger fs-4">Not Found</p>`,
    },
    {
      title: "Q & A",
      content: product?.p_q?.trim()
        ? product.p_q
        : `<p class="text-center text-danger fs-4">Not Found</p>`,
    },
    {
      title: "Review",
      content: product?.p_review?.trim()
        ? product.p_review
        : `<p class="text-center text-danger fs-4">Not Found</p>`,
    },
  ];

  
  return (
    <Wrapper>
      <section className="flat-spacing-17 detail-bottom-oneCol">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="widget-tabs widget-tabs-horizontal">
                {/* ===== TAB HEADERS ===== */}
                <ul className="widget-menu-tab">
                  {tabs.map((tab, index) => (
                    <li
                      key={index}
                      className={`item-title ${
                        activeTab === index ? "active" : ""
                      }`}
                      onClick={() => setActiveTab(index)}
                    >
                      <span className="inner">{tab}</span>
                    </li>
                  ))}
                </ul>

                {/* ===== TAB CONTENT ===== */}
                <div className="widget-content-tab">
                  {/* <div className="widget-content-inner active"> */}
                  {tabsData.map((tab, index) => (
                    <div
                      key={index}
                      className={`widget-content-inner ${
                        activeTab === index ? "active" : ""
                      }`}
                      dangerouslySetInnerHTML={{ __html: tab.content }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .widget-content-inner {
    display: none;
  }

  .widget-content-inner.active {
    display: block;
  }

  .item-title {
    cursor: pointer;
  }

  .item-title.active .inner {
    font-weight: 600;
  }
`;

export default Tabs;
