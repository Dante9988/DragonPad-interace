import styled from "styled-components";

const FarmingStyleWrapper = styled.div`
  padding: 220px 0 130px;
  background: #090b1a;

  .form_item_wrapper {
    .farm_header {
      li {
        &::before {
          display: none;
        }
      }
    }

    &:first-child {
      .farm_header {
        li {
          &::before {
            display: block;
          }
        }
      }
    }
  }

  .form_item_wrapper + .form_item_wrapper {
    margin-top: 20px;
  }

  /* react tabs  */
  .react-tabs {
    position: relative;
  }

  .tabs-row {
    row-gap: 30px;
    transition: all 0.4s;
  }

  .react-tabs__tab-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: -150px;
    left: 0;
    width: 100%;
    height: auto;
    background: #222231;
  }

  .tab_btn_wrapper {
    display: flex;
    align-items: center;

    .farm_sorting_switch {
      font-family: "Russo One", sans-serif;
      text-transform: uppercase;
      transition: 0.4s;
      cursor: pointer;
      border-right: 0px;
      margin-left: 20px;

      .title {
        margin-left: 15px;
      }

      label {
        position: relative;
        display: inline-block;
        width: 45px;
        height: 24px;
      }

      input {
        opacity: 0;
        width: 0;
        height: 0;
      }

      input:checked + .slider {
        background-color: #6d4afe;

        &::before {
          transform: translateX(26px);
          left: 0;
        }
      }

      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #434350;
        transition: 0.4s;
        &::before {
          position: absolute;
          content: "";
          height: 14px;
          width: 14px;
          left: 6px;
          bottom: 5px;
          background-color: #ffffff;
          transition: 0.4s;
        }
      }

      .round {
        border-radius: 34px;

        &::before {
          border-radius: 50%;
        }
      }
    }
  }

  .item_sorting_list button,
  .react-tabs__tab button {
    color: rgba(255, 255, 255, 0.7);
    background: transparent;
    font-family: "Russo One", sans-serif;
    position: relative;
    text-transform: uppercase;
    padding: 18px 28px;
    transition: all 0.4s;

    &:hover {
      color: #ffffff;
    }
  }

  .react-tabs__tab {
    border-right: 1px solid rgba(255, 255, 255, 0.08);

    button {
      position: relative;

      &::before {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0;
        height: 2px;
        background: #6d4afe;
        content: "";
        transition: 0.4s ease-in-out;
      }
    }

    &.react-tabs__tab--selected {
      button {
        &::before {
          width: 100%;
        }
      }
    }
  }

  /* sorting dropdown */

  .item_sorting_list {
    display: flex;
    align-items: center;
    button {
      position: relative;
      font-family: "inter", sans-serif;
      position: relative;
      border-left: 1px solid rgba(255, 255, 255, 0.08);
      padding: 18px 45px;
      display: flex;
      align-items: center;
      column-gap: 20px;
      img {
        height: 16px;
        width: 16px;
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
  }

  @media only screen and (max-width: 991px) {
    .react-tabs__tab {
      font-size: 14px;
      button {
        padding: 17px 12px;
      }
    }

    .react-tabs__tab-list {
      top: -135px;
    }

    .item_sorting_list {
      button {
        padding: 17px 30px;
        font-size: 14px;
      }
    }
    .form_item_wrapper {
      .farm_header {
        li {
          &::before {
            display: block;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 767px) {
    .react-tabs__tab-list {
      top: -150px;
      flex-direction: column;
      align-items: flex-start;
    }

    .tab_btn_wrapper {
      width: 100%;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);

      .farm_sorting_switch {
        margin-left: 10px;
        .title {
          font-size: 14px;
        }
      }
    }

    .react-tabs__tab {
      width: 30%;
      border: none;
    }

    .item_sorting_list {
      width: 100%;
      button {
        justify-content: space-between;
        width: 100%;
        border: none;
        padding: 17px 20px;
      }
    }
  }

  @media only screen and (max-width: 414px) {
    padding-top: 300px;
    .react-tabs__tab-list {
      top: -260px;
    }
    .tab_btn_wrapper {
      flex-direction: column;
      align-items: flex-start;
      row-gap: 15px;
      padding-left: 20px;
      padding-bottom: 15px;
      .farm_sorting_switch {
        margin: 0;
      }
    }
    .item_sorting_list {
      button {
        padding: 17px 19px;
        font-size: 13px;
        width: 100%;
      }
    }
  }
`;

export default FarmingStyleWrapper;
