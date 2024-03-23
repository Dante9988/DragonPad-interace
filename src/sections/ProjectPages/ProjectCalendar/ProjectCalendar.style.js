import styled from "styled-components";

const ProjectCalendarStyleWrapper = styled.div`
  padding-top: 70px;
  padding-bottom: 130px;
  background: #090b1a;

  .week_list {
    height: 62px;
    align-items: center;
    padding-left: 20px;
    .week_name {
      font-family: "Russo One";
      font-size: 16px;
      line-height: 19px;
      text-align: left;
      color: #ffffff;
      text-transform: capitalize;
    }
  }

  .month_list {
    gap: 3px;
    .month_date {
      padding: 20px;
      height: 162px;
      vertical-align: super;
      background: rgba(30, 31, 53, 0.8);
      z-index: 1;
      font-family: "Russo One";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      text-align: left;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      color: rgba(255, 255, 255, 0.2);

      &.active_date {
        color: #ffffff;
      }

      .project_thumb {
        display: flex;
        column-gap: 7px;
        align-items: center;

        img {
          height: 35px;
          width: 35px;
          cursor: pointer;
        }
      }
    }
  }

  .project_calendar_header {
    background: #222231;
    margin-bottom: 40px;
    height: 60px;
    display: flex;
    justify-content: space-between;
  }

  .current_date {
    display: inline-block;
    font-family: "Russo One", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-transform: uppercase;
    color: #ffffff;
    margin: 0 25px;
  }
  .calendar_shorting_btn {
    button {
      height: 60px;
      width: 60px;
      background: transparent;
      border: 1px solid #2e2f3c;
      color: #ffffff;
      transition: all 0.3s;

      &:hover {
        background: #2e2f3c;
      }
    }
  }

  .item_sorting_list {
    display: flex;
    align-items: center;

    button {
      position: relative;
      border-left: 1px solid rgba(255, 255, 255, 0.08);
      padding: 18px 45px;
      display: flex;
      align-items: center;
      color: rgba(255, 255, 255, 0.7);
      background: transparent;
      column-gap: 20px;
      transition: all 0.4s;

      img {
        height: 14px;
        width: 14px;
        transition: all 0.3s;
      }

      &:hover {
        .sub-menu {
          display: block;
          top: 59px;
        }
        img {
          transform: rotate(180deg);
        }
      }
    }

    .sub-menu {
      transition: all 0.4s;
      display: none;
      position: absolute;
      top: 45px;
      left: 0;
      z-index: 1111;
      background: #222231;
      width: 100%;
      li {
        display: flex;
        align-items: center;
        font-size: 90%;
        column-gap: 5px;
        padding: 18px 28px;
        transition: all 0.4s;
        &:hover {
          color: #ffffff;
        }

        img {
          width: 20px;
          height: 20px;
        }
      }
      li + li {
        border-top: 1px solid rgba(255, 255, 255, 0.08);
      }
    }
  }

  // modal
  .project-modal {
    position: fixed;
    z-index: 999;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    top: 0;
    backdrop-filter: blur(3px);

    &::before {
      position: fixed;
      height: 100%;
      width: 100%;
      left: 0;
      top: 0;
      background: #000000;
      opacity: 0.8;
      content: "";
    }
  }

  @media only screen and (max-width: 991px) {
    .item_sorting_list {
      button {
        padding: 17px 30px;
        font-size: 14px;
      }
    }
  }

  @media only screen and (max-width: 767px) {
    .project_calendar_header {
      flex-direction: column;
      height: auto;
      padding: 20px 0px;
    }

    .calendar_shorting_btn {
      text-align: center;
      margin-bottom: 20px;
    }

    .item_sorting_list {
      width: 100%;
      button {
        width: 50%;
        border: none;
        justify-content: space-between;
      }

      button + button {
        border-left: 1px solid rgba(255, 255, 255, 0.08);
      }
    }

    .week_list {
      padding-left: 7px;
    }

    .month_list {
      .month_date {
        padding: 7px;
        .project_thumb {
          flex-direction: column;
          row-gap: 5px;
          img {
            width: 30px;
            height: 30px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 480px) {
    .item_sorting_list {
      flex-direction: column;
      button {
        width: 100%;
        border: none;
      }

      button + button {
        border-left: none;
        border-top: 1px solid #2e2f3c;
      }
    }

    .month_list {
      .month_date {
        height: 140px;
      }
    }
  }

  @media only screen and (max-width: 375px) {
    .item_sorting_list {
      button {
        padding: 17px 19px;
        font-size: 13px;
      }
    }
  }
`;

export default ProjectCalendarStyleWrapper;
