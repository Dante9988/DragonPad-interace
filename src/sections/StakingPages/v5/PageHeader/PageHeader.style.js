import styled from "styled-components";

const PageHeaderStyleWrapper = styled.div`
  background: #090a1a;
  padding: 80px 0 50px;

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

  .stake_counter {
    display: flex;
    justify-content: space-between;

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

  @media only screen and (max-width: 991px) {
    .breadcrumb_title {
      font-size: 30px;
    }

    .stake_counter {
      margin-top: 35px;
      h6 {
        span {
          font-size: 22px;
        }
      }
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
`;

export default PageHeaderStyleWrapper;
