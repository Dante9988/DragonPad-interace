import styled, { css, keyframes } from "styled-components";

const stripAnimation = keyframes`

0% {
        background-position: 0 0;
    }
    100% {
        background-position: 100% 0;
    }
`;

const ProgressBarStyle = styled.div`
  display: flex;
  align-items: center;

  .progress_bar {
    position: relative;
    width: 100%;
    height: 12px;
    background: rgba(255, 255, 255, 0.1);
    animation-direction: reverse;
    .progress_bar_overlay {
      position: absolute;
      left: 0%;
      top: 0;
      background-color: #a3ff12;
      background-image: linear-gradient(
        72deg,
        rgba(0, 0, 0, 0.2) 50%,
        transparent 56%,
        transparent 84%,
        rgba(0, 0, 0, 0.2) 2%,
        rgba(0, 0, 0, 0.2) 90%,
        transparent 121%,
        transparent
      );
      background-size: 30px 30px;
      height: 100%;

      animation: ${stripAnimation} 7s linear infinite;

      width: ${({ progress }) =>
        progress &&
        css`
          width: ${progress};
        `};
    }
  }
`;

export default ProgressBarStyle;
