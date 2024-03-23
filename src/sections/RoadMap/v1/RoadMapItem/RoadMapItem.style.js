import styled from "styled-components";

const RoadMapItemStyleWrapper = styled.div`
  .roadmap_title {
    color: #6d4afe;
    margin-bottom: 75px;
  }

  .roadmap_content {
    position: relative;
    padding: 0 10px;
  }

  .roadmap_list {
    border-left: 1px dashed rgba(255, 255, 255, 0.25);
    padding-left: 21px !important;
    li {
      display: flex;
      align-items: center;
      line-height: 36px;
      color: rgba(255, 255, 255, 0.7);
      column-gap: 15px;

      img {
        width: 15px;
      }
    }
  }

  .roadmap_status_icon,
  .roadmap_status_icon span {
    position: absolute;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .roadmap_status_icon {
    left: 0;
    top: -30px;
    height: 20px;
    width: 20px;
    background: #dddddd;

    span {
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background: #a3ff12;
      svg {
        color: #090a1a;
        font-size: 15px;
      }
    }
  }

  @media (max-width: 1199px){
    .roadmap_list {
        li{
            font-size: 15px;
        }
    }
}
  @media (max-width: 480px){
    .roadmap_list {
        li{
            font-size: 14px;
        }
    }
}
`;

export default RoadMapItemStyleWrapper;
