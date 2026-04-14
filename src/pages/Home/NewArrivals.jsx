import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const banners = [
  {
    subtitle: "Black Friday Sale",
    title: "Hooded Jackets \nFor Women",
    desc: "10% discount for first customers",
    img: "images/slider/banner1.jpg",
  },
  {
    subtitle: "Special Offer",
    title: "Modern Wooden \nDining Chairs",
    desc: "Get discount code up to 20% here",
    img: "images/slider/banner2.jpg",
  },
  {
    subtitle: "New Arrivals",
    title: "New Generation \nSmart Watch",
    desc: "You can certainly buy and pay online",
    img: "images/slider/banner3.jpg",
  },
];

const NewArrivals = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
  };

  return (
    <Wrapper>
      <div className="widget-slider-banners mb_90 show_dot dot-style1">
        <div className="container">
          <div className="row">
            {/* LEFT SLIDER */}
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-12">
              <Slider {...settings}>
                {banners.map((item, index) => (
                  <div className="banner--item" key={index}>
                    <div className="row">
                      <div className="col-content col-6">
                        <div className="banner-content">
                          <div className="banner-subtitle">{item.subtitle}</div>

                          <h2 className="banner-title">
                            <Link to="#">
                              {item.title.split("\n").map((line, i) => (
                                <React.Fragment key={i}>
                                  {line} <br />
                                </React.Fragment>
                              ))}
                            </Link>
                          </h2>

                          <div className="banner-description">{item.desc}</div>

                          <Link to="#" className="banner-action button">
                            Shop Now
                          </Link>
                        </div>
                      </div>

                      <div className="col-image col-6">
                        <Link to="#" className="banner-item">
                          <img src={item.img} alt="" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>

            {/* RIGHT STATIC DEAL */}
            <div className="banner-deal col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
              <div className="deal__banner">
                <Link to="#">
                  <img src="/images/slider/Banner_Deal7.jpg" alt="" />
                </Link>
              </div>

              <div className="deal__wrap">
                <div className="box-title">
                  <h3>Cyber Sale</h3>
                </div>

                <div className="deal__description">
                  20% Off when buying and paying online
                </div>

                {/* You can replace this with real countdown later */}
                <div className="countdown_time">
                  <p>Countdown: 02 Days 10 Hours</p>
                </div>

                <div className="deal__btn">
                  <Link to="#" className="deal__btn-link button">
                    Shop now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .banner--item {
    position: relative;
    /* padding: 20px 0; */
  }

  /* 🔥 FORCE TEXT VISIBLE (IMPORTANT) */
  .banner-subtitle,
  .banner-title,
  .banner-description,
  .banner-action {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }

  .banner-subtitle {
    color: #777;
  }

  .banner-action {
    display: inline-block;
    padding: 8px 16px;
    background: #000;
    color: #fff;
  }
`;

export default NewArrivals;
