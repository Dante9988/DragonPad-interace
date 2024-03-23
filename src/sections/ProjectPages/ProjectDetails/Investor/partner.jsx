import PartnerStyleWrapper from "./partner.style";
import data from "assets/data/partner/dataV3";

const Partner = () => {
  return (
    <PartnerStyleWrapper>
      <h4 className="widget_title">Investors</h4>
      <div className="partner_logo_list">
        {data?.map((logo, i) => (
          <span key={i} className="partner_logo">
            <img src={logo} alt="partner thumb" />
          </span>
        ))}
      </div>
    </PartnerStyleWrapper>
  );
};

export default Partner;
