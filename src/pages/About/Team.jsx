// import React from "react";

// const Team = () => {
//   return (
//     <div className="widget-ourteam owl-style1 flat-spacing-17">
//       <div className="container">
//         <div className="box-title justify-content-center">
//           <h3>Meet Our Team</h3>
//         </div>
//         <div className="block-ourteam">
//           <div
//             className="featured-slider yt-content-slider owl-carousel"
//             data-autoplay="yes"
//             data-delay="1"
//             data-speed="0.6"
//             data-margin="30"
//             data-items_column00="4"
//             data-items_column0="4"
//             data-items_column1="4"
//             data-items_column2="3"
//             data-items_column3="2"
//             data-items_column4="1"
//             data-arrows="yes"
//             data-pagination="yes"
//             data-lazyload="no"
//             data-loop="no"
//             data-hoverpause="yes"
//           >
//             <div className="item item-1">
//               <div className="item-inn">
//                 <div className="cl-image">
//                   <img
//                     className="img-product lazyloaded"
//                     data-src="images/about-us/Team_1.jpg"
//                     src="images/about-us/Team_1.jpg"
//                     alt=""
//                   />
//                 </div>
//                 <div className="item-content">
//                   <h4 className="cl-title">Jenifer Aniston</h4>
//                   <div className="cl-job">Pharmacist</div>
//                 </div>
//               </div>
//             </div>
//             <div className="item item-1">
//               <div className="item-inn">
//                 <div className="cl-image">
//                   <img
//                     className="img-product lazyloaded"
//                     data-src="images/about-us/Team_2.jpg"
//                     src="images/about-us/Team_2.jpg"
//                     alt=""
//                   />
//                 </div>
//                 <div className="item-content">
//                   <h4 className="cl-title">Vladimir Radskin</h4>
//                   <div className="cl-job">Founder, CEO</div>
//                 </div>
//               </div>
//             </div>
//             <div className="item item-1">
//               <div className="item-inn">
//                 <div className="cl-image">
//                   <img
//                     className="img-product lazyloaded"
//                     data-src="images/about-us/Team_3.jpg"
//                     src="images/about-us/Team_3.jpg"
//                     alt=""
//                   />
//                 </div>
//                 <div className="item-content">
//                   <h4 className="cl-title">Michael Phelps</h4>
//                   <div className="cl-job">Web Designer</div>
//                 </div>
//               </div>
//             </div>
//             <div className="item item-1">
//               <div className="item-inn">
//                 <div className="cl-image">
//                   <img
//                     className="img-product lazyloaded"
//                     data-src="images/about-us/Team_4.jpg"
//                     src="images/about-us/Team_4.jpg"
//                     alt=""
//                   />
//                 </div>
//                 <div className="item-content">
//                   <h4 className="cl-title">Nina Burns</h4>
//                   <div className="cl-job">Tech Leader</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Team;

import React, { useRef } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const teamMembers = [
  {
    id: 1,
    name: "Jenifer Aniston",
    role: "Pharmacist",
    img: "/images/about-us/Team_1.jpg",
  },
  {
    id: 2,
    name: "Vladimir Radskin",
    role: "Founder, CEO",
    img: "/images/about-us/Team_2.jpg",
  },
  {
    id: 3,
    name: "Michael Phelps",
    role: "Web Designer",
    img: "/images/about-us/Team_3.jpg",
  },
  {
    id: 4,
    name: "Nina Burns",
    role: "Tech Leader",
    img: "/images/about-us/Team_4.jpg",
  },
  {
    id: 5,
    name: "Vladimir Radskin",
    role: "Founder, CEO",
    img: "/images/about-us/Team_2.jpg",
  },
];

const Team = () => {
  const swiperRef = useRef(null);

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
              {teamMembers.map((member) => (
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
