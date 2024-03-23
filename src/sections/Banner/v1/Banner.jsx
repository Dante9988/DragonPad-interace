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
              DragonPad AI Empowering IDO's
            </h1>
            <div className="description">
              Aggregator of Launchpads
            </div>

            <Button href="/projects-grid" variant="mint" md isCenter className="banner-btn">
              Explore IDO Pools
            </Button>
          </div>
        </div>
      </BannerStyleWrapper>
    </>
  );
};

export default Banner;
