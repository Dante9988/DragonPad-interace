import styled from "styled-components";

const TokenStyleWrapper = styled.div`
  position: relative;

  background: rgba(30, 31, 53, 0.8);
  backdrop-filter: blur(5px);
  min-height: 158px;
  margin-top: -155px;
  display: flex;
  align-items: center;

  .section_title {
    margin-bottom: 0;

    .subtitle,
    h2 {
      font-size: 16px;
      margin-bottom: 0;
      line-height: 36px !important;
      color: #ffffff;
    }
  }

  .card-hover-wrapper {
    opacity: 1;
    visibility: visible;
    .hover-shape-1,
    .hover-shape-3 {
      display: none;
    }
    .hover-shape-2,
    .hover-shape-4 {
      width: 50%;
    }
    .hover-shape-2 {
      left: 0;
    }
    .hover-shape-4 {
      right: 0;
    }
  }

  .slick-slider {
    .slick-list {
      position: relative;
    }
  }

  .slick__slider__item {
    img {
      cursor: pointer;
      transition: all 0.4s;
    }
    &:hover {
      img {
        opacity: 0.7;
      }
    }
  }

  @media only screen and (max-width: 767px) {
    padding: 30px 0;

    .section_title {
      margin-bottom: 20px;
    }
  }
`;

export default TokenStyleWrapper;
