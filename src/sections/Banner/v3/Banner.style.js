import styled, { keyframes } from "styled-components";
import bannerBG from "assets/images/bg/V3_Banner_BG.png";

const rocketAnimation = keyframes`
        0%,
        100% {
            bottom: 0;
        }

        50% {
            bottom: 30px;
        } 
`;

const BannerStyleWrapper = styled.section`
  position: relative;
  background: url(${bannerBG});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 250px 0;
  overflow: hidden;

  .ufo_shape {
    position: absolute;
    top: 2%;
    left: 10%;
    z-index: 1;
  }

  .gamfi_v2_hero_left {
    h2 {
      max-width: 515px;
      font-size: 50px;
      color: #ffffff;
      line-height: 70px;
      text-transform: uppercase;
      margin-bottom: 0px;
      img {
        margin: 0 15px;
      }
    }

    p {
      color: #ffffff;
      font-weight: 600;
      font-size: 18px;
      line-height: 30px;
      margin-top: 30px;
      font-family: Inter;
    }
  }

  .banner-btns {
    display: flex;
    align-items: center;
    column-gap: 30px;
    margin-top: 60px;
  }

  .gamfi_v2_hero_right {
    display: flex;
    flex-direction: column;

    .gamfi_v2_hero_thumb {
      position: relative;
      margin: 0 auto;
      .rocket_thumb {
        position: relative;
        animation: ${rocketAnimation} 5s infinite;
        z-index: 1;
      }
    }

    .coin_cap_list {
      display: flex;
      justify-content: space-between;
      li {
        width: 33%;

        h5 {
          line-height: 40px;
          color: #ffffff;
          margin-bottom: 0px;
          font-size: 16px;
        }

        .counter-number {
          font-family: "Russo One";
          font-style: normal;
          font-weight: normal;
          font-size: 22px;
          line-height: 40px;
          text-transform: uppercase;
          color: #6d4afe;
        }
      }
    }
  }

  @media only screen and (max-width: 1199px) {
    .gamfi_v2_hero_left {
      h2 {
        font-size: 43px;
      }
    }
  }
  @media only screen and (max-width: 991px) {
    .gamfi_v2_hero_left {
      h2 {
        font-size: 40px;
        line-height: 45px;
      }
      p {
        font-size: 17px;
      }
    }

    .gamfi_v2_hero_right {
      .coin_cap_list {
        margin-top: 78px;

        li {
          .counter-number {
            font-size: 17px;
            span {
              font-size: 17px;
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .gamfi_v2_hero_left {
      .rocket_icon {
        margin-right: 0;
      }
    }
  }
  @media only screen and (max-width: 766px) {
    .gamfi_v2_hero_right {
      margin-top: 50px;
      .coin_cap_list {
        margin-top: 30px;
      }
    }
  }
  @media only screen and (max-width: 575px) {
    .gamfi_v2_hero_left {
      h2 {
        font-size: 33px;
      }
    }
  }
  @media only screen and (max-width: 375px) {
    .gamfi_v2_hero_left {
      .rocket_icon {
        margin-left: 0;
      }
    }
  }
  @media only screen and (max-width: 320px) {
    .gamfi_v2_hero_right .coin_cap_list li h5 {
      font-size: 14px;
    }
  }
`;

export default BannerStyleWrapper;
