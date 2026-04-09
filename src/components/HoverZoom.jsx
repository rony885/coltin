import React, { useRef, useState } from "react";
import styled from "styled-components";

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
