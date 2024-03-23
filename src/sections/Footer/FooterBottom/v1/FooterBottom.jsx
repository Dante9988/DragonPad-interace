import Social from "../../SocialProfile/SocialProfile";
import footerLogo from "assets/images/logo.png";
import { VscChevronUp } from "react-icons/vsc";
import FooterBottomStyleWrapper from "./FooterBottom.style";

const FooterBottom = () => {
  return (
    <FooterBottomStyleWrapper className="footer_bottom_wrapper">
      <Social />
      <div className="container">
        <div className="footer-bottom-content">
          <a href="# " className="footer-logo">
            {" "}
            <img src={footerLogo} alt="footer logo" />{" "}
          </a>

          <ul className="footer-menu">
            <li>
              <a href="# ">Features</a>
            </li>
            <li>
              <a href="# ">How it works</a>
            </li>
            <li>
              <a href="# ">Token info</a>
            </li>
            <li>
              <a href="# ">About us</a>
            </li>
            <li>
              <a href="# ">Social media</a>
            </li>
            <li>
              <a href="# ">Terms of Service</a>
            </li>
            <li>
              <a href="# ">Privacy Policy</a>
            </li>
          </ul>

          <div className="copyright-text">
            Copyright © 2022. All Rights Reserved by
            <a href="# " target="_blank">GaFi</a>
          </div>
          <div className="scrollup text-center">
            <a href="# ">
              <VscChevronUp />
            </a>
          </div>
        </div>
      </div>
    </FooterBottomStyleWrapper>
  );
};

export default FooterBottom;
