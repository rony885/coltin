// import React from "react";
// import styled from "styled-components";
// import { Link } from "react-router-dom";

// const galleryImages = [
//   { id: 1, image: "images/gallery/1.jpg" },
//   { id: 2, image: "images/gallery/2.jpg" },
//   { id: 3, image: "images/gallery/3.jpg" },
//   { id: 4, image: "images/gallery/4.jpg" },
//   { id: 5, image: "images/gallery/5.jpg" },
//   { id: 6, image: "images/gallery/6.jpg" },
//   { id: 7, image: "images/gallery/7.jpg" },
//   { id: 8, image: "images/gallery/8.jpg" },
//   { id: 9, image: "images/gallery/9.jpg" },
//   { id: 10, image: "images/gallery/10.jpg" },
//   { id: 11, image: "images/gallery/11.jpg" },
//   { id: 12, image: "images/gallery/12.jpg" },
// ];

// const Gallery = () => {
//   return (
//     <Wrapper>
//       <div className="breadcrumb">
//         <div className="container">
//           <div className="breadcrumbtitle">
//             <h2>Photo gallery</h2>
//           </div>
//           <div className="breadcrumb-wrap d-flex justify-content-center flex-wrap align-items-center">
//             <div className="breadcrumb-list">
//               <Link to="/" className="text">
//                 Home
//               </Link>
//               <i className="icon icon-arrow-right"></i>
//               <span className="text">Photo gallery</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="page--information container">
//         <div className="content--gallery">
//           <div className="row">
//             {galleryImages.map((item) => (
//               <div
//                 key={item}
//                 className="portfolio-item col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12"
//               >
//                 <div className="portfolio-inner">
//                   <div className="portfolio-image">
//                     <a href={item.image} className="popup-gallery">
//                       <img
//                         className="lazyload img-product"
//                         data-src={item.image}
//                         src="images/portfolio/Port_1.jpg"
//                         alt="image-product"
//                       />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <ul className="pagination-wrap pagination-list pagination-btn">
//             <li className="active">
//               <Link to="#" className="pagination-link">
//                 1
//               </Link>
//             </li>
//             <li>
//               <Link to="#" className="pagination-link">
//                 2
//               </Link>
//             </li>
//             <li>
//               <Link to="#" className="pagination-link">
//                 3
//               </Link>
//             </li>
//             <li>
//               <Link to="#" className="pagination-link">
//                 4
//               </Link>
//             </li>
//             <li>
//               <Link to="#" className="pagination-link">
//                 <span className="icon icon-arrow-right"></span>
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section``;

// export default Gallery;

import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const galleryImages = [
  { id: 1, image: "images/gallery/1.jpg" },
  { id: 2, image: "images/gallery/2.jpg" },
  { id: 3, image: "images/gallery/3.jpg" },
  { id: 4, image: "images/gallery/4.jpg" },
  { id: 5, image: "images/gallery/5.jpg" },
  { id: 6, image: "images/gallery/6.jpg" },
  { id: 7, image: "images/gallery/7.jpg" },
  { id: 8, image: "images/gallery/8.jpg" },
  { id: 9, image: "images/gallery/9.jpg" },
  { id: 10, image: "images/gallery/10.jpg" },
  { id: 11, image: "images/gallery/11.jpg" },
  { id: 12, image: "images/gallery/12.jpg" },
];

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openPopup = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length,
    );
  };

  return (
    <Wrapper>
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <div className="container">
          <div className="breadcrumbtitle">
            <h2>Photo gallery</h2>
          </div>
          <div className="breadcrumb-wrap d-flex justify-content-center flex-wrap align-items-center">
            <div className="breadcrumb-list">
              <Link to="/" className="text">
                Home
              </Link>
              <i className="icon icon-arrow-right"></i>
              <span className="text">Photo gallery</span>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="page--information container">
        <div className="content--gallery">
          <div className="row">
            {galleryImages.map((item, index) => (
              <div
                key={item.id}
                className="portfolio-item col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12"
              >
                <div className="portfolio-inner">
                  <div className="portfolio-image">
                    <Link
                      to="#"
                      className="popup-gallery"
                      style={{ cursor: "pointer" }}
                      onClick={() => openPopup(index)}
                    >
                      <img
                        src={item.image}
                        alt="image-product"
                        className="img-product"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination (static) */}
          <ul className="pagination-wrap pagination-list pagination-btn">
            <li className="active">
              <Link to="#" className="pagination-link">
                1
              </Link>
            </li>
            <li>
              <Link to="#" className="pagination-link">
                2
              </Link>
            </li>
            <li>
              <Link to="#" className="pagination-link">
                3
              </Link>
            </li>
            <li>
              <Link to="#" className="pagination-link">
                4
              </Link>
            </li>
            <li>
              <Link to="#" className="pagination-link">
                <span className="icon icon-arrow-right"></span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Popup Modal */}
      {isOpen && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={closePopup}>
              ×
            </button>
            <button className="popup-prev" onClick={prevImage}>
              ‹
            </button>
            <img src={galleryImages[currentIndex].image} alt="popup" />
            <button className="popup-next" onClick={nextImage}>
              ›
            </button>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }
  .popup-content {
    position: relative;
    max-width: 90%;
    max-height: 90%;
  }
  .popup-content img {
    width: 100%;
    height: auto;
    display: block;
  }

  .popup-prev,
  .popup-next {
    position: absolute;
    /* background: rgba(255, 255, 255, 0.8); */
    background: #a19898;
    border: none;
    border-radius: 5px;
    font-size: 2rem;
    cursor: pointer;
    padding: 5px 10px;
  }

  .popup-close {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 10;
    background: #a19898 !important;
    border: none;
    font-size: 2rem;
    color: #333;
    cursor: pointer;
    padding: 5px 8px;
    border-radius: 5px;
  }
  .popup-prev {
    top: 50%;
    left: -40px;
    transform: translateY(-50%);
  }
  .popup-next {
    top: 50%;
    right: -40px;
    transform: translateY(-50%);
  }

  @media (max-width: 768px) {
    .popup-prev {
      top: 50%;
      left: -30px;
      transform: translateY(-50%);
    }
    .popup-next {
      top: 50%;
      right: -30px;
      transform: translateY(-50%);
    }
  }

  @media (max-width: 425px) {
    .popup-prev,
    .popup-next {
      top: 50%;
      transform: translateY(-50%);
      position: absolute;
      z-index: 10;
      background: #a19898;
      border: none;
      font-size: 1.8rem;
      padding: 5px 8px;
      border-radius: 5px;
      cursor: pointer;
    }

    .popup-prev {
      left: 5px; /* Move it slightly inside the image */
    }

    .popup-next {
      right: 5px; /* Move it slightly inside the image */
    }
  }
`;

export default Gallery;
