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
    width: 37%;
    text-transform: uppercase;
    margin: 0 auto 15px;
  }

  .dsc {
    margin-bottom: 40px;
  }

  .cta_form_box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 570px;
    margin: 0 auto;

    input {
      max-width: 350px;
      width: 100%;
      height: 60px;
      padding: 8px 19px;
      background: transparent;
      font-family: Inter;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 45px;
      color: #ffffff;
      border: 1px solid rgba(255, 255, 255, 0.1);
      outline: none;
      transition: all 0.4s ease-in-out;
    }
  }

  @media only screen and (max-width: 991px) {
    .title {
      font-size: 30px;
      width: 55%;
    }
  }

  @media only screen and (max-width: 768px) {
    .title {
      font-size: 26px;
    }

    .cta_form_box {
      justify-content: space-evenly;
      input {
        max-width: 300px;
        height: 50px;
      }
    }
  }

  @media (max-width: 540px) {
    .cta_form_box {
      flex-direction: column;
      input {
        margin-bottom: 20px;
      }
    }
    .dsc {
      margin-bottom: 30px;
    }
  }
  @media only screen and (max-width: 480px) {
    .title {
      font-size: 22px;
      width: 80%;
    }
    .dsc {
      padding: 0 10px;
    }
  }
`;

export default CTAStyleWrapper;
