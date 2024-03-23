import styled from "styled-components";

const PartnerStyleWrapper = styled.div`
  position: relative;
  background: #0a0b1a;
  padding: 136px 0 105px;

  .section_title {
    margin-bottom: 50px;
  }

  .partner_logo_list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    position: relative;

    .partner_logo {
      width: 18%;
      text-align: center;
      margin-bottom: 65px;
    }
  }

  /* tabs  */
  .react-tabs {
    position: relative;

    .react-tabs__tab-list {
      position: absolute;
      right: 12px;
      top: -115px;
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

  .bg_shape {
    position: absolute;
    &.rocket_shape {
      top: 232px;
      left: 0px;
    }
    &.earth_shape {
      top: -60px;
      right: 225px;
    }
  }

  @media only screen and (max-width: 991px) {
    .partner_logo_list {
      .partner_logo {
        margin-bottom: 40px;
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

    .partner_logo_list {
      .partner_logo {
        margin-bottom: 30px;
      }
    }

    .bg_shape {
      max-width: 170px;
    }
  }
  @media only screen and (max-width: 540px) {
    .partner_logo_list {
      .partner_logo {
        margin-bottom: 10px;
      }
    }

    .bg_shape {
      max-width: 120px;
    }
  }
`;

export default PartnerStyleWrapper;
