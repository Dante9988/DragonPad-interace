import styled from "styled-components";
const ExploreProjectsStyleWrapper = styled.div`
  background: #090a1a;
  padding-top: 115px;
  padding-bottom: 105px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

  .react-tabs {
    position: relative;

    .react-tabs__tab-list {
      position: absolute;
      right: 12px;
      top: -135px;
      display: flex;
      column-gap: 20px;

      .react-tabs__tab {
        border: none;
        .btn_wrapper {
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
  }

  .tabs-row {
    row-gap: 30px;
    transition: all 0.4s;
  }

  @media only screen and (max-width: 991px) {
    padding: 75px 0;
    .react-tabs__tab {
      .btn_wrapper {
        width: 100px;
        height: 45px;
        font-size: 13px;
      }
    }
  }
  @media only screen and (max-width: 767px) {
    .react-tabs {
      padding-top: 50px;
      .react-tabs__tab-list {
        left: 13px;
        top: -35px;
      }
    }
  }

  @media only screen and (max-width: 360px) {
    .react-tabs__tab {
      .btn_wrapper {
        width: 80px;
        height: 40px;
        font-size: 10px;
      }
    }
  }
`;

export default ExploreProjectsStyleWrapper;
