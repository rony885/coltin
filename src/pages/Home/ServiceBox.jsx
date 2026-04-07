import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    img: "images/policy/policy1.png",
    title: "Free Shipping",
    description: "On order over $49.00",
  },
  {
    id: 2,
    img: "images/policy/policy2.png",
    title: "Money Guarantee",
    description: "Within 30 days for an exchange",
  },
  {
    id: 3,
    img: "images/policy/policy3.png",
    title: "Online Support",
    description: "24 hours a day, 7 days a week",
  },
  {
    id: 4,
    img: "images/policy/policy4.png",
    title: "Flexible Payment",
    description: "Pay with Multiple Credit Cards",
  },
];

const ServiceBox = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="wrapper-service wow fadeInUp" data-wow-delay="0s">
      <div className="container">
        <div className="wrap-carousel">
          <Slider {...settings}>
            {services.map((service, index) => (
              <div key={index} className="item-services">
                <div className="service_inner">
                  <div className="service-ico">
                    <Link className="image" to="#">
                      <img
                        className="lazyload"
                        src={service.img}
                        alt={service.title}
                      />
                    </Link>
                  </div>
                  <div className="service-info">
                    <h4>{service.title}</h4>
                    <p className="des">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ServiceBox;
