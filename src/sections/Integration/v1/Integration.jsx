import { FaCheck } from "react-icons/fa";
import { SectionTitle } from "components/sectionTitle";
import rightThumb from "assets/images/homeV2/Multi_Chain_Support.png";
import IntegrationStyleWrapper from "./Integration.style";

const Integration = () => {
  return (
    <IntegrationStyleWrapper>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="integration_left">
              <img src={rightThumb} alt="integration thumb " />
            </div>
          </div>
          <div className="col-md-6">
            <div className="integration_content_right">
              <SectionTitle
                title="MULTI-CHAIN SUPPORT"
                subtitle="INTEGRATION "
              />
              <div className="integration_content">
                <p>
                  It must explain to you how all this mistaken idea of new gem
                  denouncing pleasure and praising pain that they cannot foresee
                  The gain and trouble that are bound to ensue.
                </p>
                <div className="integration_features">
                  <span>
                    {" "}
                    <FaCheck /> Binance Smart Chain
                  </span>
                  <span>
                    {" "}
                    <FaCheck />
                    Avalanche
                  </span>
                  <span>
                    {" "}
                    <FaCheck />
                    Ethereum
                  </span>
                  <span>
                    {" "}
                    <FaCheck />
                    Fuse
                  </span>
                  <span>
                    {" "}
                    <FaCheck />
                    Polygon (Matic)
                  </span>
                  <span>
                    {" "}
                    <FaCheck />
                    OKEX Chain
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </IntegrationStyleWrapper>
  );
};

export default Integration;
