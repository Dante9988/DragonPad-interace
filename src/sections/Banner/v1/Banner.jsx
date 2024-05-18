import Button from "components/button";
import BannerStyleWrapper from "./Banner.style";

import bannerIcon from "assets/images/icons/icon1.png";

const Banner = () => {
  return (
    <>
      <BannerStyleWrapper>
        <div className="container">
          <div className="banner-content text-center">
            <img
              src={bannerIcon}
              className="banner-icon"
              alt="banner icon"
            />
            <h1 className="banner-title">
              Aggregator of Launchpads
            </h1>
            <h2 className="description">
              DAO Power to Community
            </h2>
            
          </div>
        </div>
      </BannerStyleWrapper>
    </>
  );
};

export default Banner;
