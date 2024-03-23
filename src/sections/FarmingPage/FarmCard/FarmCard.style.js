import styled from "styled-components";

const FarmCardStyleWrapper = styled.div`
  background: #222231;

  &.active {
    .farm_content_wrapper {
      display: block;
    }
  }

  .farm_header {
    padding: 18px 25px !important;
    display: flex;
    align-items: center;
    background: #1a1b30;

    li {
      width: 17%;
      height: 40px;
      position: relative;
      display: flex;
      align-items: center;

      img {
        margin-right: 5px;
      }

      &::before {
        width: 100%;
        height: auto;
        position: absolute;
        left: 0;
        top: -60px;
        text-transform: uppercase;
        content: attr(data-title);
      }
      &:nth-child(1) {
        width: 30%;
      }

      &.expand_arrow {
        width: 20px;
        cursor: pointer;
        svg {
          font-size: 20px;
        }
      }
    }
  }

  .farm_content_wrapper {
    display: none;
  }
  .farm_content_list {
    display: flex;
    padding: 28px 30px;

    label,
    h4 {
      font-family: "Russo One", sans-serif;
      color: #ffffff;
      font-size: 16px;
      margin: 0 0 18px;
      line-height: 1.35;
      font-weight: 400;
    }
  }

  .farm_box_item + .farm_box_item {
    padding-left: 30px;
  }

  .farm_box_item {
    width: 33.333%;

    h5 {
      font-family: "Inter", sans-serif;
      font-size: 16px;
      color: rgba(255, 255, 255, 0.7);
      margin: 10px 0 0 0;
    }

    input {
      border: none;
      background: transparent;
      padding: 7px 20px;
      position: relative;
      width: 100%;
      color: rgba(255, 255, 255, 0.7);
      border: 1px solid #434350;
      padding: 10px 10px 10px 15px;
      position: relative;
      display: flex;
      align-items: center;
      height: 60px;
    }

    .input_box {
      position: relative;
      display: flex;
      align-items: center;
      span,
      .btn_wrapper {
        position: absolute;
      }

      .deposite_amout_title {
        right: 45%;
        text-transform: uppercase;
        color: #ffffff;
      }

      .btn_wrapper {
        height: 40px;
        width: 120px;
        right: 10px;
        //hover
        .hover_shape_wrapper {
          width: 100%;
          .btn_hover_shape-1 {
            left: 55% !important;
          }
          .btn_hover_shape-2 {
            left: 45% !important;
          }
          .btn_hover_shape-3 {
            width: 7px !important;
            left: 35% !important;
          }
        }
      }
    }

    .fram_wallet {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 30px;

      span {
        color: #a3ff12;
        font-size: 22px;
        font-family: "Russo One", sans-serif;
      }

      .btn_wrapper {
        width: 90px;
        height: 39px;
      }
    }
  }

  .farm_bottom_info {
    display: flex;
    align-items: center;
    column-gap: 20px;
    padding: 0 25px 25px 25px;
    a {
      color: #a3ff12;
      font-size: 14px;
      display: flex;
      align-items: center;
      img {
        margin-left: 7px;
      }
    }
  }

  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    .farm_header {
      li {
        font-size: 14px;
        &::before {
          font-size: 12px;
        }
      }
    }

    .farm_box_item .input_box .btn_wrapper {
      height: 36px;
      width: 100px;
      font-size: 15px;
    }
  }

  @media only screen and (max-width: 991px) {
    .farm_header {
      flex-direction: column;
      align-items: flex-start !important;
      row-gap: 25px;
      padding-top: 30px !important;

      li {
        display: flex;
        align-items: center;
        height: auto;
        width: 100% !important;

        &::before {
          left: auto;
          right: 0;
          top: auto;
          width: auto;
        }
      }
    }
    .farm_content_list {
      flex-direction: column;
      row-gap: 30px;
    }

    .farm_box_item {
      width: 100%;
      padding: 0 !important;

      .input_box {
        .deposite_amout_title {
          right: 45%;
        }
      }
    }
  }

  @media only screen and (max-width: 480px) {
    .farm_header {
      padding: 30px 15px 18px 15px !important;
    }

    .farm_content_list {
      padding: 28px 15px;
    }

    .farm_bottom_info {
      padding-left: 15px;
      a {
        font-size: 12px;
      }
    }
  }
  @media only screen and (max-width: 375px) {
    .farm_bottom_info {
      flex-direction: column;
      align-items: flex-start;
      row-gap: 10px;
    }
  }
  @media only screen and (max-width: 360px) {
    .farm_header {
      li {
        font-size: 14px;
        &::before {
          font-size: 10px;
        }
      }
    }
  }
  @media only screen and (max-width: 320px) {
    .farm_box_item .input_box .deposite_amout_title {
      right: 55%;
    }
  }
`;

export default FarmCardStyleWrapper;
