import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import about from "../../DataJs/about.js";

const AboutInfo = () => {
  const [abouts, setAbouts] = useState([]);
  const [counts, setCounts] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setAbouts(about?.bannerDescrpAbout);
    setCounts(about?.countAbout);
    setVideos(about?.videoAbout);
  }, []);

  return (
    <>
      <div className="about-us mt-4">
        <div className="container">
          <div className="banner">
            <Link to="#">
              <img
                className="img-product lazyloaded"
                data-src={abouts.bannerImage}
                src={abouts.bannerImage}
                alt="Imagee"
              />
            </Link>
          </div>
          <div className="flat-spacing-17 item-text text-center">
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
              data-src={videos.thumbnail}
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
