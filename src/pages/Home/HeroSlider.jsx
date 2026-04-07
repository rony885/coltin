import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slidersArray from "../../DataJs/sliders.js";

const HeroSlider = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    setSlides(slidersArray);
  }, []);



  const NextArrow = ({ onClick }) => {
    return (
      <button className="hero-arrow next" onClick={onClick}>
        ›
      </button>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <button className="hero-arrow prev" onClick={onClick}>
        ‹
      </button>
    );
  };

  // const settings = {
  //   dots: true,
  //   arrows: true,
  //   infinite: true,
  //   speed: 600,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   pauseOnHover: true,
  // };

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <Wrapper>
      <div className="widget-slideshow owl-style2 show_dot dot-style2">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 offset-xl-3">
              <Slider
                {...settings}
                className="coll-slider heroCarousel-slider ss-owl mb_60"
              >
                {slides.map((slide, index) => (
                  <div key={index} className="heroCarousel--item">
                    <div className="container">
                      <div className="row">
                        <div className="cols-image">
                          <Link to="#" className="heroCarousel-item">
                            <img className="lazyload" src={slide.img} alt="" />
                          </Link>
                        </div>
                        <div className="cols-content">
                          <div className="heroCarousel-content">
                            <div
                              className="heroCarousel-subtitle"
                              style={{ color: "#000000" }}
                              dangerouslySetInnerHTML={{
                                __html: slide.subtitle,
                              }}
                            />
                            <h2 className="heroCarousel-title">
                              <Link
                                to="#"
                                style={{ color: "#000000" }}
                                dangerouslySetInnerHTML={{
                                  __html: slide.title,
                                }}
                              />
                            </h2>
                            <div
                              className="heroCarousel-description"
                              style={{ color: "#000000" }}
                            >
                              {slide.description}
                            </div>
                            <Link
                              to="/product"
                              className="heroCarousel-action button"
                            >
                              Shop Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .heroCarousel--item {
    position: relative;
  }

  .slide-inner {
    position: relative;
  }

  .slide-img {
    width: 100%;
    display: block;
  }

  /* TEXT OVER IMAGE */
  .cols-content {
    position: absolute;
    top: 50%;
    left: 10%;
    transform: translateY(-50%);
    z-index: 10;
    max-width: 400px;
  }

  .heroCarousel-content {
    color: #000;
  }

  /* react-slick ACTIVE slide */
  .slick-active .heroCarousel-subtitle,
  .slick-active .heroCarousel-title,
  .slick-active .heroCarousel-description,
  .slick-active .heroCarousel-action {
    opacity: 1;
    transform: translateY(0);
  }

  .heroCarousel-subtitle,
  .heroCarousel-title,
  .heroCarousel-description,
  .heroCarousel-action {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease;
  }

  .heroCarousel-action {
    display: inline-block;
    margin-top: 15px;
    padding: 10px 25px;
    background: #000;
    color: #fff;
    border-radius: 5px;
  }

  .heroCarousel--item .heroCarousel-content {
    padding: 0px !important;
  }
  /* ===== ARROWS BASE ===== */
  .hero-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 42px;
    height: 42px;
    background: #000;
    color: #fff;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    font-size: 26px;
    z-index: 20;
    transition: all 0.3s ease;
  }

  .hero-arrow:hover {
    background: #ff0000;
  }

  /* Left & Right */
  .hero-arrow.prev {
    left: 15px;
  }

  .hero-arrow.next {
    right: 15px;
  }

  /* Tablet */
  @media (max-width: 991px) {
    .hero-arrow {
      width: 36px;
      height: 36px;
      font-size: 22px;
    }
  }

  /* Mobile */
  @media (max-width: 576px) {
    .hero-arrow {
      width: 32px;
      height: 32px;
      font-size: 20px;
    }
  }
`;

export default HeroSlider;
