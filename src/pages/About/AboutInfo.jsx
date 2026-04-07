import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import bannerDescrpAboutArray from "../../DataJs/bannerDescrpAbout.js";
import countAboutArray from "../../DataJs/countAbout.js";
import videoAboutArray from "../../DataJs/videoAbout.js";

const AboutInfo = () => {
  const [abouts, setAbouts] = useState([]);
  const [counts, setCounts] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setAbouts(bannerDescrpAboutArray);
    setCounts(countAboutArray);
    setVideos(videoAboutArray);
  }, []);

  return (
    <>
      {/* <div className="breadcrumb">
        <div className="container">
          <div className="breadcrumbtitle">
            <h2>About Us</h2>
          </div>
          <div className="breadcrumb-wrap d-flex justify-content-center flex-wrap align-items-center">
            <div className="breadcrumb-list">
              <Link to="/" className="text">
                Home
              </Link>
              <i className="icon icon-arrow-right"></i>
              <Link href="#" className="text">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div> */}

      <div className="about-us mt-4">
        <div className="container">
          <div className="banner">
            <Link href="#">
              <img
                className="img-product lazyloaded"
                data-src="images/about-us/about_us.jpg"
                // src="images/about-us/about_us.jpg"
                src={abouts.bannerImage}
                alt="Imagee"
              />
            </Link>
          </div>
          <div className="flat-spacing-17 item-text text-center">
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud
              <br />
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur.
              <br />
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p> */}
            <p>{abouts.description}</p>
          </div>
        </div>
      </div>

      <div className="widget-statistics mb_90">
        <div className="container">
          <div className="wrap">
            <div className="block-statistic row">
              {counts.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="item item-1 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12"
                  >
                    <div className="item-inn">
                      <span className="js-counter">{item.count}</span>
                      <span className="suffix">{item.suffix}</span>
                      <p>{item.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="widget-video-wrap">
        <div className="box_video">
          <a
            className="link_video btn_videos"
            href={videos.videoUrl}
            title="video"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="img-product lazyloaded"
              src={videos.thumbnail}
              alt="Video Thumbnail"
            />
            <span>
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.5 4.59863L18.6021 12L7.5 19.4014V4.59863ZM9 7.40141V16.5986L15.8979 12L9 7.40141Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </>
  );
};

export default AboutInfo;
