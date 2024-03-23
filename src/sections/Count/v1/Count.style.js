import styled from "styled-components";

const StatisticsCounterStyleWrapper = styled.div`
  .counter-number {
    display: block;
    color: #6d4afe;
    font-size: 36px;
    font-family: "Russo One", sans-serif;
    margin-bottom: 6px;
  }

  .counter-title {
    margin-bottom: 0;
  }

  @media only screen and (max-width: 991px) {
    .counter-title {
      font-size: 15px;
    }
  }
  @media only screen and (max-width: 767px) {
    .counter-row {
      row-gap: 30px;
    }
  }

  @media only screen and (max-width: 575px) {
    .counter-row {
      text-align: center;
    }
  }
`;

export default StatisticsCounterStyleWrapper;
