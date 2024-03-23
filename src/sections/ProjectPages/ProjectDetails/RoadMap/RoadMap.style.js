import styled from "styled-components";

const RoadMapStyleWrapper = styled.div`
  margin-bottom: 55px;

  .widget_title {
    margin-bottom: 15px;
    font-size: 22px;
  }

  .roadmap_items_row {
    row-gap: 30px;
  }

  .roadmap_title {
    font-size: 18px;
    line-height: 22px;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 10px;

    &.roadmap_title_done {
      color: #a3ff12;
    }
  }

  .roadmap_item {
    ul {
      li {
        font-size: 16px;
        line-height: 36px;
        color: rgba(255, 255, 255, 0.7);

        img {
          margin-right: 14px;
        }
      }
    }
  }
`;

export default RoadMapStyleWrapper;
