import styled from "styled-components";

const StakeCardStyleWrapper = styled.div`
  padding-right: 15px;
  .project-item {
    background: rgba(30, 31, 53, 0.8);
    padding: 45px 50px;

    .project-info {
      border-bottom: 1px solid #3c3d4f;
      padding-bottom: 20px;
      margin-bottom: 25px;

      h3,
      h4 {
        margin-bottom: 15px;
      }
    }
  }

  .project-listing {
    margin-bottom: 40px;

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .info-text strong,
      .info-value {
        color: #ffffff;
        font-weight: 400;
      }

      .big-text {
        font-size: 30px;
        color: #a3ff12;
        font-family: "Russo One", sans-serif;
      }
    }

    li + li {
      margin-top: 15px;
    }
  }

  .project-form-list {
    h5 {
      margin-bottom: 18px;
    }

    .balance-form-area {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 27px;
      height: 60px;

      label {
        position: absolute;
        right: 50%;
      }

      .btn_wrapper {
        height: 100%;
      }

      input {
        border: 1px solid #313245;
        background: transparent;
        max-width: 265px;
        width: 100%;
        height: 100%;
        position: relative;
        color: rgba(255, 255, 255, 0.7);
        padding: 0 20px;
      }
    }
  }

  @media only screen and (max-width: 1199px) {
    .project-item {
      padding: 35px 25px;
      h3 {
        font-size: 24px;
      }
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    .project-form-list {
      .balance-form-area {
        input {
          max-width: 415px;
          width: 100%;
        }
      }
    }
  }
  @media only screen and (max-width: 991px) {
    padding-right: 0;
  }
  @media only screen and (max-width: 767px) {
    .project-item {
      h3 {
        font-size: 24px;
        margin-bottom: 5px;
      }
    }
  }
  @media only screen and (max-width: 480px) {
    .project-item {
      h3 {
        font-size: 20px;
        margin-bottom: 5px;
      }
      h4 {
        font-size: 18px;
      }
    }
    .project-listing {
      li {
        flex-direction: column;
        align-items: flex-start;
        row-gap: 7px;
      }
    }
    .project-form-list {
      .balance-form-area {
        flex-direction: column;
        height: auto;
        input {
          height: 50px;
          max-width: 100%;
          width: 100%;
        }
        .btn_wrapper {
          height: 50px;
          width: 100%;
          margin-top: 10px;
        }

        label {
          position: absolute;
          right: 20px;
          top: 13px;
        }
      }
    }
  }
`;

export default StakeCardStyleWrapper;
