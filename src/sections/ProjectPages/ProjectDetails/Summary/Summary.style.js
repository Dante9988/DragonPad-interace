import styled from "styled-components";
const SummaryStyleWrapper = styled.div`
  margin-bottom: 55px;
  p {
    margin-bottom: 26px;
  }
  .widget_title {
    margin-bottom: 15px;
    font-size: 22px;
  }

  .vedio_player {
    position: relative;
    span {
      color: #f82552;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      font-size: 20px;
      height: 70px;
      width: 70px;
      background: #ffffff;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }
`;

export default SummaryStyleWrapper;
