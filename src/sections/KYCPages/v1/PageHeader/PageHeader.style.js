import styled from "styled-components";
import bgShape from "assets/images/bg/breadcrumbs-bg.jpg";
const PageHeaderStyleWrapper = styled.div`
  background: url(${bgShape});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 80px 0 70px;

  .breadcrumb_area {
    font-family: "Russo One", sans-serif;

    .breadcrumb_menu {
      text-transform: uppercase;
      display: flex;
      align-items: center;
      font-size: 16px;
      color: #a3ff12;
      a {
        color: rgba(255, 255, 255, 0.7);
        text-decoration: none;
        &:hover {
          color: #ffffff;
        }
      }
      span {
        color: rgba(255, 255, 255, 0.7);
        margin: 0 10px;
      }
      img {
        margin-left: 15px;
      }
    }

    .breadcrumb_title {
      font-size: 36px;
      color: #ffffff;
      margin: 15px 0 0;
    }
  }

  .stake_counter {
    display: flex;
    justify-content: flex-end;

    h6 {
      font-weight: 400;
      font-size: 16px;
      color: rgba(255, 255, 255, 0.7);
      margin: 0;
      span {
        margin-top: 24px;
        display: block;
        font-family: "Russo One";
        font-weight: 400;
        font-size: 30px;
        color: #ffffff;
      }
    }
  }

  .page_header_progressbar {
    display: flex;
    align-items: center;
    position: relative;
    column-gap: 20px;
    span {
      font-family: "Russo One";
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      text-transform: uppercase;
      margin-bottom: 0px;
      color: #ffffff;
    }
    .progressbar_wrapper {
      width: 72%;
    }
  }

  @media only screen and (max-width: 991px) {
    .breadcrumb_title {
      font-size: 30px;
    }

    .stake_counter {
      margin-top: 35px;
      justify-content: flex-start;
      h6 {
        span {
          font-size: 22px;
        }
      }
    }

    .page_header_progressbar {
      flex-direction: column;
      align-items: flex-start;
      margin-top: 30px;
      row-gap: 14px;
    }
  }

  @media only screen and (max-width: 768px) {
    .breadcrumb_title {
      font-size: 26px;
    }
  }
  @media only screen and (max-width: 540px) {
    .breadcrumb_menu {
      a {
        font-size: 14px;
      }
    }
    .breadcrumb_title {
      font-size: 22px;
    }

    .stake_counter {
      margin-top: 30px;
      h6 {
        span {
          font-size: 18px;
        }
      }
    }
  }
  @media only screen and (max-width: 480px) {
    .page_header_progressbar {
      .progressbar_wrapper {
        width: 90%;
      }
    }
  }
`;

export default PageHeaderStyleWrapper;
