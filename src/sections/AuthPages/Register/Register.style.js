import styled from "styled-components";
import formShadow from "assets/images/kycimg/BlurShadow.svg";
import formBg from "assets/images/kycimg/signUpBgimage.svg";

const RegisterStyleWrapper = styled.div`
  background: #090a1a;
  position: relative;
  padding: 96px 0px 0px 0px;

  &::before {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 400px;
    background-image: url(${formBg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    content: "";
  }

  .auth_form_content {
    position: relative;
    z-index: 2;
    padding-bottom: 150px;
  }

  .auth_form {
    background: rgba(30, 31, 53, 0.8);
    width: 100%;
    margin: auto;
    padding: 63px 60px 56px 60px;
    position: relative;
    z-index: 2;

    h2 {
      font-size: 36px;
      line-height: 43px !important;
      text-align: center;
      text-transform: uppercase;
      margin-bottom: 23px;
      color: #ffffff;
    }

    h3 {
      font-family: "Inter";
      font-weight: 500;
      font-size: 16px;
      line-height: 28px !important;
      text-align: center;
      color: rgba(255, 255, 255, 0.7);
      text-transform: none;
      max-width: 356px;
      margin: auto;
      margin-bottom: 29px;
    }

    h4 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 28px !important;
      text-align: center;
      color: rgba(255, 255, 255, 0.7);
      margin-top: 31px;
      margin-bottom: 0px;
      a {
        color: #6d4afe;
      }
    }

    label {
      font-family: "Russo One";
      font-size: 16px;
      line-height: 45px !important;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.7);
      margin-bottom: 5px;
      a {
        margin: 0 5px;
        color: #6d4afe;
      }
    }

    input {
      width: 100%;
      margin-bottom: 23px;
      background: transparent;
      outline: none;
      height: 60px;
      border: 2px solid rgba(255, 255, 255, 0.15);
      box-sizing: border-box;
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 45px !important;
      color: rgba(255, 255, 255, 0.5);
      padding: 8px 21px;
    }

    .btn_wrapper {
      width: 100%;
      height: 60px;
    }
  }

  .auth_form_bttom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 30px;

    .forget_pass_btn {
      line-height: 45px !important;
      text-align: right;
      color: rgba(255, 255, 255, 0.7);
    }
  }

  .pass_remember_check {
    position: relative;
    label {
      text-transform: capitalize;
      padding-left: 30px;
      margin-bottom: 0;
      font-family: "Inter";
      font-weight: 500;
      font-size: 16px;
      color: rgba(255, 255, 255, 0.7);
    }

    .checkmark {
      position: absolute;
      top: 50%;
      left: 0;
      height: 18px;
      width: 18px;
      background-color: transparent;
      border-radius: 50%;
      font-size: 10px;
      border: 2px solid rgba(255, 255, 255, 0.2);
      box-sizing: border-box;
      transform: translateY(-50%);
      display: flex;
      align-items: center;
      justify-content: center;
      padding-left: 0;
      cursor: pointer;

      svg {
        transition: all 0.4s;
        display: none;
      }
    }

    input {
      position: absolute;
      opacity: 0;
      left: 0;
      top: 50%;
      cursor: pointer;
      width: 18px;
      height: 18px;
      margin-bottom: 0;
      transform: translateY(-50%);
      cursor: pointer;
    }

    span {
      display: block;
      padding-left: 27px;
      a {
        margin: 0 7px;
        display: inline-block;
      }
    }

    &.active {
      .checkmark {
        background: #6d4afe;
        color: #ffffff;
        border: none;
        svg {
          display: block;
        }
      }
    }
  }

  .autho_from_shadow {
    background: url(${formShadow});
    background-position: center center;
    background-size: cover;
    height: 340px;
    background-repeat: no-repeat;
    width: 100%;
    position: absolute;
    z-index: 0;
    bottom: 5px;
    z-index: 1;
  }

  @media only screen and (max-width: 767px) {
    .auth_form_bttom {
      flex-direction: column;
      align-items: flex-start;
    }
    .pass_remember_check {
      label {
        line-height: 30px !important;
      }
    }

    .auth_form_bttom {
      .forget_pass_btn {
        padding-left: 30px;
      }
    }
  }
  @media only screen and (max-width: 480px) {
    .auth_form {
      padding: 63px 20px 56px 20px;

      h4 {
        font-size: 14px;
      }
    }
  }

  @media only screen and (max-width: 320px) {
    .auth_form {
      h4 {
        a {
          display: block;
        }
      }
    }
  }
`;

export default RegisterStyleWrapper;
