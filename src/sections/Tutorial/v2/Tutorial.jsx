import { FiChevronRight } from "react-icons/fi";
import { SectionTitle } from "components/sectionTitle";
import Button from "components/button";
import data from "assets/data/tutorial/dataV2";
import earthThumb from "assets/images/icons/earthBg.svg";
import lockerThumb from "assets/images/icons/locker-dynamic-color.png";
import TutorialStyleWrapper from "./Tutorial.style";

const Tutorial = () => {
  return (
    <TutorialStyleWrapper>
      <div className="container">
        <div className="row">
          <div className="col-md-6 left_content">
            <SectionTitle title="HOW TO PARTICIPATE" subtitle="3 EASY STEPS" />
            <p>
              we denounce with righteous indignation and dislike men who are so
              beguiled and demoralized by the charms of pleasure of the moment.
              so blinded by desire, that they cannot foresee the pain and
              trouble
            </p>
            <Button href="/kyc-1" sm variant="outline">
              {" "}
              Verify KYC <FiChevronRight />
            </Button>
          </div>
          <div className="col-md-6 right_content">
            {data?.map((step, i) => (
              <div key={i} className="participate-item d-flex">
                <div className="number-image">
                  <img src={step.icon} alt="Participate icon" />
                </div>
                <div className="participate-info">
                  <h4 className="mb-10">{step.title}</h4>
                  <p className="description">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <img
        className="img-fluid bg_shape earth_thumb"
        src={earthThumb}
        alt="img"
      ></img>
      <img
        className="img-fluid bg_shape locker_thumb"
        src={lockerThumb}
        alt="img"
      ></img>
    </TutorialStyleWrapper>
  );
};

export default Tutorial;
