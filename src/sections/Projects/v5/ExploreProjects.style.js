import styled from "styled-components";

const ExploreProjectsStyleWrapper = styled.div`
  background: #090b1a;
  padding: 136px 0 90px;

  .section_title {
    margin-bottom: 50px;
  }
  .menu-list {
    font-family: "Russo One", sans-serif;
    padding-left: 40px !important;
    margin-bottom: 15px !important;

    li {
      display: inline-block;
      color: rgba(255, 255, 255, 0.7);
      text-transform: uppercase;
      transition: 0.4s;

      &:nth-child(1) {
        width: 35%;
      }
      &:nth-child(2) {
        width: 10.5%;
      }
      &:nth-child(3) {
        width: 17.8%;
      }
      &:nth-child(4) {
        width: 17.4%;
      }
    }
  }
  /* tabs  */
  .react-tabs {
    position: relative;

    .react-tabs__tab-list {
      position: absolute;
      right: 12px;
      top: -153px;
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
    padding-bottom: 110px;
    .menu-list {
      li {
        font-size: 14px;
        &:nth-child(1) {
          width: 33%;
        }
      }
    }

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
    padding: 90px 0;
    .section_title {
      margin-bottom: 35px;
    }
    .menu-list {
      padding-left: 10px !important;
      margin-bottom: 60px !important;
      li {
        width: 100% !important;
      }
      li + li {
        margin-top: 15px;
      }
    }

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

export default ExploreProjectsStyleWrapper;
