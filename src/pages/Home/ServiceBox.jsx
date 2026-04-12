import React from "react";
import { Link } from "react-router-dom";

// ✅ Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

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
  return (
    <div className="wrapper-service wow fadeInUp" data-wow-delay="0s">
      <div className="container">
        <div className="wrap-carousel">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1} // ✅ IMPORTANT (fix reload issue)
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            speed={600}
            breakpoints={{
              320: { slidesPerView: 1 },
              375: { slidesPerView: 1 },
              425: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
          >
            {services.map((service) => (
              <SwiperSlide key={service.id}>
                <div className="item-services">
                  <div className="service_inner">
                    {/* Image */}
                    <div className="service-ico">
                      <Link className="image" to="#">
                        <img
                          className="lazyload"
                          src={service.img}
                          alt={service.title}
                        />
                      </Link>
                    </div>

                    {/* Content */}
                    <div className="service-info">
                      <h4>{service.title}</h4>
                      <p className="des">{service.description}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ServiceBox;
