import Counter from "components/counter";
import data from "assets/data/statistics/dataV3";
import StatisticsCounterStyleWrapper from "./Count.style";

const StatisticsCounter = () => {
  return (
    <StatisticsCounterStyleWrapper className="tokenomics-counter-wrapper">
      <div className="container">
        <div className="row counter-row">
          {data?.map((stat, i) => (
            <div key={i} className="col-md-3 col-6">
              <div className="counter-info">
                <h5 className="counter-title">{stat.title}</h5>
                <h4 className="counter-number ">
                  $
                  <Counter
                    end={stat.value}
                    decimal="."
                    decimals={stat.value % 1 !== 0 ? "2" : "0"}
                    suffix={stat.suffix}
                  />
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </StatisticsCounterStyleWrapper>
  );
};

export default StatisticsCounter;
