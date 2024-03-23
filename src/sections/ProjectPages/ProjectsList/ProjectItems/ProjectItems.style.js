import styled from "styled-components";

const ProjectCardStyleWrapper = styled.div`
  background: #090b1a;
  padding: 170px 0 90px;

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

    .react-tabs__tab {
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

      &.react-tabs__tab--selected {
        &::before {
          width: 100%;
        }
      }
    }
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
    top: -145px;
    left: 0;
    width: 100%;
    height: auto;
    background: #222231;
    margin-bottom: 42px;
  }

  .tab_btn_wrapper {
    display: flex;
    align-items: center;
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
    }
  }

  .item_sorting_list {
    display: flex;
    align-items: center;
    button {
      position: relative;
      font-family: "inter", sans-serif;
      text-transform: capitalize;
      position: relative;
      border-left: 1px solid rgba(255, 255, 255, 0.08);
      padding: 18px 40px;
      display: flex;
      align-items: center;
      column-gap: 20px;
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
    .react-tabs__tab {
      font-size: 14px;
      button {
        padding: 17px 12px;
      }
    }

    .item_sorting_list {
      button {
        padding: 17px 30px;
        font-size: 14px;
      }
    }
  }
  @media only screen and (max-width: 767px) {
    padding-top: 200px;
    .section_title {
      margin-bottom: 35px;
    }

    .react-tabs__tab-list {
      flex-direction: column;
      align-items: flex-start;
      top: -390px;
    }

    .tab_btn_wrapper {
      width: 100%;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .react-tabs__tab {
      width: 33.33%;
      border: none;
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

export default ProjectCardStyleWrapper;
