import Counter from "components/counter";
import data from "assets/data/statistics/dataV2";
import StatisticsCounterStyleWrapper from "./Count.style";

const StatisticsCounter = () => {
  return (
    <StatisticsCounterStyleWrapper className="tokenomics-counter-wrapper">
      <div className="row counter-row">
        {data?.map((stat, i) => (
          <div key={i} className="col-md-3 col-sm-6">
            <div className="counter-info">
              <h4 className="counter-number ">
                {i > 1 ? "$" : ""}
                <Counter
                  end={stat.value}
                  decimal="."
                  decimals={stat.value % 1 !== 0 ? "2" : "0"}
                  suffix={i > 1 ? "M+" : ""}
                />
              </h4>
              <h5 className="counter-title">{stat.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </StatisticsCounterStyleWrapper>
  );
};

export default StatisticsCounter;
