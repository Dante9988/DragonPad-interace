import CTA from "sections/CTA/v2";
import FooterBottom from "../FooterBottom/v1";
import shapeLeft from "assets/images/homeV2/bottomShape-left.png"
import shapeRight from "assets/images/homeV2/bottomShape-right.png"
import rocketThumb from "assets/images/homeV2/rocket.png"
import FooterStyleWrapper from "./footer.style";

const Footer = () => {
  return (
    <FooterStyleWrapper>
      <CTA />
      <FooterBottom />

      <div className="footer_cta">
        <img src={shapeLeft} alt="shape" className="cta_shape cta_shape_left img-fluid" />
        <img src={shapeRight} alt="shape" className="cta_shape cta_shape_right img-fluid" />
        <div className="rocket_thumb">
          <img src={rocketThumb} alt="rocket icon" className="img-fluid" />
        </div>
        <a href="/igo-apply" className="cta_link">APPLY FOR PROJECT</a>
      </div>
    </FooterStyleWrapper>
  );
};

export default Footer;
