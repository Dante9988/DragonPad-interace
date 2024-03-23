import styled from "styled-components";

const StatisticsStyleWrapper = styled.section`
  background: #090a1a;
  padding-top: 0px;
  padding-bottom: 105px;

  .tokenomics_content {
    margin-top: 50px;
  }

  .tokenomics_list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 43px;
  }

  .tokenomics_counter {
    h4 {
      font-size: 22px;
      line-height: 40px;
      color: #ffffff;
      margin-bottom: 0px;
      text-transform: uppercase;
    }
    margin-bottom: 28px;
  }

  .tokenomics_item {
    width: 40%;
    position: relative;
    padding-left: 32px;
    &::before {
      height: 12px;
      width: 12px;
      position: absolute;
      left: 0;
      top: 9px;
      content: "";
      background: #a3ff12;
    }
    &:nth-child(2) {
      &::before {
        background: #6d4afe;
      }
    }
    &:nth-child(3) {
      &::before {
        background: #841183;
      }
    }
    &:nth-child(4) {
      &::before {
        background: #f82552;
      }
    }
    &:nth-child(5) {
      &::before {
        background: #14a0c0;
      }
    }
    &:nth-child(6) {
      &::before {
        background: #6d4afe;
      }
    }
    &:nth-child(7) {
      &::before {
        background: #841183;
      }
    }
  }

  .tokenomics_item_title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 0px;
    span {
      display: block;
      font-family: "Russo One";
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 28px;
      text-transform: uppercase;
      color: #ffffff;
      margin-bottom: 0px;
    }
  }

  .tokenomics_content_right {
    background: rgba(30, 31, 53, 0.8);
    backdrop-filter: blur(5px);
    max-width: 570px;
    width: 100%;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px;
  }

  @media only screen and (max-width: 767px) {
    .tokenomics_content_right {
      margin-top: 40px;
    }
  }
  @media only screen and (max-width: 480px) {
    .tokenomics_counter {
      h4 {
        font-size: 17px;
      }
    }
  }
`;

export default StatisticsStyleWrapper;
