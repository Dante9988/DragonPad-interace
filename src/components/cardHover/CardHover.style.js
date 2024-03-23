import styled, { css } from "styled-components";

const CardHoverWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  opacity: 0;
  visibility: hidden;
  .hover-shape {
    position: absolute;

    transition: all 0.4s;
    &-1 {
      top: 0px;
      left: 0;
      background: linear-gradient(
        to bottom,
        #f82552 -100%,
        rgba(21, 22, 37, 0) 64%
      );
      width: 5px;
      height: 200px;
    }
    &-2 {
      top: 0px;
      left: 5px;
      background: linear-gradient(
        to right,
        #f82552 -100%,
        rgba(21, 22, 37, 0) 64%
      );
      width: 200px;
      height: 5px;
    }
    &-3 {
      bottom: 0px;
      right: 0;
      width: 5px;
      height: 200px;
      background: linear-gradient(
        to top,
        #a3ff12 -100%,
        rgba(21, 22, 37, 0) 64%
      );
    }
    &-4 {
      bottom: 0px;
      right: 5px;
      width: 200px;
      height: 5px;
      background: linear-gradient(
        to left,
        #a3ff12 -100%,
        rgba(21, 22, 37, 0) 64%
      );
    }
  }

  ${({ hovered }) =>
    hovered &&
    css`
      opacity: 1;
      visibility: visible;
    `}
`;
export default CardHoverWrapper;
