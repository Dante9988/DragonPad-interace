import StakeChartStyleWrapper from "./StakeChart.style"
import data from "assets/data/chart/dataV1"

const StakeChart = () => {
    return (
        <StakeChartStyleWrapper>
            {data?.map((item, i) => (
                <div key={i} className="chart_item">
                    <div className="project-value">
                        <h3 className="mb-15">{item.value}</h3>
                        <span>{item.text}</span>
                    </div>
                    <div className="project-value-image">
                        <img src={item.thumb} alt="rank" />
                    </div>
                </div>
            ))}
        </StakeChartStyleWrapper>
    )
}

export default StakeChart;