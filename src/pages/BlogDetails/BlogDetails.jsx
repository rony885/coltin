import React from "react";
import {
  FaFacebookF,
  FaPinterestP,
  FaShareAlt,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogDetails = () => {
  return (
    <>
      <div className="breadcrumb">
        <div className="container">
          <div className="breadcrumbtitle">
            <h2>Blog Details</h2>
          </div>
          <div className="breadcrumb-wrap d-flex justify-content-center flex-wrap align-items-center">
            <div className="breadcrumb-list">
              <Link to="/" className="text">
                Home
              </Link>
              <i className="icon icon-arrow-right"></i>
              <Link to="#" className="text">
                Blog Details
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="blog-sidebar-main">
              <div className="ss-section-sidebar wrap-sidebar-mobile">
                <div className="sidebar-item sidebar-categories">
                  <div className="sidebar-title">Blog categories</div>
                  <div className="sidebar-content">
                    <ul>
                      <li>
                        <Link to="#">
                          Accessories <span>(9)</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          Bag <span>(9)</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          Cookware & Kitchen <span>(9)</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          Decor <span>(9)</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          Decorate <span>(9)</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          Denim <span>(9)</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="sidebar-item sidebar-post">
                  <div className="sidebar-title">Recent Post</div>
                  <div className="sidebar-content">
                    <ul>
                      <li>
                        <div className="blog-article-item style-sidebar">
                          <div className="article-thumb">
                            <Link to="/blog-details">
                              <img
                                src="images/shop/article/sidebar-1.jpg"
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="article-content">
                            <div className="article-label">
                              <Link
                                to="/blog-details"
                                className="tf-btn btn-sm  btn-fill animate-hover-btn"
                              >
                                News
                              </Link>
                            </div>
                            <div className="article-title">
                              <Link to="/blog-details" className="">
                                Effortlessly Blends The Carefree Style
                              </Link>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="blog-article-item style-sidebar">
                          <div className="article-thumb">
                            <Link to="/blog-details">
                              <img
                                src="images/shop/article/sidebar-2.jpg"
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="article-content">
                            <div className="article-label">
                              <Link
                                to="/blog-details"
                                className="tf-btn btn-sm  btn-fill "
                              >
                                News
                              </Link>
                            </div>
                            <div className="article-title">
                              <Link to="/blog-details" className="">
                                The Limited Edition Club des Sports Courchevel
                              </Link>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="blog-article-item style-sidebar">
                          <div className="article-thumb">
                            <Link to="/blog-details">
                              <img
                                src="images/shop/article/sidebar-3.jpg"
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="article-content">
                            <div className="article-label">
                              <Link
                                to="/blog-details"
                                className="tf-btn btn-sm  btn-fill "
                              >
                                Fashion
                              </Link>
                            </div>
                            <div className="article-title">
                              <Link to="/blog-details" className="">
                                Christine Is A True Style Icon
                              </Link>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="sidebar-item sidebar-instagram">
                  <div className="sidebar-title">Instagram</div>
                  <div className="sidebar-content">
                    <ul>
                      <li>
                        <img src="images/gallery/1.jpg" alt="" />
                      </li>
                      <li>
                        <img src="images/gallery/2.jpg" alt="" />
                      </li>
                      <li>
                        <img src="images/gallery/3.jpg" alt="" />
                      </li>
                      <li>
                        <img src="images/gallery/4.jpg" alt="" />
                      </li>
                      <li>
                        <img src="images/gallery/5.jpg" alt="" />
                      </li>
                      <li>
                        <img src="images/gallery/6.jpg" alt="" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="list-blog row">
                <article
                  className="article-template blog-detail-main mb_90"
                  itemscope=""
                  itemtype="http://schema.org/BlogPosting"
                >
                  <div className="article-template__hero-adapt  blog-detail-main-heading">
                    <div className="image">
                      <img
                        className="lazyload"
                        data-src="images/shop/article/image-1.jpg"
                        src="images/shop/article/image-1.jpg"
                        alt="img-blog"
                      />
                    </div>
                  </div>
                  <div className="article-heading">
                    <div className="article-info">
                      <span
                        className="article-author"
                        itemprop="author"
                        itemscope=""
                        itemtype="http://schema.org/Person"
                      >
                        <span>by</span>Chung Nguyen{" "}
                      </span>
                      <span
                        className="article-date"
                        itemprop="dateCreated pubdate datePublished"
                      >
                        <span>on</span>
                        <time datetime="2025-01-16T04:42:33Z">
                          January 15, 2025
                        </time>
                      </span>
                    </div>
                    <h1 className="article-template__title" itemprop="headline">
                      Proin molestie egestas orci ac suscipit
                    </h1>
                  </div>
                  <div
                    className="article-template__content rte"
                    itemprop="articleBody"
                  >
                    <span data-mce-fragment="1">
                      A recent study has found that sleep aromatherapy may
                      notably enhance memory, suggesting Link non-invasive
                      method protect against dementia.
                    </span>
                    <br />
                    <span data-mce-fragment="1">
                      A new study by neuroscientists from the University of
                      California, Irvine indicates that exposure to scent during
                      sleep can notably enhance memory. Researchers say the
                      findings indicate Link non-invasive method to bolster
                      memory and potentially protect against dementia.
                    </span>
                    <br />
                    <span data-mce-fragment="1">
                      Releasing Link scent into the bedrooms of older adults for
                      two hours nightly over Link span of six months, was found
                      to be associated with significant memory improvements.
                      According to Link media release, study participants
                      experienced Link 226% increase in cognitive capacity
                      compared to Link control group.
                    </span>
                    <br />
                    <span data-mce-fragment="1">
                      Men and women aged 60 to 85 without memory impairment were
                      divided into two groups and given Link diffuser and seven
                      cartridges, each containing Link single and different
                      natural oil. The enriched group received full-strength
                      cartridges and the control group received the oils in tiny
                      amounts. Participants put Link different cartridge into
                      the diffuser each evening before going to bed, and it
                      activated for two hours as they slept.
                    </span>
                    <br />
                    <span data-mce-fragment="1">
                      The scents they used were rose, orange, eucalyptus, lemon,
                      peppermint, rosemary, and lavender.
                    </span>
                  </div>
                  <div className="tags float-start">
                    <span>Tags</span>
                    <Link to="#" className="tag">
                      News
                    </Link>
                  </div>
                  <div className="article-template__social-sharing float-end">
                    <span>
                      <FaShareAlt size={20} />
                      Share{" "}
                    </span>
                    <ul className="social-sharing list-social list-unstyled">
                      <li className="list-social__item">
                        <Link
                          className="list-social__link link link--text"
                          to="#"
                          target="_blank"
                        >
                          <FaFacebookF size={20} />
                          <span className="visually-hidden visually-hidden--inline">
                            Share on Facebook
                          </span>
                          <span className="visually-hidden visually-hidden--inline">
                            Opens in Link new window.
                          </span>
                        </Link>
                      </li>
                      <li className="list-social__item">
                        <Link
                          className="list-social__link link link--text"
                          to="#"
                          target="_blank"
                        >
                          <FaTwitter size={20} />
                          <span className="visually-hidden visually-hidden--inline">
                            Tweet on Twitter
                          </span>
                          <span className="visually-hidden visually-hidden--inline">
                            Opens in Link new window.
                          </span>
                        </Link>
                      </li>
                      <li className="list-social__item">
                        <Link
                          className="list-social__link link link--text"
                          to="#"
                          target="_blank"
                        >
                          <FaPinterestP size={20} />
                          <span className="visually-hidden visually-hidden--inline">
                            Pin on Pinterest
                          </span>
                          <span className="visually-hidden visually-hidden--inline">
                            Opens in Link new window.
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </article>
                <div className="widget-related-post">
                  <div className="ss-carousel owl-style1 ss-owl">
                    <div className="box-title justify-content-center">
                      <h3>Related Articles</h3>
                    </div>
                    <div
                      className="featured-slider yt-content-slider owl-carousel"
                      data-autoplay="no"
                      data-delay="1"
                      data-speed="0.6"
                      data-margin="30"
                      data-items_column00="3"
                      data-items_column0="3"
                      data-items_column1="3"
                      data-items_column2="2"
                      data-items_column3="1"
                      data-items_column4="1"
                      data-arrows="yes"
                      data-pagination="no"
                      data-lazyload="no"
                      data-loop="no"
                      data-hoverpause="yes"
                    >
                      <div className="blog-article-item">
                        <div className="article-thumb">
                          <Link to="/blog-details">
                            <img
                              className="lazyload"
                              data-src="images/shop/article/image-4.jpg"
                              src="images/shop/article/image-4.jpg"
                              alt=""
                            />
                          </Link>
                          <div className="article-label">
                            <Link
                              to="/blog-details"
                              className="tf-btn btn-sm  btn-fill "
                            >
                              Tech
                            </Link>
                          </div>
                        </div>
                        <div className="article-content">
                          <div className="article-title">
                            <Link to="/blog-details" className="">
                              An Exclusive Clothing Collaboration
                            </Link>
                          </div>
                          <div className="article-des">
                            {" "}
                            A recent study has found that sleep aromatherapy may
                            notably enhance memory, suggesting Link non-inv...{" "}
                          </div>
                          <div className="article-btn">
                            <Link to="/blog-details" className="tf-btn  fw-6">
                              Read more
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="blog-article-item">
                        <div className="article-thumb">
                          <Link to="/blog-details">
                            <img
                              className="lazyload"
                              data-src="images/shop/article/image-3.jpg"
                              src="images/shop/article/image-3.jpg"
                              alt=""
                            />
                          </Link>
                          <div className="article-label">
                            <Link
                              to="/blog-details"
                              className="tf-btn btn-sm  btn-fill "
                            >
                              Tech
                            </Link>
                          </div>
                        </div>
                        <div className="article-content">
                          <div className="article-title">
                            <Link to="/blog-details" className="">
                              Hello Fashion by Colombian-American
                            </Link>
                          </div>
                          <div className="article-des">
                            {" "}
                            A recent study has found that sleep aromatherapy may
                            notably enhance memory, suggesting Link non-inv...{" "}
                          </div>
                          <div className="article-btn">
                            <Link to="/blog-details" className="tf-btn  fw-6">
                              Read more
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="blog-article-item">
                        <div className="article-thumb">
                          <Link to="/blog-details">
                            <img
                              className="lazyload"
                              data-src="images/shop/article/sidebar-3.jpg"
                              src="images/shop/article/sidebar-3.jpg"
                              alt=""
                            />
                          </Link>
                          <div className="article-label">
                            <Link
                              to="/blog-details"
                              className="tf-btn btn-sm  btn-fill "
                            >
                              Tech
                            </Link>
                          </div>
                        </div>
                        <div className="article-content">
                          <div className="article-title">
                            <Link to="/blog-details" className="">
                              Christine Is A True Style Icon
                            </Link>
                          </div>
                          <div className="article-des">
                            {" "}
                            A recent study has found that sleep aromatherapy may
                            notably enhance memory, suggesting Link non-inv...{" "}
                          </div>
                          <div className="article-btn">
                            <Link to="/blog-details" className="tf-btn  fw-6">
                              Read more
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="blog-article-item">
                        <div className="article-thumb">
                          <Link to="/blog-details">
                            <img
                              className="lazyload"
                              data-src="images/shop/article/sidebar-1.jpg"
                              src="images/shop/article/sidebar-1.jpg"
                              alt=""
                            />
                          </Link>
                          <div className="article-label">
                            <Link
                              to="/blog-details"
                              className="tf-btn btn-sm  btn-fill "
                            >
                              Tech
                            </Link>
                          </div>
                        </div>
                        <div className="article-content">
                          <div className="article-title">
                            <Link to="/blog-details" className="">
                              Effortlessly Blends The Carefree Style
                            </Link>
                          </div>
                          <div className="article-des">
                            {" "}
                            A recent study has found that sleep aromatherapy may
                            notably enhance memory, suggesting Link non-inv...{" "}
                          </div>
                          <div className="article-btn">
                            <Link to="/blog-details" className="tf-btn  fw-6">
                              Read more
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="btn-sidebar-mobile left">
        <button
          data-bs-toggle="offcanvas"
          data-bs-target="#sidebarmobile"
          aria-controls="offcanvas"
        >
          <i className="icon-open"></i>
        </button>
      </div>
    </>
  );
};

export default BlogDetails;
