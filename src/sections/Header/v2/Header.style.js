import styled from "styled-components";
import headerBg1 from "assets/images/bg/header-shape1.png";
import headerBg2 from "assets/images/bg/header-shape2.png";

const NavWrapper = styled.nav`
  z-index: 999;
  position: relative;
  background: #090a1a;
 
  &::before,
  &::after {
    position: absolute;
    left: 0;
    top: 0;
    width: 300px;
    height: 100%;
    background: url(${headerBg1}) center no-repeat;
    background-size: cover;
    content: "";
    opacity: 0.7;
  }
  &::after {
    left: auto;
    right: 0;
    background: url(${headerBg2}) center no-repeat;
    background-size: cover;
  }

  &.gamfi_header {
    display: flex;
  align-items: center;
    width: 100%; 
    height: 105px;
    transition: all 0.3s;
    z-index: 12;

    &.sticky {
      position: fixed;
      top: 0;
      width: 100%;
      background: rgba(27, 34, 38, 0.8);
      backdrop-filter: blur(15px);
      z-index: 1000;
      margin-top: 0px;
      transition: all 0.2s;
    }
  }

  .gamfi_menu_sect {
    height: 90px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .gamfi_menu_left_sect {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 15%;

    .logo {
      a {
        display: inline-block;
      }
    }
  }

  .gamfi_menu_right_sect {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .gamfi_menu_list {
    ul {
      margin-left: 0;
      display: flex;
      align-items: center;
      column-gap: 40px;

      li {
        position: relative;
        cursor: pointer;
        display: inline-block;

        a {
          font-family: "Russo One", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 22px;
          text-align: center;
          color: #ffffff;
          position: relative;
          display: flex;
          align-items: center;
          column-gap: 4px;

          svg {
            font-size: 18px;
          }
        }

        &:hover {
          a {
            color: #a3ff12;
          }
        }

        /* submenu  */
        .sub_menu_list {
          margin: 0;
          display: block;
          width: 240px;
          position: absolute;
          left: 0;
          top: calc(100% + 40px);
          opacity: 0;
          visibility: hidden;
          transition: 0.3s;
          transform: scaleY(0);
          transform-origin: 0 0 0;
          transition: all 0.3s ease-in-out;
          z-index: -9999;

          li {
            display: block;
            position: relative;

            a {
              position: relative;
              display: block;
              background: #222231;
              font-size: 16px;
              font-family: "Russo One", sans-serif;
              color: hsla(0, 0%, 100%, 0.7);
              padding: 15px 24px;
              transition: 0.4s;
              text-align: left;

              svg {
                position: absolute;
                right: 10px;
                top: 50%;
                transform: translateY(-50%);
                font-size: 18px;
              }

              &:hover {
                color: #a3ff12;
              }
            }

            /* sub child list  */
            .sub_menu_child_list {
              margin: 0;
              display: block;
              width: 240px;
              position: absolute;
              left: 100%;
              top: 0;
              opacity: 0;
              visibility: hidden;
              transition: 0.3s;
              transform: scaleY(0);
              transform-origin: 0 0 0;
              transition: all 0.3s ease-in-out;
              z-index: -9999;
            }

            &:hover {
              .sub_menu_child_list {
                opacity: 1;
                visibility: visible;
                transform: scale(1);
                z-index: 1;
              }
            }
          }

          li + li {
            border-top: 1px solid #343441;
          }
        }

        &:hover {
          .sub_menu_list {
            opacity: 1;
            visibility: visible;
            transform: scaleY(1);
            z-index: 1;
          }
        }
      }
    }
  }

  .gamfi_menu_btns {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    align-items: center;
    min-width: 284px;
    column-gap: 24px;
    z-index: 13;
    button {
      color: #ffffff;
      text-transform: uppercase;
      font-family: "Russo One", sans-serif;
      font-weight: 400;
      font-size: 16px;
    }

    .menu_btn {
      display: none;
      border: none;
      background: transparent;
      cursor: pointer;
      svg {
        font-size: 40px;
      }
    }

    /* dropdown btn  */
    .wallet_btn {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      column-gap: 17px;
      font-family: "Russo One", sans-serif;
      font-size: 16px;
      text-transform: uppercase;
      transition: all 0.4s ease-in-out;
      box-sizing: border-box;
      width: 120px;
      height: 40px;
      border: 2px solid #393941;
      background: transparent;
      z-index: 1;
      color: #ffffff;
      width: 170px;
      height: 50px;
      cursor: pointer;

      svg {
        font-size: 20px !important;
      }

      .wallet_token_list {
        position: absolute;
        left: -2px;
        top: calc(100% + 2px);
        background: #222231;
        width: 240px;
        opacity: 0;
        visibility: hidden;
        transform: scaleY();
        z-index: -999;

        a {
          display: flex;
          align-items: center;
          padding: 20px;
          column-gap: 8px;
        }

        a + a {
          border-top: 1px solid #393941;
        }
      }

      &:hover {
        color: #a3ff12;
        .wallet_token_list {
          opacity: 1;
          visibility: visible;
          transform: scaleY(1);
          z-index: 1;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    .gamfi_menu_list {
      margin-right: 20px;

      ul {
        column-gap: 20px;
        .sub_menu_list,
        .sub_menu_child_list {
          width: 210px !important;
        }
      }
    }
  }
  @media (max-width: 991px) {
    .gamfi_menu_right_sect {
      justify-content: end;
    }
    .gamfi_menu_btns {
      justify-content: end;
      .menu_btn {
        display: block;
      }

      .wallet_btn {
        display: none;
      }
    }

    .gamfi_menu_list {
      display: none;
      visibility: hidden;
      opacity: 0;
    }
  }

  @media (max-width: 667px) {
    .gamfi_menu_btns {
      .connect_btn {
        display: none;
      }

      .menu_btn {
        svg {
          font-size: 30px;
        }
      }
    }
  }

  @media (max-width: 540px) {
    .gamfi_menu_left_sect {
      width: 180px;
      .logo {
        img {
          width: 100px;
        }
      }
    }

    .gamfi_menu_right_sect {
      width: 50%;
      .gamfi_menu_right_sect {
        width: 50%;
      }
    }
  }

  @media (max-width: 480px) {
    .gamfi_menu_btns {
      column-gap: 13px;
      .btn_wrapper {
        width: 130px;
        height: 40px;
        font-size: 14px;

        img {
          height: 15px;
          width: 15px;
        }
      }
    }
  }
`;

export default NavWrapper;
