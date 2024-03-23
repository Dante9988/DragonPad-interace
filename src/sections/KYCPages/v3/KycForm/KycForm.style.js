import styled from "styled-components";

const KycFormStyleWrapper = styled.div`
  h3 {
    font-size: 22px;
    line-height: 45px !important;
    margin-bottom: 20px;
    text-transform: uppercase;
    color: #ffffff;
  }

  p {
    line-height: 45px;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 18px;
  }
  a {
    color: #ffffff;
  }

  .btn_wrapper {
    width: 100%;
    height: 60px;
  }

  .kyc_user_form {
    input {
      height: 60px;
      width: 100%;
      padding: 8px 21px;
      border: 2px solid rgba(255, 255, 255, 0.15);
      box-sizing: border-box;
      background: Transparent;
      font-family: Inter;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 45px;
      color: rgba(255, 255, 255, 0.5);
      margin-bottom: 23px;
      border-radius: 0;

      &:focus {
        outline: 0 !important;
        box-shadow: none;
      }
    }

    label {
      font-family: "Russo One";
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 45px;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.7);
    }
  }
  .kyc_trems_condition {
    position: relative;
    margin-bottom: 28px;
    margin-top: 7px;

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

  @media (max-width: 991px) {
  }
  @media only screen and (max-width: 575px) {
    h3 {
      font-size: 19px;
    }
    p {
      font-size: 14px;
      line-height: 24px;
    }
  }
  @media (max-width: 320px) {
  }
`;

export default KycFormStyleWrapper;
