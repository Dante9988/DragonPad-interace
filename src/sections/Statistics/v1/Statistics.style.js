import styled from "styled-components";

const StatisticsStyleWrapper = styled.section`
  position: relative;
  padding: 115px 0 145px;

  .section_shape {
    position: absolute;
    height: auto;
    width: auto;

    &_top {
      left: 0;
      top: 0;
    }
    &_bottom {
      right: 0;
      bottom: 0;
      transform: rotate(180deg);
    }
  }

  .v1_tokenomics_content_list_sect {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    row-gap: 16px;
    margin-top: 50px;
  }

  .v1_tokenomics_content_list {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    row-gap: 16px;
    column-gap: 16px;

    &_1 {
      width: 7.5%;
    }
    &_2 {
      width: 9.5%;
    }
    &_3 {
      width: 10%;
    }
    &_4 {
      width: 12%;
    }
    &_5 {
      width: 16%;
    }
    &_6 {
      width: 18%;
    }
    &_7 {
      width: 27%;
    }
  }

  .v1_tokenomics_content_list_text {
    h4 {
      display: flex;
      flex-direction: column;
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 28px;
      color: rgba(255, 255, 255, 0.7);
      margin-bottom: 0px;

      span {
        font-family: "Russo One";
        font-weight: 400;
        line-height: 28px;
        text-transform: uppercase;
        color: #ffffff;
      }
    }
  }

  .v1_tokenomics_content_list_progress {
    width: 100%;
    height: 60px;
    &_1 {
      background: rgba(109, 74, 254, 0.2);
    }
    &_2 {
      background: rgba(109, 74, 254, 0.3);
    }
    &_3 {
      background: rgba(109, 74, 254, 0.4);
    }
    &_4 {
      background: rgba(109, 74, 254, 0.5);
    }
    &_5 {
      background: rgba(109, 74, 254, 0.6);
    }
    &_6 {
      background: rgba(109, 74, 254, 0.7);
    }
    &_7 {
      background: rgba(109, 74, 254, 0.9);
    }
  }

  .tokenomics-counter-wrapper {
    margin-top: 73px;
  }

  @media only screen and (max-width: 991px) {
    padding: 75px 0;
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    .v1_tokenomics_content_list_text {
      h4 {
        font-size: 13px;

        span {
          font-size: 13px;
          line-height: 20px;
        }
      }
    }

    .v1_tokenomics_content_list_progress {
      height: 40px;
    }
  }

  @media only screen and (max-width: 767px) {
    .v1_tokenomics_content_list_sect {
      flex-direction: column;
    }
    .v1_tokenomics_content_list {
      width: 100%;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
    }

    .v1_tokenomics_content_list_text {
      min-width: 91px;
      h4 {
        font-size: 14px;
        line-height: 18px;

        span {
          font-size: 14px;
          line-height: 18px;
        }
      }
    }

    .v1_tokenomics_content_list_progress {
      height: 40px;

      &_1 {
        width: 100px;
      }
      &_2 {
        width: 120px;
      }
      &_3 {
        width: 130px;
      }
      &_4 {
        width: 160px;
      }
      &_5 {
        width: 190px;
      }
      &_6 {
        width: 200px;
      }
      &_7 {
        width: 270px;
      }
    }
  }
`;

export default StatisticsStyleWrapper;
