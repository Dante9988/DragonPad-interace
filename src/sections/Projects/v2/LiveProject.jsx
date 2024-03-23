import Countdown, { zeroPad } from 'react-countdown';
import { Slider, SliderItem } from "components/slider/Slider";
import ProgressBar from "components/progressBar";
import CardHover from "components/cardHover";
import LiveProjectStyleWrapper from "./LiveProject.style";
import data from "assets/data/liveProject/dataV1";

const LiveProject = () => {


  const sliderSettings = {
    dots: true,
    arrows: false,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const CountdownRender = ({ days, hours, minutes, seconds, completed }) => {
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
    <LiveProjectStyleWrapper className="live_project_wrapper">
      <div className="container">
        <Slider {...sliderSettings}>
          {data?.map((item, i) => (
            <SliderItem key={i}>
              <div className="game-price-item">
                <div className="game-price-inner">
                  <div className="total-price">
                    <div className="price-inner d-flex mb-45 md-mb-20">
                      <div className="image-icon">
                        <a href="/projects-details-1">
                          <img src={item.projectIcon} alt="icon" />
                        </a>
                      </div>
                      <div className="price-details">
                        <h3 className="mb-15">
                          <a href="/projects-details-1">{item.title}</a>
                        </h3>
                        <div className="dsc">PRICE = {item.price}</div>
                      </div>
                    </div>
                    <div className="all-raise">
                      Total Raise {item.totalRise}
                    </div>
                  </div>
                  <div className="allocation-max text-center">
                    <img src={item.coinIcon} alt="icon" />
                    <div className="allocation">
                      Allocation: {item.allocation}
                    </div>
                  </div>
                  <div className="targeted-raise">
                    <div className="seles-end-text">Pool raise ended</div>
                    <Countdown date="2024-02-01T01:02:03" renderer={CountdownRender} />
                    <div className="targeted-raise-amount">
                      Targeted Raise {item.targetedRise}
                    </div>
                  </div>
                </div>
                <div className="progress-inner">
                  <ProgressBar progress={item.progress} />
                </div>

                {/* hover */}
                <CardHover />
              </div>
            </SliderItem>
          ))}
        </Slider>
      </div>
    </LiveProjectStyleWrapper>
  );
};

export default LiveProject;
