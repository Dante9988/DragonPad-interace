import styled from "styled-components";

const StatisticsStyleWrapper = styled.section`
  background: #1e1f35;
  padding: 50px;
  margin-bottom: 55px;
  .tokenomics_list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 26px;
  }

  .tokenomics_counter {
    h4 {
      font-size: 22px;
      line-height: 30px;
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
      border-radius: 50%;
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
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media only screen and (max-width: 991px) {
    .tokenomics_content_left {
      margin-top: 30px;
    }
  }
  @media only screen and (max-width: 480px) {
    padding: 40px 25px;
    .tokenomics_item {
      width: 42%;
      padding-left: 25px;
    }
  }
  @media only screen and (max-width: 320px) {
    .tokenomics_item {
      width: 45%;
      padding-left: 25px;
    }
    .tokenomics_item_title {
      font-size: 14px;
      span {
        font-size: 14px;
      }
    }
  }
`;

export default StatisticsStyleWrapper;
