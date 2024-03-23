import styled from "styled-components";
import breadcumdBg from "assets/images/bg/breadcrumbs-bg.jpg";

const PageHeaderStyleWrapper = styled.div`
  background: url(${breadcumdBg});
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
    .breadcrumb_menu {
      a {
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
`;

export default PageHeaderStyleWrapper;
