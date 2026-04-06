// import React, { useState, useRef } from "react";
// import styled from "styled-components";
// const Container = styled.div`
//   display: flex;
//   gap: 20px;
//   align-items: flex-start;
// `;
// const ImageWrapper = styled.div`
//   position: relative;
//   overflow: hidden;
//   width: ${(props) => props.width}px;
//   height: ${(props) => props.height}px;
//   cursor: crosshair;
// `;
// const Lens = styled.div`
//   position: absolute;
//   border: 2px solid #000;
//   background-color: rgba(255, 255, 255, 0.3);
//   pointer-events: none;
// `;
// const ZoomedImage = styled.div`
//   border: 1px solid #ddd;
//   width: ${(props) => props.width}px;
//   height: ${(props) => props.height}px;
//   background-repeat: no-repeat;
// `;
// const HoverZoom = ({ imageUrl, width = 400, height = 400, zoomScale = 2, lensSize = 100 }) => {
//   const [zoomData, setZoomData] = useState({ x: 0, y: 0, visible: false });
//   const imgRef = useRef(null);
//   const handleMouseMove = (e) => {
//     const rect = imgRef.current.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;
//     setZoomData({
//       x,
//       y,
//       visible: true,
//       imgWidth: rect.width,
//       imgHeight: rect.height,
//     });
//   };
//   const handleMouseLeave = () => {
//     setZoomData({ ...zoomData, visible: false });
//   };
//   return (
//     <Container>
//       {/* Original Image */}
//       <ImageWrapper
//         ref={imgRef}
//         width={width}
//         height={height}
//         onMouseMove={handleMouseMove}
//         onMouseLeave={handleMouseLeave}
//       >
//         <img
//           src={imageUrl}
//           alt="Product"
//           style={{ width: "100%", height: "100%", objectFit: "cover" }}
//         />
//         {zoomData.visible && (
//           <Lens
//             style={{
//               width: lensSize,
//               height: lensSize,
//               left: zoomData.x - lensSize / 2,
//               top: zoomData.y - lensSize / 2,
//             }}
//           />
//         )}
//       </ImageWrapper>
//       {/* Zoomed Image */}
//       {zoomData.visible && (
//         <ZoomedImage
//           width={width}
//           height={height}
//           style={{
//             backgroundImage: `url(${imageUrl})`,
//             backgroundSize: `${zoomData.imgWidth * zoomScale}px ${zoomData.imgHeight * zoomScale}px`,
//             backgroundPosition: `-${zoomData.x * zoomScale - width / 2}px -${zoomData.y * zoomScale - height / 2}px`,
//           }}
//         />
//       )}
//     </Container>
//   );
// };
// export default HoverZoom;

// import React, { useRef } from "react";
// import styled from "styled-components";

// const ImageWrapper = styled.div`
//   position: relative;
//   width: ${(props) => props.width}px;
//   height: ${(props) => props.height}px;
//   overflow: hidden;
//   cursor: crosshair;
// `;

// const HoverZoom = ({
//   imageUrl,
//   width = 400,
//   height = 400,
//   lensSize = 100,
//   zoomScale = 2,
//   onZoomMove, // <-- callback to parent
// }) => {
//   const imgRef = useRef(null);

//   const handleMouseMove = (e) => {
//     if (!imgRef.current || !onZoomMove) return;

//     const rect = imgRef.current.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     const clampedX = Math.max(0, Math.min(x, rect.width));
//     const clampedY = Math.max(0, Math.min(y, rect.height));

//     onZoomMove({
//       visible: true,
//       x: clampedX,
//       y: clampedY,
//       imgWidth: rect.width,
//       imgHeight: rect.height,
//       imageUrl,
//       lensSize,
//       zoomScale,
//     });
//   };

//   const handleMouseLeave = () => {
//     if (onZoomMove) onZoomMove({ visible: false });
//   };

