import { SectionTitle } from "components/sectionTitle";
import { Slider, SliderItem } from "components/slider/Slider";
import PartnerStyleWrapper from "./partner.style";
import data from "assets/data/partner/dataV1";

const Partner = () => {
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
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 2,
          centerMode: false
        },
      },
    ],
  };
  return (
    <PartnerStyleWrapper>
      <div className="container">
        <SectionTitle isCenter={true} subtitle="PARTNERS AND INTEGRATIONS" />

        <div className="row">
          <Slider {...sliderSettings}>
            {data?.map((item, i) => (
              <SliderItem key={i}>
                <img src={item} alt="partner thumb" />
              </SliderItem>
            ))}
          </Slider>
        </div>
      </div>
    </PartnerStyleWrapper>
  );
};

export default Partner;
