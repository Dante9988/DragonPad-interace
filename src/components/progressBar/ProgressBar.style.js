import styled, { css } from "styled-components"; 

const ProgressBarStyle = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 8px;

  .progress_bar {
    position: relative;
    background-color: rgba(255, 255, 255, 0);
    background-size: 14px 32px;
    background-image: linear-gradient(
      60deg,
      rgba(255, 255, 255, 0.15) 26%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.15) 54%,
      rgba(255, 255, 255, 0.15) 82%,
      transparent 75%,
      transparent
    );
    height: 12px;

    .progress_bar_overlay {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%; 
      content: "";
      background-color: rgba(255, 255, 255, 0);
      background-size: 14px 32px;
      background-image: linear-gradient(
        60deg,
        #a3ff12 26%,
        transparent 25%,
        transparent 50%,
        #a3ff12 54%,
        #a3ff12 82%,
        transparent 75%,
        transparent
      );
    }
  }
`;

export default ProgressBarStyle;
