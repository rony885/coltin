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
      <div className="container my-4">
        <div className="row">
          <div className="col-12">
            <div className="blog-sidebar-main">
              <div className="list-blog row">
                {blogs.map((blog) => (
                  <div
                    key={blog.id}
                    className="blog-layout grid__item col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12"
                  >
                    <div className="blog-article-item">
                      <div className="article-thumb">
                        <Link to={`/blog-details/${blog.id}`}>
                          <img
                            className="lazyload"
                            src={blog.img}
                            alt="img-blog"
                          />
                        </Link>
                        <div className="article-label">
                          <Link
                            to={`/blog-details/${blog.id}`}
                            className="tf-btn btn-sm btn-fill"
                          >
                            {blog.category}
                          </Link>
                        </div>
                      </div>
                      <div className="article-content">
                        <div className="article-title">
                          <Link to={`/blog-details/${blog.id}`}>
                            {blog.title}
                          </Link>
                        </div>
                        <div className="article-des">{blog.description}</div>
                        <div className="article-btn">
                          <Link
                            to={`/blog-details/${blog.id}`}
                            className="tf-btn fw-6"
                          >
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
