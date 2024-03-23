import Counter from "components/counter";
import Button from "components/button";

import rocketThumb from "assets/images/homeV3/animition_avater.png";
import dollorIcon from "assets/images/icons/dollar-dollar-color.svg"
import rocketIcon from "assets/images/icons/rocket-dynamic-color.svg"
import ufoShape from "assets/images/homeV3/uFO.png"

import BannerStyleWrapper from "./Banner.style";
const Banner = () => {
  return (
    <>
      <BannerStyleWrapper>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="gamfi_v2_hero_left">
                <h2>METAVERSE <br /> PLAY-TO
                  <img className="title_icon" src={dollorIcon} alt="icon" />
                  EARN IGO Launchpad
                  <img className="title_icon rocket_icon" src={rocketIcon} alt="icon" />
                </h2>
                <p>
                  The next generation gaming ecosystem for IGOs and NFT market Secure crypto solutions by blockchain technology
                </p>
                <div className="banner-btns">
                  <Button href="/projects-classic-1" md variant="mint">
                    View Projects
                  </Button>
                  <Button href="/igo-apply" md variant="outline">
                    Apply Project
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="gamfi_v2_hero_right">
                <div className="gamfi_v2_hero_thumb">
                  <span className="rocket_thumb">
                    <img src={rocketThumb} alt="Rocket thumb" />
                  </span>
                </div>

                <ul className="coin_cap_list">
                  <li>
                    <h5>Market Cap</h5>
                    <h6 className="counter-number">$
                      <Counter
                        end={490.88}
                        decimal="."
                        decimals={490.88 % 1 !== 0 ? "2" : "0"}
                        suffix="M"
                      /></h6>
                  </li>
                  <li>
                    <h5>TVL</h5>
                    <h6 className="counter-number">$
                      <Counter
                        end={38.60}
                        decimal="."
                        decimals={490.88 % 1 !== 0 ? "2" : "0"}
                        suffix="M"
                      /></h6>
                  </li>
                  <li className="m-0">
                    <h5>Fund Raised</h5>
                    <h6 className="counter-number">$
                      <Counter
                        end={160.48}
                        decimal="."
                        decimals={490.88 % 1 !== 0 ? "2" : "0"}
                        suffix="M"
                      /> </h6>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <img src={ufoShape} alt="ufo shape" className="ufo_shape" />
      </BannerStyleWrapper>
    </>
  );
};

export default Banner;
