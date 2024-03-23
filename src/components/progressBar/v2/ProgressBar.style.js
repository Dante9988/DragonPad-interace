import styled, { css } from "styled-components";

const ProgressBarStyle = styled.div`
  display: flex;
  align-items: center;

  .progress_bar {
    position: relative;
    width: 100%;
    height: 15px;
    background: rgba(255, 255, 255, 0.1);
    .progress_bar_overlay {
      position: absolute;
      left: 0%;
      top: 0;
      background: #a3ff12;
      height: 100%;
      transition: all 0.4s;
      width: ${({ progress }) =>
        progress &&
        css`
          width: ${progress};
        `};
    }
  }
`;

export default ProgressBarStyle;
