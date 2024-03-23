import { SectionTitle } from "components/sectionTitle";
import particle1 from "assets/images/icons/stone1.svg";
import particle2 from "assets/images/icons/stone2.svg";
import particle3 from "assets/images/icons/stone3.svg";
import FeaturesStyleWrapper from "./Features.style";
import data from "assets/data/about/aboutDataV1";

const Features = () => {
  return (
    <FeaturesStyleWrapper>
      <div className="key_points_section main-project-area">
        <div className="container">
          <div className="sec-inner align-items-center">
            <SectionTitle subtitle="FEATURES" title="KEY POINTS" />
            <div className="key_points_conttent">
              <div className="row items-row">
                {data?.map((item, i) => (
                  <div key={i} className="col-md-6 col-lg-3">
                    <div className="key_points_item">
                      <div className="key_points_item_img">
                        <img
                          src={item.icon}
                          alt="icon"
                          className="img-fluid"
                        />
                      </div>
                      <div className="key_points_item_text">
                        <h4>{item.title}</h4>
                        <p>{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg_stones">
          <img
            className="bg_stone bg_stone-1 img-fluid"
            src={particle1}
            alt="particle icon"
          />
          <img
            className="bg_stone bg_stone-2 img-fluid"
            src={particle2}
            alt="particle icon"
          />
          <img
            className="bg_stone bg_stone-3 img-fluid"
            src={particle3}
            alt="particle icon"
          />
        </div>
      </div>
    </FeaturesStyleWrapper>
  );
};

export default Features;