//   return (
//     <ImageWrapper
//       ref={imgRef}
//       width={width}
//       height={height}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//     >
//       <img
//         src={imageUrl}
//         alt="Product"
//         style={{ width: "100%", height: "100%", objectFit: "cover" }}
//       />
//     </ImageWrapper>
//   );
// };

// export default HoverZoom;

// import React, { useRef } from "react";
// import styled from "styled-components";

// const ImageWrapper = styled.div`
//   position: relative;
//   width: ${(props) => props.width}px;
//   height: ${(props) => props.height}px;
//   overflow: hidden;
//   cursor: crosshair;
// `;

// const HoverZoom = ({
//   imageUrl,
//   width = 400,
//   height = 400,
//   zoomScale = 2,
//   onZoomMove, // send mouse info to parent
// }) => {
//   const imgRef = useRef(null);

//   const handleMouseMove = (e) => {
//     if (!imgRef.current || !onZoomMove) return;

//     const rect = imgRef.current.getBoundingClientRect();
//     const x = e.clientX - rect.left; // cursor x in image
//     const y = e.clientY - rect.top; // cursor y in image

//     const clampedX = Math.max(0, Math.min(x, rect.width));
//     const clampedY = Math.max(0, Math.min(y, rect.height));

//     onZoomMove({
//       visible: true,
//       x: clampedX,
//       y: clampedY,
//       imgWidth: rect.width,
//       imgHeight: rect.height,
//       imageUrl,
//       zoomScale,
//     });
//   };

//   const handleMouseLeave = () => {
//     if (onZoomMove) onZoomMove({ visible: false });
//   };

//   return (
//     <ImageWrapper
//       ref={imgRef}
//       width={width}
//       height={height}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//     >
//       <img
//         src={imageUrl}
//         alt="Product"
//         style={{ width: "100%", height: "100%", objectFit: "cover" }}
//       />
//     </ImageWrapper>
//   );
// };

// export default HoverZoom;

import React, { useRef, useState } from "react";
import styled from "styled-components";

// const ImageWrapper = styled.div`
//   position: relative;
//   width: ${(props) => props.width}px;
//   height: ${(props) => props.height}px;
//   overflow: hidden;
//   cursor: crosshair;
// `;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: ${(props) => props.width}px;
  height: auto;
  aspect-ratio: 1 / 1; /* keeps square */
  margin: 0 auto; /* center horizontally */
  overflow: hidden;
  cursor: crosshair;
`;

const Lens = styled.div`
  position: absolute;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border: 2px solid #1a1a2c;
  background: rgba(255, 255, 255, 0.3);
  pointer-events: none;
  transform: translate(-50%, -50%);
`;

const HoverZoom = ({
  imageUrl,
  width = 400,
  height = 400,
  zoomScale = 2.5,
  lensSize = 120,
  onZoomMove,
}) => {
  const wrapperRef = useRef(null);
  const [lensPos, setLensPos] = useState(null);

  const handleMouseMove = (e) => {
    if (!wrapperRef.current) return;

    const rect = wrapperRef.current.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    // Clamp lens inside image
    const half = lensSize / 2;
    x = Math.max(half, Math.min(x, rect.width - half));
    y = Math.max(half, Math.min(y, rect.height - half));

    setLensPos({ x, y });

    onZoomMove({
      visible: true,
      x,
      y,
      imgWidth: rect.width,
      imgHeight: rect.height,
      lensSize,
      zoomScale,
      imageUrl,
    });
  };

  const handleMouseLeave = () => {
    setLensPos(null);
    onZoomMove({ visible: false });
  };

  return (
    <ImageWrapper
      ref={wrapperRef}
      width={width}
      height={height}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={imageUrl}
        alt="Product"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />

      {lensPos && (
        <Lens size={lensSize} style={{ left: lensPos.x, top: lensPos.y }} />
      )}
    </ImageWrapper>
  );
};

export default HoverZoom;
