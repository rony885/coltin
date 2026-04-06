import React, { useState } from "react";
import styled from "styled-components";

const tabsData = [
  {
    id: 0,
    title: "Product Description",
    content: `
      <p>
        Curabitur vestibulum massa nec feugiat porttitor.
        Curabitur commodo nunc vel enim semper, mattis est feugiat. Phasellus sodales velit sit amet enim volutpat pretium.
        Aenean eu purus dui. Duis nec volutpat massa. Aenean accumsan, mauris ut efficitur convallis, dui orci
        semper lorem, sit amet convallis mi felis id ligula. Praesent congue quam sit amet eros tempor, in bibendum
        diam gravida. Morbi cursus malesuada porta. Morbi elit sapien. Morbi eget felis ac elit faucibus viverra
        convallis quis ex. Fusce sed elit sed metus luctus malesuada.
      </p>
      <p>
        Cras nisi sapien, venenatis euismod finibus eu, hendrerit vulputate urna. Sed maximus, diam et volutpat
        convallis, felis nunc finibus mi, nec consequat erat quam eu dolor. Integer luctus tellus id volutpat
        suscipit. Morbi vitae lacus mollis neque commodo volutpat. Vestibulum risus turpis, porta at cursus at,
        sollicitudin non nunc. Nullam at eleifend neque. Phasellus sodales velit sit amet nulla imperdiet
        suscipit.
      </p>
    `,
  },
  {
    id: 1,
    title: "Shipping & Returns",
    content: `
      <p>Your order of $100 or more gets free standard delivery.</p>
      <ul>
        <li>Standard delivered 4-5 Business Days</li>
        <li>Express delivered 2-4 Business Days</li>
      </ul>
      <p>Orders are processed and delivered Monday-Friday (excluding public holidays)</p>
      <p>
        Austino members enjoy 
        <a href="#">free returns</a>.
      </p>
    `,
  },
  {
    id: 2,
    title: "Review",
    content: `
      <p>Reviews section content goes here. You can store HTML or text.</p>
      <p>Example: User reviews, ratings, and comments.</p>
    `,
  },
  {
    id: 3,
    title: "Custom Tab",
    content: `
      <p>
        When you place an order, we will estimate shipping and delivery dates for you based on the availability of your items
        and the shipping options you choose.
      </p>
      <p>
        Please also note that the shipping rates for many items we sell are weight-based. The weight of any such item can be
        found on its detail page. To reflect the policies of the shipping companies we use, all weights will be rounded up
        to the next full pound.
      </p>
    `,
  },
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    "Product Description",
    "Shipping & Returns",
    "Review",
    "Custom Tab",
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
                  {/* <div
                    className={`widget-content-inner ${
                      activeTab === 0 ? "active" : ""
                    }`}
                  >
                    <div className="rte description">
                      <label className="d-none">Quick Overview</label>
                      <p>
                        Curabitur vestibulum massa nec feugiat porttitor.
                        Curabitur commodo nunc vel enim semper, Link mattis est
                        feugiat. Phasellus sodales velit sit amet enim volutpat
                        pretium. Aenean eu purus dui. Duis nec volutpat massa.
                        Aenean accumsan, mauris ut efficitur convallis, dui orci
                        semper lorem, sit amet convallis mi felis id ligula.
                        Praesent congue quam sit amet eros tempor, in bibendum
                        diam gravida. Morbi cursus malesuada porta. Morbi Link
                        elit sapien. Morbi eget felis ac elit faucibus viverra
                        convallis quis ex. Fusce sed elit sed metus luctus
                        malesuada. Proin quis lectus eget sem dapibus aliquet
                        vel sed diam. Nullam dictum interdum lacus sed semper.
                        Vestibulum ullamcorper commodo dolor, et bibendum massa
                        lacinia pretium.
                      </p>
                      <p>
                        Cras nisi sapien, venenatis euismod finibus eu,
                        hendrerit vulputate urna. Sed maximus, diam et volutpat
                        convallis, felis nunc finibus mi, nec consequat erat
                        quam eu dolor. Integer luctus tellus id volutpat
                        suscipit. Morbi vitae lacus mollis neque commodo
                        volutpat. Vestibulum risus turpis, porta at cursus at,
                        sollicitudin non nunc. Nullam at eleifend neque.
                        Phasellus sodales velit sit amet nulla imperdiet
                        suscipit. Morbi vitae mattis nunc, Link fermentum diam.
                        Vestibulum euismod tincidunt nunc vel posuere. Nam non
                        maximus dolor, quis iaculis sem. Fusce ut enim eros.
                        Nunc accumsan ut odio at ornare. Sed lorem ligula,
                        bibendum vel turpis quis, placerat ullamcorper ligula.
                        Quisque consectetur quam non mollis facilisis.
                      </p>
                      <p>
                        Nullam ultrices aliquam felis, non condimentum neque
                        aliquet sed. Curabitur sed feugiat tortor. Maecenas eget
                        massa nulla. Ut urna orci, bibendum Link massa eu,
                        interdum pulvinar urna. Pellentesque eu sollicitudin
                        enim. Nunc ac ex eu augue varius accumsan ut eget lorem.
                        Fusce blandit sem nulla, ut semper neque vehicula vel.
                        Duis tincidunt vestibulum elementum. Sed sit amet nulla
                        id nisi accumsan feugiat volutpat vehicula purus. Fusce
                        sodales eros tortor. Phasellus non justo scelerisque sem
                        facilisis porttitor. Pellentesque quis sagittis ex. Duis
                        mollis ultricies nulla sit amet faucibus. Sed metus
                        mauris, dapibus nec quam vel, interdum lobortis lectus.
                      </p>
                      <p>
                        In vel porta felis. Curabitur venenatis, nibh vel
                        imperdiet ultricies, nunc justo rhoncus metus, id
                        aliquam est odio vitae arcu. Phasellus pretium enim vel
                        feugiat porta. Duis ultricies accumsan volutpat. Morbi
                        congue id libero ut efficitur. Curabitur maximus sapien
                        turpis, et volutpat urna imperdiet molestie. In mattis
                        diam quis lacus congue, at condimentum orci consequat.
                        Sed sit amet dictum diam, et blandit sem. Nullam
                        hendrerit est elit, Link fringilla libero pretium non.
                      </p>
                    </div>
                  </div>

                  <div
                    className={`widget-content-inner ${
                      activeTab === 1 ? "active" : ""
                    }`}
                  >
                    <div className="success rte">
                      <p>
                        Your order of 100$ or more gets free standard delivery.
                      </p>
                      <ul className="ncss-list-ul mt4-sm mb4-sm">
                        <li className="ncss-li">
                          Standard delivered 4-5 Business Days
                        </li>
                        <li className="ncss-li">
                          Express delivered 2-4 Business Days
                        </li>
                      </ul>
                      <br />
                      <p>
                        Orders are processed and delivered Monday-Friday
                        (excluding public holidays)
                      </p>
                      <br />
                      <p>
                        Austino members enjoy
                        <Link className="u-underline" to="#">
                          free returns
                        </Link>
                        .
                      </p>
                    </div>
                  </div>

                  <div
                    className={`widget-content-inner ${
                      activeTab === 2 ? "active" : ""
                    }`}
                  >
                    <div className="tab-reviews write-cancel-review-wrap">
                      <div className="tab-reviews-heading">
                        <div className="top">
                          <div className="text-center">
                            <h1 className="number fw-6">4.8</h1>
                            <div className="list-star">
                              <i className="icon icon-star"></i>
                              <i className="icon icon-star"></i>
                              <i className="icon icon-star"></i>
                              <i className="icon icon-star"></i>
                              <i className="icon icon-star"></i>
                            </div>
                            <p>(168 Ratings)</p>
                          </div>
                          <div className="rating-score">
                            <div className="item">
                              <div className="number-1 text-caption-1">5</div>
                              <i className="icon icon-star"></i>
                              <div className="line-bg">
                                <div style={{ width: "94.67%" }}></div>
                              </div>
                              <div className="number-2 text-caption-1">59</div>
                            </div>
                            <div className="item">
                              <div className="number-1 text-caption-1">4</div>
                              <i className="icon icon-star"></i>
                              <div className="line-bg">
                                <div style={{ width: "60%" }}></div>
                              </div>
                              <div className="number-2 text-caption-1">46</div>
                            </div>
                            <div className="item">
                              <div className="number-1 text-caption-1">3</div>
                              <i className="icon icon-star"></i>
                              <div className="line-bg">
                                <div style={{ width: "0%" }}></div>
                              </div>
                              <div className="number-2 text-caption-1">0</div>
                            </div>
                            <div className="item">
                              <div className="number-1 text-caption-1">2</div>
                              <i className="icon icon-star"></i>
                              <div className="line-bg">
                                <div style={{ width: "0%" }}></div>
                              </div>
                              <div className="number-2 text-caption-1">0</div>
                            </div>
                            <div className="item">
                              <div className="number-1 text-caption-1">1</div>
                              <i className="icon icon-star"></i>
                              <div className="line-bg">
                                <div style={{ width: "0%" }}></div>
                              </div>
                              <div className="number-2 text-caption-1">0</div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="ss-btn btn-outline-dark fw-6 btn-comment-review btn-cancel-review">
                            Cancel Review
                          </div>
                          <div className="ss-btn btn-outline-dark fw-6 btn-comment-review btn-write-review">
                            Write Link review
                          </div>
                        </div>
                      </div>
                      <div className="reply-comment cancel-review-wrap">
                        <div className="d-flex mb_24 gap-20 align-items-center justify-content-between flex-wrap">
                          <h5 className="">03 Comments</h5>
                          <div className="d-flex align-items-center gap-12">
                            <div className="text-caption-1">Sort by:</div>
                            <div
                              className="ss-dropdown-sort"
                              data-bs-toggle="dropdown"
                            >
                              <div className="btn-select">
                                <span className="text-sort-value">
                                  Most Recent
                                </span>
                                <span className="icon icon-arrow-down"></span>
                              </div>
                              <div className="dropdown-menu">
                                <div className="select-item active">
                                  <span className="text-value-item">
                                    Most Recent
                                  </span>
                                </div>
                                <div className="select-item">
                                  <span className="text-value-item">
                                    Oldest
                                  </span>
                                </div>
                                <div className="select-item">
                                  <span className="text-value-item">
                                    Most Popular
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="reply-comment-wrap">
                          <div className="reply-comment-item">
                            <div className="user">
                              <div className="image">
                                <img
                                  src="images/collections/collection-circle-9.jpg"
                                  alt=""
                                />
                              </div>
                              <div>
                                <h6>
                                  <Link to="#" className="link">
                                    Great theme{" "}
                                  </Link>
                                </h6>
                                <div className="day text_black-3">
                                  1 days ago
                                </div>
                              </div>
                            </div>
                            <p className="text_black-3">
                              we were looking for Link theme with lots of built
                              in features and flexibility and this was perfect.
                              We expected to need to employ Link developer to
                              add Link few finishing touches. But we actually
                              managed to do everything ourselves. We did have
                              one small query and the support given was swift
                              and helpful.
                            </p>
                          </div>
                          <div className="reply-comment-item type-reply">
                            <div className="user">
                              <div className="image">
                                <img
                                  src="images/collections/collection-circle-10.jpg"
                                  alt=""
                                />
                              </div>
                              <div>
                                <h6>
                                  <Link to="#" className="link">
                                    Reply from Modave
                                  </Link>
                                </h6>
                                <div className="day text_black-3">
                                  1 days ago
                                </div>
                              </div>
                            </div>
                            <p className="text_black-3">
                              We love to hear it! Part of what we love most
                              about Modave is how much it empowers store owners
                              like yourself to build Link beautiful website
                              without having to hire Link developer :) Thank you
                              for this fantastic review!
                            </p>
                          </div>
                          <div className="reply-comment-item">
                            <div className="user">
                              <div className="image">
                                <img
                                  src="images/collections/collection-circle-8.jpg"
                                  alt=""
                                />
                              </div>
                              <div>
                                <h6>
                                  <Link to="#" className="link">
                                    Superb quality apparel
                                  </Link>
                                </h6>
                                <div className="day text_black-3">
                                  1 days ago
                                </div>
                              </div>
                            </div>
                            <p className="text_black-3">
                              We were looking for Link theme with lots of built
                              in features and flexibility and this was perfect.
                              We expected to need to employ Link developer to
                              add Link few finishing touches. But we actually
                              managed to do everything ourselves. We did have
                              one small query and the support given was swift
                              and helpful.
                            </p>
                          </div>
                        </div>
                      </div>
                      <form className="form-write-review write-review-wrap">
                        <div className="heading">
                          <h5>Write Link review:</h5>
                          <div className="list-rating-check">
                            <input
                              type="radio"
                              id="star5"
                              name="rate"
                              value="5"
                            />
                            <label for="star5" title="text"></label>
                            <input
                              type="radio"
                              id="star4"
                              name="rate"
                              value="4"
                            />
                            <label for="star4" title="text"></label>
                            <input
                              type="radio"
                              id="star3"
                              name="rate"
                              value="3"
                            />
                            <label for="star3" title="text"></label>
                            <input
                              type="radio"
                              id="star2"
                              name="rate"
                              value="2"
                            />
                            <label for="star2" title="text"></label>
                            <input
                              type="radio"
                              id="star1"
                              name="rate"
                              value="1"
                            />
                            <label for="star1" title="text"></label>
                          </div>
                        </div>
                        <div className="form-content">
                          <fieldset className="box-field">
                            <label className="label">Review Title</label>
                            <input
                              type="text"
                              placeholder="Give your review Link title"
                              name="text"
                              tabindex="2"
                              value=""
                              aria-required="true"
                              required=""
                            />
                          </fieldset>
                          <fieldset className="box-field">
                            <label className="label">Review</label>
                            <textarea
                              rows="4"
                              placeholder="Write your comment here"
                              tabindex="2"
                              aria-required="true"
                              required=""
                            ></textarea>
                          </fieldset>
                          <div className="box-field group-2">
                            <fieldset>
                              <input
                                type="text"
                                placeholder="You Name (Public)"
                                name="text"
                                tabindex="2"
                                value=""
                                aria-required="true"
                                required=""
                              />
                            </fieldset>
                            <fieldset>
                              <input
                                type="email"
                                placeholder="Your email (private)"
                                name="email"
                                tabindex="2"
                                value=""
                                aria-required="true"
                                required=""
                              />
                            </fieldset>
                          </div>
                          <div className="box-check">
                            <input
                              type="checkbox"
                              name="availability"
                              className="tf-check"
                              id="check1"
                            />
                            <label className="text_black-3" for="check1">
                              Save my name, email, and website in this browser
                              for the next time I comment.
                            </label>
                          </div>
                        </div>
                        <div className="button-submit">
                          <button className="ss-btn btn-fill" type="submit">
                            Submit Reviews
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div
                    className={`widget-content-inner ${
                      activeTab === 3 ? "active" : ""
                    }`}
                  >
                    <p>
                      When you place an order, we will estimate shipping and
                      delivery dates for you based on the availability of your
                      items and the shipping options you choose.
                    </p>
                    <p>
                      Please also note that the shipping rates for many items we
                      sell are weight-based. The weight of any such item can be
                      found on its detail page. To reflect the policies of the
                      shipping companies we use, all weights will be rounded up
                      to the next full pound.
                    </p>
                  </div> */}
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
