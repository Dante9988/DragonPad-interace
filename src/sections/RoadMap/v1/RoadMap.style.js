import styled from "styled-components";

const RoadMapStyleWrapper = styled.section`
  padding-top: 116px;
  padding-bottom: 123px;
  background: rgba(30, 31, 53, 0.8);
  backdrop-filter: blur(5px);
  position: relative;

  .section_title {
    margin-bottom: 50px;
  }

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

  /* tabs  */
  .react-tabs {
    position: relative;

    .react-tabs__tab-list {
      position: absolute;
      right: 12px;
      top: -130px;
      display: flex;
      column-gap: 20px;

      .react-tabs__tab {
        border: none;
        .btn_wrapper {
          width: 140px;
          border: 1px solid rgba(255, 255, 255, 0.15) !important;
        }
        &--selected {
          .btn_wrapper {
            background: rgba(255, 255, 255, 0.1);
            .hover_shape_wrapper {
              left: 50%;
              .btn_hover_shape {
                opacity: 1;
                margin: 0 5px !important;
              }
            }
          }
        }
      }
    }

    .tabs-row {
      row-gap: 30px;
      transition: all 0.4s;
    }
  }

  @media only screen and (max-width: 991px) {
    .react-tabs {
      .react-tabs__tab-list {
        .react-tabs__tab {
          .btn_wrapper {
            width: 100px;
            height: 45px;
            font-size: 13px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 767px) {
    .react-tabs {
      padding-top: 50px;
      .react-tabs__tab-list {
        left: 0;
        top: -35px;
        .react-tabs__tab {
        }
      }
    }
  }

  @media only screen and (max-width: 360px) {
    .react-tabs {
      .react-tabs__tab-list {
        .react-tabs__tab {
          .btn_wrapper {
            width: 80px;
            height: 40px;
            font-size: 10px;
          }
        }
      }
    }
  }
`;

export default RoadMapStyleWrapper;
