import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FaAngleUp } from "react-icons/fa";

const GoTop = () => {
  const pathRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const progressPath = pathRef.current;
    if (!progressPath) return;

    const pathLength = progressPath.getTotalLength();

    progressPath.style.transition = "none";
    progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = "stroke-dashoffset 10ms linear";

    const updateProgress = () => {
      const scroll = window.scrollY;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress;

      setIsActive(scroll > 200);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress);

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Wrapper>
      <div
        className={`progress-wrap ${isActive ? "active-progress" : ""}`}
        onClick={scrollToTop}
      >
        {/* SVG Progress Circle */}
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path ref={pathRef} d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>

        {/* React Icon */}
        <span className="go-top-icon">
          <FaAngleUp />
        </span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .progress-wrap {
    position: fixed;
    bottom: 90px;
    right: 40px;
    height: 40px;
    width: 40px;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 999px;
    z-index: 100;
    opacity: 0;
    visibility: hidden;
    transform: translateY(20px);
    transition: all 400ms linear;
    background: var(--white);
    border: 1.2px solid rgba(134, 134, 134, 0.12);
  }

  .progress-wrap.active-progress {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  /* React Icon Styling */
  .go-top-icon {
    position: absolute;
    font-size: 14px;
    color: var(--main);
    z-index: 2;
    pointer-events: none;
  }

  .progress-wrap svg path {
    fill: none;
  }

  .progress-wrap svg.progress-circle path {
    stroke: var(--main);
    stroke-width: 1.2;
    transition: stroke-dashoffset 0.4s linear;
  }
`;

export default GoTop;
