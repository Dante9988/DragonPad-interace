import styled from "styled-components";

const TutorialStyleWrapper = styled.section`
  background: #090a1a;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0 140px;
  .section_title {
    margin-bottom: 30px;
  }
  .left_content {
    z-index: 1;
    p {
      max-width: 450px;
      margin-bottom: 40px;
      line-height: 26px;
    }
  }
  .right_content {
    z-index: 1;
  }
  .participate-item {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    min-height: 186px;
    padding: 35px 50px;
    background: rgba(30, 31, 53, 0.7);
    backdrop-filter: blur(10px);
    margin-bottom: 20px;
    z-index: 1;
    .number-image {
      margin-right: 12px;
      flex: 0 0 21%;
    }

    h4 {
      margin-bottom: 10px;
    }
  }

  .bg_shape {
    position: absolute;
    &.earth_thumb {
      top: 20px;
    }
    &.locker_thumb {
      bottom: -106px;
      left: 60px;
    }
  }

  @media only screen and (max-width: 991px) {
    .participate-item {
      .number-image {
        flex: 0 0 15%;
      }
    }
  }
  @media only screen and (max-width: 767px) {
    .right_content {
      margin-top: 50px;
    }

    .bg_shape {
      &.locker_thumb {
        bottom: -106px;
        left: auto;
        right: 100px;
      }
    }
  }
  @media only screen and (max-width: 540px) {
    .bg_shape {
      &.locker_thumb {
        bottom: -40px;
        left: auto;
        right: 0;
        width: 70%;
      }
    }
  }
`;

export default TutorialStyleWrapper;
