import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <Wrapper>
      <div className="preload preload-container">
        <div className="preload-logo">
          <div className="spinner"></div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .preload-container {
    position: fixed;
    inset: 0;
    background: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }

  .preload-logo {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .spinner {
    width: 50px;
    height: 50px;
    border: 4px solid #e5e5e5;
    border-top: 4px solid #000;
    border-radius: 50%;
    animation: spin 0.9s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loader;
