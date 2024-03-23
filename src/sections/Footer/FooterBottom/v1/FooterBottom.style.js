import styled from "styled-components";
import footerBg from "assets/images/bg/footer-bg.jpg";

const FooterStyleWrapper = styled.div`
  background: url(${footerBg});
  background-repeat: no-repeat; 
  background-size: cover;
  position: relative;
  padding-top: 100px;
  text-align: center;
  .footer-logo {
    margin-bottom: 45px;
    display: inline-block;
  }

  .footer-menu {
    margin-bottom: 20px !important;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;

    li {
      a {
        font-family: "Inter", sans-serif;
        font-weight: 500;
        font-size: 16px;
        line-height: 40px;
        color: rgba(255, 255, 255, 0.7);
        transition: 0.4s;
      }
    }
  }

  .copyright-text {
    text-transform: capitalize;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 40px;
    color: rgba(255, 255, 255, 0.7);
    a {
      color: rgba(255, 255, 255, 0.7);
    }
  }

  .scrollup {
    padding-top: 10px;
    padding-bottom: 35px;

    svg {
      font-weight: 700;
      font-size: 35px;
      color: rgba(255, 255, 255, 0.7);
      transition: 0.4s;
    }
  }

  @media only screen and (max-width: 575px) {
    .footer-menu {
      gap: 13px;
    }
  }
  @media only screen and (max-width: 480px) {
    .footer-logo {
      img {
        max-width: 120px;
      }
    }
  }
`;

export default FooterStyleWrapper;
