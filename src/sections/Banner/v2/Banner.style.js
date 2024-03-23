import styled, { keyframes } from "styled-components";
import bannerBG from "assets/images/bg/bgV2.png";

const rocketAnimation = keyframes`
        0%,
        100% {
            bottom: 0;
        }

        50% {
            bottom: 30px;
        } 
`;

const rocketParticleAnimation = (start, end) => {
  return keyframes`

        from {top: ${start}; opacity: 1}
        to {top: ${end}; opacity: 0}
    `;
};

const BannerStyleWrapper = styled.section`
  min-height: 800px;
  background: url(${bannerBG});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 80px;

  .gamfi_v2_hero_left {
    margin-top: 136px;

    h2 {
      font-size: 50px;
      color: #ffffff;
      line-height: 70px;
      text-transform: uppercase;
      margin-bottom: 0px;
      span {
        color: #f82552;
      }
    }

    p {
      color: #ffffff;
      font-weight: 600;
      font-size: 18px;
      line-height: 30px;
      margin-top: 22px;
      font-family: "Inter";
      margin-bottom: 26px;
    }
  }

  .banner-btns {
    display: flex;
    align-items: center;
    column-gap: 30px;
    margin-bottom: 106px;
  }

  .buy_token {
    h6 {
      font-size: 16px;
      line-height: 19px;
      text-transform: uppercase;
      margin-bottom: 26px;
      color: #ffffff;
    }

    .token-list {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: flex-start;
      column-gap: 32px;
    }
  }
  .gamfi_v2_hero_right {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: column;
    max-width: 450px;
    margin-left: auto;
    height: 100%;
    width: 100%;

    .gamfi_v2_hero_thumb {
      position: relative;
      margin-top: 70px;

      .rocket_thumb {
        position: relative;
        z-index: 1;
        animation: ${rocketAnimation} 5s infinite;
      }

      .rocket_particle {
        position: absolute;

        &.particle_1 {
          top: 15%;
          left: 40%;
          z-index: 2;
          animation: ${rocketParticleAnimation("0", "25%")} 0.95s infinite;
        }
        &.particle_2 {
          top: 50%;
          left: 25%;
          z-index: 2;
          animation: ${rocketParticleAnimation("25%", "50%")} 0.95s infinite;
        }
        &.particle_3 {
          top: 62%;
          right: 29%;
          z-index: 2;
          animation: ${rocketParticleAnimation("40%", "60%")} 1s infinite;
        }
        &.particle_4 {
          top: 60%;
          left: 35%;
          z-index: 0;
          animation: ${rocketParticleAnimation("50%", "80%")} 1.05s infinite;
        }
        &.particle_5 {
          top: 40%;
          right: 33.5%;
          z-index: 0;
          animation: ${rocketParticleAnimation("50%", "90%")} 1.05s infinite;
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
      p {
        font-size: 17px;
      }
    }
  }

  @media (max-width: 768px) {
    padding-bottom: 80px;

    .buy_token {
      .token-list {
        flex-wrap: wrap;
        row-gap: 20px;

        a {
          width: 40%;
        }
      }
    }
  }

  @media only screen and (max-width: 575px) {
    .gamfi_v2_hero_left {
      h2 {
        font-size: 33px;
        line-height: 60px;
      }
    }
  }
  @media only screen and (max-width: 375px) {
    .gamfi_v2_hero_left {
      h2 {
        font-size: 27px;
      }
    }
  }
`;

export default BannerStyleWrapper;
