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
    line-height: 45px !important;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 18px;
  }

  .upload_doc_list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px !important;
    width: 100%;
    max-width: 570px;
    li {
      text-align: center;
      width: 32%;
    }

    .upload_bg {
      height: 175px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(30, 31, 53, 0.8);
    }

    h4 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 45px !important;
      text-align: center;
      color: rgba(255, 255, 255, 0.7);
      max-width: 175px;
      margin: auto;
      margin-bottom: 0px;
      width: 100%;
      margin-left: 0px;
    }
  }

  .upload-btn-wrapper {
    position: relative;
    overflow: hidden;
    display: inline-block;

    span {
      background: transparent;
      border: 2px dashed rgba(255, 255, 255, 0.15);
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 75px;
      width: 75px;
      cursor: pointer;
    }
    input[type="file"] {
      font-size: 100px;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      height: 100%;
      width: 100%;
    }
  }

  .btn_wrapper {
    width: 100%;
    height: 60px;
  }

  /* doc requirements  */
  .doc_requirements {
    border: 2px solid rgba(255, 255, 255, 0.15);
    box-sizing: border-box;
    width: 100%;
    max-width: 570px;
    padding: 16px 30px !important;
    margin-bottom: 35px !important;

    li {
      color: rgba(255, 255, 255, 0.7);
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;

      span {
        filter: grayscale(100%);
        opacity: 0.7;
        margin-right: 14px;
        min-width: 14px;
      }

      &.active {
        color: #ffffff;
        span {
          filter: grayscale(0%);
          opacity: 1;
        }
      }
    }

    li + li {
      margin-top: 25px;
    }
  }

  .nid_number_from {
    margin-bottom: 40px;
    input {
      width: 100%;
      max-width: 570px;
      border: 2px solid rgba(255, 255, 255, 0.15);
      box-sizing: border-box;
      height: 60px;
      font-family: Inter;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 45px;
      color: rgba(255, 255, 255, 0.7);
      padding: 8px 21px;
      background: transparent;
      outline: none;
    }
  }

  @media (max-width: 991px) {
    .upload_doc_list {
      .upload_bg {
        height: 110px;
      }

      .upload-btn-wrapper span {
        height: 60px;
        width: 60px;
      }
    }

    .upload_doc_list h4 {
      font-size: 10px;
    }
  }
  @media only screen and (max-width: 575px) {
    h3 {
      font-size: 19px;
    }
    p {
      font-size: 14px;
      line-height: 24px !important;
    }

    .kyc_country_dropbox h4 {
      font-size: 14px;
    }
  }
  @media (max-width: 320px) {
    .upload_doc_list h4 {
      font-size: 8px;
    }
  }
`;

export default KycFormStyleWrapper;
