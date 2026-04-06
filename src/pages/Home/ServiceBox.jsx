// import React from "react";

// const ServiceBox = () => {
//   return (
//     <div className="wrapper-service wow fadeInUp" data-wow-delay="0s">
//       <div className="container">
//         <div className="wrap-carousel">
//           <div
//             className="featured-slider yt-content-slider owl-carousel owl-loaded owl-drag"
//             data-autoplay="yes"
//             data-delay="4"
//             data-speed="0.6"
//             data-margin="10"
//             data-items_column00="4"
//             data-items_column0="4"
//             data-items_column1="3"
//             data-items_column2="2"
//             data-items_column3="1"
//             data-items_column4="1"
//             data-arrows="no"
//             data-pagination="no"
//             data-lazyload="no"
//             data-loop="no"
//             data-hoverpause="yes"
//           >
//             <div className="item-services">
//               <div className="service_inner">
//                 <div className="service-ico">
//                   <a className="image" href="#">
//                     <img
//                       className="lazyload"
//                       data-src="images/policy/policy1.png"
//                       src="images/policy/policy1.png"
//                       alt=""
//                     />
//                   </a>
//                 </div>
//                 <div className="service-info">
//                   <h4>Free Shipping</h4>
//                   <p className="des">On order over $49.00</p>
//                 </div>
//               </div>
//             </div>
//             <div className="item-services">
//               <div className="service_inner">
//                 <div className="service-ico">
//                   <a className="image" href="#">
//                     <img
//                       className="lazyload"
//                       data-src="images/policy/policy2.png"
//                       src="images/policy/policy2.png"
//                       alt=""
//                     />
//                   </a>
//                 </div>
//                 <div className="service-info">
//                   <h4>Money Guarantee</h4>
//                   <p className="des">Within 30 days for an exchange</p>
//                 </div>
//               </div>
//             </div>
//             <div className="item-services">
//               <div className="service_inner">
//                 <div className="service-ico">
//                   <a className="image" href="#">
//                     <img
//                       className="lazyload"
//                       data-src="images/policy/policy3.png"
//                       src="images/policy/policy3.png"
//                       alt=""
//                     />
//                   </a>
//                 </div>
//                 <div className="service-info">
//                   <h4>Online Support</h4>
//                   <p className="des">24 hours a day, 7 days a week</p>
//                 </div>
//               </div>
//             </div>
//             <div className="item-services">
//               <div className="service_inner">
//                 <div className="service-ico">
//                   <a className="image" href="#">
//                     <img
//                       className="lazyload"
//                       data-src="images/policy/policy4.png"
//                       src="images/policy/policy4.png"
//                       alt=""
//                     />
//                   </a>
//                 </div>
//                 <div className="service-info">
//                   <h4>Flexible Payment</h4>
//                   <p className="des">Pay with Multiple Credit Cards</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceBox;

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
