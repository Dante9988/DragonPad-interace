import styled from "styled-components";
import bgShape from "assets/images/bg/card-bg-shape-big.png";

const CTAStyleWrapper = styled.section`
  .cta-area {
    position: relative;
    padding: 70px 0 80px 0;
    background: radial-gradient(circle, #4a4176 -24%, #1e1f35 40%);
    z-index: 1;
    .card-hover-wrapper {
      opacity: 1;
      visibility: visible;
    }

    &::before {
      position: absolute;
      height: 100%;
      width: 100%;
      left: 0%;
      top: 0;
      background: url(${bgShape});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      content: "";
      opacity: 0.8;
      z-index: -1;
    }
  }

  .title {
    margin-bottom: 15px;
    text-transform: uppercase;
    font-size: 36px;
    line-height: 1.35;
  }

  .dsc {
    margin-bottom: 40px;
  }
  .btn_wrapper {
    margin: 0 auto;
  }

  @media only screen and (max-width: 991px) {
    .title {
      font-size: 30px;
    }
  }
  @media only screen and (max-width: 767px) {
    .title {
      font-size: 26px;
    }
  }
  @media only screen and (max-width: 480px) {
    .title {
      font-size: 22px;
    }
    .dsc {
      padding: 0 10px;
    }
  }
`;

export default CTAStyleWrapper;
