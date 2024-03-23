import styled, { css } from "styled-components";

const LinkStyle = styled.a`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 17px;
  font-family: "Russo One", sans-serif;
  font-size: 16px;
  text-transform: uppercase;
  transition: all 0.4s ease-in-out;
  box-sizing: border-box;
  width: 120px;
  height: 40px;
  border: none;
  background: #6d4afe;
  overflow: hidden;
  z-index: 1;
  color: #ffffff;

  .hover_shape_wrapper {
    position: absolute;
    height: 100%;
    width: auto;
    left: 30%;
    top: 0;
    z-index: -1;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    transition: all 0.3s ease-in-out;
    .btn_hover_shape {
      display: block;
      height: 124%;
      width: 5px;
      opacity: 0;
      margin: 0 0 0 -10px;
      background: rgba(0, 0, 0, 0.1);
      transform: rotate(22deg);
      transition: all 0.4s;

      &-3 {
        width: 11px;
      }
    }
  }

  svg {
    font-size: 16px;
  }

  &:hover {
    .hover_shape_wrapper {
      left: 50%;
      .btn_hover_shape {
        opacity: 1;
        margin: 0 5px !important;
      }
    }
    color: #ffffff;
  }

  ${({ isCenter }) =>
    isCenter &&
    css`
      margin: 0 auto;
    `}
  ${({ variant }) =>
    variant === "mint" &&
    css`
      background: #a3ff12;
      color: #090a1a;
      &:hover {
        color: #090a1a;
      }
    `}
  ${({ variant }) =>
    variant === "outline" &&
    css`
      color: #ffffff;
      background: transparent;
      border: 2px solid rgba(255, 255, 255, 0.15);

      .hover_shape_wrapper {
        .btn_hover_shape {
          background: rgba(255, 255, 255, 0.1);
        }
      }
    `}
  ${({ variant }) =>
    variant === "dark" &&
    css`
      color: #ffffff;
      background: rgba(255, 255, 255, 0.1);

      .hover_shape_wrapper {
        .btn_hover_shape {
          background: rgba(255, 255, 255, 0.05);
        }
      }
    `}
  ${({ variant }) =>
    variant === "white" &&
    css`
      color: #090a1a;
      background: #ffffff;

      &:hover {
        color: #090a1a;
      }

      .hover_shape_wrapper {
        .btn_hover_shape {
          background: rgba(0, 0, 0, 0.1);
        }
      }
    `}
  ${({ hovered }) =>
    hovered &&
    css`
      .hover_shape_wrapper {
        .btn_hover_shape {
          opacity: 1;
          &-1 {
            left: 42%;
          }
          &-2 {
            left: 50%;
          }
          &-3 {
            left: 58%;
          }
        }
      }
    `}
  ${({ sm }) =>
    sm &&
    css`
      width: 170px;
      height: 50px;
      @media only screen and (max-width: 768px) {
        width: 150px;
        height: 50px;
      }
    `}
  ${({ md }) =>
    md &&
    css`
      width: 200px;
      height: 60px;
      @media only screen and (max-width: 768px) {
        width: 150px;
        height: 50px;
      }
    `}
  ${({ lg }) =>
    lg &&
    css`
      width: 270px;
      height: 60px;
      @media only screen and (max-width: 768px) {
        width: 150px;
        height: 50px;
      }
    `}
  ${({ xl }) =>
    xl &&
    css`
      width: 370px;
      height: 60px;

      @media only screen and (max-width: 991px) {
        width: 200px;
      }
      @media only screen and (max-width: 575px) {
        width: 150px;
        height: 50px;
      }
    `}
  ${({ xxl }) =>
    xxl &&
    css`
      width: 570px;
      height: 60px;
      @media only screen and (max-width: 991px) {
        width: 200px;
      }
    `}
    
    @media only screen and (max-width: 768px) {
    font-size: 14px;
    column-gap: 14px;
  }
`;

export default LinkStyle;
