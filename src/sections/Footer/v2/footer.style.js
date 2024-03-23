import styled from "styled-components";

const FooterStyleWrapper = styled.footer`
  position: relative;
  background: #090a1a;
  .footer_bottom_wrapper {
    margin-bottom: 200px;
  }

  .footer_cta {
    width: 100%;
    height: 200px;
    background: #6d4afe;
    position: fixed;
    left: 0;
    right: 0;
    top: auto;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;

    .cta_link {
      position: absolute;
      left: auto;
      top: auto;
      width: auto;
      height: auto;
      font-family: "Russo One";
      font-size: 22px;
      line-height: 55px;
      text-align: center;
      text-transform: uppercase;
      color: #ffffff;
    }

    .cta_shape {
      position: absolute;

      &_left {
        left: 0;
        top: 0;
      }
      &_right {
        right: 0;
        top: 0;
      }

      height: 100%;
      filter: contrast(100);
    }
  }
`;

export default FooterStyleWrapper;
