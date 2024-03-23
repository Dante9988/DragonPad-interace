import styled, { keyframes } from "styled-components";
import aboutBg from "assets/images/bg/project-bg.png";

const stoneFly = keyframes`
  0%,
    100% {
        left: 5%;
    }
    
    25%{
        top: -300px;
    }

    50% {
        left: 15%;
    }
`;
const stoneFly2 = keyframes`
  0%,
    100% {
        bottom: -310px;
    }
    
    50% {
        bottom: -400px;
    } 
`;
const stoneFly3 = keyframes`
  0%,
    100% {
        top: -110px;;
    }
    
    50% {
        top: -205px;
    } 
`;

const FeaturesStyleWrapper = styled.section`
  background: #090a1a;
  padding: 90px 0 100px 0; 
  position: relative;
  z-index: 1;

  &::before {
    position: absolute;
    top: -650px;
    height: 1200px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: url(${aboutBg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    content: "";
    z-index: -1;
  }
  .key_points_conttent {
    z-index: 1;
    margin-top: 50px;
  }
  .key_points_item {
    &_img {
      img {
        min-height: 50px;
      }
      margin-bottom: 26px;
    }

    &_text {
      h4 {
        font-size: 22px;
        line-height: 27px;
        margin-bottom: 21px;
        color: #ffffff;
        text-transform: capitalize;
      }
      p {
        max-width: 90%;
      }
    }
  }

  .bg_stones {
    position: absolute;
    left: 0;
    top: 0;
    height: auto;
    width: 100%;
    .bg_stone {
      position: absolute;
      z-index: -1;
      &-1 {
        left: 75px;
        top: -360px;
        animation: ${stoneFly} 7s infinite;
      }
      &-2 {
        left: 78px;
        bottom: -310px;
        animation: ${stoneFly2} 7s infinite;
      }
      &-3 {
        right: 63px;
        top: -170px;
        animation: ${stoneFly3} 7s infinite;
      }
    }
  }

  @media only screen and (max-width: 991px) {
    .items-row {
      row-gap: 15px;
    }
  }
  @media only screen and (max-width: 767px) {
    padding: 100px 0;
    .key_points_item {
      &_text {
        h4 {
          font-size: 20px;
        }
        p {
          font-size: 15px;
        }
      }
    }
  }
`;

export default FeaturesStyleWrapper;
