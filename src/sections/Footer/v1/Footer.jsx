import CTA from "sections/CTA/v1";
import FooterBottom from "../FooterBottom/v1";
import FooterStyleWrapper from "./footer.style";

const Footer = () => {
  return (
    <FooterStyleWrapper>
      <CTA />
      <FooterBottom />
    </FooterStyleWrapper>
  );
};

export default Footer;
