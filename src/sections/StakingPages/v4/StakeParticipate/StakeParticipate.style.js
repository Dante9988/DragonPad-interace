import styled from "styled-components";

const StakeParticipateStyleWrapper = styled.div`
  .project-item {
    background: rgba(30, 31, 53, 0.8);
    margin-bottom: 30px;
    padding: 45px 50px;
  }

  .date-listing {
    display: flex;
    align-items: center;
    column-gap: 7px;
    margin-bottom: 35px !important;
    li {
      display: inline-block;
      position: relative;
      overflow: hidden;
      cursor: pointer;
      background: transparent;

      button {
        cursor: pointer;
        border: 2px solid;
        transition: 0.4s;
        color: #ffffff;
        padding: 12px 20px;
        border-color: #303244;
        font-family: "Russo One", sans-serif;
        text-transform: uppercase;
        border: 1px solid #303244;
        outline: none;
        background: transparent;
      }

      &:hover {
        button {
          background: #303244;
          color: #a3ff12;
        }
      }

      &.active {
        button {
          background: #303244;
          color: #a3ff12;
        }
      }
    }
  }

  .project-info {
    h4 {
      font-size: 22px;
      margin-bottom: 56px;
    }
  }

  /* timer  */
  .project_timer {
    .countdown_wrapper {
      max-width: 379px;
      margin: 18px auto 67px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-family: "Russo One", sans-serif;
      font-size: 30px;
      color: #ffffff;
      column-gap: 15px;
    }

    span {
      font-size: 16px;
      margin-left: 2px;
    }
  }
  //

  .project-form-list {
    h4 {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px !important;
      color: rgba(255, 255, 255, 0.7);
      margin-bottom: 12px;
    }
  }

  .balance-form-area {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    input {
      border: 1px solid #313245;
      background: transparent;
      padding: 16px 20px;
      color: rgba(255, 255, 255, 0.7);
    }
    .max {
      position: absolute;
      color: #fff;
      color: #fff;
      left: 45%;
      top: auto;
    }
  }

  .btn_wrapper {
    height: 60px;
  }

  .balance {
    margin-top: 47px;
    margin-bottom: 10px;
    font-size: 16px;
    span {
      color: #ffffff;
    }
    a {
      text-transform: uppercase;
      color: #6d4afe;
      margin-left: 15px;
    }
  }

  @media only screen and (max-width: 1199px) {
    .project-item {
      h4 {
        font-size: 20px;
      }
    }
  }
  @media only screen and (max-width: 991px) {
    .project-item {
      padding: 35px 20px;
    }

    .balance-form-area {
      .max {
        left: 50%;
      }
      input {
        width: 60%;
      }
      .btn_wrapper {
        width: 30%;
      }
    }
  }
  @media only screen and (max-width: 767px) {
    .balance-form-area {
      flex-direction: column;
      row-gap: 12px;
      align-items: flex-start;
      .max {
        left: auto;
        right: 20px;
        top: 18px;
      }
      input,
      .btn_wrapper {
        width: 100%;
      }
    }
  }
  @media only screen and (max-width: 480px) {
    .date-listing li {
      width: 24%;
      button {
        font-size: 10px;
        width: 100%;
        height: 100%;
        padding: 12px 0px;
      }
    }
  }
  @media only screen and (max-width: 360px) {
    .balance {
      font-size: 14px;
    }
  }
`;

export default StakeParticipateStyleWrapper;
