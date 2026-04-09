import React, { useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FiArrowUpRight } from "react-icons/fi";

const Categories = ({ categories }) => {
  const swiperRef = useRef(null);

  return (
    <Wrapper>
      <div className="widget-collection mb_90">
        <div className="container">
          <div className="box-title">
            <h3 className="text-uppercase fs-4 fw-bold">Featured Categories</h3>
          </div>

          {/* Custom Navigation Buttons */}
          <div className="custom-arrows">
            <div
              className="prev-arrow"
              onClick={() => swiperRef.current?.swiper.slidePrev()}
            >
              ❮
            </div>
            <div
              className="next-arrow"
              onClick={() => swiperRef.current?.swiper.slideNext()}
            >
              ❯
            </div>
          </div>

          <Swiper
            ref={swiperRef}
            modules={[Pagination]}
            // pagination={{ clickable: true }}
            spaceBetween={15}
            slidesPerView={7}
            breakpoints={{
              1400: { slidesPerView: 7 },
              1200: { slidesPerView: 5 },
              992: { slidesPerView: 4 },
              768: { slidesPerView: 3 },
              576: { slidesPerView: 2 },
              320: { slidesPerView: 2 },
              0: { slidesPerView: 1 },
            }}
          >
            {categories.map((cat, index) => (
              <SwiperSlide key={index}>
                <div className="collection-item">
                  <div className="collect">
                    <div className="collect-img">
                      <Link
                        to="/product"
                        onClick={() =>
                          localStorage.setItem("selectedCategory", cat.id)
                        }
                      >
                        <img
                          data-src={cat.image || "/default-produt-image.jpg"}
                          src={cat.image || "/default-produt-image.jpg"}
                          alt={cat.name}
                          style={{ width: "157px", height: "157px" }}
                        />
                      </Link>
                      <div className="collect-info__view">
                        <Link
                          to="/product"
                          onClick={() =>
                            localStorage.setItem("selectedCategory", cat.id)
                          }
                        >
                          <FiArrowUpRight size={20} />
                        </Link>
                      </div>
                    </div>

                    <div className="collect-info">
                      <Link
                        className="collect-name"
                        to="/product"
                        onClick={() =>
                          localStorage.setItem("selectedCategory", cat.id)
                        }
                      >
                        {cat.name}
                      </Link>
                      <span className="count">{cat.items || "5"} items</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .box-title {
    margin-bottom: 30px;
    text-align: center;
  }

  .collection-item {
    padding: 0 8px;
  }

  .collect {
    background: #fff;
    border-radius: 6px;
    overflow: hidden;
    text-align: center;
  }

  .collect-img {
    position: relative;
  }

  .collect-img img {
    width: 100%;
    display: block;
  }

  .collect-info__view {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: 0.3s;
    background: rgba(0, 0, 0, 0.4);
  }

  .collect-img:hover .collect-info__view {
    opacity: 1;
  }

  .collect-info {
    padding: 12px;
  }

  .collect-name {
    display: block;
    font-weight: 600;
    margin-bottom: 5px;
    color: #000;
    text-decoration: none;
  }

  .count {
    font-size: 14px;
    color: #777;
  }

  /* Custom Arrows */
  .custom-arrows {
    position: relative;
  }

  .prev-arrow,
  .next-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 32px;
    height: 32px;
    border: 1px solid #000;
    border-radius: 50%;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 10;
  }

  .prev-arrow {
    left: -40px;
    top: 90px;
  }

  .next-arrow {
    right: -40px;
    top: 90px;
  }

  .prev-arrow:hover,
  .next-arrow:hover {
    background: #000;
    color: #fff;
  }

  @media (max-width: 768px) {
    .prev-arrow,
    .next-arrow {
      display: none;
    }
  }
`;

export default Categories;
