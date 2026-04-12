import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// ✅ Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const offers = [
  {
    id: 1,
    img: "images/collections/collection-1.jpg",
    title: "Save up to $40 on select cellphone & tablet",
    link: "#",
    className: "colection0",
  },
  {
    id: 2,
    img: "images/collections/collection-2.jpg",
    title: "Save up to $69 on select perfume items",
    link: "#",
    className: "colection2",
  },
  {
    id: 3,
    img: "images/collections/collection-3.jpg",
    title: "Save up to 30% on audio items",
    link: "#",
    className: "colection3",
  },
  {
    id: 4,
    img: "images/collections/collection-4.jpg",
    title: "Save up to $40 on select cellphone & tablet",
    link: "#",
    className: "colection0",
  },
  {
    id: 5,
    img: "images/collections/collection-2.jpg",
    title: "Save up to $69 on select perfume items",
    link: "#",
    className: "colection2",
  },
  {
    id: 6,
    img: "images/collections/collection-3.jpg",
    title: "Save up to 30% on audio items",
    link: "#",
    className: "colection3",
  },
];

const FeaturedOffers = () => {
  return (
    <Wrapper>
      <section className="widget-slider-collection mb_90 owl-style1">
        <div className="container">
          <div className="box-title">
            <h3>Our Featured Offers</h3>
            <div className="view-all">
              <Link to="#">See All Brands</Link>
            </div>
          </div>

          <div className="wrap-carousel">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={1} // ✅ FIX reload issue
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              speed={600}
              breakpoints={{
                320: { slidesPerView: 1 },
                375: { slidesPerView: 1 },
                425: { slidesPerView: 1 },
                576: { slidesPerView: 2 },
                768: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
                1200: { slidesPerView: 4 },
              }}
            >
              {offers.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className={`colection ${item.className}`}>
                    <div className="collect">
                      <div className="collect-img">
                        <Link to={item.link}>
                          <img src={item.img} alt="" />
                        </Link>
                      </div>

                      <div className="collect-info">
                        <h4 className="collect-info__title">
                          <Link to={item.link}>{item.title}</Link>
                        </h4>

                        <div className="collect-info__view">
                          <Link className="button" to={item.link}>
                            Shop now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .wrap-carousel {
    margin: 0 -10px;
  }

  .swiper-slide {
    padding: 0 10px;
  }

  @media (max-width: 768px) {
    .wrap-carousel {
      margin: 0 -6px;
    }

    .swiper-slide {
      padding: 0 6px;
    }
  }

  @media (max-width: 576px) {
    .wrap-carousel {
      margin: 0 -4px;
    }

    .swiper-slide {
      padding: 0 4px;
    }
  }
`;

export default FeaturedOffers;
