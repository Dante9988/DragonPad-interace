import styled from "styled-components";

const StakeChartStyleWrapper = styled.div`
    padding-left: 15px;
    .chart_item{
        display: flex;
        padding: 40px 50px 50px;
        background: rgba(30, 31, 53, 0.8);
        justify-content: space-between;
        align-items: center;

        h3{
            font-size: 30px;
            margin-bottom: 15px;
        }
    }

    .chart_item + .chart_item{
        margin-top: 30px;
    }

    @media only screen and (max-width: 991px) {
        padding-left: 0;
        margin-top: 30px;

        .chart_item {
    padding: 35px 20px;
}
    }

`


export default StakeChartStyleWrapper;