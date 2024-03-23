import styled from "styled-components";
import itemStripShape from "assets/images/bg/roadmap_strip_shape.svg";
import roadmapArrowShape from "assets/images/bg/roadmap-arrow-shape.svg";
import bgShape from "assets/images/kycimg/roadmapScreenbg.svg";

const RoadMapDetailsStyleWrapper = styled.div`
  padding: 100px 0 120px 0;
  background: #090a1a;
  position: relative;

  &::before {
    position: absolute;
    left: 0%;
    top: 0;
    height: 100%;
    width: 100%;
    background: url(${bgShape});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: 1584px;
    content: "";
  }

  .roadmap_items_row {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    position: relative;

    &::before {
      position: absolute;
      left: 50%;
      top: 0;
      height: 100%;
      width: 100px;
      transform: translateX(-50%);
      background: url(${roadmapArrowShape});
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      content: "";
    }
  }
  .roadmap_item {
    position: relative;
    overflow: hidden;
    width: 470px;

    /* corner shape  */
    &::before {
      position: absolute;
      top: -27px;
      width: 50px;
      height: 100px;
      background: #090a1a;
      content: "";
      z-index: 1;
      transform: rotate(150deg);
    }
    &::after {
      position: absolute;
      top: -27px;
      width: 47px;
      height: 75px;
      background: #5d5d69;
      content: "";
      z-index: 2;
      transform: rotate(150deg);
    }

    &:nth-child(odd) {
      &::before,
      &::after {
        right: -27px;
      }
    }
    &:nth-child(even) {
      &::before,
      &::after {
        left: -27px;
        transform: rotate(215deg);
      }
    }

    &.shape_active {
      &::after {
        background: rgba(163, 255, 18, 0.3);
      }
    }

    .roadmap_item_inner {
      position: relative;
      padding: 35px 39px 26px 39px;
      background: rgba(30, 31, 53, 0.8);
      overflow: hidden;

      &::before {
        position: absolute;
        left: 0;
        bottom: 0;
        background: url(${itemStripShape}) no-repeat;
        width: 100%;
        height: 5px;
        content: "";
      }
    }

    &:nth-child(odd) {
      margin-top: 70px;

      .roadmap_item_inner {
        &::before {
          right: auto;
          left: 0;
        }
      }
    }
    &:nth-child(even) {
      margin-top: 170px;
      .roadmap_item_inner {
        &::before {
          right: 0;
          transform: rotate(180deg);
        }
      }
    }
  }

  .roadmap_title {
    font-size: 22px;
    color: #a3ff12;
    margin-bottom: 10px;
  }
  .roadmap_check_list {
    display: flex;
    flex-direction: column;
    row-gap: 15px;

    li {
      img {
        margin-right: 20px;
      }
    }
  }

  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    .roadmap_item {
      width: 410px;
    }
  }

  @media only screen and (max-width: 991px) {
    .roadmap_items_row {
      column-gap: 30px;
      /* bg arrow shape display none */
      &::before {
        display: none;
      }
    }

    .roadmap_item {
      width: calc(50% - 15px);

      &:nth-child(odd) {
        margin-top: 50px;
      }
      &:nth-child(even) {
        margin-top: 130px;
      }
    }
  }

  @media only screen and (max-width: 767px) {
    .roadmap_items_row {
      flex-direction: row;
      row-gap: 30px;
    }

    .roadmap_item {
      width: 100%;
      margin: 0 !important;
    }
  }

  @media only screen and (max-width: 375px) {
    .roadmap_check_list {
      li {
        font-size: 12px;

        img {
          margin-right: 10px;
        }
      }
    }
  }
`;

export default RoadMapDetailsStyleWrapper;
