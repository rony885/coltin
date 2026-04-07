import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import blogArray from "../../DataJs/blog.js";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(blogArray);
  }, []);

  return (
    <>
      <div className="breadcrumb">
        <div className="container">
          <div className="breadcrumbtitle">
            <h2>Blog</h2>
          </div>
          <div className="breadcrumb-wrap d-flex justify-content-center flex-wrap align-items-center">
            <div className="breadcrumb-list">
              <Link to="/" className="text">
                Home
              </Link>
              <i className="icon icon-arrow-right"></i>
              <Link to="#" className="text">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="blog-sidebar-main">
              <div className="list-blog row">
                {blogs.map((blog) => (
                  <div
                    key={blog.id}
                    className="blog-layout grid__item col-xl-6 col-lg-4 col-md-4 col-sm-4 col-12"
                  >
                    <div className="blog-article-item">
                      <div className="article-thumb">
                        <Link to="/blog-details">
                          <img
                            className="lazyload"
                            src={blog.img}
                            alt="img-blog"
                          />
                        </Link>
                        <div className="article-label">
                          <Link
                            to="/blog-details"
                            className="tf-btn btn-sm btn-fill"
                          >
                            {blog.category}
                          </Link>
                        </div>
                      </div>
                      <div className="article-content">
                        <div className="article-title">
                          <Link to="/blog-details">{blog.title}</Link>
                        </div>
                        <div className="article-des">{blog.description}</div>
                        <div className="article-btn">
                          <Link to="/blog-details" className="tf-btn fw-6">
                            Read more
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <ul className="pagination-wrap pagination-list pagination-btn">
                  <li className="active">
                    <Link to="#" className="pagination-link">
                      1
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="pagination-link">
                      2
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="pagination-link">
                      3
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="pagination-link">
                      4
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="pagination-link">
                      <span className="icon icon-arrow-right"></span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* ======= right side ======= */}
              <div className="ss-section-sidebar wrap-sidebar-mobile">
                <div className="sidebar-item sidebar-categories">
                  <div className="sidebar-title">Blog categories</div>
                  <div className="sidebar-content">
                    <ul>
                      <li>
                        <Link to="#">
                          Accessories<span>(9)</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          Bag<span>(9)</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          Cookware & Kitchen<span>(9)</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          Decor<span>(9)</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          Decorate<span>(9)</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          Denim<span>(9)</span>
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
                                className="tf-btn btn-sm btn-fill animate-hover-btn"
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
                                className="tf-btn btn-sm btn-fill"
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
                                className="tf-btn btn-sm btn-fill"
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
            </div>
          </div>
        </div>
      </div>
      <div className="btn-sidebar-mobile">
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

export default Blog;
