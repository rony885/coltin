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
                            data-src={blog.img}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
