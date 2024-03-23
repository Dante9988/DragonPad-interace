import styled from "styled-components";

const StakeChartStyleWrapper = styled.div` 
  
  .chart_item {
    display: flex;
    padding: 40px 50px 50px;
    background: rgba(30, 31, 53, 0.8);  
    flex-direction: column;
    align-items: flex-start;
    row-gap: 20px;
    min-height: 286px;

    h3 {
      font-size: 30px;
      margin-bottom: 15px;
    }
  }
 
  .project-value-image {
    width: 100%;
    img {
      width: 100%;
    }
  }

  @media only screen and (max-width: 991px) { 
    .chart_items_row{
        row-gap: 30px;
    }
    .chart_item {
      padding: 35px 20px; 
    }
  }
`;

export default StakeChartStyleWrapper;
