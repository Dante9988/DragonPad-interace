import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { SectionTitle } from "components/sectionTitle";
import Button from "components/button";
import PartnerStyleWrapper from "./partner.style";
import rocketShape from "assets/images/icons/rocket.png"
import earthShape from "assets/images/icons/earthBg.svg"
import data from "assets/data/partner/dataV2";

const Partner = () => {
  return (
    <PartnerStyleWrapper>
      <div className="container">
        <SectionTitle title="OUR PARTNERS" subtitle="OUR PARTNERS" />
        <Tabs>
          <TabList>
            {data?.map((item, i) => (
              <Tab key={i}>
                <Button variant="outline" sm href="# " onClick={(e) => e.preventDefault()}>
                  {item.partnerType}
                </Button>
              </Tab>
            ))}
            
          </TabList>
          {data?.map((partners, i) => (
            <TabPanel key={i} className="tabs-row partner_logo_list">
              {partners.logos?.map((logo, i) => (
                <span key={i} className="partner_logo">
                  <img src={logo} alt="partner thumb" />
                </span>
              ))}
            </TabPanel>
          ))}
        </Tabs>
      </div>

      <img className="bg_shape rocket_shape" src={rocketShape} alt="rocket icon" />
      <img className="bg_shape earth_shape" src={earthShape} alt="rocket icon" />
    </PartnerStyleWrapper>
  );
};

export default Partner;
