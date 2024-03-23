import styled from "styled-components";
import timerShape from "assets/images/bg/shape-bg.png";

const ProjectCardStyleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  row-gap: 30px;
  column-gap: 30px;
  position: relative;
  padding: 30px;
  background: rgba(255, 255, 255, 0.05);
  z-index: 1;

  .project_content_left {
    position: relative;
    width: 50%;

    .project_thumb {
      height: 100%;
      width: 100%;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
  }
  .project_content_right {
    width: 50%;
  }

  /* timer  */
  .project_timer {
    position: absolute;
    left: 20px;
    top: 20px;
    height: 40px;
    width: 245px;
    display: flex;
    align-items: center;

    &::before {
      position: absolute;
      left: -30px;
      top: 0;
      background: url(${timerShape});
      content: "";
      width: 100%;
      height: 100%;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }

    // countdown timer
    .countdown_wrapper {
      display: flex;
      align-items: center;
      font-family: "Russo One", sans-serif;
      color: #ffffff;
      column-gap: 15px;
      font-size: 16px;

      span {
        margin-left: 2px;
      }
    }
  }
  //

  .project_thumb_small {
    position: absolute;
    z-index: 2;
    right: 20px;
    top: 20px;
  }

  .project_headings {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    margin-bottom: 33px;
    a {
      display: inline-block;
      font-family: "Russo One";
      font-size: 30px;
      line-height: 36px;
      color: #ffffff;
      text-transform: capitalize;
      margin-bottom: 21px;
    }

    p {
      color: rgba(255, 255, 255, 0.7);
      text-transform: uppercase;
      line-height: 19px;
      margin-bottom: 0;
    }

    .coin_icon {
      position: absolute;
      top: auto;
      right: 0;
    }
  }

  .project_fund {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
      font-weight: 400;
      font-size: 16px;
      line-height: 30px;
      text-transform: uppercase;
      margin-bottom: 0px;
      color: rgba(255, 255, 255, 0.7);
      span {
        color: #ffffff;
      }
    }
  }

  .progressbar_wrapper {
    margin: 11px 0 20px;
  }

  .project_sell_stat {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      position: relative;
      font-size: 14px;
      line-height: 30px;
      color: rgba(255, 255, 255, 0.7);
      margin-bottom: 0px;
      &::before {
        content: "";
        height: 15px;
        width: 2px;
        background: rgba(255, 255, 255, 0.2);
        position: absolute;
        top: -11px;
        left: 0px;
      }
    }
  }

  .project_feature_list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 481px;
    width: 100%;
    margin-top: 25px !important;

    li {
      p {
        font-family: "Russo One";
        font-weight: 400;
        font-size: 16px;
        line-height: 30px;
        color: #ffffff;
        margin-bottom: 0px;
      }
    }
  }

  .project_social_links {
    display: flex;
    align-items: center;
    column-gap: 20px;
    margin-top: 48px;

    a {
      &:hover {
        opacity: 0.7;
      }
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    .project_headings {
      a {
        font-size: 22px;
      }
    }

    .project_fund {
      h3 {
        font-size: 12px;
      }
      span {
        font-size: 12px;
      }
    }

    .project_feature_list {
      li {
        span,
        p {
          font-size: 12px;
        }
      }
    }

    .project_social_links {
      margin-top: 35px;
      a {
        img {
          width: 80%;
        }
      }
    }
  }

  @media (max-width: 767px) {
    flex-direction: column;
    .project_content_left,
    .project_content_right {
      width: 100%;
    }
  }

  @media only screen and (max-width: 480px) {
    .project_headings {
      a {
        font-size: 20px;
        margin-bottom: 10px;
      }

      .coin_icon {
        img {
          width: 70%;
        }
      }
    }

    .project_fund {
      h3 {
        font-size: 13px;
      }

      span {
        font-size: 13px;
      }
    }

    .project_feature_list {
      li {
        p,
        span {
          font-size: 12px;
        }
      }
    }

    .project_social_links {
      margin-top: 40px;
    }

    .project_timer {
      height: 35px;
      width: 200px;
      &::before {
        left: -22px;
      }
    }

    .project_thumb_small {
      text-align: right;
      img {
        width: 50%;
      }
    }
  }

  @media only screen and (max-width: 320px) {
    .project_feature_list {
      li {
        p,
        span {
          font-size: 10px;
        }
      }
    }
  }
`;

export default ProjectCardStyleWrapper;
