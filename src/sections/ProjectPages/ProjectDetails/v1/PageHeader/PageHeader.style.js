import styled from "styled-components";
import breadcumdBg from "assets/images/bg/breadcrumbs-bg2.jpg";

const PageHeaderStyleWrapper = styled.div`
  background: url(${breadcumdBg});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 130px 0 115px;

  .breadcrumb_area {
    position: relative;
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
      p {
        margin: 0;
      }
      img {
        margin-left: 15px;
      }
    }

    .breadcrumb_title {
      color: white;
      margin: 15px 0 0;
    }

    .share_icon {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      text-transform: uppercase;
      display: flex;
      align-items: center;
      column-gap: 5px;
      cursor: pointer;
    }
  }

  .breadcrumb_form {
    display: flex;
    align-items: center;
    justify-content: end;
    column-gap: 30px;

    form {
      position: relative;

      input,
      button {
        background: transparent;
      }

      input {
        width: 380px;
        padding: 11px 50px 11px 20px;
        color: rgba(255, 255, 255, 0.7);
        border: 1px solid rgba(255, 255, 255, 0.3);

        &:focus {
          outline: none;
        }
      }

      button {
        height: 100%;
        width: 50px;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 50%;
        right: 0;
        font-size: 20px;
        color: rgba(255, 255, 255, 0.7);
        transform: translate(0, -50%);
        border: none;
      }
    }
  }

  @media only screen and (max-width: 991px) {
    .breadcrumb_title {
      font-size: 30px;
    }
  }

  @media only screen and (max-width: 768px) {
    .breadcrumb_title {
      font-size: 26px;
    }
    .breadcrumb_form {
      justify-content: start;
      margin-top: 40px;
      form {
        width: 70%;
        input {
          width: 100%;
        }
      }
    }
  }
  @media only screen and (max-width: 540px) {
    padding-top: 120px;
    .breadcrumb_area {
      .share_icon {
        transform: none;
        right: auto;
        left: 0;
        top: 30px;
        font-size: 14px;
      }
    }
    .breadcrumb_menu {
      a,
      p {
        font-size: 14px;
      }
    }
    .breadcrumb_title {
      font-size: 22px;
    }
    .breadcrumb_form {
      justify-content: start;
      flex-direction: column;
      align-items: flex-start;
      row-gap: 20px;
      margin-top: 30px;
      form {
        width: 80%;
        input {
          width: 100%;
        }
      }
    }
  }

  @media only screen and (max-width: 375px) {
    .breadcrumb_area {
      .breadcrumb_menu {
        a,
        p {
          font-size: 11px;
        }
        span {
          margin: 0 5px;
        }
        img {
          margin-left: 5px;
          max-width: 40px;
        }
      }
      .share_icon {
        font-size: 12px;
      }
    }
  }
`;

export default PageHeaderStyleWrapper;
