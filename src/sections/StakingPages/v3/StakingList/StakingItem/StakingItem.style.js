import styled from "styled-components";

import headingShape from "assets/images/bg/shape-bg.png";
import cardBackShape from "assets/images/bg/staking_flip_card_blur_img.png";

const StakingItemStyleWrapper = styled.div`
  .staking_flip_card {
    background-color: transparent;
    width: 100%;
    min-height: 580px;
    height: 100%;
    perspective: 1000px;
  }

  .staking_flip_card_inner {
    position: relative;
    width: 100%;
    height: 580px;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
  }
  .staking_flip_card_front {
    background: rgba(30, 31, 53, 0.7);
    backdrop-filter: blur(5px);
    padding: 40px;
  }

  .staking_flip_card_front_headings {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 34px;

    h2 {
      font-family: "Russo One";
      font-style: normal;
      font-weight: 400;
      font-size: 30px;
      line-height: 36px;
      text-align: right;
      color: #ffffff;
      margin-bottom: 0px;
      text-transform: uppercase;
    }
  }

  .staking_flip_card_front_body {
    position: relative;
  }

  .staking_flip_card_front_timebg {
    height: 35px;
    width: 196px;
    background: url(${headingShape});
    background-size: cover;
    background-position: right center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 40px;
    position: absolute;
    left: -40px;
    top: 0px;

    span {
      margin-bottom: 0px;
      display: flex;
      align-items: center;
      font-family: "Russo One";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      text-transform: uppercase;
      color: #ffffff;
    }
  }

  .staking_apy {
    h3 {
      font-family: "Russo One";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      text-align: right;
      text-transform: uppercase;
      margin-bottom: 0px;
      color: #33efb0;
      padding-top: 10px;
    }
  }

  .staking_flip_card_front_list {
    margin-top: 41px !important;
    margin-bottom: 20px !important;

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 21px;

      span {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 30px;
        color: rgba(255, 255, 255, 0.7);
      }

      strong {
        font-family: "Russo One";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 30px;
        text-align: right;
        color: #ffffff;
      }
    }
  }

  .staking_flip_card_front_buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .btn_wrapper {
      font-size: 14px;
      width: 46.5%;
      height: 40px;
    }
  }

  .staking_flip_card_front_reward {
    text-align: left;
    margin-top: 30px;
    margin-bottom: 15px;

    h6 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 30px !important;
      color: rgba(255, 255, 255, 0.7);
      margin-bottom: 0px;
    }

    h5 {
      font-family: "Russo One";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 30px !important;
      margin-bottom: 0px;
      color: #ffffff;
    }
  }

  /* card back  */

  .staking_flip_card_back {
    background: rgba(30, 31, 53, 0.7);
    backdrop-filter: blur(5px);
    transition: all 0.3s;
    transform: scale(0.7);
  }

  .staking_flip_card_back_content {
    padding: 40px;
    height: 100%;
    width: 100%;
    position: relative;
  }

  .staking_flip_card_back_overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    background: url(${cardBackShape});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    z-index: 0;
  }

  .staking_flip_card_back_headings {
    position: relative;
    text-align: left;
    margin-bottom: 7px;
    z-index: 1;

    h2 {
      font-family: "Russo One";
      font-style: normal;
      font-weight: 400;
      font-size: 30px;
      line-height: 36px;
      color: #ffffff;
      margin-bottom: 0px;
      text-transform: uppercase;
    }
  }

  .staking_flip_card_close_btn {
    background: transparent;
    border: none;
    outline: none;
    position: absolute;
    right: -20px;
    top: -20px;
  }

  .staking_flip_card_back_body {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;
  }

  .staking_flip_card_front_list {
    margin-top: 41px !important;
    margin-bottom: 20px !important;

    ul {
      li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 21px;
      }
    }
  }

  .staking_flip_card_back_form {
    text-align: left;
    margin-top: 47px;

    form {
      span {
        font-family: "Russo One";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #ffffff;
        text-align: left;
      }
    }
  }

  .staking_flip_card_back_form_input {
    border: 1px solid rgba(255, 255, 255, 0.15);
    height: 60px;
    max-width: 100%;
    width: 100%;
    padding: 0px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;

    input {
      background: transparent;
      height: 100%;
      width: 100%;
      max-width: 215px;
      border: none;
      outline: none;
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
      color: #ffffff;
    }

    button {
      width: 60px;
      height: 30px;
      background: rgba(255, 255, 255, 0.2);
      border: none;
      outline: none;
      font-family: "Russo One";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      text-align: center;
      text-transform: uppercase;
      color: #ffffff;
    }
  }

  .staking_flip_card_back_approve_btn {
    position: relative;
    width: 100%;
    margin-top: 150px;

    .btn_wrapper {
      width: 100%;
      height: 40px;
      background: #6d4afe;
      font-family: "Russo One";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      text-align: center;
      text-transform: uppercase;
      color: #ffffff;
    }
  }

  .staking_flip_card_front,
  .staking_flip_card_back {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .staking_flip_card_back {
    visibility: hidden;
    opacity: 0;
  }

  .staking_flip_card_inner {
    &.active {
      .staking_flip_card_front {
        visibility: hidden;
        opacity: 0;
        z-index: -1;
      }

      .staking_flip_card_back {
        visibility: visible;
        opacity: 1;
        transform: scale(1);

        .card-hover-wrapper {
          visibility: visible;
          opacity: 1;
        }
      }
    }
  }

  @media (max-width: 360px) {
    .staking_flip_card_front {
      padding: 40px 20px;
    }

    .staking_flip_card_front_timebg {
      width: 160px;
      left: -20px;
      padding-left: 20px;
    }

    .staking_flip_card_front_timebg span,
    .staking_apy h3 {
      font-size: 12px;
    }

    .staking_flip_card_front_list li span,
    .staking_flip_card_front_list li strong {
      font-size: 13px;
    }
  }
`;

export default StakingItemStyleWrapper;
