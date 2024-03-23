import Countdown, { zeroPad } from 'react-countdown';
import ProgressBar from "components/progressBar";
import Button from "components/button";
import ProjectInfoStyleWrapper from "./ProjectInfo.style";

import projectIcon from "assets/images/project/ninga-image.png"
import coinIcon from "assets/images/project/icon-2.png"
import socialData from "assets/data/social/dataV1"

const ProjectInfo = () => {

  const CountdownRender = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="countdown_wrapper">
        <div>
          {zeroPad(days)}
          <span>D</span>
        </div>
        <div>
          {zeroPad(hours)}
          <span>H</span>
        </div>
        <div>
          {zeroPad(minutes)}
          <span>M</span>
        </div>
        <div>
          {zeroPad(seconds)}
          <span>S</span>
        </div>
      </div>
    )
  }

  return (
    <ProjectInfoStyleWrapper className="live_project_wrapper">
      <div className="game-price-item">
        <div className="game-price-inner">
          <div className="total-price">
            <div className="price-inner d-flex">
              <div className="image-icon">
                <img src={projectIcon} alt="icon" />
              </div>
              <div className="price-details">
                <h3>
                  <a>The Wasted Lands</a>
                </h3>
                <div className="dsc">PRICE (DDO) = 0.13 BUSD</div>
              </div>
            </div>
            <div className="all-raise">
              Total Raise 75,999.70 BUSD ( 86% )
            </div>
          </div>
          <div className="allocation-max text-center">
            <img src={coinIcon} alt="icon" />
            <div className="allocation">
              Allocation: 500 BUSD Max
            </div>
          </div>
          <div className="targeted-raise">
            <div className="seles-end-text">Sale End In</div>
            <Countdown date="2024-02-01T01:02:03" renderer={CountdownRender} />
            <div className="targeted-raise-amount">
              Targeted Raise 100,000 BUSD
            </div>
          </div>
        </div>
        <div className="progress-inner">
          <ProgressBar progress="83%" />
        </div>

        <div className="project_card_footer">
          <Button sm href="# ">
            Claim Token
          </Button>
          <div className="participants">Participants 4017/5000</div>
          <div className="social_links">
            {socialData?.map((profile, i) => (
              <a key={i} href={profile.url}><img src={profile.icon} alt="icon" /></a>
            ))}

          </div>
        </div>
      </div>
    </ProjectInfoStyleWrapper>
  );
};

export default ProjectInfo;
