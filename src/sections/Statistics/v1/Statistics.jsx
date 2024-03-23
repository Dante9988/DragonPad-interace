import Counter from "components/counter";
import { SectionTitle } from "components/sectionTitle";
import data from "assets/data/statistics/dataV1";
import Count from "sections/Count/v1";
import shapeImg from "assets/images/bg/RoadMapV2Fram.png";
import StatisticsStyleWrapper from "./Statistics.style";

const Statistics = () => {
  return (
    <StatisticsStyleWrapper>
      <div className="container">
        <SectionTitle title="TOKENOMICS" subtitle="STATISTICS" />

        <div className="v1_tokenomics_content_list_sect">
          {data?.map((statistic, i) => (
            <div
              key={i}
              className={`v1_tokenomics_content_list v1_tokenomics_content_list_${i + 1
                }`}
            >
              <div className="v1_tokenomics_content_list_text">
                <h4>
                  {statistic.title}
                  <Counter
                    end={statistic.value}
                    decimal="."
                    decimals={statistic.value % 1 !== 0 ? "2" : "0"}
                    suffix="%"
                  />
                </h4>
              </div>
              <div
                className={`v1_tokenomics_content_list_progress v1_tokenomics_content_list_progress_${i + 1
                  }`}
              ></div>
            </div>
          ))}
        </div>

        {/* stat counter section*/}
        <Count />
      </div>

      <img
        src={shapeImg}
        alt="section-shape"
        className="img-fluid section_shape section_shape_top"
      />
      <img
        src={shapeImg}
        alt="section-shape"
        className="img-fluid section_shape section_shape_bottom"
      />
    </StatisticsStyleWrapper>
  );
};

export default Statistics;
