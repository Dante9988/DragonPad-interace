import styled, { keyframes } from "styled-components";
import { slideInRight } from "react-animations";

const menuAnimation = keyframes`${slideInRight}`;

const MobileMenuStyleWrapper = styled.div`
  &.gamfi_mobile_menu {
    position: fixed;
    right: 0;
    top: 0;
    z-index: 999;
    width: 100%;
    transition: 0.4s;
    opacity: 1;
    display: block;

    &::before {
      position: absolute;
      right: 0;
      top: 0;
      width: 100%;
      height: 100%;
      backdrop-filter: blur(10px);
      background: rgba(4, 12, 18, 0.9);
      content: "";
      z-index: -1;
    }
  }

  .gamfi_mobile_menu_content {
    background: #ffffff;
    height: 100vh;
    width: 400px;
    padding: 50px;
    margin-left: auto;
    animation: 0.7s ${menuAnimation} ease-in-out;
  }

  .mobile_menu_logo {
    width: 100%;
    position: relative;
  }

  .mobile_menu_close_btn {
    position: absolute;
    right: 0px;
    top: 50%;
    background: none;
    border: none;
    outline: none;
    transform: translateY(-50%);

    svg {
      color: #090b1a;
      font-size: 24px;
    }
  }

  .gamfi_mobile_menu_list {
    margin-top: 50px;
    ul {
      margin: 0;
      padding: 0;

      li {
        display: block;
        position: relative;
        overflow: hidden;

        a {
          position: relative;
          display: block;
          font-family: "Russo One", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 30px;
          padding: 10px 0;
          text-align: left;
          text-transform: uppercase;
          color: #090b1a;
          width: 100%;
          transition: all 0.4s;

          &:hover {
            color: #73bd00;
          }
        }

        /* ------------ menu expand icon----------- */
        &.has_submenu,
        .sub_has_submenu {
          &::before {
            position: absolute;
            right: 20px;
            top: 25px;
            width: 15px;
            height: 2px;
            background: #090b1a;
            content: "";
            transform: translateY(-50%);
          }

          &::after {
            position: absolute;
            right: 26px;
            top: 25px;
            width: 2px;
            height: 15px;
            background: #090b1a;
            content: "";
            transform: rotate(180deg);
            transition: all 0.1s;
            transform: translateY(-50%);
          }
        }

        &.has_submenu {
          &.expand_submenu,
          .expand_submenu_child {
            &::after {
              opacity: 0;
              visibility: hidden;
            }
          }
        }

        /* expand submenu */
        &.expand_submenu {
          .sub_menu_list {
            display: block;
            opacity: 1;
            visibility: visible;
            transform: scaleY(1);
          }
        }

        .expand_submenu_child {
          .sub_menu_child_list {
            display: block;
          }
        }
      }

      /* menu border  */
      li + li {
        a {
          border-top: 1px solid rgba(0, 0, 0, 0.06);
        }
      }
    }
  }

  .sub_menu_list {
    display: none;
    padding: 0 0 0 30px !important;
    margin: 0;
    opacity: 0;
    visibility: hidden;
    transition: transform 0.3s ease-in-out;
    transform: scaleY(0);
    transform-origin: 0 0 0;
  }

  .sub_menu_child_list {
    display: none;
    padding-left: 30px !important;
  }

  @media (max-width: 480px) {
    .gamfi_mobile_menu_content {
      width: 100%;
    }
  }
`;

export default MobileMenuStyleWrapper;
