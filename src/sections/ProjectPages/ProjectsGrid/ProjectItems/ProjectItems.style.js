import styled from "styled-components";

const ProjectItemsStyleWrapper = styled.div`
  background: #090a1a;
  padding-top: 170px;
  padding-bottom: 105px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

  /* card  */
  .project_item_wrapper {
    .project-info {
      flex-direction: column;
      row-gap: 25px;
    }
  }

  /* tabs  */
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
    top: -105px;
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
    .react-tabs__tab-list {
      flex-direction: column;
      align-items: flex-start;
      top: -170px;
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

export default ProjectItemsStyleWrapper;
