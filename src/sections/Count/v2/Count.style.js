import styled from "styled-components";

const StatisticsCounterStyleWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 158px;
  background: rgba(30, 31, 53, 0.8);
  backdrop-filter: blur(5px);
  padding: 20px;
  &::before,
  &::after {
    position: absolute;
    height: 5px;
    width: 50%;
    content: "";
  }
  &::before {
    left: 0;
    top: 0;
    background: rgb(248, 37, 82);
    background: linear-gradient(
      90deg,
      rgba(248, 37, 82, 0.5) 0%,
      rgba(21, 22, 37, 0) 100%
    );
  }
  &::after {
    right: 0;
    bottom: 0;
    background: rgb(21, 22, 37);
    background: linear-gradient(
      90deg,
      rgba(21, 22, 37, 0) 0%,
      rgba(163, 255, 18, 0.5) 100%
    );
  }
  .counter-number {
    font-size: 22px;
    line-height: 45px;
    color: #6d4afe;
    text-transform: uppercase;
    margin-bottom: 0px;
  }

  .counter-title {
    font-size: 16px;
    line-height: 45px;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 0px;
  }
  @media only screen and (max-width: 767px) {
    .counter-row {
      row-gap: 30px;
    }

    .counter-title {
      font-size: 14px;
    }
    .counter-number {
      font-size: 18px;
    }
  }
`;

export default StatisticsCounterStyleWrapper;
