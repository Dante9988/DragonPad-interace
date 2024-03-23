import styled from "styled-components";
import cardBgShape from "assets/images/bg/card-bg-shape-small.png";

const ProjectCardStyleWrapper = styled.div`
  .tier_system_list {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 26px !important;
    background: rgba(30, 31, 53, 0.8);
    backdrop-filter: blur(5px);
    overflow: hidden;
    z-index: 1;

    &::before {
      position: absolute;
      height: 100%;
      width: 100%;
      left: 0%;
      top: 0;
      background: url(${cardBgShape});
      background-repeat: no-repeat;
      background-position: center;
      content: "";
      opacity: 0;
      visibility: hidden;
      transition: all 0.4s;
      z-index: -1;
    }

    li {
      font-size: 16px;
      line-height: 158%;
      color: #ffffff;
    }

    .tier-thumb {
      width: 140px;
      margin-right: 84px;
      display: flex;
      align-items: center;
      column-gap: 11px;
      strong {
        font-family: "Russo One";
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 158%;
        color: #ffffff;
      }
    }
    .staking-item {
      width: 158px;
      margin-right: 46px;
    }
    .allocation-item {
      width: 175px;
      margin-right: 84px;
    }
    .requirements-item {
      width: 158px;
      margin-right: 79px;
    }
    .kyc-item {
      width: 41px;
      margin-right: 73px;
    }
    .weight-item {
      width: 99px;
    }

    &:hover {
      background: radial-gradient(
        circle,
        rgba(96, 79, 169, 0.58) -7%,
        #1e1f35 30%
      );
      &::before {
        opacity: 0.7;
        visibility: visible;
      }
      .card-hover-wrapper {
        opacity: 1;
        visibility: visible;
      }
    }
  }

  @media only screen and (max-width: 991px) {
    .tier_system_list {
      flex-direction: column;
      align-items: flex-end;
      row-gap: 20px;

      &::before {
        background-size: cover;
      }

      li {
        width: 100% !important;
        margin: 0 !important;
        text-align: right;
        position: relative;

        &.tier-thumb {
          justify-content: end;
          &::before {
            top: auto;
          }
        }

        &::before {
          position: absolute;
          left: 0px;
          top: 0;
          content: attr(aria-label);
          opacity: 0.8;
          font-size: 15px;
        }
      }
    }
  }

  @media only screen and (max-width: 375px) {
    .tier_system_list {
      li {
        font-size: 15px;
        &::before {
          font-size: 14px;
        }
      }
    }
  }
`;

export default ProjectCardStyleWrapper;
