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
              DragonPad AI Empowering IDOs
            </h1>
            <h2 className="description">
              Aggregator of Launchpads
            </h2>
            <Button href="https://docs.google.com/forms/d/e/1FAIpQLSdd8DezhCjlP8yhCz-9RI-AKYKMDxHxGoWSPuh1FUAJkexafQ/viewform?usp=sf_link" variant="mint" md isCenter style={{ borderRadius: '20px' }} className="banner-btn">
              Submit For IDO
            </Button>
          </div>
        </div>
      </BannerStyleWrapper>
    </>
  );
};

export default Banner;
