import { Slider, SliderItem } from "components/slider/Slider";
import { SectionTitle } from "components/sectionTitle";
import CardHover from "components/cardHover";
import TokenStyleWrapper from "./Token.style";
import data from "assets/data/token/dataV1";

const Token = () => {
  const sliderSettings = {
    dots: false,
    arrows: false,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 3,
        },
      }
    ],
  };
  return (
    <TokenStyleWrapper className="token_list_Wrapper">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <SectionTitle title="MULTI - BLOCK CHAINS" subtitle="SUPPORTED" />
          </div>
          <div className="col-md-6">
            <Slider {...sliderSettings}>
              {data?.map((item, i) => (
                <SliderItem key={i}>
                  <img src={item} alt="partner thumb" />
                </SliderItem>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <CardHover />
    </TokenStyleWrapper>
  );
};

export default Token;
