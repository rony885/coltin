import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import about from "../../DataJs/about.js";

const Team = () => {
  const swiperRef = useRef(null);
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    setTeams(about?.teams);
  }, []);

  return (
    <Wrapper>
      <div className="widget-ourteam owl-style1 flat-spacing-17">
        <div className="container">
          <div className="box-title justify-content-center">
            <h3>Meet Our Team</h3>
          </div>

          <div className="block-ourteam position-relative">
            {/* Custom Navigation Buttons */}
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

            <Swiper
              ref={swiperRef}
              modules={[Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={30}
              loop={false}
              slidesPerView={4}
              breakpoints={{
                1400: { slidesPerView: 4 },
                1200: { slidesPerView: 4 },
                992: { slidesPerView: 3 },
                768: { slidesPerView: 2 },
                576: { slidesPerView: 1 },
                0: { slidesPerView: 1 },
              }}
            >
              {teams?.map((member) => (
                <SwiperSlide key={member.id}>
                  <div className="item item-1">
                    <div className="item-inn">
                      <div className="cl-image">
                        <img
                          className="img-product lazyloaded"
                          src={member.img}
                          alt={member.name}
                        />
                      </div>
                      <div className="item-content text-center">
                        <h4 className="cl-title">{member.name}</h4>
                        <div className="cl-job">{member.role}</div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .block-ourteam {
    position: relative;
  }

  /* Custom prev/next buttons */
  .prev-arrow,
  .next-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    width: 35px;
    height: 35px;
    background: #fff;
    border: 1px solid #000;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 18px;
    user-select: none;
    transition: all 0.3s ease;
  }

  .prev-arrow:hover,
  .next-arrow:hover {
    background: #000;
    color: #fff;
  }

  .prev-arrow {
    left: -20px;
  }

  .next-arrow {
    right: -20px;
  }

  @media (max-width: 992px) {
    .prev-arrow {
      left: -10px;
    }
    .next-arrow {
      right: -10px;
    }
  }

  @media (max-width: 768px) {
    .prev-arrow,
    .next-arrow {
      display: none;
    }
  }
`;

export default Team;
