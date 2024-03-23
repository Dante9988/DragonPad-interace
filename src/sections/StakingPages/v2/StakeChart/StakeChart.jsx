import StakeChartStyleWrapper from "./StakeChart.style"
import data from "assets/data/chart/dataV1"
const StakeChart = () => {
    return (
        <StakeChartStyleWrapper>
            <div className="row chart_items_row">
                {data?.map((item, i) => (
                    <div key={i} className="col-lg-4 col-md-6">
                        <div className="chart_item">
                            <div className="project-value">
                                <h3 className="mb-15">{item.value}</h3>
                                <span>{item.text}</span>
                            </div>
                            <div className="project-value-image">
                                <img src={item.thumb} alt="rank" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </StakeChartStyleWrapper>
    )
}

export default StakeChart;