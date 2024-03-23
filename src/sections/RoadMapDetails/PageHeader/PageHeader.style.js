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
      color: #ffffff;
      font-size: 36px;
      margin: 15px 0 0;
    }
  }

  .project_timeline {
    text-align: right;
    font-size: 28px;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 0;
  }

  @media only screen and (max-width: 991px) {
    .breadcrumb_area {
      .breadcrumb_title {
        font-size: 30px;
      }
    }

    .project_timeline {
      margin-top: 40px;
      text-align: left;
    }
  }

  @media only screen and (max-width: 768px) {
    .breadcrumb_area {
      .breadcrumb_title {
        font-size: 26px;
      }
    }
  }
  @media only screen and (max-width: 540px) {
    .breadcrumb_menu {
      a {
        font-size: 14px;
      }
    }
    .breadcrumb_area {
      .breadcrumb_title {
        font-size: 22px;
      }
    }

    .project_timeline {
      font-size: 24px;
    }
  }

  @media only screen and (max-width: 540px) {
    .breadcrumb_area {
      .breadcrumb_menu {
        font-size: 14px;
      }
    }
  }
`;

export default PageHeaderStyleWrapper;
