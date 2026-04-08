import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import blogArray from "../../DataJs/blog.js";

const BlogDetails = () => {
  const [blogDetails, setBlogDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setBlogDetails(blogArray);
  }, []);

  const findBlogDetails =
    blogDetails && blogDetails.find((blogItem) => blogItem.id === parseInt(id));

  return (
    <>
      <div className="container my-4">
        <div className="row">
          <div className="col-12">
            <div className="blog-sidebar-main">
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
                        // data-src="/images/shop/article/image-1.jpg"
                        src={findBlogDetails && findBlogDetails.img}
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
                        <span>by</span>
                        {findBlogDetails && findBlogDetails.author}{" "}
                      </span>
                      <span
                        className="article-date"
                        itemprop="dateCreated pubdate datePublished"
                      >
                        <span>on</span>
                        <time datetime="2025-01-16T04:42:33Z">
                          {findBlogDetails && findBlogDetails.date}
                        </time>
                      </span>
                    </div>
                    <h1 className="article-template__title" itemprop="headline">
                      {/* Proin molestie egestas orci ac suscipit */}
                      {findBlogDetails && findBlogDetails.title}
                    </h1>
                  </div>
                  <div
                    className="article-template__content rte"
                    itemprop="articleBody"
                  >
                    <span data-mce-fragment="1">
                      {findBlogDetails && findBlogDetails.description}
                    </span>
                  </div>
                </article>
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
