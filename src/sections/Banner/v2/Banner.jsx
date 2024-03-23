import Button from "components/button";
import BannerStyleWrapper from "./Banner.style";

import rocketThumb from "assets/images/homeV2/rocket-front-color.png";
import rocketParticle from "assets/images/homeV2/rocketStar.svg";
import tokenImg1 from "assets/images/homeV2/buyTokenlogo1.png";
import tokenImg2 from "assets/images/homeV2/buyTokenlogo2.png";
import tokenImg3 from "assets/images/homeV2/buyTokenlogo3.png";
import tokenImg4 from "assets/images/homeV2/buyTokenlogo4.png";

const Banner = () => {
  const particles = [
    rocketParticle,
    rocketParticle,
    rocketParticle,
    rocketParticle,
    rocketParticle,
  ];
  const tokenImages = [tokenImg1, tokenImg2, tokenImg3, tokenImg4];
  return (
    <>
      <BannerStyleWrapper>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="gamfi_v2_hero_left">
                <h2>
                  Multichain DeFi Web <span>3.0</span> Ecosystem
                </h2>
                <p>
                  The next generation gaming ecosystem for IGOs and NFT market
                </p>
                <div className="banner-btns">
                  <Button href="/projects-classic-1" md variant="mint">
                    View Projects
                  </Button>
                  <Button href="/igo-apply" md variant="outline">
                    Apply Project
                  </Button>
                </div>

                <div className="buy_token">
                  <h6>BUY TOKEN ON</h6>
                  <div className="token-list">
                    {tokenImages?.map((token, i) => (
                      <a key={i} href="# ">
                        <img
                          src={token}
                          alt="token logo"
                          className="img-fluid"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="gamfi_v2_hero_right">
                <div className="gamfi_v2_hero_thumb">
                  <span className="rocket_thumb">
                    <img src={rocketThumb} alt="Rocket thumb" />
                  </span>

                  {particles?.map((particle, i) => (
                    <span
                      key={i}
                      className={`rocket_particle particle_${i + 1}`}
                    >
                      <img src={particle} alt="rocket particle" />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </BannerStyleWrapper>
    </>
  );
};

export default Banner;
