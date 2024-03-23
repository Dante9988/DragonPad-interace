import Counter from "components/counter";
import { SectionTitle } from "components/sectionTitle";
import data from "assets/data/statistics/dataV4"
import thumb from "assets/images/homeV2/piechart.png"
import StatisticsStyleWrapper from "./Statistics.style";
const Statistics = () => {
  return (
    <StatisticsStyleWrapper>
      <div className="container">
        <SectionTitle title="TOKENOMICS" subtitle="STATISTICS" />

        <div className="tokenomics_content">
          <div className="row">
            <div className="col-md-6">
              <div className="tokenomics_content_left">
                <div className="tokenomics_counter">
                  <h4>
                    Total Supply :{" "}
                    <Counter
                      end={10}
                      decimal="."
                      decimals={10 % 1 !== 0 ? "3" : "0"}
                      suffix="M"
                    /> </h4>
                  <h4>
                    Public Sale : $
                    <Counter
                      end={0.002}
                      decimal="."
                      decimals={0.002 % 1 !== 0 ? "3" : "0"}
                    /></h4>
                </div>
                <div className="tokenomics_list">
                  {data?.map((item, i) => (

                    <div key={i} className="tokenomics_item">
                      <h5 className="tokenomics_item_title">
                        {item.title}
                        <span>{item.value}</span>
                      </h5>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="tokenomics_content_right" >
                <img src={thumb} alt="img" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </StatisticsStyleWrapper>
  );
};

export default Statistics;
